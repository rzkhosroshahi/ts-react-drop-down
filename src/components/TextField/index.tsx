import React, { forwardRef } from "react";

interface ITextField {
    required?: boolean;
    invalid?: boolean;
}
type TextFieldProps = React.HTMLProps<HTMLInputElement> & ITextField;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { name, required ,invalid, ...otherProps } = props;
    return (
        <input
            id={name}
            type="string"
            ref={ref}
            aria-labelledby={name}
            aria-required={required}
            aria-invalid={invalid}
            {...otherProps}
        />
    );
});

TextField.defaultProps = {
    required: false,
    invalid: false,
};

export default TextField;
