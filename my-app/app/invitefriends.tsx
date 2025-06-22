import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function InviteFriendsScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back ()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Invite Friends</Text>
        <View style={{ width: 26 }} />
      </View>
      {/* Content */}
      <View style={styles.content}>
        <FontAwesome5 name="user-friends" size={150} color="#b3d8f7" style={{ marginBottom: 18 }} />
        <Text style={styles.infoText}>
          Thanks for signing up! Tap the button below to invite friends to join you.
        </Text>
        <TouchableOpacity style={styles.buttonShadow}>
          <LinearGradient
            colors={["#b3d8f7", "#ffe082"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Invite Friends</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonShadow, { marginTop: 18 }]}>
          <LinearGradient
            colors={["#ffe082", "#b3d8f7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1}}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Dismiss</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
      flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 70,
    
    backgroundColor: "#F3F9FD",
    justifyContent: "space-between",
    borderTopLeftRadius: 28,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
  },
  infoText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 28,
    fontWeight: "500",
    fontFamily: "inter",
    marginHorizontal: 18,
  },
  buttonShadow: {
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    marginHorizontal: 8,
    width: "85%",
  },
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 180,
  },
  buttonText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 18,
  },
});