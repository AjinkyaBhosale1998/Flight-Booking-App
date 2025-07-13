import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <Box bg="blue.600" p={4} color="white">
      <Flex alignItems="center">
        <Heading size="md">Flight Booking App</Heading>
        <Spacer />
        <Flex gap={4}>
          {!currentUser ? (
            <>
              <Button colorScheme="whiteAlpha" variant="outline" as={Link} to="/login">
                Login
              </Button>
              <Button colorScheme="whiteAlpha" variant="outline" as={Link} to="/signup">
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Button colorScheme="whiteAlpha" variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
