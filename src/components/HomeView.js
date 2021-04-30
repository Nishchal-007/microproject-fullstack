import React from "react";
import { Button, SimpleGrid, Box, Text } from "@chakra-ui/react";
import HospitalImage from "./hospitalPic.png";
import { useHistory } from "react-router";

const HomeView = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/hospitals");
    };

    return (
        <div style={{ marginTop: "50px", padding: "50px" }}>
            <SimpleGrid columns={2} spacing={10}>
                <Box>
                    <div>
                        <Text fontSize="5xl" color="white" as="kbd">
                            Hospital Inventory Management
                        </Text>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <Text as="samp" color="white">
                            An automated inventory management system is a must
                            for a busy hospital to streamline the hospital
                            supply chain. These automated inventory management
                            systems include technologies for tracking and
                            tracing inventory and devices used each day in a
                            healthcare setting. Often, they utilize barcodes and
                            RFID tags with unique identification numbers for
                            each inventory item to allow for accurate tracking
                            and management. Nurses and doctors can scan the
                            barcodes with mobile scanners or devices and trust
                            the data will be stored in the system; at the same
                            time, the automatic data capture ensures accurate
                            reporting for charting and inventory purposes.
                        </Text>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <Button
                            type="submit"
                            colorScheme="cyan"
                            size="lg"
                            color="white"
                            onClick={() => handleClick()}
                        >
                            Check it out
                        </Button>
                    </div>
                </Box>
                <img
                    alt="img"
                    src={HospitalImage}
                    style={{
                        borderRadius: "25px",
                        boxShadow: "10px 10px 5px black",
                    }}
                />
            </SimpleGrid>
        </div>
    );
};

export default HomeView;
