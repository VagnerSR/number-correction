import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CorrectBox from "../CorrectBox/CorrectBox";
import { cleanNumber } from "../../utils/cleanNumber";
import { numberCorrection } from "../../utils/numberCorrection";

function NumberCorrection() {
  const [number, setNumber] = useState("");
  const [result, setResultNumber] = useState("");

  const onCorrectNumber = (number: string) => {
    const { resultArray, target, focusIndex, focusStop } = cleanNumber(number);

    const result: string = numberCorrection(
      resultArray,
      target,
      focusIndex,
      focusStop
    );
    setResultNumber(result);
  };

  return (
    <Flex w="100%" align="center" justify="center" >
      <CorrectBox
        number={number}
        setNumber={setNumber}
        text={"Corrigir o número de ordem de autuação do processo"}
        onClick={() => onCorrectNumber(number)}
        result={result}
      />
    </Flex>
  );
}

export default NumberCorrection;
