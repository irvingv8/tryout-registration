

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import range from 'lodash/range';
import capitalize from 'lodash/capitalize';

import { shortMonths } from '../Utils/months';


function TryoutForm(props) {
  const { handleSubmit } = props;

  const currentYear = new Date().getFullYear() + 1;
  const maximumAge = 50;

  const yearRange = range(currentYear, (currentYear - maximumAge), -1);
  yearRange.unshift({ label: '', value: null, key: 'datePickerYear' });

  const dayRange = range(1, 32);
  dayRange.unshift({ label: '', value: null, key: 'datePickerkDay' });

  const monthRange = [...shortMonths];
  monthRange.unshift({ label: '', value: null, key: 'datePickerMonth' });

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
                <label htmlFor="favPlayer">Date of birth</label>

                <div className="row date-picker">
                  <div className="col-xs-4 date-field-1">
                    <div className="date-holder-1">
                      <i className="fa fa-chevron-circle-down" style={{ color: 'black', position: 'absolute', top: '10px', right: '8px', zIndex: '1' }} aria-hidden="true" />
                      <Field
                        name="yearBirth"
                        className="form-control"
                        component="select"
                        type="text"
                      >
                        {renderOptions(yearRange)}
                      </Field>
                    </div>
                  </div>
                  <div className="col-xs-4 date-field-2">
                    <div className="date-holder-2">
                      <i className="fa fa-chevron-circle-down" style={{ color: 'black', position: 'absolute', top: '10px', right: '8px', zIndex: '1' }} aria-hidden="true" />
                      <Field
                        name="monthBirth"
                        className="form-control"
                        component="select"
                        type="text"
                      >
                        {renderOptions(monthRange)}
                      </Field>
                    </div>
                  </div>
                  <div className="col-xs-4 date-field-3">
                    <div className="date-holder-3">
                      <i className="fa fa-chevron-circle-down" style={{ color: 'black', position: 'absolute', top: '10px', right: '8px', zIndex: '1' }} aria-hidden="true" />
                      <Field
                        name="dayBirth"
                        className="form-control"
                        component="select"
                        type="text"
                      >
                        {renderOptions(dayRange)}
                      </Field>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                <Field name="nickname" className="form-control" component="input" type="text" />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" className="form-control" component="input" type="text" />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="documentImageUrl">Identitiy Document</label>
                <Field
                  name="documentImageUrl"
                  className="form-control"
                  component="input"
                  type="text"
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
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <button type="submit">Next</button>
            </div>
          </div>

        </div>
      </div>
    </form>
  );
}

const validate = (values) => {
  console.log('validate step 1', values);
};

// Decorate the form component
const TryoutFormDecorated = reduxForm({
  form: 'TryoutFormWizard',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(TryoutForm);

export default TryoutFormDecorated;
