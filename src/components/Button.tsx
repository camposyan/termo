import { Button as Btn } from "@chakra-ui/react";
import { colors } from "../colors";

interface ButtonProps {
     text: string | JSX.Element
     isBackspace?: boolean,
     isEnter?: boolean
}

export function Button({ text, isEnter, isBackspace }: ButtonProps) {
     return (
          <Btn
               width={isEnter ? '10rem' : '3.85rem'}
               height={'3rem'}
               marginLeft={isEnter ? '5rem' : (isBackspace ? '3rem' : '0')}
               backgroundColor={colors.buttonBackground}
               color={colors.white}
               fontSize={'1.3rem'}
               fontWeight={'bold'}
               _hover={{ backgroundColor: colors.buttonBackground }}
          >
               {text}
          </Btn>
     )
}
