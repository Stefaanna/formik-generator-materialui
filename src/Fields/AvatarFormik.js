import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  Avatar, FormLabel
} from "@material-ui/core";
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function AvatarFormik({ fieldData: { label = "", alt = "", src = null, path = "", imgProps = {}, sizes = [], variant= "circular" } }) {

  const [field] = useField(path);

  const handleClick = () => {
    console.log('clicked IconButton');
    onClick();
  }

  return (
    <div className={classes.container}>
      <div className={classes.flexColumn}>
      {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
      <Avatar 
        alt={alt}
        src={src}
        imgProps={imgProps}
        sizes={sizes}
        variant={variant}
      />
    </div>
    </div>
  )
};

AvatarFormik.propTypes = {
  fieldData: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
    path: PropTypes.string.isRequired,
    imgProps: PropTypes.object,
    sizes: PropTypes.array,
    variant: PropTypes.string,
  }),
};

export default AvatarFormik;
