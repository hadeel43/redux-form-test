import { connect } from 'react-redux'

import {
    saveInputValue,
    errorInputValues,
    nextPage
}from '../../actions/FormActions'

import { Form } from '../../../components/Form'

const handleValidation = (dispatch:any, fields:any) => {
  let errors = {name:'' ,age: '' };
  let formIsValid = true;

  if (
    fields.hasOwnProperty('age') && 
    !fields.age) {
    formIsValid = false;
    errors.age = "Cannot be empty";
  }

  if (fields.hasOwnProperty('name') && 
    !fields.name) {
    formIsValid = false;
    errors.name = "Cannot be empty";
  }

 if(!formIsValid){
  dispatch(errorInputValues(errors))
 }

  return formIsValid;
}

const submitAndContinue = (dispatch:any,values:any) => {
    dispatch(saveInputValue(values))

    if (handleValidation(dispatch, values)) {
      dispatch(nextPage('next'))
    }
  }
  const mapStateToProps = (state:any, ownProps = {}) => {
    console.log(state.form)

    return {
      ...state.form
    }
  }
  

  const mapDispatchToProps = (dispatch:any, ownProps = {}) => ({
    submitAndContinue: (values:any) => submitAndContinue(dispatch, values),
    handleValidation: (fields:any) => handleValidation(dispatch, fields)
  })
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)