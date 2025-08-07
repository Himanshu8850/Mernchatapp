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
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
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
              color="white"
              _selected={{ bg: "teal.500", color: "white" }}
            >
              Tab 1
            </Tab>
            <Tab
              width="50%"
              color="white"
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
