import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/Custombutton";
import DividerOr from "../../components/Divider";
import Socials from "../../components/Socials";
import TandC from "../../components/TandC";
import Colors from "../../constants/Colors";
import styles from "../styles";
import Authstyles from "./authStyle";

import API from "@/lib/api";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Optional for token storage

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    try {
      const res = await API.post("/users/login", { email, password });

      // Optional: Save token to AsyncStorage
      // await AsyncStorage.setItem("token", res.data.token);

      console.log("Login success:", res.data);
      router.navigate("/(tabs)/Home");
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Login failed. Try again.";
      setError(msg);
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

            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Password</Text>
              <TextInput
                secureTextEntry
                placeholder="Enter your password"
                placeholderTextColor={Colors.white}
                onChangeText={setPassword}
                style={Authstyles.txtfieldInput}
              />
            </View>

            {error ? (
              <Text style={{ color: "red", textAlign: "center", marginTop: 10 }}>
                {error}
              </Text>
            ) : null}

            <View style={{ marginVertical: 20 }}>
              <CustomButton text={"LOGIN"} onPress={handleLogin} />
            </View>

            <Text
              style={{
                color: Colors.text_Light,
                fontFamily: "PoppinsRegular",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Not a Registered User yet?{" "}
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  fontFamily: "PoppinsBold",
                  fontWeight: "400",
                }}
                onPress={() => router.navigate("/signUp")}
              >
                Sign Up
              </Text>
            </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <DividerOr />
          </View>

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
                <Text style={{ color: "#F1C40F", fontSize: 24, fontWeight: "400" }}>
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

export default LoginScreen;
