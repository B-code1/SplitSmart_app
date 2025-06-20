import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import Authstyles from "./authStyle";
import styles from "../styles";
import Colors from "../../constants/Colors";
import DividerOr from "../../components/Divider";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../../components/Custombutton";
import Socials from "../../components/Socials";
import TandC from "../../components/TandC";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { IconSymbol } from "@/components/IconSymbol";

// You can configure the baseURL as needed
const API = axios.create({
  baseURL: "https://your-api-base-url.com", // Replace with your actual API base URL
});



const signUpScreen = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>('');


// this is what ebube has changed. he added authentication function. check the onpress? login.
// for usestate hooks, check onChageText in email and passsword
    const handleAuth = async()=>{
      if(!email || !password ){
        setError("Please fill in all fields")
      }
       try {
      const res = await API.post('/signup', { email, password });
      setMessage('Signup successful! You can now log in.');
      router.navigate('/login');
    } catch (err) {
      let errorMsg = "An error occurred";
      if (axios.isAxiosError(err)) {
        errorMsg = err.response?.data?.message || err.message;
      } else if (err instanceof Error) {
        errorMsg = err.message;
      }
      setMessage(`Signup failed: ${errorMsg}`);
    }
     };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
      >
        <ScrollView
          
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            style={Authstyles.logoAuthImg}
            source={require("../../assets/images/Logo.png")}
          />

          <Text
            style={{
              textAlign: "center",
              color: Colors.text_Light,
              fontFamily: "PoppinsRegular",
              fontSize: 18,
            }}
          >
            Welcome to SplitSmart Let’s show you how you can split bill NOT
            friendship
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: Colors.text_Light,
              fontFamily: "PoppinsBold",
              fontSize: 20,
              marginTop: 15,
            }}
          >
            LOGIN
          </Text>
          <View style={Authstyles.secondaryContainer}>
            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Email Address</Text>
              <View style={Authstyles.inputRow}>
              <IconSymbol name ="mail" size={20} color={Colors.white} style={{marginRight: 10}} />

              <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your email"
                placeholderTextColor={Colors.white}
                autoCorrect={false}
                onChangeText={setEmail}
                style={Authstyles.txtfieldInput}
              />
              </View>
            </View>

            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Password</Text>
             <View style={Authstyles.inputRow}>
              <IconSymbol name="eye.slash" size={20} color={Colors.white} style={{marginRight: 10}} />
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                placeholderTextColor={Colors.white}
                onChangeText={setPassword}
                style={Authstyles.txtfieldInput}
              />
            </View>

            {error ? (
              <Text
                style={{ color: "red", textAlign: "center", marginTop: 10 }}
              >
                {error}
              </Text>
            ) : null}

            <View style={{ marginVertical: 20 }}>
              <CustomButton
                text={"LOGIN"}
                onPress={() => {
                  router.navigate("/Home");
                }}
              />
            </View>
                {/* i added this error to display any error on screen */}
            {error && <Text style={{color: "red"}}> {error} </Text> }


          <View>
            <CustomButton text={"LOGIN"} onPress={handleAuth} />
          </View>
          
          
            <View style={{ marginVertical: 10 ,marginTop: 20}}>
              <Text
                style={{
                  color: Colors.text_Light,
                  fontFamily: "PoppinsRegular",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >Not a Registered User yet?{" "}
              <Text
                style={{
                  color: "black",fontSize:20,fontFamily: "PoppinsBold",fontWeight:400,
                }}
                onPress={() => {
                  router.navigate("/signUp");
                }}
              >
                Sign Up
              </Text>
              </Text>

            </View>
          </View>
          <View style={{  marginTop: 10 , marginBottom: 10 }}>
            <DividerOr />
       
         </View>
         <View>
          <Socials />

          <View style={{ marginVertical: 10, marginTop: 20 }}>
            <Text
              style={{
                color: Colors.text_Light,
                fontFamily: "PoppinsRegular",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Forgot Password?{" "}
              <TouchableOpacity
                onPress={() => router.navigate("/(Auth)/forgotPassword")}
              >
                <Text
                  style={{ color: "#F1C40F", fontSize: 24, fontWeight: "400" }}
                >
                  Click here
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <TandC />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default signUpScreen;
