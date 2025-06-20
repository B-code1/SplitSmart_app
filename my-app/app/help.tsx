import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default function HelpSupportScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack?.()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help And Support</Text>
        <View style={{ width: 26 }} />
      </View>
      {/* List */}
      <View style={styles.list}>
        <TouchableOpacity style={styles.listItem}>
          <FontAwesome5 name="question-circle" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>FAQ</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <MaterialCommunityIcons name="account-question" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Support Contact Information</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
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
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#e3f2fd",
    justifyContent: "space-between",
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