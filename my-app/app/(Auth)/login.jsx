import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, TextInput } from "react-native";
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
        WELCOME BACK
      </Text>

      <View style={Authstyles.secondaryContainer}>
        <View style={Authstyles.fieldContainer}>
          <Text style={Authstyles.fieldText}>Email</Text>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="example@gmail.com"
            autoCorrect={false}
            style={Authstyles.txtfieldInput}
          />
        </View>

        <View style={Authstyles.fieldContainer}>
          <Text style={Authstyles.fieldText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter password"
            style={Authstyles.txtfieldInput}
          />
        </View>
        {/* <View style={{ marginVertical: 15 }}>
          <CustomButton text={"SignUp"} />
        </View> */}

        <View style={{ marginVertical: 10 }}>
          <Text style={Authstyles.AccntText}>
            dONT have an account?{" "}
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
    </SafeAreaView>
  );
};
export default signUpScreen;
