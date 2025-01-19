import { Flex } from "@chakra-ui/react";
import CorrectBox from "../CorrectBox/CorrectBox";
import { useState } from "react";
import { cleanNumber } from "../../utils/cleanNumber";
import { digitCorrection } from "../../utils/digitCorrection";

function DigitCorrection() {
  const [number, setNumber] = useState("");
  const [result, setResultNumber] = useState("");

  const onCorrectDigit = (number: string) => {
    const { resultArray, focusStop } = cleanNumber(number);
    const result = digitCorrection(resultArray, focusStop);
    setResultNumber(result);
  };

  return (
    <Flex w="100%" align="center" justify="center">
      <CorrectBox
        number={number}
        setNumber={setNumber}
        text={"Corrigir os dígitos verificadores da integridade do número"}
        onClick={() => onCorrectDigit(number)}
        result={result}
      />
    </Flex>
  );
}

export default DigitCorrection;
