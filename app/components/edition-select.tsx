"use client";

import { useEditionStore } from "@/stores/edition-store";
import { useRouter } from "next/navigation";

export default function EditionSelector() {
  const { currentEdition, setEdition } = useEditionStore();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const edition = e.target.value as "2024" | "2025";
    setEdition(edition);

    router.push("/");  
  };

  return (
    <select value={currentEdition} onChange={handleChange}>
      <option value="2024">Edición 2024</option>
      <option value="2025">Edición 2025</option>
    </select>
  );
}