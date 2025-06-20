import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function LogoutScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Log Out</Text>
        <View style={{ width: 26 }} />
      </View>
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.question}>Are You Sure You Want To Log Out?</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonShadow}>
            <LinearGradient
              colors={["#4fc3f7", "#ffe082"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonShadow}>
            <LinearGradient
              colors={["#4fc3f7", "#ffe082"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>No</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#e3f2fd",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#222",
    textAlign: "center",
  },
  content: {
 
    justifyContent: "center",
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 50,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
  },
  buttonShadow: {
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    marginHorizontal: 8,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    minWidth: 135,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "Inter_600SemiBold",
  },
});