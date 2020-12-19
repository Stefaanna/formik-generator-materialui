import React from 'react';
import {
  ListItem, ListItemAvatar, ListItemSecondaryAction, IconButton, Avatar, ListItemText
} from "@material-ui/core";
import { useField } from 'formik';
import classes from '../index.css';
import PropTypes from 'prop-types';
import { Add, Edit, Clear } from '@material-ui/icons';

function ListItemFormik({ fieldData: { path = "", readOnly = true, disabled = false, avatar = "", hasAvatar = true, 
    primary = "", secondary = "", hasSecondaryAction = true, canAdd = true, canDelete = true, onAdd, onEdit, onRemove } }) {

  const [field, { error }] = useField(path);

  const addIcon = (
      <IconButton className={classes.addIcon} onClick={onAdd}>
          <Add />
      </IconButton>
  );

  const editIcon = (
      <IconButton className={classes.editIcon} onClick={onEdit}>
          <Edit />
      </IconButton>
  );

  const removeIcon = (
      <IconButton className={classes.removeIcon} onClick={onRemove}>
          <Clear />
      </IconButton>
  )

  return (
      <div className={classes.flexColumn}>
        <div className={classes.listItemContainer}>
            <ListItem
                alignItems="flex-start"
                name={path}
                disabled={disabled}
            >
            {hasAvatar ? <ListItemAvatar>
                <Avatar src={avatar} alt=""></Avatar>
            </ListItemAvatar> : null}
            <ListItemText primary={primary} secondary={secondary} />
            {hasSecondaryAction ? <ListItemSecondaryAction>
                <span>
                    {canAdd ? addIcon : editIcon}
                    {canDelete ? removeIcon : null} 
                </span>
            </ListItemSecondaryAction> : null}
        </ListItem>
        </div>
    </div>
  )
};

ListItemFormik.propTypes = {
  fieldData: PropTypes.shape({
    path: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    avatar: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    hasSecondaryAction: PropTypes.bool,
    hasAvatar: PropTypes.bool,
    canAdd: PropTypes.bool,
    canDelete: PropTypes.bool,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
  }),
};

export default ListItemFormik
