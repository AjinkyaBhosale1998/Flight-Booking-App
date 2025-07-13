import React from 'react'

import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.600" color="white" py={4} mt={10}>
      <Flex justify="center" align="center">
        <Text fontSize="sm">© {new Date().getFullYear()} Flight Explorer App. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
