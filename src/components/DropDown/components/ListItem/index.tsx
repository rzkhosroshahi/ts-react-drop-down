import React from "react";

interface IListItemProps {
    children?: React.ReactNode;
    selected: boolean;
    role?: string;
}
export const ListItem: React.FC<IListItemProps & React.HTMLProps<HTMLLIElement>> = ({ children, selected, role, ...otherProps }) => {
    return (
        <li
            role={role}
            aria-selected={selected}
            tabIndex={0}
            {...otherProps}
        >
            {children}
        </li>
    );
};

ListItem.defaultProps = {
    role: "option",
};

export default ListItem;
