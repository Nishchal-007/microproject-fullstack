import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    SimpleGrid,
    Input,
    Button,
    Center,
    Stack,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
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
import { DeleteIcon } from "@chakra-ui/icons";

import axios from "axios";

const Hospitals = () => {
    const [lt, setLt] = useState(null);
    const [loading, setLoading] = useState(false);

    const [hname, setHname] = useState(null);
    const [hadd, setHadd] = useState(null);
    const [phone, setPhone] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const hosp = { hname, hadd, phone };
        setLoading(true);
    };

    function DrawerExample() {
        const { isOpen, onOpen, onClose } = useDisclosure();
        const firstField = React.useRef();

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

    function Feature({ name, address, location, contact, id, ...rest }) {
        return (
            <Box
                p={5}
                shadow="md"
                borderWidth="1px"
                flex="1"
                borderRadius="md"
                {...rest}
            >
                <Heading fontSize="xl" color="white">
                    {name}
                </Heading>
                <Text mt={4} color="white">
                    Address: {address}
                </Text>
                <Text mt={4} color="white">
                    Co-ordinates: {location}
                </Text>
                <Text mt={4} color="white">
                    Contact: {contact}
                </Text>

                <DeleteIcon
                    w={6}
                    h={6}
                    color="red.500"
                    style={{ cursor: "pointer" }}
                    marginTop={8}
                    onClick={() => handleDelete(id)}
                />
            </Box>
        );
    }

    const handleDelete = (id) => {
        axios
            .delete(`/hospitals/delete/${id}`)
            .then((snap) => {
                console.log("Deleted: ", snap);
                setLt(lt.filter((x) => x.hId !== id));
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        setLoading(true);
        fetch("/hospitals")
            .then((response) => response.json())
            .then((data) => setLt(data));
        setLoading(false);
    }, []);

    if (!lt || lt.length === 0) {
        return (
            <Container centerContent padding={10}>
                <Heading padding={10} color="white">
                    Loading . . . .
                </Heading>
            </Container>
        );
    }
    return (
        <div>
            {loading ? (
                <Container centerContent padding={10}>
                    <Heading padding={10} color="white">
                        Loading . . . .
                    </Heading>
                </Container>
            ) : (
                <>
                    <Container centerContent padding={10}>
                        <Heading color="white">Hospitals Available</Heading>
                        <DrawerExample />
                    </Container>
                    <SimpleGrid
                        minChildWidth="450px"
                        spacing="40px"
                        padding={25}
                    >
                        {lt.map((data) => (
                            <Feature
                                key={data._id}
                                name={data.name}
                                address={data.address}
                                location={data.location}
                                contact={data.contactNo}
                                id={data.hId}
                            />
                        ))}
                    </SimpleGrid>
                </>
            )}
        </div>
    );
};

export default Hospitals;
