import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  Button
} from "@material-ui/core";
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function ButtonFormik({ fieldData: { message = "", path = "",
  startIcon = null, endIcon = null, disabled = false, size = "medium", variant = "text", onClick } }) {

  const [field] = useField(path);

  const handleClick = () => {
    onClick();
  }

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
      <Button 
        onClick={handleClick}
        startIcon={startIcon}
        endIcon={endIcon}
        disabled={disabled}
        size={size}
        variant={variant}
      >
          {message}
      </Button>
    </div>
    </div>
  )
};

ButtonFormik.propTypes = {
  fieldData: PropTypes.shape({
    message: PropTypes.string,
    path: PropTypes.string.isRequired,
    startIcon: PropTypes.any,
    endIcon: PropTypes.any,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
  }),
};

export default ButtonFormik
