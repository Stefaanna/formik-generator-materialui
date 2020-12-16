import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  Input, InputLabel
} from "@material-ui/core";
import { useField } from 'formik';
import { last } from '../functions/formHelper';
import classes from '../index.css';
import PropTypes from 'prop-types';

function InputFormik({ fieldData: { label = "", title = "", 
  path = "", readOnly = false, hint = "", warning = "", required = false, multiline = false, disabled = false, isLink = false } }) {

  const [field, { error }] = useField(path);

  return (
    <div className={classes.flex}>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <HintWarning text={warning} isWarning />
      <Input
        name={path}
        defaultValue={field.value || ''}
        onChange={field.onChange}
        onBlur={field.onBlur}
        error={!!error}
        helperText={error}
        required={required}
        className={classes.flexGrow}
        margin={"dense"}
        multiline={multiline}
        disabled={disabled}
        // inputLabelProps={!title ? { shrink: false } : {}}
        inputProps={{
           readOnly
        }}
      />
      {isLink && <HintWarning text={field.value || ''} isLink />}
      <HintWarning text={hint} />
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
    multiline: PropTypes.bool,
    disabled: PropTypes.bool,
    isLink: PropTypes.bool,
  }),
};

export default InputFormik
