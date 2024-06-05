import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} centerContent>
      {/* Navigation Bar */}
      <Flex as="nav" w="100%" p={4} bg="white" boxShadow="sm" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" color="black">SaaS Product</Heading>
        <HStack spacing={8}>
          <Button variant="link" color="gray.600">Features</Button>
          <Button variant="link" color="gray.600">Pricing</Button>
          <Button variant="link" color="gray.600">About</Button>
          <Button variant="link" color="gray.600">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" w="100%" p={8} bg="gray.50">
        <VStack align="start" spacing={6} maxW="lg">
          <Heading as="h2" size="2xl" color="black">Revolutionize Your Workflow</Heading>
          <Text fontSize="lg" color="gray.700">Our SaaS product helps you streamline your tasks and improve productivity with ease.</Text>
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </VStack>
        <Image src="https://via.placeholder.com/600x400" alt="Product screenshot" borderRadius="md" boxShadow="md" />
      </Flex>

      {/* Features Section */}
      <Box w="100%" p={8}>
        <Heading as="h3" size="xl" textAlign="center" mb={8} color="black">Features</Heading>
        <Flex wrap="wrap" justify="space-around">
          <VStack align="start" spacing={4} maxW="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
            <IconButton aria-label="Feature 1" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
            <Heading as="h4" size="md" color="black">Feature 1</Heading>
            <Text color="gray.700">Description of feature 1 and how it benefits the user.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
            <IconButton aria-label="Feature 2" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
            <Heading as="h4" size="md" color="black">Feature 2</Heading>
            <Text color="gray.700">Description of feature 2 and how it benefits the user.</Text>
          </VStack>
          <VStack align="start" spacing={4} maxW="sm" p={4} bg="white" borderRadius="md" boxShadow="md">
            <IconButton aria-label="Feature 3" icon={<FaCheckCircle />} size="lg" colorScheme="teal" />
            <Heading as="h4" size="md" color="black">Feature 3</Heading>
            <Text color="gray.700">Description of feature 3 and how it benefits the user.</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Footer */}
      <Box w="100%" p={8} bg="gray.100">
        <Flex justify="space-between" wrap="wrap">
          <VStack align="start" spacing={4}>
            <Heading as="h5" size="sm" color="black">Company</Heading>
            <Button variant="link" color="gray.600">About Us</Button>
            <Button variant="link" color="gray.600">Careers</Button>
            <Button variant="link" color="gray.600">Blog</Button>
          </VStack>
          <VStack align="start" spacing={4}>
            <Heading as="h5" size="sm" color="black">Support</Heading>
            <Button variant="link" color="gray.600">Help Center</Button>
            <Button variant="link" color="gray.600">Contact Us</Button>
            <Button variant="link" color="gray.600">Privacy Policy</Button>
          </VStack>
          <VStack align="start" spacing={4}>
            <Heading as="h5" size="sm" color="black">Follow Us</Heading>
            <Button variant="link" color="gray.600">Twitter</Button>
            <Button variant="link" color="gray.600">LinkedIn</Button>
            <Button variant="link" color="gray.600">Facebook</Button>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;