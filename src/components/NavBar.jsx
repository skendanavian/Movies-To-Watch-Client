import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Box className="nav">
              The Watch List
              <ul>
                <Box display="flex">
                  <li>
                    <Link to="/users">My Movies</Link>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </Box>
              </ul>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
