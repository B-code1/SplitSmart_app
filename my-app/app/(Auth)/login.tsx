import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, TextInput,TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Authstyles from "./authStyle";
import styles from "../style";
import Colors from "../../constants/Colors";
const signUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        style={Authstyles.logoAuthImg}
        source={require("../../assets/images/Logo.png")}
      />
      <Text style={{ textAlign: "center", color: Colors.text_Light,marginTop: 10 }}>
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
        WELCOME BACK
      </Text>

      <View style={Authstyles.secondaryContainer}>
        <View style={Authstyles.fieldContainer}>
          <Text style={Authstyles.fieldText}>Email Address</Text>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Enter your email"
            autoCorrect={false}
            style={Authstyles.txtfieldInput}
          />
        </View>

        <View style={Authstyles.fieldContainer}>
          <Text style={Authstyles.fieldText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your password"
            style={Authstyles.txtfieldInput}
          />
        </View>
        {/* <View style={{ marginVertical: 15 }}>
          <CustomButton text={"SignUp"} />
        </View> */}

        <View style={{ marginVertical: 10 }}>
          <Text style={Authstyles.AccntText}>
            Don't have an account?{" "}
            <Text
              style={Authstyles.AccntDiv}
              onPress={() => {
                router.navigate("/signUp");
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={Authstyles.Button} onPress={() => {
                // Handle sign up logic here
                console.log("Sign Up button pressed");
              }}>
                <Text style={Authstyles.ButtonText}>SIGN IN</Text>
              </TouchableOpacity>
      
            </View>

    </SafeAreaView>
  );
};
export default signUpScreen;
