import React, { useState } from 'react';

interface Props {
  submitAndContinue: (input: string) => void;
  errors: { name: string };
}

const AgeInput: React.FC<Props> = ({ submitAndContinue, errors }) => {
  const [values, seValues] = useState({ name: '', age: '' });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let updatedValue = {};
    updatedValue = { age: e.currentTarget.value };
    seValues((newValue) => ({
      ...newValue,
      ...updatedValue,
    }));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter your age"
        value={values.age}
        onChange={(e) => handleChange(e)}
      />
      <span className="error">{errors.name}</span>
      <button
        className="submit-button"
        value="submit"
        onClick={(e) => {
          e.preventDefault();
          submitAndContinue(values.age);
        }}
      >
        send
      </button>
    </form>
  );
};

export default AgeInput;
