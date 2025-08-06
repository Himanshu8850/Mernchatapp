import { React, useState } from "react";
import {
  FormControl,
  FormLabel,
  InputRightElement,
  VStack,
  Button,
  InputGroup,
  Box,
  useToast,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loadSecrets from "../../utils/loadSecrets";
const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [show, setshow] = useState(false);
  const toast = useToast();
  const [loading, setload] = useState(false);
  const navigate = useNavigate();
  const handleclick = () => {
    setshow(!show);
  };
  const Guest = () => {
    console.log("ok");
    setload(true);
    setemail("guest1@gmail.com");
    setpass("1234");
    setload(false);
  };
  const submitHandler = async () => {
    setload(true);
    if (!email || !pass) {
      toast({
        title: "Please enter all the fields",
        description: "We've created your account for you.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setload(false);
      return;
    }
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const password = pass;
      const { data } = await axios.post(
        `${loadSecrets("API_BASE_URL")}/user/login`,
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setload(false);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/chats");
    } catch (err) {
      toast({
        title: "Error occured",
        description: err.response.data.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setload(false);
    }
  };
  return (
    <VStack spacing="5px" minWidth="400px">
      <FormControl isRequired>
        <FormLabel color="white">Email</FormLabel>
        <Input
          placeholder="Email"
          _placeholder={{ color: "gray.300" }} // Light placeholder color for visibility
          color="white" // White text color for input
          type="text"
          value={email}
          onChange={(event) => {
            setemail(event.target.value);
          }}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Password"
            _placeholder={{ color: "gray.300" }} // Light placeholder color for visibility
            color="white" // White text color for input
            type={show ? "text" : "Password"}
            value={pass}
            onChange={(event) => {
              setpass(event.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleclick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        marginTop="25px"
        w="100%"
        bg="rgb(83, 202, 242);"
        borderRadius="10"
        onClick={submitHandler}
        isLoading={loading}
      >
        SignIn
      </Button>
      <Button
        marginTop="5px"
        w="100%"
        bg="red"
        borderRadius="10"
        onClick={Guest}
      >
        GetUserCredentials
      </Button>
    </VStack>
  );
};

export default Login;
