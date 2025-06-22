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
import { ActivityIndicator } from "react-native";

// Create an Axios instance for API calls
const API = axios.create({
  baseURL: "https://splitsmart-project.onrender.com/", // Replace with your actual API base URL
});

export default function LoginScreen({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlelogin =  async() => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    // Here you would typically handle the login logic, e.g., API call
    console.log("Logging in with:", { email, password});

    // Reset error on successful login
     setLoading(true);
    setError(null);
    try {
          const res = await API.post('api/users/login', { email, password });
    
          const token = res.data.token;

         
          
    
          Alert.alert("Success", "Login successful!");
          router.navigate("/(tabs)/Home");
          // Optionally, you can store the token in AsyncStorage for future use
          // await AsyncStorage.setItem('token', token);
          
         await AsyncStorage.setItem('userToken', token);
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
         finally {
    setLoading(false); // Stop spinner
  }
      
    
    // Navigate to the next screen or perform further actions
  }

  return (
    <LinearGradient colors={["#3498DB", "#3498DB"]} style={styles.gradientBg}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Logo and Title */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 30 }}>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={{ width: 110, height: 110, marginRight: 10,marginTop: 26 }}
          />
         </View>
          <Text style={styles.getStarted}>WELCOME BACK!</Text>
          
          <View style={{ flex: 1, justifyContent: "center"}}>
          {/* Form Card */}
          <LinearGradient
            colors={["#fff", "#3498DB"]}
            style={styles.formCard}
          >
            
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
                    name={showPassword ?   "eye-outline" : "eye-off-outline"}
                    size={22}
                    color="#222"
                  />
                </TouchableOpacity>
              </View>
              
              
            </LinearGradient>
            <Text style={{ color: "red", textAlign: "center", marginVertical: 6 }}>
                {error}
              </Text>
              
            <TouchableOpacity
              onPress={() => router.push("/(Auth)/forgotPassword")}>

               <Text style={styles.forgot}>
             Forgot Password?</Text>
                
            </TouchableOpacity>
            {loading && (
        <ActivityIndicator size="large" color="#2196f3" style={{ marginVertical: 10 }} />
)}
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
                <Image resizeMode="contain"
                  source={require("../../assets/images/facebook.png")}
                  style={{ width: 24, height: 24 }}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image resizeMode="contain"
                  source={require("../../assets/images/google.png")}
                  style={{ width: 24, height: 24 }}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image resizeMode="contain"
                  source={require("../../assets/images/twitter.png")}
                  style={{ width: 24, height: 24 ,backgroundColor: "transparent"}}
                  />
              </TouchableOpacity>
            </View>

            
          </LinearGradient>
          </View>
          {/* Sign Up Prompt */}
          
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
  
  getStarted: {
    color: "#fff",
    fontSize: 46,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 1,
    marginTop: 14,
    fontFamily: "inter",

  },
  formCard: {
    
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    padding: 24,
    paddingTop: 32,
    marginTop: 0,
    flex: 1,
   
    
  },
  label: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
    marginTop: 16,
    fontFamily: "inter",
    
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
    
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "inter",
    width: "100%",
    height: 50,
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
    color: "rgb(156, 135, 49)",
    fontSize:18 ,
    marginTop: 0,
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
    color: "#000",
    fontWeight: "bold",
    fontSize: 36,
    letterSpacing: 1,
    fontFamily: "inter",
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
    color: "rgb(141, 121, 42)",
    fontWeight: "bold",
    fontSize: 20,
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
    backgroundColor: "transparent",
    borderRadius: 50,
    padding: 6,
    elevation: 2,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
});