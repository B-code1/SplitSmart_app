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
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { router } from "expo-router";
import Authstyles from "../(Auth)/authStyle";
import CustomButton from "@/components/Custombutton";
import { LinearGradient } from "expo-linear-gradient";
export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Join Group</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={{  alignSelf: "stretch", marginTop: 20 }}>
       <Text
       style={{
    fontSize: 26,
    fontWeight: "500",
    fontFamily: "inter",
    color: "#222",
    marginBottom: 24,
    paddingTop: 20,
    textAlign: "center",
    textTransform: "capitalize",
  }}
>
  Enter A Group Code to Join an{"\n"}Existing Group
</Text>
        <TextInput
          placeholder="Enter Code "
          placeholderTextColor={"black"}
          style={{
            height: 50,
            backgroundColor: "#F3F9FD",
            borderRadius: 8,
            borderWidth: 1,
            padding: 10,
            marginHorizontal: 30,
            marginBottom: 10,
             paddingHorizontal: 10,
             shadowColor: "#000",
             shadowOffset: { width: 3, height: 5 },
              shadowOpacity: 0.10,
              shadowRadius: 4,
              elevation: 6,

          }}
        />
      </View>
      <TouchableOpacity style={styles.saveBtn}>
                <LinearGradient
                  colors={["#FFD600", "#2196f3"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.saveBtnInner}
                >
                  <Text style={styles.saveBtnText}>Join Group</Text>
                </LinearGradient>
              </TouchableOpacity>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   
  },
  Downcontainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 70,
    
    backgroundColor: "#AFDDFB",
    justifyContent: "space-between",
    outlineWidth: 2,
    outlineColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
   saveBtn: {
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
  },
  saveBtnInner: {
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtnText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 22, 
    letterSpacing: 1,
    fontFamily: "inter",
  },
});
