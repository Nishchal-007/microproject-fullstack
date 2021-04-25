import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Heading,
    Text,
    SimpleGrid,
    Center,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import axios from "axios";

function Feature({ title, desc, ...rest }) {
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
                {title}
            </Heading>
            <Text mt={4} color="white">
                {desc}
            </Text>

            <DeleteIcon
                w={6}
                h={6}
                color="red.500"
                style={{ cursor: "pointer" }}
                marginTop={8}
                onClick={() => alert("Delete")}
            />
        </Box>
    );
}

const Hospitals = () => {
    const [lt, setLt] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async function getData() {
        //     setLoading(true);
        //     axios
        //         .get("/hospitals")
        //         .then((snap) => {
        //             // console.log(snap.data);
        //             setLt(snap.data);
        //         })
        //         .catch((err) => {
        //             console.log("Error:", err);
        //         });
        // }
        // getData();
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
                        <Box
                            marginTop={10}
                            as="button"
                            borderRadius="md"
                            bg="tomato"
                            color="white"
                            px={4}
                            h={8}
                        >
                            Add Hospital
                        </Box>
                    </Container>
                    <SimpleGrid
                        minChildWidth="450px"
                        spacing="40px"
                        padding={25}
                    >
                        {lt.map((data) => (
                            <Feature
                                key={data._id}
                                title={data.name}
                                desc={data.address}
                            />
                        ))}
                    </SimpleGrid>
                </>
            )}
        </div>
    );
};

export default Hospitals;

{
    /* <Feature
    title="Save Money"
    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
/>
<Feature
    title="Save Money"
    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
/>
<Feature
    title="Save Money"
    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
/>
<Feature
    title="Save Money"
    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
/>
<Feature
    title="Save Money"
    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
/>
<Feature
    title="Save Money"
    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
/>
<Feature
    title="Save Money"
    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
/> */
}
