import React from 'react';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import "./NotesSidebar.scss"

const styleSheet = createStyleSheet('DockedSidebar', {
  paper: {
    background: "red"
  },
  list: {
    width: 200,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
});

const NotesSidebar = ({ classes, list, onNavigate }) => {
  return (
    <Drawer open docked className={classes.paper}>
      <div>
        <List className={classes.list} disablePadding>
          <div>{list.map((item) => (
            <ListItem key={item.id} dense button divider onClick={() => onNavigate(`/${item.id}`)}>
              <ListItemText primary={item.value.split(/\r?\n/)[0]} secondary={`/${item.id}`}></ListItemText>
            </ListItem>
          ))}</div>
        </List>
      </div>
    </Drawer>
  )
}


NotesSidebar.propTypes = {
  // classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(NotesSidebar);
