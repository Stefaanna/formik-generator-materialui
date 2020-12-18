import React from 'react';
import HintWarning from "../UI/HintWarning"
import { Typography, Grid, FormLabel } from '@material-ui/core';
import classes from '../index.css';
import PropTypes from 'prop-types';

function GroupFieldFormik({ fieldData: {
  label = "", title = "", readOnly = false, hint = "", warning = "", subfields = [],
}, FieldGenerator }) {

  return (
    <div className={classes.container}>
      {label ? <FormLabel className={classes.label}>{label}</FormLabel> : null}
      {/* <div className={classes.borderContainer}> */}
      {title && <Typography variant="body2"
        gutterBottom
        color="textSecondary"
        component={'div'}>{title}
        <HintWarning text={warning} isWarning />
        <HintWarning text={hint} />
      </Typography>}
      <Grid container spacing={1}>
        {subfields.map((subfieldData, i) => <Grid key={i} item
          xs={12} sm={subfieldData.col || 12}>
          <FieldGenerator fieldData={subfieldData} readOnly={readOnly} />
        </Grid>)}
      </Grid>
      {/* </div> */}
    </div>
  )
}

GroupFieldFormik.propTypes = {
  fieldData: PropTypes.shape({
    readOnly: PropTypes.bool,
    hint: PropTypes.string,
    label: PropTypes.string,
    warning: PropTypes.string,
    title: PropTypes.string,

    subfields: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default GroupFieldFormik
