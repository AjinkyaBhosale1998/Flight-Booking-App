import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  VStack,
  Input,
  Button,
  useToast
} from "@chakra-ui/react";
import flightsData from "../data/flights";

const BookingPage = () => {
    const { flightId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  // Get the selected flight details
  const flight = flightsData.find((f) => f.id === flightId);

  const [passenger, setPassenger] = React.useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "");
      setPassenger({ ...passenger, [name]: numericValue });
    } else {
      setPassenger({ ...passenger, [name]: value });
    }
  };

  const handleBooking = () => {
    if (!passenger.name || !passenger.email || !passenger.mobile) {
      toast({
        title: "Please fill all details.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right"
      });
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const bookingId = `BK${Math.floor(Math.random() * 10000)}`;
    const newBooking = {
      bookingId,
      flight,
      passenger
    };
    localStorage.setItem("bookings", JSON.stringify([...bookings, newBooking]));

    toast({
      title: "Booking Successful 🎉",
      description: `Your booking ID: ${bookingId}`,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top-right"
    });

    navigate("/"); // Go back to home
  };

  if (!flight) {
    return <Text>❌ Flight not found.</Text>;
  }

  return (
    <Box p={6} maxW="600px" mx="auto">
      <Heading mb={4}>Booking Details</Heading>
      <Box borderWidth="1px" p={4} borderRadius="md" mb={4}>
        <Text><b>{flight.airline}</b>: {flight.from} → {flight.to}</Text>
        <Text>Departure: {new Date(flight.departure).toLocaleString()}</Text>
        <Text>Price: ₹{flight.price}</Text>
      </Box>

      <Heading size="md" mb={2}>Passenger Information</Heading>
      <VStack spacing={3} align="stretch">
        <Input
          placeholder="Name"
          name="name"
          value={passenger.name}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Email"
          name="email"
          value={passenger.email}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Mobile"
          name="mobile"
          value={passenger.mobile}
          onChange={handleInputChange}
        />
        <Button colorScheme="blue" onClick={handleBooking}>Confirm Booking</Button>
      </VStack>
    </Box>
  );
}

export default BookingPage