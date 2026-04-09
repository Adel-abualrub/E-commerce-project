import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router";
import "./i18next";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import theme from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import getTheme from "./theme";
import useThemeStore from "./store/useTheamStore";

export default function App() {
  const mode = useThemeStore((state) => state.mode);
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline />

        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
