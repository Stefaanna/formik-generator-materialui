import React from 'react';
import HintWarning from "../UI/HintWarning";
import {
  Avatar, FormLabel, IconButton
} from "@material-ui/core";
import {Add} from '@material-ui/icons';
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';

function AvatarGroupFormik({ fieldData: { label = "", canAdd, path = "", items, onClick }}) {

  const [field] = useField(path);

  return (
    <div className={classes.container}>
      <div className={classes.flexColumn}>
        {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
        <div className={classes.flexRow}>
          {canAdd ? <IconButton className={classes.addCircleButton} onClick={onClick}><Add /></IconButton> : null}
          {items.map(item => (
              <Avatar 
                className={classes.avatar}
                alt={item.alt}
                src={item.src}
                imgProps={item.imgProps}
                sizes={item.sizes}
                variant={item.variant || "circular"}
            />
          ))}
        </div>
    </div>
    </div>
  )
};

AvatarGroupFormik.propTypes = {
  fieldData: PropTypes.shape({
    path: PropTypes.string.isRequired,
    canAdd: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      sizes: PropTypes.array,
      variant: PropTypes.string,
      imgProps: PropTypes.object,
    }))
  }),
}; 

export default AvatarGroupFormik;
