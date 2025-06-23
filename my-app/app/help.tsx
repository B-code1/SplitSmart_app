import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Route, router } from "expo-router";
import { Linking } from "react-native";
export default function HelpSupportScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help And Support</Text>
        <View style={{ width: 26 }} />
      </View>
      {/* List */}
      <View style={styles.list}>
        <TouchableOpacity style={styles.listItem}
          onPress={() => Linking.openURL("https://docs.google.com/document/d/19mMf97q_fYAZtFZLI8ic6D75OugvYmUKG4KUH71bTJ4/edit?usp=drivesdk")}>
          <FontAwesome5 name="question-circle" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>FAQ</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}
        onPress={() =>Linking.openURL("https://1drv.ms/w/c/72efd8716ae970d9/Ean-CwKP731EurdAetx3MbwB8rvSKT4HusMb6pKnZT9Lbg")}>
          <MaterialCommunityIcons name="account-question" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Support Contact Information</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}
        onPress={() =>Linking.openURL("https://docs.google.com/document/d/19mMf97q_fYAZtFZLI8ic6D75OugvYmUKG4KUH71bTJ4/edit?usp=drivesdk")}>
          <Feather name="file-text" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Terms Of Service</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
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
  list: {
    marginTop: 24,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 22,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  icon: {
    marginRight: 18,
    width: 28,
    textAlign: "center",
  },
  listText: {
    fontSize: 20,
    color: "#000",
    flex: 1,
    fontWeight: "500",
  },
  chevron: {
    marginLeft: 8,
    width: 24,
    textAlign: "right",
  },
  });