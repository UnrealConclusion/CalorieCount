import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {FoodBank, Settings, Flag} from '@mui/icons-material';
export default function NavDrawer({isOpen, toggleOpen}) {

  // contents of the drawer 
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleOpen}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FoodBank/>
            </ListItemIcon>
            <ListItemText primary="Food Bank"/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Flag/>
            </ListItemIcon>
            <ListItemText primary={"Goals"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings/>
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpen} onClose={toggleOpen}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

NavDrawer.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
};