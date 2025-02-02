import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CorrectBox from "../CorrectBox/CorrectBox";
import { cleanNumber } from "../../utils/cleanNumber";
import { numberCorrection } from "../../utils/numberCorrection";
import { digitCorrection } from "../../utils/digitCorrection";
import { yearCorrection } from "../../utils/yearCorrection";

function Home() {
  const [numberA, setNumberA] = useState("");
  const [resultA, setResultNumberA] = useState("");
  const [numberB, setNumberB] = useState("");
  const [resultB, setResultNumberB] = useState("");
  const [numberC, setNumberC] = useState("");
  const [resultC, setResultNumberC] = useState("");

  const onCorrectNumber = (number: string) => {
    const { resultArray, focusIndex, stopIndex } = cleanNumber(number);

    const result: string = numberCorrection(resultArray, focusIndex, stopIndex);

    setResultNumberA(result);
  };

  const onCorrectDigit = (number: string) => {
    const { resultArray, stopIndex } = cleanNumber(number);
    const result = digitCorrection(resultArray, stopIndex);
    setResultNumberB(result);
  };

  const onCorrectYear = (number: string) => {
    const { resultArray, target,  stopIndex } = cleanNumber(number);
    const result = yearCorrection(resultArray, target, stopIndex);
    setResultNumberC(result);
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

      <CorrectBox
        number={numberC}
        setNumber={setNumberC}
        text={"Corrigir o ano do número"}
        onClick={() => onCorrectYear(numberC)}
        result={resultC}
      />
    </Flex>
  );
}

export default Home;
