import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Home from "./components/Home/Home";

function App() {
  const bgColor = useColorModeValue("blackAlpha.100", "gray.800");
  return (
    <Box
      bg={bgColor}
      minHeight="100vh"
      minWidth="100vw"
      display="flex"
  flexDirection="column"
    >
      <Header />
      <Flex align="center" justify="center" direction="column" w="100%">
        <Home />
      </Flex>
      <Footer mt="auto" />
    </Box>
  );
}

export default App;
