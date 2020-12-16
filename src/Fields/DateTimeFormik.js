import React, { useState } from 'react';
import HintWarning from "../UI/HintWarning";
import { KeyboardDateTimePicker, DateTimePicker } from '@material-ui/pickers';
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function DateTimeFormik({ fieldData: { title = "", path = "", 
  readOnly = false, hint = "", warning = "", required = false, openTo = "date", simple = false } }) {

  const [field, { error }, helpers] = useField(path);

  let DateTimeComponent = readOnly ? DateTimePicker : KeyboardDateTimePicker;

  // TODO: check if props match with the API
  return (
    <div className={classes.flex}>
      <HintWarning text={warning} isWarning />
      <DateTimeComponent
        margin={"dense"}
        name={field.name}
        disableToolbar={simple}
        variant={simple ? "inline" : "static"}
        openTo={openTo}
        required={required}
        error={!!error}
        helperText={error}
        className={classes.flexGrow}
        // clearable //solve warning
        inputVariant={readOnly ? "filled" : "outlined"}
        autoOk
        label={title}
        format="MM/DD/YYYY"
        readOnly={readOnly}
        placeholder="01/01/2020"
        onChange={value => {
          helpers.setValue((value && value.toDate() || null));
        }}
        value={field.value || null}
      />
      <HintWarning text={hint} />
    </div>
  )
};

DateTimeFormik.propTypes = {
  fieldData: PropTypes.shape({
    path: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    hint: PropTypes.string,
    warning: PropTypes.string,
    title: PropTypes.string,

    openTo: PropTypes.string,
  }),
};

export default DateTimeFormik
