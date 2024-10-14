import React from "react";

function DrawsContainer({ children }: React.PropsWithChildren) {
    return <div className="mt-5 columns-5 gap-5 p-7">{children}</div>;
}

export default DrawsContainer;
