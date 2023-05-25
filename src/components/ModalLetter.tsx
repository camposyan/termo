import { Flex } from "@chakra-ui/react";
import { colors } from "../colors";

interface ModalLetterProps {
     text: string
     color?: string,
     backgroundColor?: string,
     isWrong?: boolean
}

export function ModalLetter({ color, backgroundColor, text, isWrong }: ModalLetterProps) {
     return (
          <Flex
               marginX={'0.5rem'}
               backgroundColor={isWrong ? colors.wrongLetterBackground : backgroundColor}
               color={isWrong ? colors.wrongLetterColor : color}
               justify={'center'}
               align={'center'}
               width={'2.5rem'}
               height={'2.5rem'}
               borderRadius={'5px'}
               fontWeight={'bold'}
          >
               {text}
          </Flex>
     )
}
