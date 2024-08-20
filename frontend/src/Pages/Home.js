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
      backgroundImage="url('./backg.jpeg')"
      backgroundSize="cover"
      backgroundPosition="center"
      centerContent
      minHeight="auto" // Set minHeight to auto to allow container to grow dynamically
    >
      <Box
        d="flex"
        justifyContent="center"
        paddingTop="7px"
        bg="rgba(255, 255, 255)"
        borderRadius="20"
        width="500px"
        height="70px"
        borderWidth="3px"
        marginTop="0.5%"
        textAlign="center"
        alignItems="center"
      >
        <Text fontSize="27px" paddingTop="3px" color="black">
          CHAT_A_BAT
        </Text>
      </Box>

      <Box
        w="500px"
        padding="1%"
        bg="white"
        borderRadius="30"
        minH="150px"
        borderWidth="4px"
        marginTop="10px"
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList>
            <Tab width="50%">Tab 1</Tab>
            <Tab width="50%">Tab 2</Tab>
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
