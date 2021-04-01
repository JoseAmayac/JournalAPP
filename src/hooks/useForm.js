import { useState } from 'react';

export const useForm = (initState = {}) => {
    
    const [values, setValues] = useState( initState );

    const reset = ( newFormState = initState ) =>{
        setValues(newFormState)
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [ values, handleInputChange, reset ]

}