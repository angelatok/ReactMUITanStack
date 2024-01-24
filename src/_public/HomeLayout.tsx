import {
  AppBar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { Favorite, Menu, Notifications } from "@mui/icons-material";
import MCardHdl from "./muicard/MCardHdl";

const Home = () => {
  return (
    <>
      '{" "}
        <AppBar position="sticky">
          <Toolbar>
            <IconButton size="large" edge="start" sx={{mr:2}}>
                <Menu />
            </IconButton>
            <Typography component="div" sx={{flexGrow:1}}>
            My TOP bar
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>


      <Grid item direction="column" spacing={2}>
        <Grid item container direction="row" spacing={2}>
          <Grid item xs={2}>

            <Stack position={"sticky"}>
              <ListItemButton href="/post">
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Post" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="Like" />
              </ListItemButton>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            center
            <MCardHdl />
          </Grid>
          <Grid item xs={2}>
            right
            <Stack spacing={2}>
              <Link to="/InfiniteScroll">
                <Button size="small" variant="contained">
                  #InfiniteScroll
                </Button>
              </Link>
              <Link to="/Todo">
                <Button size="small" variant="contained">
                  #Todo
                </Button>
              </Link>
              <Link to="/MCard">
                <Button size="small" variant="contained">
                  #Mcard
                </Button>
              </Link>
              <Link to="/Post">
                <Button size="small" variant="contained">
                  #PostHdl
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid>Bottom</Grid>
        </Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <div>2</div>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <Grid item xs={2} spacing={2}></Grid>
      </Grid>
    </>
  );
};

export default Home;
