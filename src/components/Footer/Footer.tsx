import { Box, Center, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box mt={10} as="footer" width="100%" py={4}>
      <Center>
        <Text>&copy; 2025 My App. All Rights Reserved.</Text>
      </Center>
    </Box>
  );
}

export default Footer;
