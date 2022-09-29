import { useField } from "formik";
import React from "react";

function FormikHOC(EnteredComponent) {
    function LeavedComponent({ name, borderClass, ...rest }) {

        const Field = useField(name);
        const [data, meta] = Field;

        const { value, onBlur, onChange } = data;
        const { error, touched } = meta;

        if (error && touched) {
            borderClass = "border-red-500"
        }

        return (
            <EnteredComponent
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                touched={touched}
                error={error}
                {...rest}
            />
        );
    }
    return LeavedComponent;
}

export default FormikHOC;