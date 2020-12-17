import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  Avatar, FormLabel, IconButton
} from "@material-ui/core";
import {Add} from '@material-ui/icons';
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function AvatarGroupFormik({ fieldData: { label = "", canAdd = false, path = "", items: { imgProps: {}, sizes = [], variant = "circle", alt = "", src = null, } } }) {

  const [field] = useField(path);

  const handleClick = () => {
    onClick();
  }

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
      {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
      {canAdd ? <IconButton onClick={handleClick}><Add /></IconButton> : null}
      {items.map(item => (
          <Avatar 
            alt={item.alt}
            src={item.src}
            imgProps={item.imgProps}
            sizes={item.sizes}
            variant={item.variant}
        />
      ))}
    </div>
    </div>
  )
};

AvatarGroupFormik.propTypes = {
  fieldData: PropTypes.shape({
    path: PropTypes.string.isRequired,
    canAdd: PropTypes.bool,
    items: PropTypes.array
  }),
}; 

export default AvatarGroupFormik;
