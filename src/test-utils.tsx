import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function render(ui: React.ReactElement, options = {}) {
  return rtlRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
