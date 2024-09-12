import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from "./theme/index.jsx";
// Supports weights 200-900
import '@fontsource-variable/source-serif-4';
import '@fontsource-variable/manrope';
// Supports weights 200-900
import '@fontsource-variable/source-code-pro';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Box minH="100vh" overflow={"hidden"}>
        <App />
        <ToastContainer/>
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
