"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function handleVote(draw_id: number) {
    const supabase = createClient();
    const { data, error } = await supabase.rpc("vote_draw", { p_draw_id: draw_id });
    if (error) return redirect("/error");

    if (data) return data[0];

    return null;
}
