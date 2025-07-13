import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
  import { encrypt } from "../utils/encryption";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


const handleSubmit = (e) => {
  e.preventDefault();

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const emailExists = existingUsers.some(user => user.email === formData.email);
  if (emailExists) {
    alert("Email already registered!");
    return;
  }

  const newUser = {
    ...formData,
    password: encrypt(formData.password),
  };

  localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

  alert("Signup successful!");
  // TODO: redirect to login or dashboard
};


  return (
    <Box maxW="400px" mx="auto" mt="100px" p="6" boxShadow="lg" borderRadius="md">
      <Heading size="lg" mb="6" textAlign="center">Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Role</FormLabel>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Select>
          </FormControl>

          <Button colorScheme="blue" width="full" type="submit">
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Signup;
