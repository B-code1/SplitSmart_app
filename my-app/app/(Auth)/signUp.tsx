import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import Authstyles from "./authStyle";
import styles from "../styles";
import Colors from "../../constants/Colors";
import DividerOr from "@/components/Divider";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "@/components/Custombutton";

import { ScrollView } from "react-native";
import Socials from "@/components/Socials";
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
              <TextInput
                placeholder="Enter your full name"
                placeholderTextColor={Colors.white}
                style={Authstyles.txtfieldInput}
              />
            </View>

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
              <Text style={{ color: "#F1C40F", fontSize: 16, marginLeft: 5 }}>
                {" "}
                Forgot Password?
              </Text>
            </View>
            {/* <TouchableOpacity
          style={Authstyles.Button}
          onPress={() => {
            // Handle sign up logic here
            console.log("Sign Up button pressed");
          }}
        >
          <Text style={Authstyles.ButtonText}>SIGN UP</Text>
        </TouchableOpacity> */}
            <CustomButton text={"SIGN-UP"} onPress={() => {}} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={Authstyles.AccntText}>
              Already have an account?{" "}
              <Text
                style={Authstyles.AccntDiv}
                onPress={() => {
                  router.navigate("/login");
                }}
              >
                Login
              </Text>
            </Text>
          </View>
          <DividerOr />
          <Socials />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default signUpScreen;
