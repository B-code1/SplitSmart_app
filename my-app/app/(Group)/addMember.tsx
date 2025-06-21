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
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import Authstyles from "../(Auth)/authStyle";
import CustomButton from "@/components/Custombutton";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = axios.create({
  baseURL: "https://splitsmart-project.onrender.com/api/groups", // Replace with your actual API base URL
});
function CreateGroupScreen() {
  const params = useLocalSearchParams();
  const [input, setInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<{
    email: string;
    name: string;
    avatar?: any;
  } | null>(null);
  const [description, setDescription] = useState('');
const [emailInput, setEmailInput] = useState('');
const [emails, setEmails] = useState<string[]>([]);

const addEmail = () => {
  const email = emailInput.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email && emailRegex.test(email) && !emails.includes(email)) {
    setEmails([...emails, email]);
    setEmailInput('');
  } else {
    Alert.alert("Invalid Email", "Please enter a valid and unique email address.");
  }
}


  // Example options with name and avatar (avatar can be a require or uri)
  const emailOptions = [
    { email: "john.doe@example.com", name: "John Doe" },
    { email: "jane.smith@example.com", name: "Jane Smith" },
    { email: "mike.johnson@example.com", name: "Mike Johnson" },
    { email: "sarah.wilson@example.com", name: "Sarah Wilson" },
  ];

  const filteredOptions = input.length
    ? emailOptions.filter((opt) =>
        opt.email.toLowerCase().includes(input.toLowerCase())
      )
    : emailOptions;

  const handleSelect = (opt: { email: string; name: string; avatar?: any }) => {
    setSelected(opt);
    setInput(opt.email);
    setShowDropdown(false);
  };
const getUserIdsFromEmails = async (email: string[], token: string) => {
  const ids = [];
  for (const email of emails) {
    const res = await fetch(`https://splitsmart-project.onrender.com/api/users/by-email?email=${encodeURIComponent(email)}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const user = await res.json();
    if (user && user._id) {
      ids.push(user._id);
    } else {
      throw new Error(`User not found for email: ${email}`);
    }
  }
  return ids;
};

const handleCreateGroup = async () => {
  try {
    if (emails.length > 5) {
      Alert.alert("Too Many Members", "You can only add up to 5 members.");
      return;
    }
    const token = await AsyncStorage.getItem("userToken");
    if (!token) {
      Alert.alert("Session expired", "Please log in again.");
      router.replace("/login");
      return;
    }

    // Convert emails to user IDs
    const memberIds = await getUserIdsFromEmails(emails, token);

    const groupData = {
      name: params.groupName, // use 'name' not 'groupName'
      description,
      members: memberIds, // array of user IDs
      amount: params.amount, // use 'amount' not 'expectedAmount'
      image: params.groupImage || null, // use 'image' not 'groupImage'
    };

    const response = await fetch(`https://splitsmart-project.onrender.com/api/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(groupData),
    });
    const data = await response.json();
    if (!response.ok) {
      Alert.alert("Error", data.message || "Failed to create group");
      return;
    }
    Alert.alert("Success", "Group created successfully!");
    router.replace("/(tabs)/Home");
  } catch (err) {
    console.log("Network or code error:", err);
    let errorMessage = "Network error or unexpected error occurred.";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "object" && err !== null && "message" in err) {
      errorMessage = String((err as any).message);
    }
    Alert.alert("Error", errorMessage);
  }
};
  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create A Group</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar */}

      {/* Content */}
      <View style={{ alignItems: "center", paddingBottom: 30}}>
      <View style={{ width: "92%", marginBottom: 18,marginTop: 40 }}>
          <Text style={styles.label}>Add Members Email</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Enter member's email"
              placeholderTextColor="#8a8a8a"
              style={styles.inputBox}
              value={input}
            
             

              onChangeText={(text) => {
                setInput(text);
                setShowDropdown(true);
                setEmailInput(text);
              }}
              onFocus={() => setShowDropdown(true)}
              autoCapitalize="none"
              keyboardType="email-address"
              onSubmitEditing={addEmail} 
            />
             <TouchableOpacity
          style={styles.dropdownIcon}
           onPress={addEmail} // Add email on button press
    >
    <Ionicons name="add" size={28} color="#222" />
    </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownIcon}
              onPress={() => setShowDropdown((v) => !v)}
            >
              <Ionicons name={showDropdown ? "chevron-up" : "chevron-down"} size={28} color="#222" />
            </TouchableOpacity>
          </View>
         
          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 8 }}>
    {emails.map((email, idx) => (
      <View key={email} style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginRight: 8,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center"
      }}>
        <Text style={{ color: "#000", fontWeight: "bold", marginRight: 6 }}>{email}</Text>
        <TouchableOpacity onPress={() => setEmails(emails.filter((e) => e !== email))}>
          <Ionicons name="close-circle" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    ))}
          </View>
          {/* Dropdown */}
          {showDropdown && filteredOptions.length > 0 && (
            <View style={styles.dropdownList}>
              {filteredOptions.map((opt, idx) => (
                <TouchableOpacity
                  key={opt.email}
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(opt)}
                >
                  <Text style={styles.dropdownItemText}>{opt.email}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
         
        </View>
        {/* Description */}
        <View style={{ width: "92%", marginBottom: 18 }}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            placeholder="What's This Group About?"
          
            placeholderTextColor="#8a8a8a"
            style={styles.input}
            multiline
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        
        {/* Create Group Button */}
        <TouchableOpacity style={styles.createBtn}
          onPress={handleCreateGroup}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["#2196f3", "#FFD600"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.createBtnInner}
          >
            <Text style={styles.createBtnText}>Create Group</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return <CreateGroupScreen />;
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
    paddingHorizontal: 18,
    paddingTop: 70,
    
    backgroundColor: "#AFDDFB",
    justifyContent: "space-between",
    borderTopLeftRadius: 28,
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
  
  label: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 6,
    color: "#000",
    fontFamily: "Inter_500Medium",
    
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F9FD",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 4,
  },
  inputBox: {
    flex: 1,
    height: 60,
    backgroundColor: "#F3F9FD",
    borderRadius: 12,
    borderWidth: 0,
    paddingHorizontal: 16,
    fontSize: 17,
    fontWeight: "500",
    color: "#222",
  },
  dropdownIcon: {
    paddingHorizontal: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownList: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginTop: 2,
    maxHeight: 120,
    overflow: "scroll",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  dropdownItemText: {
    fontSize: 18,
    color: "#333",
  },
  selectedChipRow: {
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 4,
    alignItems: "center",
  },
  selectedChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    elevation: 3,
  },
  
  createBtn: {
    
    borderRadius: 10,
    overflow: "hidden",
    paddingTop: 80,
    width: "95%",
    alignItems: "stretch",
  },
  createBtnInner: {
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
     padding: 20,
     shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 4,
  },
  createBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 1,
    fontFamily: "Inter_500Medium",
    textTransform: "uppercase",
    textAlign: "center",
  },
  input : {
    backgroundColor: "#F3F9FD",
    borderRadius: 12,
    height: 60,
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#222",  
    fontFamily: "Inter_500Medium",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
   
  },
});
