import React from 'react';
import { Field, reduxForm } from 'redux-form';
import range from 'lodash/range';
import capitalize from 'lodash/capitalize';

/*eslint-disable*/
import { shortMonths_en } from '../Utils/months';
const shortMonths = shortMonths_en;
/*eslint-enable*/

const currentYear = new Date().getFullYear() + 1;
const maximumAge = 50;

const yearRange = range(currentYear, (currentYear - maximumAge), -1);
yearRange.unshift({ label: '', value: null, key: 'datePickerYear' });
const dayRange = range(1, 32);
dayRange.unshift({ label: '', value: null, key: 'datePickerkDay' });
const monthRange = [...shortMonths];
monthRange.unshift({ label: '', value: null, key: 'datePickerMonth' });

const positions = ['', 'undefined', 'goalkeeper', 'defender', 'midfielder', 'forward'];

// Render options for select inputs
const renderOptions = (options = null) =>
  options.map((option) => {
    if (typeof option === 'object') {
      return (
        <option
          value={option.value}
          key={option.value ? option.value : option.key}
        >
          { capitalize(option.label) }
        </option>
      );
    }
    return (
      <option value={option} key={option}>{capitalize(option)}</option>
    );
  });

// Custom render component to display fields + errors
const renderField = ({ input, selectClassType, optionArray, placeholder, type, meta: { touched, error, warning } }) => {
  if (type === 'select') {
    return (
      <div>
        <div className={`date-holder${selectClassType}`}>
          <i className="fa fa-chevron-circle-down" style={{ color: 'white', position: 'absolute', top: '20px', right: '8px', zIndex: '1' }} aria-hidden="true" />
          <select {...input} placeholder={placeholder} type={type} className="form-control">
            {renderOptions(optionArray)}
          </select>
        </div>
        {touched && ((error && <span className="field-error">{error} <i className="fa fa-exclamation-circle" aria-hidden="true"></i></span>) || (warning && <span>{warning}</span>))}
      </div>
    );
  }
  return (
    <div>
      <div>
        <input {...input} placeholder={placeholder} type={type} className="form-control" />
        {touched && ((error && <span className="field-error">{error} <i className="fa fa-exclamation-circle" aria-hidden="true"></i></span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

function TryoutForm(props) {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>

      <div className="row">

        <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">

          <div className="row">

            <div className="col-xs-12">
              <div className="row">

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="firstName">What is your first name?</label>
                    <Field
                      placeholder="Name"
                      name="firstName"
                      className="form-control"
                      component={renderField}
                      type="text"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="lastName">What is your last name?</label>
                    <Field
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      component={renderField}
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
                    <label htmlFor="favPlayer">When where you born?</label>
                    <div className="row date-picker">
                      <div className="col-xs-4 date-field-1">
                        <Field
                          name="yearBirth"
                          optionArray={yearRange}
                          className="form-control"
                          component={renderField}
                          selectClassType="-1"
                          type="select"
                        />
                      </div>
                      <div className="col-xs-4 date-field-2">
                        <Field
                          name="monthBirth"
                          optionArray={monthRange}
                          className="form-control"
                          component={renderField}
                          selectClassType="-2"
                          type="select"
                        />
                      </div>
                      <div className="col-xs-4 date-field-3">
                        <Field
                          name="dayBirth"
                          optionArray={dayRange}
                          className="form-control"
                          component={renderField}
                          selectClassType="-3"
                          type="select"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">What is your email?</label>
                    <Field
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      component={renderField}
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
                    <label htmlFor="documentImageUrl">Identitiy Document</label>
                    <Field
                      placeholder="Identitiy Document"
                      name="documentImageUrl"
                      className="form-control"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="nickname">What is your nickname?</label>
                    <Field
                      placeholder="Nickname"
                      name="nickname"
                      className="form-control"
                      component={renderField}
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
                    <label htmlFor="position">What position do you like the most?</label>
                    <div className="row">
                      <div className="col-xs-12 date-field">
                        <Field
                          name="position"
                          optionArray={positions}
                          className="form-control"
                          component={renderField}
                          selectClassType=""
                          type="select"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="favPlayer">Who is your favorite player?</label>
                    <Field
                      placeholder="Player"
                      name="favPlayer"
                      className="form-control"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12">
              <button className="tryout-button" type="submit">Next</button>
            </div>
          </div>

        </div>
      </div>
    </form>
  );
}

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.dayBirth) {
    errors.dayBirth = 'Required';
  }
  if (!values.monthBirth) {
    errors.monthBirth = 'Required';
  }
  if (!values.yearBirth) {
    errors.yearBirth = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.position) {
    errors.position = 'Required';
  }

  return errors;
};

// Decorate the form component
const TryoutFormDecorated = reduxForm({
  form: 'TryoutFormWizard',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(TryoutForm);

export default TryoutFormDecorated;
