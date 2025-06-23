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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const BASE_URL = 'https://splitsmart-project.onrender.com/'; 
  
  const [groupName, setGroupName] = useState('');
  const [expectedAmount, setExpectedAmount] = useState('');
  const [groupImage, setGroupImage] = useState(null);

  const handleNext = () => {
  if (!groupName) {
    Alert.alert("Please enter a group name");
    return;
  }
  router.navigate({
    pathname: "/addMember",
    params: {
      groupName,
      amount: expectedAmount,
      groupImage: groupImage ?? "",
    },
  });
};



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
   
<View style={{ width: "90%", marginBottom: 18 }}>
  <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
    Group Name
  </Text>
  <TextInput
    placeholder="e.g, beach, class dues..."
    placeholderTextColor="#8a8a8a"
    style={styles.inputBox}
    onChangeText={(text) => setGroupName(text)}
    value={groupName}
  />
</View>
<View style={{ width: "90%", marginBottom: 18 }}>
  <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
    Expected Amount Per Person
  </Text>
  <TextInput
    placeholder="₦0.00"
    placeholderTextColor="#8a8a8a"
    style={styles.inputBox}
    keyboardType="numeric"
    onChangeText={(text) => setExpectedAmount(text)}
    value={expectedAmount}

  />

</View>
      <TouchableOpacity
        style={styles.grpContainer}
        onPress={handleNext}
      >
        <View>
          <View style={styles.innergrpContainer}>
            <Ionicons
              name="person-add"
              size={30}
              color="#3498DB"
              style={styles.innerIcon}
            />
            <Text style={styles.innerTxt}>Add  Group Members</Text>
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
    alignItems: "center",
   
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
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,

    // alignItems: "center",
  },
  grpContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,

  },
  innergrpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerIcon: {
    marginRight: 10,
  },
  innerTxt: {
    fontSize: 24,
    color: "#3498DB",
    fontWeight: "500",
    fontFamily: "Inter_600SemiBold",
  },
  inputBox: {
  height: 50,
  backgroundColor: "#F3F9FD",
  borderRadius: 12,
  borderWidth: 0,
  paddingHorizontal: 16,
  fontSize: 17,
  fontWeight: "500",
  color: "#222",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.08,
  shadowRadius: 6,
  elevation: 2,
  marginBottom: 4,
},
});
