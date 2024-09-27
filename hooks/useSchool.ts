import { createClient } from "@/lib/supabase/client";
import React from "react";

export function useSchool(id:string){

    const [schoolData, setSchoolData] = React.useState<Database["public"]["Functions"]["get_school_with_draws_by_id"]["Returns"][0]>();

    const supabase = createClient();
    React.useEffect(() => {
        const fetchImages = async () => {
            const { data } = await supabase.rpc("get_school_with_draws_by_id", {school_id_param: parseInt(id)});
            if (data) {
                setSchoolData(data[0]);
            }
        };
        fetchImages();
    }, [id, supabase]);

    return {schoolData}
}