import React from 'react';
import AgeInput from '../../components/AgeInput';
import NameInput from '../../components/NameInput';
import Message from '../../components/MessagePage';

interface Props {
  page: any;
  submitAndContinue: any;
  errors: any;
  values: any;
}

const Container: React.FC<Props> = ({ page, submitAndContinue, errors, values }) => (
  <div className="form">
    {page.currentPage === 1 && (
      <AgeInput
        submitAndContinue={(input) => submitAndContinue(input)}
        page={page}
        errors={errors}
        values={values}
      />
    )}
    {page.currentPage === 2 && (
      <NameInput
        submitAndContinue={(input) => submitAndContinue(input)}
        page={page}
        errors={errors}
        values={values}
      />
    )}
    {page.currentPage === 3 && <Message page={page} values={values} />}
  </div>
);

export default Container;
