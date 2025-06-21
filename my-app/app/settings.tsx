import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
export default function AccountSettingsScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
        <View style={{ width: 26 }} />
      </View>
      {/* List */}
      <View style={styles.list}>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="person-outline" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Account</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="notifications-outline" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Notification</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <MaterialCommunityIcons name="shield-check" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Security</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Feather name="globe" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Language</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Ionicons name="help-circle-outline" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Help</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Feather name="monitor" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Display</Text>
          <Feather name="chevron-right" size={24} color="#222" style={styles.chevron} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <Entypo name="log-out" size={24} color="#222" style={styles.icon} />
          <Text style={styles.listText}>Log Out</Text>
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
    fontWeight: "600",
    color: "#000",
    fontFamily: 'inter',
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
    fontFamily: 'inter',
  },
  chevron: {
    marginLeft: 8,
    width: 24,
    textAlign: "right",
  },
});