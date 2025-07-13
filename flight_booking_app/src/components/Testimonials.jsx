import React from "react";
import Slider from "react-slick";
import {
  Box,
  Text,
  Heading,
  Avatar,
  VStack,
  Center
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Ajay Mehra",
    feedback:
      "Amazing booking experience! The UI was smooth, and I got great deals.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sneha Kapoor",
    feedback:
      "Booking a flight has never been easier. Loved the simplicity!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul Sharma",
    feedback:
      "The flight filters saved so much time. Highly recommend!",
    image:
      "https://randomuser.me/api/portraits/men/76.jpg"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: "ease-in-out"
  };

  return (
    <Box py={10} bg="gray.50">
      <Heading textAlign="center" mb={6} color="blue.600">
        ❤️ What Our Users Say
      </Heading>
      <Center>
        <Box maxW="500px" w="full">
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <Box
                key={index}
                p={6}
                bg="white"
                borderRadius="md"
                boxShadow="md"
                textAlign="center"
              >
                <Avatar src={t.image} size="xl" mb={4} mx="auto" />
                <Text fontSize="lg" fontWeight="bold" color="gray.700">
                  {t.name}
                </Text>
                <Text fontSize="sm" color="gray.500" mt={2}>
                  "{t.feedback}"
                </Text>
              </Box>
            ))}
          </Slider>
        </Box>
      </Center>
    </Box>
  );
};

export default Testimonials;
