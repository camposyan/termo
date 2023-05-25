import { Flex } from "@chakra-ui/react";
import { Button } from "./Button";
import { BackspaceButton } from "./BackspaceButton";
import { EnterButton } from "./EnterButton";


export function Keyboard() {
     return (
          <>
               <Flex
                    justify={'center'}
                    align={'center'}
                    gap={'0.5rem'}
                    marginBottom={'0.5rem'}
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
               </Flex>
               <Flex
                    justify={'center'}
                    align={'center'}
                    gap={'0.5rem'}
                    marginBottom={'0.5rem'}
               >
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
                         {/* <BackspaceButton /> */}
                    </Flex>
               </Flex>
               <Flex
                    justify={'center'}
                    align={'center'}
                    gap={'0.5rem'}
                    marginBottom={'1rem'}
               >
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
                         {/* <EnterButton /> */}
                    </Flex>
               </Flex>
          </>
     )
}
