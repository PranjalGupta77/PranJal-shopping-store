import { useField } from "formik";
import React from "react";

function FormikHOC(EnteredComponent) {
  function LeavedComponent({name, ...rest}) {

    const Field = useField(name);
    const [data, meta] = Field;
    
    const {value, onBlur, onChange} = data;
    const {error, touched} = meta;
    
        let borderClass =  "border-gray-500 focus:border-indigo-500";
    
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