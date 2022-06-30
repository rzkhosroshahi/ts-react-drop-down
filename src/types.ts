export interface IOption {
    name: string,
}

export interface IDropDownChildren {
    open: boolean;
    setOpen: (state: boolean) => void;
    options: IOption[];
    setOptions: (option: IOption[]) => void;
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}
