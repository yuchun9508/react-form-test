import { useState } from 'react';

export const useForm = ({ initialValues, validation, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    setValues((previousValues) => {
      if (type === 'checkbox') {
        return { ...previousValues, [`${name}`]: checked };
      } else {
        return { ...previousValues, [`${name}`]: value };
      }
    });
  };

  const handleSubmit = () => {
    const errors = validation(values);
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    onSubmit(values);
    setValues(initialValues);
  };

  return { handleChange, handleSubmit, values, errors };
};
