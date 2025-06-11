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
const signUpScreen = () => {
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
              <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your email"
                placeholderTextColor={Colors.white}
                autoCorrect={false}
                style={Authstyles.txtfieldInput}
              />
            </View>

            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Password</Text>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                placeholderTextColor={Colors.white}
                style={Authstyles.txtfieldInput}
              />
            </View>

    
          <View>
            {/* <TouchableOpacity
          style={Authstyles.Button}
          onPress={() => {
            // Handle sign up logic here

            console.log("Sign Up button pressed");
          }}
        >
          <Text style={Authstyles.ButtonText}>LOGIN</Text>
        </TouchableOpacity> */}
            <CustomButton text={"LOGIN"} onPress={() => {}} />
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
          <View style={{ marginVertical: 10 }}>
            <DividerOr />
       
         </View>
         <View>
          <Socials />
        </View>

        <View style={{ marginVertical: 10, marginTop: 20 ,  }}>
          <Text style={{color: Colors.text_Light,
                  fontFamily: "PoppinsRegular",
                  fontSize: 16,
                  textAlign: "center"}}>
                Forgot Password?{" "}
                <TouchableOpacity
                  onPress={() => {
                    router.navigate("/");
                  }}
                >
                  <Text style={{ color:"#F1C40F",fontSize:24,fontWeight:400,}}>Click here</Text>
                </TouchableOpacity>
              </Text>
        </View>
        <View style={{  marginTop: 30 }}>
          <TandC />
        </View>
          
          

          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default signUpScreen;
