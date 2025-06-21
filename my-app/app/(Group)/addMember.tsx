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
function CreateGroupScreen() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

  const emailOptions = [
    "john.doe@example.com",
    "jane.smith@example.com",
    "mike.johnson@example.com",
    "sarah.wilson@example.com",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectEmail = (email: string) => {
    if (selectedEmails.includes(email)) {
      setSelectedEmails(selectedEmails.filter((e) => e !== email));
    } else {
      setSelectedEmails([...selectedEmails, email]);
    }
  };

  const goBack = () => {
    // Navigation logic would go here
    console.log("Go back pressed");
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
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Add Members Email</Text>

        {/* Dropdown Container */}
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            style={[
              styles.dropdownButton,
              isDropdownOpen && styles.dropdownButtonOpen,
            ]}
            onPress={toggleDropdown}
          >
            <View style={styles.dropdownContent}>
              {selectedEmails.length > 0 ? (
                <View style={styles.selectedEmailsContainer}>
                  {selectedEmails.map((email, index) => (
                    <View key={index} style={styles.emailTag}>
                      <Text style={styles.emailTagText}>{email}</Text>
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={styles.placeholderText}>Select members...</Text>
              )}
            </View>
            <Ionicons
              name={isDropdownOpen ? "chevron-up" : "chevron-down"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>

          {/* Dropdown List */}
          {isDropdownOpen && (
            <View style={styles.dropdownList}>
              {emailOptions.map((email, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dropdownItem,
                    selectedEmails.includes(email) && styles.selectedItem,
                  ]}
                  onPress={() => selectEmail(email)}
                >
                  <Text
                    style={[
                      styles.dropdownItemText,
                      selectedEmails.includes(email) && styles.selectedItemText,
                    ]}
                  >
                    {email}
                  </Text>
                  {selectedEmails.includes(email) && (
                    <Ionicons name="checkmark" size={16} color="#4A90E2" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={{ width: "80%" }}>
          <Text style={{ fontSize: 18, fontWeight: "500", marginVertical: 10 }}>
            Description
          </Text>
          <TextInput
            placeholder="What's This Group About "
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
          text={"Create Group"}
          onPress={() => {
            router.navigate("/join");
          }}
        />
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
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#e3f2fd",
    justifyContent: "space-between",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
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
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 12,
  },
  dropdownContainer: {
    position: "relative",
    zIndex: 1000,
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#F8F9FA",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    minHeight: 50,
  },
  dropdownButtonOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: "transparent",
  },
  dropdownContent: {
    flex: 1,
    marginRight: 10,
  },
  placeholderText: {
    color: "#999",
    fontSize: 16,
  },
  selectedEmailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  emailTag: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 4,
  },
  emailTagText: {
    fontSize: 12,
    color: "#1976D2",
  },
  dropdownList: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    maxHeight: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  selectedItem: {
    backgroundColor: "#F3F8FF",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  selectedItemText: {
    color: "#4A90E2",
    fontWeight: "500",
  },
});
