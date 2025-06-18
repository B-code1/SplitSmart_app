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
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>SplitSmart</Text>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.welcomeText}>
        Welcome to SplitSmart! Lets show you how you can split bill NOT
        friendship.
      </Text>

      <Text style={styles.grpTxt}>GROUP</Text>
      <TouchableOpacity style={styles.grpContainer}>
        <View>
          <View style={styles.innergrpContainer}>
            <Ionicons
              name="add"
              size={30}
              color="#fff"
              style={styles.innerIcon}
            />
            <Text style={styles.innerTxt}>Create New Group</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.grpContainer}>
        <View>
          <View style={styles.innergrpContainer}>
            <Ionicons
              name="people"
              size={30}
              color="#fff"
              style={styles.innerIcon}
            />
            <Text style={styles.innerTxt}>Join Group</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grpContainer}>
        <View>
          <View style={styles.innergrpContainer}>
            <Ionicons
              name="eye-outline"
              size={30}
              color="#fff"
              style={styles.innerIcon}
            />
            <Text style={styles.innerTxt}>View Group details </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.grpContainer}>
        <View>
          <View style={styles.innergrpContainer}>
            <Ionicons
              name="pencil"
              size={25}
              color="#fff"
              style={styles.innerIcon}
            />
            <Text style={styles.innerTxt}>Edit Group</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 16,
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 4,
    marginTop: 25,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginRight: 8,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  welcomeText: {
    marginHorizontal: 10,
    fontSize: 17,
    color: "white",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 8,
    alignSelf: "stretch",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
  },
  grpTxt: {
    fontSize: 30,
    fontFamily: "PoppinsBold",
    alignSelf: "center",
    marginTop: 10,
  },
  grpContainer: {
    backgroundColor: "#9D9D9D",
    // borderWidth: 1,
    width: "90%",
    height: "10%",
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 8,
  },
  innergrpContainer: {
    flexDirection: "row",
    alignSelf: "center",
    verticalAlign: "middle",
    marginTop: "5%",
  },
  innerIcon: {
    color: " black",
    alignSelf: "flex-end",
    marginRight: 16,
    marginBottom: 8,
    gap: 12,
  },
  innerTxt: {
    fontSize: 20,
    fontWeight: 600,
  },
});
