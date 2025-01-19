import { Box, Button, Flex, Input, Text, useColorModeValue } from "@chakra-ui/react";

type Props = {
  number: string;
  setNumber: (number: string) => void;
  text: string;
  onClick: () => void;
  result: string;
};

function CorrectBox({ number, setNumber, text, onClick, result }: Props) {
const bgColor = useColorModeValue("gray.50", "gray.400");
  return (
    <Box mt={10} bg={bgColor} w="60%" pl={10} borderRadius="md" >
      <Flex direction="column" align="right">
        <Text mt={4} fontSize="xl">
          {text}
        </Text>
        <Flex mt={2} gap={2} pt={5}>
          <Input
            placeholder="Digite o número único"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            w={500}
          />
          <Button onClick={onClick}>Corrigir</Button>
        </Flex>

        <Flex align="right">
        <Text mt={4} fontSize="xl" py={5}>
          Número corrigido: {result}
        </Text>
        </Flex>

      </Flex>
    </Box>
  );
}

export default CorrectBox;
