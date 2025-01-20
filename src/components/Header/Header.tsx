import ToddleColorMode from "../ToddleColorMode/ToddleColorMode";

import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

function Header() {
  const fontColor = useColorModeValue("white", "white");
  const bgColor = useColorModeValue("blue.600", "blue.900");

  return (
    <Flex
      align="center"
      justify="center"
      as="header"
      width="100%"
      height="100%"
      bg={bgColor}
      py={6}
      boxShadow="xl"
    >
      <Flex align="center" px={6}>
        <Text fontSize="3xl" fontWeight="bold" color={fontColor}>
          Corretor de Numeração Única
        </Text>
        <Box position="fixed" top={7} right={5}>
          <ToddleColorMode />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Header;
