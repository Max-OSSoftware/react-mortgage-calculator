import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5">Mortgage Calculator</Typography>
        </Toolbar>
        <Typography variant="p">
          <Link href="https://twitter.com/zapboy216" target="_blank" rel="noopener">
            @zapboy216
          </Link>
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Navbar;