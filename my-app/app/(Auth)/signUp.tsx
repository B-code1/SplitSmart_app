import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import Authstyles from "./authStyle";
import styles from "../styles";
import { Colors } from "../../constants/Colors";
import DividerOr from "@/components/Divider";
import CustomButton from "@/components/Custombutton";

import Socials from "@/components/Socials";
import TandC from "@/components/TandC";

import { LinearGradient } from "expo-linear-gradient";
import { IconSymbol } from "@/components/IconSymbol";

const signUpScreen = () => {
  // const [username, setUsername] = useState("");
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const handleSignup = async () => {
  // if (!username || !email || !password) {
  //   setError("Please fill in all fields.");
  //   return;
  //}

  //setError("");

  // try {
  //  const response = await API.post("/users/register", {
  //    username,
  //    email,
  // password,
  /// });

  // console.log("Signup success:", response.data);
  //router.navigate("/login");
  //} catch (err: any) {
  //  const msg = err?.response?.data?.message || "Signup failed.";
  //  setError(msg);
  //  }
  // };

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
          <LinearGradient
            colors={["#5DADE2", "#FFFFFF"]}
            start={{ x: -1, y: 1 }}
            end={{ x: 1, y: -1 }}
            style={{
              padding: 20,
              borderRadius: 50,
            }}
          >
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
                  secureTextEntry
                  placeholder="Enter your password"
                  placeholderTextColor={Colors.white}
                  style={Authstyles.txtfieldInput}
                />
              </View>

              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  marginVertical: 10,
                }}
              ></Text>

              <View style={{ marginVertical: 20 }}>
                <CustomButton
                  text={"SIGN-UP"}
                  onPress={() => {
                    router.navigate("/login");
                  }}
                />
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
          </LinearGradient>
          =======
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
                <TextInput
                  placeholder="Enter your full name"
                  placeholderTextColor={Colors.white}
                  style={Authstyles.txtfieldInput}
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
                <TextInput
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="Enter your email"
                  placeholderTextColor={Colors.white}
                  autoCorrect={false}
                  style={Authstyles.txtfieldInput}
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
              <TextInput
                secureTextEntry={true}
                placeholder="**********"
                placeholderTextColor={Colors.white}
                style={Authstyles.txtfieldInput}
              />
            </View>
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
          <View style={{ marginVertical: 10 }}>
            <DividerOr />
          </View>
          <View>
            <Socials />
          </View>
          <View style={{ marginVertical: 10, marginTop: 20 }}>
            <CustomButton
              text={"SIGN-UP"}
              onPress={() => {
                // Handle sign up logic here
                console.log("Sign Up button pressed");
                router.navigate("/(tabs)/Home");
              }}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
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
                onPress={() => {
                  router.navigate("/login");
                }}
              >
                Login
              </Text>
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
