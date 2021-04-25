import React from "react";
import { Container, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

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
        </Box>
    );
}

const Hospitals = () => {
    return (
        <div>
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
            <SimpleGrid minChildWidth="450px" spacing="40px" padding={25}>
                <Feature
                    title="Plan Money"
                    desc="The future can be even brighter but a goal without a plan is just a wish"
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
                />
                <Feature
                    title="Save Money"
                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."
                />
            </SimpleGrid>
        </div>
    );
};

export default Hospitals;
