import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "../constants/Colors";

export default function AccountSetting() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Setting</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="person-outline" size={28} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Account</Text>
        <Ionicons name="chevron-forward" size={24} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="notifications-outline" size={28} color="#222" style={styles.menuIcon} />
        <Text style={styles.menuText}>Notification</Text>
        <Ionicons name="chevron-forward" size={24} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialCommunityIcons name="shield-check-outline" size={28} color="#222" style={styles.menuIcon} />
        <Text style={styles.menuText}>Security</Text>
        <Ionicons name="chevron-forward" size={24} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name="language" size={28} color="#222" style={styles.menuIcon} />
        <Text style={styles.menuText}>Language</Text>
        <Ionicons name="chevron-forward" size={24} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="help-circle-outline" size={28} color="#222" style={styles.menuIcon} />
        <Text style={styles.menuText}>Help</Text>
        <Ionicons name="chevron-forward" size={24} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <MaterialIcons name="desktop-windows" size={28} color="#222" style={styles.menuIcon} />
        <Text style={styles.menuText}>Display</Text>
        <Ionicons name="chevron-forward" size={24} color="#222" style={styles.menuArrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/logout")}>
        <MaterialCommunityIcons name="logout" size={28} color="#222" style={styles.menuIcon} />
        <Text style={styles.menuText}>Logout</Text>
        <Ionicons name="chevron-forward" size={24} color="#222" style={styles.menuArrow} />
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
    paddingHorizontal: 16,
    marginBottom: 8,
    marginTop: 30,
    alignSelf: "stretch",
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
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
    marginRight: 18,
    color: "#222",
    width: 28,
  },
  menuText: {
    flex: 1,
    fontSize: 20,
    color: "#222",
    fontWeight: "500",
  },
  menuArrow: {
    marginLeft: 8,
    color: "#fff",
  },
});