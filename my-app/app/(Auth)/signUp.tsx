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
import { router } from "expo-router";
import axios from "axios";
const API = axios.create({
  baseURL: "https://splitsmart-project.onrender.com/", // Replace with your API base URL
});

export default function SignUpScreen({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  //const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    if (!form.username || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
   
    
    // Handle sign up logic here
   // console.log("Sign Up Successful", form);
   // navigation.navigate("Home");
    //setError(''); // Clear error on success
      try {
          const res = await API.post('api/users/register', form);
          Alert.alert('Success', 'Registration successful!');
          router.navigate("/Home");
        } catch (err) {
  console.error("Signup error:", err);
  if (err && typeof err === "object" && "response" in err) {
    // @ts-ignore
    setError(err.response?.data?.message || 'Signup failed');
    // @ts-ignore
    console.log("API error:", err.response?.data);
  } else {
    setError('Signup failed');
  }
}
  };

  return (
    <LinearGradient
      colors={["#2196f3", "#81d4fa"]}
      style={styles.gradientBg}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Logo and Title */}
          <View>
            <Image
              source={require("../../assets/images/Logo.png")}
              style={{ width: 100, height: 100, alignSelf: "center", marginTop: 20 }} />
          </View>
            
          <Text style={styles.getStarted}>GET STARTED</Text>

          {/* Form Card */}
          <View style={styles.formCard}>
            {/* Full Name */}
            <Text style={styles.label}>Full Name</Text>
            <LinearGradient
              colors={["#81c6fa", "#5bb6f9"]}
              style={styles.inputGradient}
            >
              <TextInput
                style={styles.input}
                placeholder="Enter Your Full Name"
                placeholderTextColor="#fff"
                autoCapitalize="words"
                onChangeText={(text) => setForm({ ...form, username: text })}
              />
            </LinearGradient>
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
                onChangeText={(text) => setForm({ ...form, email: text })}
              />
            </LinearGradient>
            {/* Password */}
            <Text style={styles.label}>Password</Text>
            <LinearGradient
              colors={["#81c6fa", "#5bb6f9"]}
              style={styles.inputGradient}
            >
              <View style={styles.passwordRow}>
                <TextInput
                  style={[styles.input, { flex: 1, marginRight: 0 }]}
                  placeholder="Enter Your Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  onChangeText={(text) => setForm({ ...form, password: text })}
                />
                <TouchableOpacity
                  style={styles.eyeBtn}
                  onPress={() => setShowPassword((v) => !v)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={22}
                    color="#222"
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* Sign Up Button */}
            {error ? (
  <Text style={{ color: "red", textAlign: "center", marginBottom: 8 }}>
    {error}
  </Text>
) : null}
            <TouchableOpacity style={styles.signUpBtn}
              onPress={handleSignUp}>
              <LinearGradient
                colors={["#FFD600", "#2196f3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.signUpBtnInner}
              >
                <Text style={styles.signUpText}
                >SIGN UP</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Or Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.divider} />
            </View>
            {/* Sign Up With */}
            <Text style={styles.signUpWith}>Sign Up With</Text>
            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <FontAwesome name="facebook" size={24} color="#1877f3" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="google" size={24} color="#ea4335" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Ionicons name="logo-twitter" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            {/* Already have account */}
            <View style={styles.bottomRow}>
              <Text style={styles.haveAccount}>Already Have An Account?</Text>
              <TouchableOpacity onPress={() => navigation?.navigate?.("SignIn")}>
                <Text style={styles.signInText}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  logoSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    marginBottom: 0,
  },
  logoS: {
    fontSize: 54,
    color: "#FFD600",
    fontWeight: "bold",
    marginRight: 4,
    letterSpacing: 2,
  },
  logoSplit: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: -2,
  },
  logoMart: {
    fontSize: 18,
    color: "#FFD600",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  tagline: {
    color: "#fff",
    fontSize: 11,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 10,
    letterSpacing: 1,
  },
  getStarted: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 18,
    letterSpacing: 1,
  },
  formCard: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    paddingTop: 32,
    marginTop: 0,
    flex: 1,
    minHeight: 600,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  label: {
    color: "#222",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
    marginTop: 16,
  },
  inputGradient: {
    borderRadius: 8,
    marginBottom: 6,
    marginTop: 0,
    padding: 0,
    overflow: "hidden",
  },
  input: {
    backgroundColor: "transparent",
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 0,
  },
  eyeBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 2,
  },
  forgot: {
    color: "#FFD600",
    fontSize: 13,
    marginTop: 2,
    marginBottom: 10,
    fontWeight: "500",
  },
  signUpBtn: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  signUpBtnInner: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 28,
    letterSpacing: 1,
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
  signUpWith: {
    color: "#FFD600",
    fontWeight: "bold",
    fontSize: 18,
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
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 6,
    elevation: 2,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  haveAccount: {
    color: "#222",
    fontSize: 14,
    fontWeight: "500",
  },
  signInText: {
    color: "#FFD600",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 4,
  },
});