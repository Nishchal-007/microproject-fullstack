import React, { useState, useEffect } from "react";
import { Container, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import DrawerExample from "./DrawerExample";

import axios from "axios";

const Hospitals = () => {
    const [lt, setLt] = useState(null);
    const [loading, setLoading] = useState(false);

    function Feature({ name, address, contact, id, ...rest }) {
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
