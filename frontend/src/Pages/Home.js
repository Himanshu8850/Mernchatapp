import React from "react";
import { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);
  return (
    <Container
      minH="100vh"
      minWidth="100vw"
      backgroundImage="url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNoYXQlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTY5MTM5NjAwMA&ixlib=rb-1.2.1&q=80&w=1080')" // Updated to a reliable static image URL
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat" // Ensure no repeat of the image
      display="flex" // Use flex to align children properly
      flexDirection="column" // Stack children vertically
      alignItems="center" // Center children horizontally
      justifyContent="center" // Center children vertically
    >
      <Box
        d="flex"
        justifyContent="center"
        paddingTop="7px"
        bg="rgba(0, 0, 0, 0.85)" // Dark semi-transparent background
        borderRadius="20"
        width="500px"
        height="70px"
        borderWidth="3px"
        borderColor="rgba(255, 255, 255, 0.5)" // Light border color for contrast
        marginTop="0.5%"
        textAlign="center"
        alignItems="center"
      >
        <Text fontSize="27px" paddingTop="3px" color="white">
          ChatManiac
        </Text>
      </Box>

      <Box
        w="500px"
        padding="1%"
        bg="rgba(0, 0, 0, 0.8)" // Dark semi-transparent background
        borderRadius="30"
        minH="150px"
        borderWidth="4px"
        borderColor="rgba(255, 255, 255, 0.5)" // Light border color for contrast
        marginTop="10px"
      >
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList>
            <Tab
              width="50%"
              color="yellow" // Changed font color to yellow for better visibility
              _selected={{ bg: "teal.500", color: "white" }}
            >
              Tab 1
            </Tab>
            <Tab
              width="50%"
              color="yellow" // Changed font color to yellow for better visibility
              _selected={{ bg: "teal.500", color: "white" }}
            >
              Tab 2
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login></Login>
            </TabPanel>
            <TabPanel>
              <Signup></Signup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Home;
