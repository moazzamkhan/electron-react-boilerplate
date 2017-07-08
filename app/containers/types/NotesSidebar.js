import React from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';

import "./NotesSidebar.scss"

const styles = {
  list: {
    padding: "0"
  },
  listItem: {
    padding: "10px 16px 16px",
    borderBottom: "1px solid rgb(224, 224, 224)"
  }

}
const NotesSidebar = ({ list, onNavigate, width, current }) => {
  return (
    <Drawer width={width} open docked className="notes-sidebar">
      <List style={styles.list}>
        {
          list.map((item) => (<ListItem key={item.id} innerDivStyle={Object.assign({}, styles.listItem, {
              backgroundColor: ((current === item.id) ? "#efefef" : "inherit")
            })} onClick={() => onNavigate(item.id)} primaryText={item.title}
                                        secondaryText={item.lastModified}
            />)
          )}
      </List>
    </Drawer>
  )
}


NotesSidebar.propTypes = {
  // classes: PropTypes.object.isRequired,
}

export default NotesSidebar;
