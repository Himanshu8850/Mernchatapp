import {
  FormControl,
  FormLabel,
  InputRightElement,
  VStack,
  Button,
  InputGroup,
  Input,
  background,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const toast = useToast();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [pic, setpic] = useState("");
  const [conpass, setconpass] = useState("");
  const [show, setshow] = useState(false);
  const [loading, setload] = useState(false);
  const navigate = useNavigate();
  const handleclick = () => {
    setshow(!show);
  };
  const postdetails = (pics) => {
    setload(true);
    if (pic === undefined) {
      toast({
        title: "Please select an image",
        description: "We've created your account for you.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setload(false);
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat app");
      data.append("cloud_name", "de5no9qmc");
      fetch(process.env.REACT_APP_CLOUDINARY_URL, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setpic(data.url.toString());
          setload(false);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          setload(false);
        });
    } else {
      toast({
        title: "Please select an image!",
        description: "We've created your account for you.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  const submitHandler = async () => {
    setload(true);
    if (!name || !email || !pass) {
      toast({
        title: "Please enter all the fields",
        description: "We've created your account for you.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pass !== conpass) {
      toast({
        title: "Please select an image!",
        description: "We've created your account for you.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
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
        "https://mernchatapp-gpg8.onrender.com/api/user",
        { name, email, password, pic },
        config
      );
      toast({
        title: "Registration Successful",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setload(false);
      localStorage.setItem("userinfo", JSON.stringify(data));
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
    <VStack spacing="5px">
      <FormControl isRequired>
        <FormLabel color="white">Name</FormLabel>
        <Input
          className="log"
          type="text"
          onChange={(event) => {
            setname(event.target.value);
          }}
          bg="rgba(255, 255, 255, 0.1)" // Match background color with Login
          color="white" // Ensure text is visible
          _placeholder={{ color: "gray.300" }}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel color="white">Email</FormLabel>
        <Input
          className="log"
          type="text"
          onChange={(event) => {
            setemail(event.target.value);
          }}
          bg="rgba(255, 255, 255, 0.1)" // Match background color with Login
          color="white" // Ensure text is visible
          _placeholder={{ color: "gray.300" }}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">Password</FormLabel>
        <InputGroup>
          <Input
            className="log"
            type={show ? "text" : "password"}
            onChange={(event) => {
              setpass(event.target.value);
            }}
            bg="rgba(255, 255, 255, 0.1)" // Match background color with Login
            color="white" // Ensure text is visible
            _placeholder={{ color: "gray.300" }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleclick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">Confirm Password</FormLabel>
        <InputGroup>
          <Input
            className="log"
            type={show ? "text" : "password"} // Changed to Chakra UI Input for consistency
            onChange={(event) => {
              setconpass(event.target.value);
            }}
            color="white" // Ensure text is visible
            _placeholder={{ color: "gray.300" }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleclick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel color="white">Pic</FormLabel>
        <input
          p={1.5}
          accept="image/*"
          type="file"
          onChange={(event) => {
            postdetails(event.target.files[0]);
          }}
        />
      </FormControl>
      <Button
        marginTop="25px"
        w="60%"
        bg="rgb(83, 202, 242);"
        borderRadius="20"
        // onClick={submitHandler}
        onClick={submitHandler}
        isLoading={loading}
      >
        SignUp
      </Button>
    </VStack>
  );
};

export default Signup;
