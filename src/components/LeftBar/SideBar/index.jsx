import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 5,
        marginTop: 15,
        marginBottom: 5,
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon sx={{ color: grey[900] }} />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ color: "black" }} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/Search">
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon sx={{ color: grey[900] }} />
                </ListItemIcon>
                <ListItemText primary="Search" sx={{ color: "black" }} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/messages">
              <ListItemButton>
                <ListItemIcon>
                  <MessageIcon sx={{ color: grey[900] }} />
                </ListItemIcon>
                <ListItemText primary="Messages" sx={{ color: "black" }} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link to="/post">
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon sx={{ color: grey[900] }} />
                </ListItemIcon>
                <ListItemText primary="Post" sx={{ color: "black" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
      <nav aria-label="main mailbox folders">
        <Divider orientation="horizontal" />
        <List>
          <ListItem disablePadding>
            <Link to="/profile">
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: grey[900] }} />
                </ListItemIcon>
                <ListItemText primary="Profile" sx={{ color: "black" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
