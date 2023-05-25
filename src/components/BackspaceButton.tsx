import { Button } from "@chakra-ui/react";
import { colors } from "../colors";
import { Backspace } from "@phosphor-icons/react";

interface BackspaceButtonProps {
     
}

export function BackspaceButton({ }: BackspaceButtonProps) {
     return (
          <Button
               position={'relative'}
               width={'3.85rem'}
               height={'3rem'}
               marginLeft={'3rem'}
               backgroundColor={colors.buttonBackground}
               color={colors.white}
               fontSize={'1.3rem'}
               fontWeight={'bold'}
               _hover={{ backgroundColor: colors.buttonBackground }}
          >
               <Backspace size={32} />
          </Button>
     )
}
