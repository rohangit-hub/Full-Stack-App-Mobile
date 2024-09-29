// INDEX = Registration Page

import { View, Text, TextInput, Pressable,SafeAreaView } from 'react-native'
import { Link } from "expo-router";
import React, { useState } from 'react'
import { Image, ImageBackground } from 'react-native';

export default function index() {
  //STATES
  const [name, setName] = useState()
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [hide,setHide] = useState(true);
  const [showHideText ,setshowHideText] = useState ("Hide")


  return (
    <SafeAreaView
    style={{
      flex: 3,
      justifyContent: "center"
    }}>
      <Image source={require("../assets/images/bgimg3.jpg")} resizeMode="cover" style={{position:"absolute"}}/>
      <Text 
        style ={{
        color:"#6A4E44", 
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        margin: 30
        }}> 
        REG!STRATION </Text>

        <Text 
        style ={{
        color:"#6A4E44", 
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 20
        }}> 
        User Name</Text>

        <TextInput 
        style={{
          margin: 15,
          color:"#000000",
          fontSize: 18,
          padding: 10,
          backgroundColor: "#dfd6ef",
          borderRadius: 20,
          opacity: 0.5,
          borderWidth: 1,
          borderColor: "#6A4E44"
        }}
        inputMode='text'
        value={name}
        onChangeText={(name)=> setName(name)}>
        </TextInput>


        <Text 
        style ={{
        color:"#6A4E44", 
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 20
        }}> 
        Email</Text>

        <TextInput 
        style={{
          margin: 15,
          color:"#000000",
          fontSize: 18,
          padding: 10,
          backgroundColor: "#dfd6ef",
          borderRadius: 20,
          opacity: 0.5,
          borderWidth: 1,
          borderColor: "#6A4E44"
        }}
        inputMode='text'
        value={email}
        onChangeText={(email)=> setEmail(email)}>
        </TextInput>


        <Text 
        style ={{
        color:"#6A4E44", 
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 20,
        }}> 
        Password  

        <Pressable onPress={ ()=> hide? setHide(false) & setshowHideText("Show"): setHide(true) & setshowHideText ("Hide")}>
          <Text style = {{marginLeft : 240, fontWeight: "bold"}}> {showHideText} </Text>
        </Pressable>
        </Text>

        <TextInput 
        style={{
          margin: 15,
          color:"#000000",
          fontSize: 18,
          padding: 10,
          backgroundColor: "#dfd6ef",
          borderRadius: 20,
          opacity: 0.5,
          borderWidth: 1,
          borderColor: "#6A4E44"
        }}
        inputMode='password'
        value={password}
        onChangeText={(password)=> setPassword(password)}
        secureTextEntry = {hide}>
        </TextInput>

        {/* // hide this console.warn before push */}
        <Pressable 
          onPress={ () => console.warn(`name: ${name} email: ${email}  , password: ${password}`)}
          onPressOut={ ()=> setEmail("") & setPassword("") & setName("")}>
        <Text style ={{
        color:"#6A4E44", 
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        }}>REGISTER</Text>
        </Pressable>

      <Text style={{textAlign: 'center', margin: 10}}>Already Register...<Link href={"/login"} style={{color: "#5F3935", fontWeight: "bold"}}>Login</Link></Text>
    </SafeAreaView>

  );
}
