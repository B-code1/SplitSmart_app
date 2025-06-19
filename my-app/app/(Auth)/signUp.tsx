import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import Authstyles from "./authStyle";
import styles from "../styles";
import Colors from "../../constants/Colors";
import DividerOr from "@/components/Divider";
import CustomButton from "@/components/Custombutton";
import Socials from "@/components/Socials";
import TandC from "@/components/TandC";
const signUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            style={Authstyles.logoAuthImg}
            source={require("../../assets/images/Logo.png")}
          />

          <Text style={{ textAlign: "center", color: Colors.text_Light }}>
            organize.split.resolve
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: Colors.text_Light,
              fontFamily: "PoppinsBold",
              fontSize: 30,
            }}
          >
            GET STARTED
          </Text>

          <View style={Authstyles.secondaryContainer}>
            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Full Name</Text>
              <View style={Authstyles.inputRow}>
              <IconSymbol
                name="person"
                size={20}
                color={Colors.white}
                style={{ marginRight: 10 }}
              />
              <TextInput onChangeText={setName}
                placeholder="Enter your full name"
                placeholderTextColor={Colors.white}
                style={Authstyles.txtfieldInput}
                onChangeText={setUsername}
              />
              </View>
            </View>

            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Email Address</Text>
              <View style={Authstyles.inputRow}>
              <IconSymbol
                name="mail"
                size={20}
                color={Colors.white}
                style={{ marginRight: 10 }}
                />  
              <TextInput onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your email"
                placeholderTextColor={Colors.white}
                autoCorrect={false}
                style={Authstyles.txtfieldInput}
                onChangeText={setEmail}
              />
              </View>
            </View>

            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Password</Text>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                placeholderTextColor={Colors.white}
                style={Authstyles.txtfieldInput}
                onChangeText={setPassword}
              />
              </View>
            </View>
            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}> Confirm Password</Text>
              <View style={Authstyles.inputRow}>
               <IconSymbol
                name="eye.slash"
                size={20}
                color={Colors.white}
                style={{ marginRight: 10 }}
                 />
              <TextInput  onChangeText={setPassword}
                secureTextEntry={true}
                placeholder="**********"
                placeholderTextColor={Colors.white}
                style={Authstyles.txtfieldInput}
                
              />
              </View>
            </View>

            {error ? (
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  marginVertical: 10,
                }}
              >
                {error}
              </Text>
            ) : null}

            <View style={{ marginVertical: 20 }}>
              <CustomButton text={"SIGN-UP"} onPress={handleSignup} />
            </View>

            <Text
              style={{
                fontFamily: "PoppinsRegular",
                color: Colors.text_Light,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Already have an account?{" "}
              <Text
                style={Authstyles.AccntDiv}
                onPress={() => router.navigate("/login")}
              >
                Login
              </Text>
            </Text>
          </View>

          <View style={{ marginVertical: 10 }}>
            <DividerOr />
          </View>

          <Socials />

          <View style={{ marginTop: 30 }}>
            <TandC />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
