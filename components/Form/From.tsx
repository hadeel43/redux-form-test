import React from 'react';
import AgeInput from '../AgeInput/AgeInput';
import NameInput from '../NameInput/NameInput';
import Message from '../MessagePage/Message';

interface Props {
  page: { currentPage: number };
  submitAndContinue: (input: string) => void;
  errors: { name: string };
  values: { name: string; age: string };
}

const Form: React.FC<Props> = ({ page, submitAndContinue, errors, values }) => (
  <div className="form">
    {page.currentPage === 1 && (
      <AgeInput submitAndContinue={(input: string) => submitAndContinue(input)} errors={errors} />
    )}
    {page.currentPage === 2 && (
      <NameInput submitAndContinue={(input: string) => submitAndContinue(input)} errors={errors} />
    )}
    {page.currentPage === 3 && <Message values={values} />}
  </div>
);

export default Form;
