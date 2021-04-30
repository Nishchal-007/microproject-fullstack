import React, { useState } from "react";
import {
    Box,
    Input,
    Button,
    Stack,
    FormLabel,
    Textarea,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { useHistory, withRouter } from "react-router-dom";

import axios from "axios";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = React.useRef();

    const [hname, setHname] = useState("");
    const [hadd, setHadd] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        var HID = "H" + Math.floor(Math.random() * 100);
        axios
            .post("/hospitals/add", {
                hId: HID,
                name: hname,
                address: hadd,
                contactNo: phone,
            })
            .then((snapshot) => {
                console.log("Data Added", snapshot);
                onClose();
                history.push("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Box
                marginTop={10}
                as="button"
                borderRadius="md"
                bg="tomato"
                color="white"
                px={4}
                h={8}
                onClick={onOpen}
            >
                Add Hospital
            </Box>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size={"md"}
                initialFocusRef={firstField}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton color="white" />
                        <DrawerHeader borderBottomWidth="1px" color="white">
                            Add New Hospital
                        </DrawerHeader>

                        <DrawerBody>
                            <form id="my-form" onSubmit={handleSubmit}>
                                <Stack spacing="24px">
                                    <Box>
                                        <FormLabel htmlFor="username">
                                            Hospital Name
                                        </FormLabel>
                                        <Input
                                            ref={firstField}
                                            id="username"
                                            color="white"
                                            placeholder="E.x. Apollo Hospitals"
                                            onChange={(e) =>
                                                setHname(e.target.value)
                                            }
                                        />
                                    </Box>

                                    <Box>
                                        <FormLabel htmlFor="desc">
                                            Address
                                        </FormLabel>
                                        <Textarea
                                            id="desc"
                                            color="white"
                                            onChange={(e) =>
                                                setHadd(e.target.value)
                                            }
                                        />
                                    </Box>

                                    <Box>
                                        <FormLabel htmlFor="username">
                                            Contact
                                        </FormLabel>
                                        <Input
                                            type="text"
                                            id="contact"
                                            color="white"
                                            placeholder="E.x. 5678912340"
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                    </Box>
                                </Stack>
                            </form>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button
                                variant="outline"
                                mr={3}
                                onClick={onClose}
                                color="white"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                colorScheme="blue"
                                form="my-form"
                            >
                                Submit
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}

export default withRouter(DrawerExample);
