import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import Colors from "../constants/Colors";

export default function LogoutScreen() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    // Add your logout logic here (e.g., clear tokens, reset state)
    setTimeout(() => {
      setLoggingOut(false);
      // Redirect to login or welcome screen
      router.replace("/login");
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.overlay}>
        
        

      <View style={styles.modalBox}>
        <Text style={styles.title}>LOG OUT</Text>
        <Text style={styles.message}>Are You Sure You Want To Log Out.</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogout}
            disabled={loggingOut}
          >
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.back()}
            disabled={loggingOut}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require("../assets/images/cry-cute.gif")} resizeMode="contain"
         style={{ width: 200, height: 200, marginBottom: 20 ,marginTop:20}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.backgroundColor2 ,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#222",
    borderRadius: 4,
    padding: 32,
    width: 320,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 18,
    textAlign: "center",
    color: "#black",
  },
  message: {
    fontSize: 20,
    color: "#222",
    marginBottom: 28,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.text_Light,
  },
});