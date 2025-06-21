import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProfileInfoScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Information</Text>
        <View style={{ width: 26 }} />
      </View>
      {/* Profile Content */}
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
          }}
          style={styles.avatar}
        />
        </View>
        <View style={styles.group}>
        <Text style={styles.label}>Admin</Text>
        <Text style={styles.email}>Matthew@Gmail.Com</Text>
        <Text style={styles.label}>Group Name</Text>
        <Text style={styles.groupName}>Holiday Hangout Crew</Text>
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
    textAlign: "center",
    fontFamily:'inter'
  },
  
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 18,
  },
    content: {
        alignItems: "center",
        paddingHorizontal: 16,
        
    },

    group:
    {
           alignItems: "flex-start",
         paddingHorizontal: 16,
         paddingLeft: 24,
    },
  label: {
    fontSize: 18,
    color: "#000",
    marginTop: 8,
    marginBottom:8,
    fontWeight: "500",
    fontFamily: 'inter'
  },
  email: {
    fontSize: 20,
    color: "#000",
    fontWeight: "500",
    marginBottom: 16,
    fontFamily: 'inter'
  },
  groupName: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginTop: 2,
    fontFamily: 'inter'
  

  },
});