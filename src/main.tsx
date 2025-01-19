import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider  } from "@chakra-ui/react";
import { theme } from "./chakra/theme";


createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme} >
    <App />
  </ChakraProvider>
);
