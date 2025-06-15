import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "../constants/Colors";

export default function HelpSupport() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Logo Bar */}
      <View style={styles.logoBar}>
        <Text style={styles.logoBarText}>Splitsmart</Text>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="comment-question-outline" size={32} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>FAQ’s</Text>
        <Ionicons name="chevron-forward" size={28} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name="support-agent" size={32} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Support Contact Information</Text>
        <Ionicons name="chevron-forward" size={28} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name="description" size={32} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Terms Of Service</Text>
        <Ionicons name="chevron-forward" size={28} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginBottom: 8,
    marginTop: 30,
    alignSelf: "stretch",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
  },
  logoBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor2,
    alignSelf: "center",
    borderRadius: 4,
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    gap: 8,
  },
  logoBarText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
    marginRight: 6,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 22,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 24,
    color: "black",
    fontWeight: "500",
  },
    menuArrow: {
        marginLeft: 16,
    },
});