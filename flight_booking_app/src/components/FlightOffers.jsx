import React from 'react'

import { Box, SimpleGrid, Text, Heading, VStack, HStack, Image } from "@chakra-ui/react";
// import { FaPlaneDeparture } from "react-icons/fa";

const flightOffers = [
  {
    city: "Chennai Flights",
    via: ["Delhi", "Mumbai", "Coimbatore", "Madurai"],
    image: "/images/chennai.jpg"
  },
  {
    city: "Goa Flights",
    via: ["Delhi", "Mumbai", "Bangalore", "Ahmedabad"],
    image: "/images/goa.jpg"
  },
  {
    city: "Mumbai Flights",
    via: ["Delhi", "Bangalore", "Chennai", "Ahmedabad"],
    image: "/images/mumbai.jpg"
  },
  {
    city: "Hyderabad Flights",
    via: ["Chennai", "Mumbai", "Bangalore", "Delhi"],
    image: "/images/hyd.jpg"
  },
  {
    city: "Delhi Flights",
    via: ["Mumbai", "Pune", "Bangalore", "Chennai"],
    image: "/images/delhi.jpg"
  },
  {
    city: "Pune Flights",
    via: ["Delhi", "Bangalore", "Chennai", "Ahmedabad"],
    image: "/images/pune.jpg"
  },
  {
    city: "Kolkata Flights",
    via: ["Delhi", "Mumbai", "Bangalore", "Pune"],
    image: "/images/kolkatta.jpg"
  },
  {
    city: "Bangalore Flights",
    via: ["Delhi", "Pune", "Mumbai", "Kolkata"],
    image: "/images/banglore.jpg"
  },
  {
    city: "Jaipur Flights",
    via: ["Mumbai", "Delhi", "Pune", "Bangalore"],
    image: "/images/jaipur.jpg"
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
            <HStack spacing={4} align="center">
              {/* Left Side Image */}
              <Image
                src={offer.image}
                alt={offer.city}
                boxSize="70px"
                objectFit="cover"
                borderRadius="md"
              />
              
              {/* Right Side Text */}
              <VStack spacing={1} align="start">
                <Text fontSize="md" fontWeight="bold" color="gray.700">
                  {offer.city}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Via - {offer.via.join(", ")}
                </Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FlightOffers;
