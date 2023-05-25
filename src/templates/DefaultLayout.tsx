import {
     Box,
     Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
     ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import { colors } from "../colors";
import { ModalLetter } from "../components/ModalLetter";

export function DefaultLayout() {
     const { isOpen, onOpen, onClose } = useDisclosure()

     return (
          <>
               <Flex
                    width={'100vw'}
                    height={'100vh'}
                    backgroundColor={colors.background}
               >

               </Flex>

               <Modal
                    isOpen={true}
                    onClose={onClose}
                    isCentered
                    size={'3xl'}
                    scrollBehavior={"inside"}
               >
                    <ModalOverlay />
                    <ModalContent backgroundColor={colors.modalBackground}>
                         {/* <ModalHeader>Modal Title</ModalHeader> */}
                         {/* <ModalCloseButton /> */}
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

                         {/* <ModalFooter>
                              <Button colorScheme='blue' mr={3} onClick={onClose}>
                                   Close
                              </Button>
                              <Button variant='ghost'>Secondary Action</Button>
                         </ModalFooter> */}
                    </ModalContent>
               </Modal>
          </>
     )
}
