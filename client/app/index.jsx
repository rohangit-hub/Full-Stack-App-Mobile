// INDEX = Registration Page

import { View, Text, TextInput, Pressable, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image } from "react-native";
import axios from "axios";

export default function index() {
  //STATES
  const [Username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hide, setHide] = useState(true);
  const [showHideText, setshowHideText] = useState("Hide");

  // FUNCTIONS
  const handleSubmit = async (username,email,password) => {
    try {
      if (!username || !email || !password) {
        alert(`please enter valid data..!`);
        return;
      }
      const {data} = await axios.post("http://192.168.114.220:3030/api/v1/post",{username,email,password})
      console.warn(`User ${username} Register`);
      
    }catch (error) {
      console.log(`please enter valid data:: ${error}`);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 3,
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../assets/images/bgimg3.jpg")}
        resizeMode="cover"
        style={{ position: "absolute" }}
      />
      <Text
        style={{
          color: "#6A4E44",
          fontSize: 35,
          fontWeight: "bold",
          textAlign: "center",
          margin: 30,
        }}
      >
        REG!STRATION{" "}
      </Text>

      <Text
        style={{
          color: "#6A4E44",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "left",
          marginLeft: 20,
        }}
      >
        User Name
      </Text>

      <TextInput
        style={{
          margin: 15,
          color: "#000000",
          fontSize: 18,
          padding: 10,
          backgroundColor: "#dfd6ef",
          borderRadius: 20,
          opacity: 0.5,
          borderWidth: 1,
          borderColor: "#6A4E44",
        }}
        inputMode="text"
        value={Username}
        onChangeText={(Username) => setUserName(Username)}
      ></TextInput>

      <Text
        style={{
          color: "#6A4E44",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "left",
          marginLeft: 20,
        }}
      >
        Email
      </Text>

      <TextInput
        style={{
          margin: 15,
          color: "#000000",
          fontSize: 18,
          padding: 10,
          backgroundColor: "#dfd6ef",
          borderRadius: 20,
          opacity: 0.5,
          borderWidth: 1,
          borderColor: "#6A4E44",
        }}
        inputMode="text"
        value={email}
        onChangeText={(email) => setEmail(email)}
      ></TextInput>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text
          style={{
            color: "#6A4E44",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: 20,
            justifyContent: "center",
          }}
        >
          Password
        </Text>

        <Pressable
          onPress={() =>
            hide
              ? setHide(false) & setshowHideText("Show")
              : setHide(true) & setshowHideText("Hide")
          }
        >
          <Text
            style={{
              marginLeft: 170,
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            {" "}
            {showHideText}{" "}
          </Text>
        </Pressable>
      </View>

      <TextInput
        style={{
          margin: 15,
          color: "#000000",
          fontSize: 18,
          padding: 10,
          backgroundColor: "#dfd6ef",
          borderRadius: 20,
          opacity: 0.5,
          borderWidth: 1,
          borderColor: "#6A4E44",
        }}
        inputMode="password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={hide}
      ></TextInput>

      {/* // hide this console.warn before push */}
      <Pressable
        onPressIn={() => {
          handleSubmit(Username,email,password);
        }}
        onPressOut={() => setEmail("") & setPassword("") & setUserName("")}
      >
        <Text
          style={{
            color: "#6A4E44",
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          REGISTER
        </Text>
      </Pressable>

      <Text style={{ textAlign: "center", margin: 10 }}>
        Already Register...
        <Link href={"/login"} style={{ color: "#5F3935", fontWeight: "bold" }}>
          Login
        </Link>
      </Text>
    </SafeAreaView>
  );
}
