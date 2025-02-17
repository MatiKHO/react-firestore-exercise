import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "../src/App/App.jsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
      <CssBaseline />
      <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
