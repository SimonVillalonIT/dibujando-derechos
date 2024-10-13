import React from "react";

import { createClient } from "@/lib/supabase/client";

export function useSchool(id: string) {
    const [schoolData, setSchoolData] = React.useState<SchoolDataType>();

    const supabase = createClient();
    React.useEffect(() => {
        const fetchImages = async () => {
            const { data } = await supabase.rpc("get_school_with_draws_by_id", {
                school_id_param: parseInt(id),
            });
            if (data) {
                setSchoolData(data[0] as SchoolDataType);
            }
        };
        fetchImages();
    }, [id, supabase]);

    return { schoolData };
}
