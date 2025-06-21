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
import axios, { AxiosError } from "axios";
import { router } from "expo-router";

// Create an Axios instance for API calls
const API = axios.create({
  baseURL: "https://splitsmart-project.onrender.com/", // Replace with your actual API base URL
});

export default function LoginScreen({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handlelogin =  async() => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Here you would typically handle the login logic, e.g., API call
    console.log("Logging in with:", { email, password});

    // Reset error on successful login
    setError(null);
    try {
          const res = await API.post('api/users/login', { email, password });
    
          const token = res.data.token;
          await AsyncStorage.setItem("token", token);
    
          Alert.alert("Success", "Login successful!");
          router.navigate("/(tabs)/Home");
          console.log(`Login successful! Token: ${token}`);
        } catch (err) {
          if (err instanceof AxiosError) {
            console.error(err.response?.data);
            setError(err.response?.data?.message || 'Login failed');
          } else {
            console.error(err);
            setError('An unexpected error occurred');
          }
        }
      
    
    // Navigate to the next screen or perform further actions
  }

  return (
    <LinearGradient colors={["#2196f3", "#81d4fa"]} style={styles.gradientBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Logo and Title */}
          <View style={styles.logoSection}>
            <Text style={styles.logoS}>S</Text>
            <View>
              <Text style={styles.logoSplit}>PLIT</Text>
              <Text style={styles.logoMart}>MART</Text>
            </View>
          </View>
          <Text style={styles.tagline}>organize . split. resolve.</Text>
          <Text style={styles.getStarted}>WELCOME BACK!</Text>

          {/* Form Card */}
          <View style={styles.formCard}>
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
                onChangeText={(text) => setEmail(text)}
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
                  onChangeText={(text) => setPassword(text)}
                  value={password}
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
            <Text style={{ color: "red", textAlign: "center", marginVertical: 10 }}>
                {error}
              </Text>
              
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInBtn}
              onPress={handlelogin}>
              <LinearGradient
                colors={["#FFD600", "#2196f3"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.signInBtnInner}
              >
                <Text style={styles.signInText}>SIGN IN</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* Or Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.orText}>Or</Text>
              <View style={styles.divider} />
            </View>
            {/* Sign In With */}
            <Text style={styles.signInWith}>Sign In With</Text>
            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <FontAwesome name="facebook" size={24} color="#1877f3" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="google" size={24} color="#ea4335" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image resizeMode="contain"
                  source={require("../../assets/images/twitter.png")}
                  style={{ width: 24, height: 24 }}
                  />
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
    minHeight: 500,
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
  signInBtn: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  signInBtnInner: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
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
  signInWith: {
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
});