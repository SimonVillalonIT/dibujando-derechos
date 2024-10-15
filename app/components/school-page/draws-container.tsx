import React from "react";

function DrawsContainer({ children }: React.PropsWithChildren) {
    return (
        <div className="mt-5 columns-1 gap-5 p-7 sm:columns-2 md:columns-3 lg:columns-4">
            {children}
        </div>
    );
}

export default DrawsContainer;
