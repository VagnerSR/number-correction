import ToddleColorMode from "../ToddleColorMode/ToddleColorMode";

import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";

function Header() {
  const fontColor = useColorModeValue("white", "white");

  return (
    <Flex
      align="center"
      justify="center"
      as="header"
      width="100%"
      height="100%"
      bg="blue.600"
      py={6}
      boxShadow="xl"
    >
      <Flex align="center" px={6}>
        <Text fontSize="3xl" fontWeight="bold" color={fontColor}>
          Corretor de numeração única
        </Text>
        <Box position="fixed" top={7} right={5}>
          <ToddleColorMode />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Header;
