import React from "react";

import { createClient } from "@/lib/supabase/client";
import { useEditionStore } from "@/stores/edition-store";

export function useSchool(id: string) {
    const [schoolData, setSchoolData] = React.useState<SchoolDataType>();
    const {currentEdition} = useEditionStore()

    const supabase = createClient();
    React.useEffect(() => {
        const fetchImages = async () => {
            const { data } = await supabase.rpc("get_school_with_draws_by_id", {
                school_id_param: parseInt(id),
                edition_param: currentEdition,
            });
            if (data) {
                setSchoolData(data[0] as SchoolDataType);
            }
        };
        fetchImages();
    }, [id, supabase]);

    return { schoolData };
}
