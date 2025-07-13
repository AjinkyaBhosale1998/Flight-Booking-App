import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { decrypt } from "../utils/encryption";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === credentials.email && decrypt(u.password) === credentials.password
    );

    if (!foundUser) {
  alert("Invalid credentials");
  return;
}

localStorage.setItem("currentUser", JSON.stringify(foundUser));

// 🔁 Redirect based on role
if (foundUser.role === "admin") {
  window.location.href = "/admin-dashboard";
} else {
  window.location.href = "/user-dashboard";
}

    // Store session info
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    alert(`Welcome, ${foundUser.name} (${foundUser.role})`);
    // TODO: navigate to role-based dashboard
  };

  return (
    <Box maxW="400px" mx="auto" mt="100px" p="6" boxShadow="lg" borderRadius="md">
      <Heading size="lg" mb="6" textAlign="center">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" value={credentials.email} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input name="password" type="password" value={credentials.password} onChange={handleChange} />
          </FormControl>

          <Button colorScheme="teal" width="full" type="submit">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
