import { useRouter } from 'expo-router';
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
import Colors from "../../constants/Colors";
import styles from "../styles";
import Authstyles from "./authStyle";


const signUpScreen = () => {

  const router = useRouter()

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

          <Text
            style={{
              textAlign: "center",
              color: Colors.text_Light,
              fontFamily: "PoppinsRegular",
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

            <View style={{ marginVertical: 10 }}>
              <Text style={Authstyles.AccntText}>
                Forgot Password?{" "}
                <TouchableOpacity>
                  <Text style={{ color: Colors.primary }}>Click here</Text>
                </TouchableOpacity>
              </Text>
            </View>

            <View style={{ marginVertical: 10 }}>
              <Text
                style={Authstyles.AccntText}
                onPress={() => {
                  router.navigate("/signUp");
                }}
              >
                Signup
              </Text>

              {/* this t help navigate to the signup screen */}
            </View>
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
            <CustomButton text={"LOGIN"} onPress={() =>{router.navigate("/(tabs)/home")}} />
          </View>
          <View>
            <DividerOr />
          </View>

          <View>
            <Socials />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default signUpScreen;
