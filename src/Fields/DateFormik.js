import React, { useState } from 'react';
import {FormLabel} from "@material-ui/core";
import HintWarning from "../UI/HintWarning";
import { KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function DateFormik({ fieldData: { title = "", path = "", placeholder = "", label = "", margin = "dense", readOnly = false, hint = "", warning = "", required = false, openTo = "date", simple = false } }) {

  const [field, { error }, helpers] = useField(path);

  let DateComponent = readOnly ? DatePicker : KeyboardDatePicker;

  return (
    <div className={classes.container}>
      <div className={classes.flexColumn}>
      {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
      <HintWarning text={warning} isWarning />
      <DateComponent
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
        format="MM/DD/YYYY"
        readOnly={readOnly}
        placeholder={placeholder || "01/01/2020"}
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

DateFormik.propTypes = {
  fieldData: PropTypes.shape({
    path: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    hint: PropTypes.string,
    warning: PropTypes.string,
    title: PropTypes.string,
    margin: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,

    openTo: PropTypes.string,
  }),
};

export default DateFormik
