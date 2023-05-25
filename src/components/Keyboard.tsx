import { Flex } from "@chakra-ui/react";
import { Button } from "./Button";
import { Backspace } from "@phosphor-icons/react";

export function Keyboard() {
     return (
          <Flex
               justify={'center'}
               align={'center'}
               height={'30%'}
               // backgroundColor={'red'}
               paddingY={'1rem'}
               flexDirection={'column'}
               gap={'0.5rem'}
          >
               <Flex
                    gap={'0.5rem'}
               >
                    <Button text={"Q"} />
                    <Button text={"W"} />
                    <Button text={"E"} />
                    <Button text={"R"} />
                    <Button text={"T"} />
                    <Button text={"Y"} />
                    <Button text={"U"} />
                    <Button text={"I"} />
                    <Button text={"O"} />
                    <Button text={"P"} />
               </Flex>
               <Flex
                    gap={'0.5rem'}
               >
                    <Button text={"A"} />
                    <Button text={"S"} />
                    <Button text={"D"} />
                    <Button text={"F"} />
                    <Button text={"G"} />
                    <Button text={"H"} />
                    <Button text={"J"} />
                    <Button text={"K"} />
                    <Button text={"L"} />
                    {/* <Button text={<Backspace size={32} />} /> */}
               </Flex>
               <Flex
                    gap={'0.5rem'}
               >
                    <Button text={"Z"} />
                    <Button text={"X"} />
                    <Button text={"C"} />
                    <Button text={"V"} />
                    <Button text={"B"} />
                    <Button text={"N"} />
                    <Button text={"M"} />
                    {/* <Button
                         text={"ENTER"}
                         isEnter
                    /> */}
               </Flex>
          </Flex>
     )
}
