import { Button } from "@chakra-ui/react";
import { colors } from "../colors";

interface EnterButtonProps {
     
}

export function EnterButton({ }: EnterButtonProps) {
     return (
          <Button
               position={'relative'}
               width={'10rem'}
               height={'3rem'}
               marginLeft={'3rem'}
               backgroundColor={colors.buttonBackground}
               color={colors.white}
               fontSize={'1.3rem'}
               fontWeight={'bold'}
               _hover={{ backgroundColor: colors.buttonBackground }}
          >
               ENTER
          </Button>
     )
}
