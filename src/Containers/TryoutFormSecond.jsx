import React from 'react';
import { Field, reduxForm } from 'redux-form';

function TryoutForm(props) {
  const { handleSubmit, previousPage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <div className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="question1">For how long have you been playing?</label>
                    <Field
                      name="question1"
                      placeholder="Years"
                      className="form-control"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="lastName">What's your favorite team?</label>
                    <Field
                      name="question2"
                      placeholder="Team"
                      className="form-control"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="birthday">Where are you from?</label>
                    <Field
                      name="question3"
                      placeholder="Country"
                      className="form-control"
                      component="input"
                      type="birthday"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="nickname">&nbsp;</label>
                    <Field
                      name="question4"
                      placeholder="City"
                      className="form-control"
                      component="input"
                      type="nickname"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">Another Question?</label>
                    <Field
                      name="question5"
                      placeholder="Question"
                      className="form-control"
                      component="input"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="documentImageUrl">Some more questions?</label>
                    <Field
                      name="question6"
                      placeholder="Question"
                      className="form-control"
                      component="input"
                      type="documentImageUrl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-sm-6">
              <button className="tryout-button" type="button" onClick={previousPage}>Back</button>
            </div>
            <div className="col-sm-6">
              <button className="tryout-button" type="submit">Next</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

const validate = (values) => {
  console.log('validate step 2', values);
};

// Decorate the form component
const TryoutFormDecorated = reduxForm({
  form: 'TryoutFormWizard',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(TryoutForm);

export default TryoutFormDecorated;
