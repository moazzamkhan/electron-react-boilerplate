import React from 'react'
import List, { ListItem, ListItemSecondaryAction, ListSubheader } from 'material-ui/List'
import Input from 'material-ui/Input/Input'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'
import FormHelperText from 'material-ui/Form/FormHelperText'
import IconButton from 'material-ui/IconButton'
import AddCircleIcon from 'material-ui-icons/AddCircle'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import MenuIcon from 'material-ui-icons/Menu'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom';

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
})

const PropertyListRenderer = ({ title, classes, properties }) => {
  return (<div style={{
    display: 'flex',
    flexWrap: 'wrap',
  }}>
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>{title}</Typography>
        <Button color="contrast">Login</Button>
      </Toolbar>
    </AppBar>
    <Link to="/contact">to contact</Link>
    <List disablePadding subheader={<ListSubheader>{title}</ListSubheader>}>
      {properties.map((p, i) => {
        return (<ListItem key={i}>
          <FormControl error={p.error}>
            <InputLabel htmlFor={p.property} style={{ textTransform: "capitalize" }}>
              {p.label}
            </InputLabel>
            <Input id={p.property} value={p.value} style={{ width: 600 }}
                   disabled={p.readonly} />
            <FormHelperText>{p.description}</FormHelperText>
          </FormControl>
          {p.multiple && (<ListItemSecondaryAction>
            <IconButton aria-label="Add">
              <AddCircleIcon />
            </IconButton>
          </ListItemSecondaryAction>)}
        </ListItem>)
      })}
    </List>
  </div>)
}

PropertyListRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  properties: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default withStyles(styleSheet)(PropertyListRenderer)
