import React from 'react'

import { Box, SimpleGrid, Text, Heading, VStack, Icon } from "@chakra-ui/react";
// import { FaPlaneDeparture } from "react-icons/fa";

const flightOffers = [
  {
    city: "Chennai Flights",
    via: ["Delhi", "Mumbai", "Coimbatore", "Madurai"]
  },
  {
    city: "Goa Flights",
    via: ["Delhi", "Mumbai", "Bangalore", "Ahmedabad"]
  },
  {
    city: "Mumbai Flights",
    via: ["Delhi", "Bangalore", "Chennai", "Ahmedabad"]
  },
  {
    city: "Hyderabad Flights",
    via: ["Chennai", "Mumbai", "Bangalore", "Delhi"]
  },
  {
    city: "Delhi Flights",
    via: ["Mumbai", "Pune", "Bangalore", "Chennai"]
  },
  {
    city: "Pune Flights",
    via: ["Delhi", "Bangalore", "Chennai", "Ahmedabad"]
  },
  {
    city: "Kolkata Flights",
    via: ["Delhi", "Mumbai", "Bangalore", "Pune"]
  },
  {
    city: "Bangalore Flights",
    via: ["Delhi", "Pune", "Mumbai", "Kolkata"]
  },
  {
    city: "Jaipur Flights",
    via: ["Mumbai", "Delhi", "Pune", "Bangalore"]
  }
];

const FlightOffers = () => {
  return (
    <Box p={6} bg="gray.50">
      <Heading mb={6} textAlign="center" color="blue.600">
        ✈️ Popular Flight Offers
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {flightOffers.map((offer, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            boxShadow="md"
            _hover={{ boxShadow: "lg", transform: "scale(1.03)", transition: "0.2s" }}
          >
            <VStack spacing={2} align="start">
                {/* <FontAwesomeIcon icon={faPlaneDeparture} /> */}
              {/* <Icon as={FaPlaneDeparture} boxSize={6} color="blue.500" /> */}
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                {offer.city}
              </Text>
              <Text fontSize="sm" color="gray.500">
                Via - {offer.via.join(", ")}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FlightOffers;
