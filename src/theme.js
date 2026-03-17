import { createTheme } from "@mui/material";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode:mode
    }
  });

export default getTheme;