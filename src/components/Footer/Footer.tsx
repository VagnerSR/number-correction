import { Box, Flex, Link, Text } from "@chakra-ui/react";

function Footer({ ...props }) {
  return (
    <Box mt={10} as="footer" width="100%" py={4} {...props}>
      <Flex justify="center" align="center" direction="column" gap={5}>
        <Text>
          Para saber mais sobre a numeração única, consulte{" "}
          <Link
            href="https://www.cnj.jus.br/programas-e-acoes/numeracao-unica/perguntas-frequentes/"
            color="blue.400"
          >
            as perguntas frequentes
          </Link>{" "}
          na página do CNJ.
        </Text>
        <Text>
          &copy; 2025 Corretor de Numeração Única.{" "}
          <Link
            href="https://github.com/VagnerSR/number-correction"
            color="blue.400"
          >
            Repositório no GitHub
          </Link>
          .
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
