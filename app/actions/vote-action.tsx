"use server";

import { cookies } from "next/headers"; // To handle cookies

import { createClient } from "@/lib/supabase/server";

type VoteResponse = { updated_votes: number; draw_id: number } | { error: string };

export async function handleVote(draw_id: number): Promise<VoteResponse> {
    const cookieStore = cookies();
    const hasVoted = cookieStore.get(`voted_${draw_id}`);

    // Check if the user has already voted (based on cookies)
    if (hasVoted) {
        return { error: "Ya has votado a este dibujo!" };
    }

    const supabase = createClient();
    const { data, error } = await supabase.rpc("vote_draw", { p_draw_id: draw_id });

    if (error) return { error: "Error procesando su voto, por favor recargue" };

    if (data) {
        // Set a cookie to prevent the user from voting again
        cookieStore.set(`voted_${draw_id}`, "true", {
            path: "/", // Make the cookie accessible to the entire app
            maxAge: 60 * 60 * 24 * 365, // Cookie lasts for 1 year
        });
        return data[0];
    }

    return { error: "Unexpected error. No data returned." };
}
