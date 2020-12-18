import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  TextField, FormLabel
} from "@material-ui/core";
import { useField } from 'formik';
import { last } from '../functions/formHelper';
import classes from '../index.css';
import PropTypes from 'prop-types';

function TextFieldFormik({ fieldData: { title = "", label = "", margin = "normal", type = "text", path = "", placeholder = "", readOnly = false, hint = "", warning = "", required = false, multiline = false, isLink = false } }) {

  const [field, { error }] = useField(path);

  return (
      <div className={classes.flexColumn}>
      {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
      <HintWarning text={warning} isWarning />
      <TextField
        name={path}
        value={field.value || ''}
        onChange={field.onChange}
        onBlur={field.onBlur}
        error={!!error}
        helperText={error}
        required={required}
        className={classes.flexGrow}
        margin={margin}
        multiline={multiline}
        type={type}
        variant={readOnly ? "filled" : "outlined"}
        label={placeholder || label}
        InputLabelProps={!title ? { shrink: false } : {}}
        InputProps={{
          readOnly
        }}
      />
      {isLink && <HintWarning text={field.value || ''} isLink />}
      <HintWarning text={hint} />
    </div>
  )
};

TextFieldFormik.propTypes = {
  fieldData: PropTypes.shape({
    path: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    hint: PropTypes.string,
    warning: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    margin: PropTypes.string,
    multiline: PropTypes.bool,
    isLink: PropTypes.bool,
  }),
};

export default TextFieldFormik
