import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { router } from "expo-router";

export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create A Group</Text>
        <View style={{ width: 24 }} />
      </View>
      {/* Group Options */}
       <View style={styles.content}>
      <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(Group)/create")}>
        <Ionicons name="add" size={26} color="#222" style={styles.icon} />
        <Text style={styles.actionText}>Create New Group</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(Group)/join")}>
        <Ionicons name="people-outline" size={24} color="#222" style={styles.icon} />
        <Text style={styles.actionText}>Join Group</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(Group)/addMember")}>
        <Ionicons name="eye" size={24} color="#222" style={styles.icon} />
        <Text style={styles.actionText}>View Group Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/(Group)/editGroup")}>
        <Ionicons name="pencil" size={24} color="#222" style={styles.icon} />
        <Text style={styles.actionText}>Edit Group</Text>
      </TouchableOpacity>
    </View>
      
      
          
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
    
  },

  header: {
   flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 70,
    
    backgroundColor: "#AFDDFB",
    justifyContent: "space-between",

    
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "Inter_600SemiBold",
  },
  // logo: {
  //   width: 32,
  //   height: 32,
  //   resizeMode: "contain",
  // },
  // welcomeText: {
  //   marginHorizontal: 10,
  //   fontSize: 17,
  //   color: "white",
  //   textAlign: "center",
  //   marginBottom: 8,
  //   marginTop: 8,
  //   alignSelf: "stretch",
  //   fontWeight: "500",
  //   fontFamily: "Inter_500Medium",
  // },

 
  content: {
    marginTop: 48,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 16,
    flex: 1,

  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F6F9",
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 18,
    width: "80%",
    height: 70,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    padding: 12,
  },
  icon: {
    marginRight: 16,
  },
  actionText: {
    fontSize: 24,
    color: "#000",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    flex: 1,
  },
});
