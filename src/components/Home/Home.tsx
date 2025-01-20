import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CorrectBox from "../CorrectBox/CorrectBox";
import { cleanNumber } from "../../utils/cleanNumber";
import { numberCorrection } from "../../utils/numberCorrection";
import { digitCorrection } from "../../utils/digitCorrection";

function Home() {
  const [numberA, setNumberA] = useState("");
  const [resultA, setResultNumberA] = useState("");
  const [numberB, setNumberB] = useState("");
  const [resultB, setResultNumberB] = useState("");

  const onCorrectNumber = (number: string) => {
    const { resultArray, target, focusIndex, focusStop } = cleanNumber(number);

    const result: string = numberCorrection(
      resultArray,
      target,
      focusIndex,
      focusStop
    );
    setResultNumberA(result);
  };

  const onCorrectDigit = (number: string) => {
    const { resultArray, focusStop } = cleanNumber(number);
    const result = digitCorrection(resultArray, focusStop);
    setResultNumberB(result);
  };

  return (
    <Flex w="100%" align="center" justify="center" direction="column">
      <CorrectBox
        number={numberA}
        setNumber={setNumberA}
        text={"Corrigir o número de ordem de autuação do processo"}
        onClick={() => onCorrectNumber(numberA)}
        result={resultA}
      />

      <CorrectBox
        number={numberB}
        setNumber={setNumberB}
        text={"Corrigir os dígitos verificadores da integridade do número"}
        onClick={() => onCorrectDigit(numberB)}
        result={resultB}
      />
    </Flex>
  );
}

export default Home;
