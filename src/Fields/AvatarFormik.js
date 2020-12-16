import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  Avatar, FormLabel
} from "@material-ui/core";
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function AvatarFormik({ fieldData: { label = "", alt = "", src = null, path = "", imgProps = {}, sizes = [], variant= "circle" } }) {

  const [field] = useField(path);

  const handleClick = () => {
    console.log('clicked IconButton');
    onClick();
  }

  return (
    <div className={classes.flex}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <Avatar 
        alt={alt}
        src={src}
        imgProps={imgProps}
        sizes={sizes}
        variant={variant}
      />
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
