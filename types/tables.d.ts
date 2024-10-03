type School = Database["public"]["Tables"]["schools"]["Row"];

type Draw = Database["public"]["Tables"]["draws"]["Row"];

type SchoolDataType =
    | {
          school_name: string;
          school_created_at: string;
          school_id: number;
          draws: Draw[];
      }
    | undefined;
