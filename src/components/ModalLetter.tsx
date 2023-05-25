import { Flex } from "@chakra-ui/react";
import { colors } from "../colors";

interface ModalLetterProps {
     text: string
     color?: string,
     backgroundColor?: string,
     isWrong?: boolean
     size?: 'small' | 'large'
     hasBorder?: boolean
}

export function ModalLetter({ color, backgroundColor, text, isWrong, size, hasBorder }: ModalLetterProps) {
     return (
          <Flex
               marginX={'0.5rem'}
               backgroundColor={isWrong ? colors.wrongLetterBackground : backgroundColor}
               color={isWrong ? colors.wrongLetterColor : color}
               justify={'center'}
               align={'center'}
               width={size === 'large' ? '3.5rem' : '2.5rem'}
               height={size === 'large' ? '3.5rem' : '2.5rem'}
               borderRadius={'5px'}
               fontWeight={'bold'}
               border={hasBorder ? `3px solid ${colors.background}` : ''}
          >
               {text}
          </Flex>
     )
}
