import React from 'react';
import { Form } from 'formik';
import * as Yup from 'yup';
import FieldGenerator from './FieldGenerator';
import FormikWithRef from './FormikWithRef';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import {Button} from '@material-ui/core';
import classes from '../index.css';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import ErrorListener from './ErrorListener';
import SubmitListener from './SubmitListener';

function FormGenerator({ initialValues = {}, fields = [], getFields = null, onCancel = () => null, onSubmit = () => null, cancelMessage = "Cancel", submitMessage = "Submit",
  onError = null, readOnly = false, formRef = null, validateOnBlur = true, validateOnChange = true, validateOnMount = true, onSubmitWithError = null,
  validationSchema = null, shouldTriggerErrors = null }) {

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <FormikWithRef
        ref={formRef}
        validateOnBlur={validateOnBlur}
        validateOnChange={validateOnChange}
        validateOnMount={validateOnMount}
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ values, ...formFunction }) => (
          <Form className={classes.form}>
            <div>
              {!!onError && <ErrorListener onError={onError} shouldTriggerErrors={shouldTriggerErrors} />}
              {!!onSubmitWithError && <SubmitListener onSubmitWithError={onSubmitWithError} />}
              { (!!getFields ? getFields(values) : fields).map((field, i) => <div key={i} className={classes.noCollapse}>
                <FieldGenerator
                  readOnly={readOnly}
                  formFunction={formFunction}
                  fieldData={field}
                />
              </div>)}
            </div>
            <div className={classes.formButtons}>
              <Button onClick={() => onCancel()} variant="contained">{cancelMessage}</Button>            
              <Button onClick={() => onSubmit(values)} variant="contained" color="primary" className={classes.submitBtn}>{submitMessage}</Button>
            </div>
          </Form>
        )}
      </FormikWithRef>
    </MuiPickersUtilsProvider>
  );
}

FormGenerator.propTypes = {
  initialValues: PropTypes.object,
  fields: PropTypes.arrayOf(PropTypes.object),
  getFields: PropTypes.func,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  cancelMessage: PropTypes.string,
  submitMessage: PropTypes.string,
  readOnly: PropTypes.bool,
  formRef: PropTypes.object.isRequired,
  validateOnBlur: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  validateOnMount: PropTypes.bool,
  validationSchema: PropTypes.object,
  onError: PropTypes.func,
  shouldTriggerErrors: PropTypes.func,
  onSubmitWithError: PropTypes.func,
};

export default FormGenerator
