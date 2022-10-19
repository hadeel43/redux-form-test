/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import AgeInput from '../AgeInput/AgeInput';
import NameInput from '../NameInput/NameInput';
import Message from '../MessagePage/Message';

interface Props {
  page: any;
  submitAndContinue: (input: string) => void;
  errors: any;
  values: any;
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
