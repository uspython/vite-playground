import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import Counter from "./Counter";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My React App with MUI</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to our Counter App
          </Typography>
          <Counter initialCount={5} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
