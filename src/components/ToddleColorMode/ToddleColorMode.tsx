import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";

export default function ToddleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={() => toggleColorMode()}
    >
      {colorMode === "dark" ? (
        <Flex gap={2} align={"center"}>
          <Text>Light Mode</Text>
          <SunIcon color="orange.200" />
        </Flex>
      ) : (
        <Flex gap={2} align={"center"}>
          <Text>Dark Mode</Text>
          <MoonIcon color="blue.700" />
        </Flex>
      )}
    </Button>
  );
}
