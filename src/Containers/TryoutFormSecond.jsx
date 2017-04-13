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
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" className="form-control" component="input" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" className="form-control" component="input" type="text" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="birthday">Birthday</label>
                <Field name="birthday" className="form-control" component="input" type="birthday" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                <Field name="nickname" className="form-control" component="input" type="nickname" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" className="form-control" component="input" type="email" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="documentImageUrl">Identitiy Document</label>
                <Field
                  name="documentImageUrl"
                  className="form-control"
                  component="input"
                  type="documentImageUrl"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="favPlayer">Favorite Player</label>
                <Field
                  name="favPlayer"
                  className="form-control"
                  component="input"
                  type="favPlayer"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <button type="button" onClick={previousPage}>Next</button>
            </div>
            <div className="col-sm-6">
              <button type="submit">Next</button>
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
