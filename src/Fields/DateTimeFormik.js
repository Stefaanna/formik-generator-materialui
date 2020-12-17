import React, { useState } from 'react';
import {FormLabel} from "@material-ui/core";
import HintWarning from "../UI/HintWarning";
import { KeyboardDateTimePicker, DateTimePicker } from '@material-ui/pickers';
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function DateTimeFormik({ fieldData: { title = "", path = "", margin = "dense", label = "",
  readOnly = false, hint = "", placeHolder = "", warning = "", required = false, openTo = "date", simple = false } }) {

  const [field, { error }, helpers] = useField(path);

  let DateTimeComponent = readOnly ? DateTimePicker : KeyboardDateTimePicker;

  return (
    <div className={classes.container}>
      <div className={classes.flexColumn}>
      {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
      <HintWarning text={warning} isWarning />
      <DateTimeComponent
        margin={margin}
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
        format="MM/DD/YYYY h:mm:ss tt" // TODO: this needs checking
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={value => {
          helpers.setValue((value && value.toDate() || null));
        }}
        value={field.value || null}
      />
      <HintWarning text={hint} />
    </div>
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
    margin: PropTypes.string,
    label: PropTypes.string,
    palceholder: PropTypes.string,

    openTo: PropTypes.string,
  }),
};

export default DateTimeFormik
