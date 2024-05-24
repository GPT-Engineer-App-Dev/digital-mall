import { Box, Container, Flex, Heading, Text, VStack, Grid, GridItem, Image, Link, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact Us</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" p={10}>
        <Heading size="lg" mb={6}>Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 1" />
              <Box p={4}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 2" />
              <Box p={4}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 3" />
              <Box p={4}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 4" />
              <Box p={4}>
                <Heading size="md">Product 4</Heading>
                <Text mt={2}>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" p={4} textAlign="center">
        <Flex justifyContent="center" mb={4}>
          <Link href="#" mx={2}><FaFacebook size="24px" /></Link>
          <Link href="#" mx={2}><FaTwitter size="24px" /></Link>
          <Link href="#" mx={2}><FaInstagram size="24px" /></Link>
        </Flex>
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        <Flex justifyContent="center" mt={2}>
          <Link href="#" mx={2} color="white">Privacy Policy</Link>
          <Link href="#" mx={2} color="white">Terms of Service</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;