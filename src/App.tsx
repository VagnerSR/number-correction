import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NumberCorrection from "./components/NumberCorrection/NumberCorrection";
import {
  Divider,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import DigitCorrection from "./components/DigitCorrection/DigitCorrection";

function App() {
  const borderColor = useColorModeValue("black", "white");

  return (
    <Router>
      <Header />
      <Flex align="center" justify="center" direction="column" w="100%" >
        <Flex fontSize="2xl" mt={8} >
          <HStack gap="4">
            <Link to="/">
              <Text _hover={{ color: "blue.500", cursor: "pointer" }}>
                Corrigir némero
              </Text>
            </Link>
            <Divider
              borderColor={borderColor}
              orientation="vertical"
              height={7}
              borderWidth={1}
            />
            <Link to="/digit-correction">
              <Text _hover={{ color: "blue.500", cursor: "pointer" }}>
                Corrigir dígito
              </Text>
            </Link>
          </HStack>
        </Flex>
        <Routes>
          <Route path="/" element={<NumberCorrection />} />
        </Routes>
        <Routes>
          <Route path="/digit-correction/" element={<DigitCorrection />} />
        </Routes>
      </Flex>
      <Footer />
    </Router>
  );
}

export default App;
