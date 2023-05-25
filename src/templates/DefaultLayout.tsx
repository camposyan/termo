import {
     Box, Flex, Modal, ModalBody, ModalContent, ModalOverlay
} from "@chakra-ui/react";
import { colors } from "../colors";
import { ModalLetter } from "../components/ModalLetter";
import { useState } from "react";
import { Keyboard } from "../components/Keyboard";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
     const [isModalOpen, setIsModalOpen] = useState(true);
     const onClose = () => {setIsModalOpen(false);}

     return (
          <>
               <Flex
                    width={'100vw'}
                    height={'100vh'}
                    backgroundColor={colors.background}
                    flexDirection={'column'}
               >
                    <Flex
                         flex={1}
                         flexDirection={'column'}
                         align={'center'}
                    >
                         <Header />
                         <Outlet />
                    </Flex>
                    <Keyboard />
               </Flex>

               <Modal
                    isOpen={isModalOpen}
                    onClose={onClose}
                    isCentered
                    size={'3xl'}
                    scrollBehavior={"inside"}
               >
                    <ModalOverlay />
                    <ModalContent backgroundColor={colors.modalBackground}>
                         <ModalBody
                              color={colors.modalTextColor}
                              fontSize={'1.5rem'}
                              paddingTop={'3rem'}
                              paddingX={'2.25rem'}
                         >
                              <Box marginBottom={'1rem'}>
                                   Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as peças mostram quão
                                   perto você está da solução.
                              </Box>
                              <Flex
                                   marginY={'2rem'}
                              >
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={colors.correctLetterBackground}
                                        size={"large"}
                                        text={"T"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"U"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"R"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"M"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"A"}
                                   />
                              </Flex>
                              <Flex
                                   marginBottom={'1rem'}
                                   align={'end'}
                              >
                                   A letra
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={colors.correctLetterBackground}
                                        text={"T"}
                                   />
                                   faz parte da palavra e está na posição correta.
                              </Flex>
                              <Flex
                                   marginY={'2rem'}
                              >
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"V"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"I"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={colors.wrongPositionLetterBackground}
                                        size={"large"}
                                        text={"O"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"L"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"A"}
                                   />
                              </Flex>
                              <Flex
                                   marginBottom={'1rem'}
                                   align={'end'}
                              >
                                   A letra
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={colors.wrongPositionLetterBackground}
                                        text={"O"}
                                   />
                                   faz parte da palavra mas em outra posição.
                              </Flex>
                              <Flex
                                   marginY={'2rem'}
                              >
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"P"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"U"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"L"}
                                   />
                                   <ModalLetter
                                        isWrong
                                        size={"large"}
                                        text={"G"}
                                   />
                                   <ModalLetter
                                        color={colors.white}
                                        backgroundColor={'inherit'}
                                        hasBorder
                                        size={"large"}
                                        text={"A"}
                                   />
                              </Flex>
                              <Flex
                                   marginBottom={'1rem'}
                                   align={'end'}
                              >
                                   A letra
                                   <ModalLetter
                                        isWrong
                                        text={"G"}
                                   />
                                   não faz parte da palavra.
                              </Flex>
                              <Box marginBottom={'1rem'}>
                                   Os acentos são preenchidos automaticamente, e não são considerados nas dicas.
                              </Box>
                              <Box marginBottom={'3rem'}>
                                   As palavras podem possuir letras repetidas.
                              </Box>
                              <Box marginBottom={'3rem'}>
                                   Uma palavra nova aparece a cada dia.
                              </Box>
                         </ModalBody>
                    </ModalContent>
               </Modal>
          </>
     )
}
