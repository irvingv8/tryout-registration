import React from 'react';
import { Field, reduxForm } from 'redux-form';

function TryoutForm(props) {
  const { handleSubmit, previousPage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="firstName">Another Question?</label>
                <Field placeholder="Question" name="question7" className="form-control" component="input" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="lastName">Question?</label>
                <Field placeholder="Question" name="question8" className="form-control" component="input" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="birthday">Is Somosport making you happy?</label>
                <Field placeholder="Ofc!"name="question9" className="form-control" component="input" type="birthday" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="nickname">Some more questions?</label>
                <Field placeholder="Question" name="question10" className="form-control" component="input" type="nickname" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="email">Something to ask?</label>
                <Field placeholder="Question" name="question11" className="form-control" component="input" type="email" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="documentImageUrl">Another question?</label>
                <Field
                  placeholder="Question"
                  name="question12"
                  className="form-control"
                  component="input"
                  type="documentImageUrl"
                />
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-sm-6">
              <button className="tryout-button" type="button" onClick={previousPage}>Back</button>
            </div>
            <div className="col-sm-6">
              <button className="tryout-button" type="submit">Register!</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

const validate = (values) => {
  console.log('validate step 3', values);
};

// Decorate the form component
const TryoutFormDecorated = reduxForm({
  form: 'TryoutFormWizard',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(TryoutForm);

export default TryoutFormDecorated;
