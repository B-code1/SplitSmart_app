import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios, { AxiosError } from "axios";
import { router } from "expo-router";

// Create an Axios instance for API calls
const API = axios.create({
  baseURL: "https://splitsmart-project.onrender.com/", // Replace with your actual API base URL
});

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");



  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }

    try {
      const response = await API.post("/auth/forgot-password", { email });
      Alert.alert("Success", response.data.message);
      router.push("/(Auth)/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const errorMessage =
          typeof axiosError.response?.data === "object" && axiosError.response?.data !== null && "message" in axiosError.response.data
            ? (axiosError.response.data as { message?: string }).message
            : "An error occurred";
        Alert.alert("Error", errorMessage || "An error occurred");
      } else {
        Alert.alert("Error", "An unexpected error occurred");
      }
    }
  };


  return (
    <LinearGradient colors={["#3498DB", "#3498DB"]} style={styles.gradientBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Logo and Title */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30 }}>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={{ width: 110, height: 110, marginRight: 10,marginTop: 26 }}
          />
         </View>
          <Text style={styles.getStarted}>Forgot Your Password</Text>
          <Text style={{ color: "#745D00", textAlign: "center", marginBottom: 20, fontFamily: "inter", 
             fontSize: 16, fontWeight: "500", transform: "capitalize"  
          }}>
            Enter Your Email To Receive a Reset Link.
          </Text>
          
              {/* Form Card */}
          <LinearGradient
                      colors={["#fff", "#3498DB"]}
                      style={styles.formCard}
                    >
            
            {/* Email */}
            <Text style={styles.label}>Email Address</Text>
            <LinearGradient
              colors={["#81c6fa", "#5bb6f9"]}
              style={styles.inputGradient}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
              />
            </LinearGradient>
            {/* Password */}

             <TouchableOpacity style={styles.signInBtn}
              onPress={handleForgotPassword}
                          >
                          <LinearGradient
                            colors={["#FFD600", "#2196f3"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.signInBtnInner}
                          >
                            <Text style={styles.signInText}>SEND RESET LINK</Text>
                          </LinearGradient>
                        </TouchableOpacity>

            
              
            
          {/* Sign Up Prompt */}
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBg: {
    flex: 1,
    paddingTop: 0,
    
  },
  
  getStarted: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 1,
    marginTop: 14,
    fontFamily: "inter",

  },
  formCard: {
    
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    padding: 24,
    paddingTop: 32,
    marginTop: 0,
    flex: 1,
   
    
  },
  label: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
    marginTop: 16,
    fontFamily: "inter",
    
  },
  inputGradient: {
    borderRadius: 8,
    marginBottom: 24,
    marginTop: 0,
    padding: 0,
    overflow: "hidden",
  },
  input: {
    backgroundColor: "transparent",
    borderRadius: 8,
    paddingHorizontal: 14,
    
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "inter",
    width: "100%",
    height: 50,
  },
  
  signInBtn: {
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  signInBtnInner: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 36,
    letterSpacing: 1,
    marginTop:  0,
    fontFamily: "inter",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#b3d8f7",
  },
  orText: {
    color: "#888",
    fontSize: 15,
    marginHorizontal: 10,
    fontWeight: "500",
  },
  signInWith: {
    color: "rgb(141, 121, 42)",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 0,
    letterSpacing: 1,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    gap: 18,
  },
  socialBtn: {
    marginHorizontal: 10,
    backgroundColor: "transparent",
    borderRadius: 50,
    padding: 6,
    elevation: 2,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
});