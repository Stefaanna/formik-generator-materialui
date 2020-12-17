import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  IconButton, FormLabel
} from "@material-ui/core";
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function IconButtonFormik({ fieldData: { label = "", icon, path = "", disabled = false, size = "medium", onClick } }) {

  const [field] = useField(path);

  const handleClick = () => {
    onClick();
  }

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
      {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
      <IconButton 
        onClick={handleClick}
        disabled={disabled}
        size={size}
      >
          {icon}
      </IconButton>
    </div>
    </div>
  )
};

IconButtonFormik.propTypes = {
  fieldData: PropTypes.shape({
    icon: PropTypes.any,
    path: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default IconButtonFormik;
