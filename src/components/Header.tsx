import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../colors";
import { HeaderButton } from "./HeaderButton";
import { CaretUp, ChartBar, Gear, Question } from "@phosphor-icons/react";

export function Header() {
     return (
          <Flex
               width={'55%'}
               height={'3rem'}
               // backgroundColor={'red'}
               justify={'space-between'}
               align={'center'}
          >
               <Flex
                    gap={'0.3rem'}
               >
                    <HeaderButton
                         icon={<CaretUp size={20} />}
                         action={function (): void {
                              throw new Error("Function not implemented.");
                         }}
                    />
                    <HeaderButton
                         icon={<Question size={20} />}
                         action={function (): void {
                              throw new Error("Function not implemented.");
                         }}
                    />
               </Flex>
               <Text
                    fontSize='2xl'
                    fontWeight={'bold'}
                    color={colors.white}
               >
                    TERMO
               </Text>
               <Flex
                    gap={'0.3rem'}
               >
                    <HeaderButton icon={<ChartBar size={20} weight="fill" />} action={function (): void {
                         throw new Error("Function not implemented.");
                    }} />
                    <HeaderButton icon={<Gear size={20} weight="fill" />} action={function (): void {
                         throw new Error("Function not implemented.");
                    }} />
               </Flex>
          </Flex>
     )
}
