import React from "react";

interface IListProps {
    children?: React.ReactNode;
    role?: string;
    active: string;
}
export const List: React.FC<IListProps & React.HTMLProps<HTMLUListElement>> = ({ role, children, active, ...otherProps }) => {
    return (
        <ul
            role={role}
            tabIndex={-1}
            aria-activedescendant={active}
            {...otherProps}
        >
            {children}
        </ul>
    );
};

List.defaultProps = {
    role: "listbox",
};

export default List;
