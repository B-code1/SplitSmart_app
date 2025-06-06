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
            style={Authstyles.txtfieldInput}
          />
        </View>

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

      
        <View>
          <Text style ={{color:'#F1C40F',fontSize:16, marginLeft:5,}}> Forgot Password?</Text>
        </View>
        <TouchableOpacity style={Authstyles.Button} onPress={() => {
          // Handle sign up logic here
          console.log("Sign Up button pressed");
        }}>
          <Text style={Authstyles.ButtonText}>SIGN UP</Text>
        </TouchableOpacity>

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
            Sign In
          </Text>
        </Text>
      </View>
      
    </SafeAreaView>
  );
};
export default signUpScreen;
