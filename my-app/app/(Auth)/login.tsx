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
  Alert,
} from "react-native";
import { router } from "expo-router";
import Authstyles from "./authStyle";
import styles from "../styles";
import Colors from "../../constants/Colors";
import DividerOr from "../../components/Divider";
import CustomButton from "../../components/Custombutton";
import Socials from "../../components/Socials";
import TandC from "../../components/TandC";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { IconSymbol } from "@/components/IconSymbol";
import API from "@/utils/api"; // use your shared Axios instance

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Auto-clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await API.post('/users/login', { email, password });

      // If needed: store the token globally
      // const token = res.data.token;
      // await AsyncStorage.setItem("token", token); // or use context

      Alert.alert("Success", "Login successful!");
      router.navigate("/(tabs)/Home");
    } catch (err) {
      if (err instanceof AxiosError) {
        console.error(err.response?.data);
        setError(err.response?.data?.message || 'Login failed');
      } else {
        console.error(err);
        setError('An unexpected error occurred');
      }
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
            Welcome to SplitSmart – Let’s show you how you can split bills NOT
            friendships.
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
            {/* Email Field */}
            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Email Address</Text>
              <View style={Authstyles.inputRow}>
                <IconSymbol name="mail" size={20} color={Colors.white} style={{ marginRight: 10 }} />
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
            </View>

            {/* Password Field */}
            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Password</Text>
              <View style={Authstyles.inputRow}>
                <IconSymbol name="eye.slash" size={20} color={Colors.white} style={{ marginRight: 10 }} />
                <TextInput
                  secureTextEntry={true}
                  placeholder="Enter your password"
                  placeholderTextColor={Colors.white}
                  onChangeText={setPassword}
                  style={Authstyles.txtfieldInput}
                />
              </View>
            </View>

            {/* Error Display */}
            {error && (
              <Text style={{ color: "red", textAlign: "center", marginVertical: 10 }}>
                {error}
              </Text>
            )}

            {/* Login Button */}
            <CustomButton text={"LOGIN"} onPress={handleLogin} />

            {/* Signup Redirect */}
            <View style={{ marginVertical: 10, marginTop: 20 }}>
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
                  onPress={() => {
                    router.navigate("/signUp");
                  }}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <DividerOr />
          </View>

          <Socials />

          {/* Forgot Password */}
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
                onPress={() => {
                  router.navigate("/(Auth)/forgotPassword");
                }}
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
