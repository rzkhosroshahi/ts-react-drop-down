import React, { useRef, useState } from "react";
import TextField from "../TextField";
import List from "./components/List";
import ListItem from "./components/ListItem";
import useOutsideClick from "../../hooks/useOutsideClick";
import { IOption } from "../../types";
import { cld } from "../../modules";
import Icons from "../Icons";
import styles from './dropdown.module.css';

interface IDropDownProps {
    defaultOptions?: IOption[];
}

export const DropDown: React.FC<IDropDownProps> = ({ defaultOptions }) => {
    const textFieldRef = useRef<HTMLInputElement>(null);
    const dropDownRef = useRef<HTMLFormElement>(null);
    const [options, setOptions] = useState<IOption[]>(defaultOptions ? defaultOptions : []);
    const [open, setOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    useOutsideClick(dropDownRef, () => setOpen(false));

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (textFieldRef.current) {
            setOptions([...options, {
                name: textFieldRef.current.value,
            }]);
            textFieldRef.current.value = '';
        }
    };
    return (
        <form onSubmit={handleSubmitForm} className={styles.form} ref={dropDownRef}>
            <div className={cld({
                [styles.textFieldWrapper]: true,
                [styles.textFieldWrapperOpen]: open,
            })}>
                <TextField
                    className={styles.textField}
                    ref={textFieldRef}
                    placeholder={`${selectedOption || 'Add new option ...'}`}
                    onClick={() => setOpen(true)}
                />
                <Icons
                    name="chevronDown"
                    className={cld({
                        [styles.chevron]: true,
                        [styles.chevronOpen]: open,
                    })}
                />
            </div>
            {
                open &&
                <List className={styles.list} active={selectedOption}>
                    {
                        options && options.map((option) => {
                            return (
                                <ListItem
                                    selected={option.name === selectedOption}
                                    key={option.name}
                                    className={cld({
                                        [styles.listItem]: true,
                                        [styles.listItemSelected]: option.name === selectedOption,
                                    })}
                                    onClick={() => setSelectedOption(option.name)}
                                >
                                    {option.name}
                                    { option.name === selectedOption && <Icons name="check" /> }
                                </ListItem>
                            );
                        })
                    }
                </List>
            }
        </form>
    );
};

DropDown.defaultProps = {
    defaultOptions: []
};
