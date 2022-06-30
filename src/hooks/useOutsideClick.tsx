import React, { useEffect } from "react";

function useOutsideClick(ref: React.RefObject<HTMLElement>, handler: () => void) {
    useEffect(() => {

        function handleClickOutside({ target }: MouseEvent): void {
            if (ref && ref.current && !ref.current.contains(target as Node)) {
                handler();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, handler]);
}

export default useOutsideClick;
