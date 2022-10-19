import React, { useState } from 'react';

interface Props {
  submitAndContinue: (input: string) => void;
  errors: { name: string };
}

const NameInput: React.FC<Props> = ({ submitAndContinue, errors }) => {
  const [values, seValues] = useState({ name: '', age: '' });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let updatedValue = {};
    updatedValue = { name: e.currentTarget.value };
    seValues((newValue) => ({
      ...newValue,
      ...updatedValue,
    }));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your name"
        value={values.name}
        onChange={(e) => handleChange(e)}
      />
      <span className="error">{errors.name}</span>
      <button
        className="submit-button"
        value="submit"
        onClick={(e) => {
          e.preventDefault();
          submitAndContinue(values.name);
        }}
      >
        send
      </button>
    </form>
  );
};

export default NameInput;
