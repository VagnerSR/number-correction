import {
  Alert,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type Props = {
  number: string;
  setNumber: (number: string) => void;
  text: string;
  onClick: () => void;
  result: string;
};

function CorrectBox({ number, setNumber, text, onClick, result }: Props) {
  const bgColor = useColorModeValue("gray.50", "gray.700");
  return (
    <Box mt={10} bg={bgColor} w="60%" px={10} borderRadius="md">
      <Flex direction="column" align="right">
        <Text mt={4} fontSize="2xl">
          {text}
        </Text>
        <Divider borderWidth={1} />
        <Flex mt={2} gap={2} pt={5}>
          <Input
            placeholder="Digite o número único"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            w={500}
            fontSize="xl"
          />
          <Button
            onClick={onClick}
            bg="blue.500"
            color="white"
            _hover={{
              bg: "blue.600",
            }}
          >
            Corrigir
          </Button>
        </Flex>

        <Flex align="right">
          <Alert
            status="info"
            my={4}
            fontSize="xl"
            fontWeight="semibold"
            py={4}
            borderRadius="md"
          >
            Número corrigido: {result}
          </Alert>
          <Text></Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CorrectBox;
