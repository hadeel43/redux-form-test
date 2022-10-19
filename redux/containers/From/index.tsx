import { connect } from 'react-redux'

import {
    saveInputValue,
    errorInputValues,
    nextPage
}from '../../actions/FormActions'

import Form from '../../pages/Form'

const handleValidation = (dispatch, fields) => {
  let errors = {};
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

const submitAndContinue = (dispatch,values) => {
    dispatch(saveInputValue(values))

    if (handleValidation(dispatch, values)) {
      dispatch(nextPage('next'))
    }
  }
  const mapStateToProps = (state, ownProps = {}) => {
    console.log(state.form)

    return {
      ...state.form
    }
  }
  

  const mapDispatchToProps = (dispatch, ownProps = {}) => ({
    submitAndContinue: values => submitAndContinue(dispatch, values),
    handleValidation: fields => handleValidation(dispatch, fields)
  })
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)