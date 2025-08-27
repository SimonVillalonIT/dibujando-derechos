"use client";

import { useEditionStore } from "@/stores/edition-store";
import { createClient } from "@/lib/supabase/client"; // cliente de cliente
import { useEffect, useState } from "react";
import SectionContainer from "../section-container";
import ClientPictures from "./client-pictures";

type Draw = {
  created_at: string;
  id: number;
  img_url: string;
  name: string | null;
  school_id: number | null;
  selected: boolean;
  votes: number;
  edition: "2024" | "2025";
};

export default function Pictures() {
  const { currentEdition } = useEditionStore();
  const [draws, setDraws] = useState<Draw[]>([]);
  
  useEffect(() => {
    const fetchDraws = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("draws")
        .select("*")
        .eq("selected", true)
        .eq("edition", currentEdition);
      if (!error) setDraws(data as Draw[]);
    };
    fetchDraws();
  }, [currentEdition]);

  return (
    <SectionContainer classname="flex h-screen pb-24 pt-12 bg-background">
      <h1 className="mb-5 text-5xl">Expositor de obras</h1>
      <ClientPictures draws={draws} />
    </SectionContainer>
  );
}