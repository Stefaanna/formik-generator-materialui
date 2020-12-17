import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  InputBase, InputLabel
} from "@material-ui/core";
import { useField } from 'formik';
import { last } from '../functions/formHelper';
import classes from '../index.css';
import PropTypes from 'prop-types';

function InputFormik({ fieldData: { label = "", title = "", path = "", readOnly = false, hint = "", 
  warning = "", required = false, multiline = false, margin = "dense", disabled = false, isLink = false, value = "", placeholder = "", defaultValue = "" } }) {

  const [field, { error }] = useField(path);

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
      {label ? <InputLabel className={classes.label}>{label}</InputLabel> : null}
      <HintWarning text={warning} isWarning />
      <InputBase
        name={path}
        defaultValue={field.value || ''}
        onChange={field.onChange}
        onBlur={field.onBlur}
        error={!!error}
        helperText={error}
        required={required}
        className={classes.flexGrow}
        margin={margin}
        multiline={multiline}
        disabled={disabled}
        placeholder={placeholder}
        value={field.value}
        // inputLabelProps={!title ? { shrink: false } : {}}
        inputProps={{
           readOnly
        }}
      />
      {isLink && <HintWarning text={field.value || ''} isLink />}
      <HintWarning text={hint} />
    </div>
    </div>
  )
};

InputFormik.propTypes = {
  fieldData: PropTypes.shape({
    path: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    hint: PropTypes.string,
    warning: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    margin: PropTypes.string,
    multiline: PropTypes.bool,
    disabled: PropTypes.bool,
    isLink: PropTypes.bool,
  }),
};

export default InputFormik
