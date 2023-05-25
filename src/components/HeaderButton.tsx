import { Button } from "@chakra-ui/react";
import { colors } from "../colors";

interface HeaderButtonProps {
     icon: JSX.Element,
     action: () => void
}

export function HeaderButton({ icon, action }: HeaderButtonProps) {
     return (
          <Button
               onClick={action}
               padding={0}
               backgroundColor={'inherit'}
               border={`2px solid ${colors.headerButtonColor}`}
               color={colors.headerButtonColor}
               _hover={{ backgroundColor: 'inherit' }}
          >
               {icon}
          </Button>
     )
}
