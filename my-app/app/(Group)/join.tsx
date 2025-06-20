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

      <View style={{ width: "80%" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          Ener A Group Code to Join an Existing Group
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
          }}
        />
      </View>
      <CustomButton
        text={"Join Group"}
        onPress={() => {
          router.navigate("/viewGroup");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16,
    alignItems: "center",
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
    paddingHorizontal: 16,
    paddingBottom: 8,
    height: "20%",
    marginBottom: 8,
    marginTop: 25,
    backgroundColor: "#AFDDFB",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  avatar: {
    borderWidth: 1,
    height: 150,
    width: 150,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // alignItems: "center",
  },
  grpContainer: {
    backgroundColor: "#FFFFFFF",
    // borderWidth: 1,

    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 40,
  },
  innergrpContainer: {
    flexDirection: "row",
    alignSelf: "center",
    verticalAlign: "middle",
    marginTop: "5%",
  },
  innerIcon: {
    alignSelf: "flex-end",
    marginRight: 16,
    marginBottom: 8,
    gap: 12,
  },
  innerTxt: {
    fontSize: 20,
    fontWeight: 600,
    color: "#3498DB",
  },
});
