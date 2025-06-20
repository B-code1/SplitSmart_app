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

      <View style={styles.avatar}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Add {"\n"}
            Group Image
          </Text>
        </TouchableOpacity>
      </View>

      {/* Avatar */}
      <View style={{ width: "80%", marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 500, marginVertical: 10 }}>
          Group Name
        </Text>
        <TextInput
          placeholder="e.g, beach, class dues "
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
      <View style={{ width: "80%" }}>
        <Text style={{ fontSize: 18, fontWeight: 500, marginVertical: 10 }}>
          Expected Amount Per Person
        </Text>
        <TextInput
          placeholder="N 0.00 "
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
      <TouchableOpacity
        style={styles.grpContainer}
        onPress={() => {
          router.navigate("/addMember");
        }}
      >
        <View>
          <View style={styles.innergrpContainer}>
            <Ionicons
              name="person-add"
              size={30}
              color="#3498DB"
              style={styles.innerIcon}
            />
            <Text style={styles.innerTxt}>Create New Group</Text>
          </View>
        </View>
      </TouchableOpacity>
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
