import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ChakraProvider } from "@chakra-ui/react";

export function App() {
     return (
          <ChakraProvider>
               <BrowserRouter>
                    <Router />
               </BrowserRouter>
          </ChakraProvider>
     )
}

