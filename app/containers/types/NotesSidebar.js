import React from 'react';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import { grey500 } from 'material-ui/styles/colors';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ContentAdd from 'material-ui/svg-icons/content/add';


import "./NotesSidebar.scss"

const styles = {
  drawer: {
    height: window.innerHeight,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 0px"
  },
  button: {
    border: "none",
    padding: "0",
    margin: "0 5px"
  },
  icon: {
    height: 28,
    width: 28,
    lineHeight: "28px",
    fontSize: "22px"
  },
  list: {
    padding: "0"
  },
  listItem: {
    padding: "10px 16px 16px",
    borderBottom: "1px solid rgb(224, 224, 224)"
  }
}

const NotesSidebar = (props) => {
  let { list, onNavigate, width, current, deleteNote, createNote } = props;
  console.log(props)
  return (
    <Drawer width={width} open docked className="notes-sidebar" containerStyle={styles.drawer}>
      <Toolbar style={{ padding: "0", height: 36, backgroundColor: grey500 }}>
        <ToolbarGroup>
          <FloatingActionButton mini style={styles.button} onClick={() => deleteNote(current)}
                                iconStyle={styles.icon}><i
            className="material-icons">delete_forever</i></FloatingActionButton>
          <FloatingActionButton mini style={styles.button} onClick={() => createNote()}
                                iconStyle={styles.icon}><ContentAdd /></FloatingActionButton>
        </ToolbarGroup>
        <ToolbarGroup>
        </ToolbarGroup>
      </Toolbar>
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
