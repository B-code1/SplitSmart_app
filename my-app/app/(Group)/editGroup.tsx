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
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { router } from "expo-router";
import Authstyles from "../(Auth)/authStyle";
import CustomButton from "@/components/Custombutton";
export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  // You can render EditGroupScreen here or elsewhere as needed
  return <EditGroupScreen />;
}

const EditGroupScreen = () => {
  const [groupName, setGroupName] = useState(
    "prefilled with existing group name"
  );
  const [groupDescription, setGroupDescription] = useState(
    "prefilled with existing group description"
  );
  const [members, setMembers] = useState([
    { id: 1, name: "Adaola", avatar: "A", color: "#4A90E2" },
    { id: 2, name: "Promise", avatar: "P", color: "#4A90E2" },
    { id: 3, name: "Solomon", avatar: "S", color: "#F39C12" },
  ]);

  const removeMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const addNewMember = () => {
    // Logic to add new member would go here
    console.log("Add new member pressed");
  };

  const saveChanges = () => {
    // Logic to save changes would go here
    console.log("Save changes pressed");
  };

  type Member = { id: number; name: string; avatar: string; color: string };

  const renderMember = (member: Member) => (
    <View key={member.id} style={styles.memberRow}>
      <View style={styles.memberInfo}>
        <View style={[styles.avatar, { backgroundColor: member.color }]}>
          <Text style={styles.avatarText}>{member.avatar}</Text>
        </View>
        <Text style={styles.memberName}>{member.name}</Text>
      </View>
      <TouchableOpacity onPress={() => removeMember(member.id)}>
        <Ionicons name="trash-outline" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#E3F2FD" /> */}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Group</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* Group Image */}
        <View style={styles.imageSection}>
          <View style={styles.imagePlaceholder}>
            <Ionicons name="camera" size={30} color="#999" />
          </View>
        </View>

        {/* Group Name */}
        <View style={styles.inputSection}>
          <View style={styles.inputHeader}>
            <Text style={styles.inputLabel}>Group Name</Text>
            <TouchableOpacity>
              <Ionicons name="pencil" size={18} color="#666" />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            value={groupName}
            onChangeText={setGroupName}
            placeholder="Enter group name"
          />
        </View>

        {/* Group Description */}
        <View style={styles.inputSection}>
          <View style={styles.inputHeader}>
            <Text style={styles.inputLabel}>Group Description</Text>
            <TouchableOpacity>
              <Ionicons name="pencil" size={18} color="#666" />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            value={groupDescription}
            onChangeText={setGroupDescription}
            placeholder="Enter group description"
            multiline
          />
        </View>

        {/* Members */}
        <View style={styles.membersSection}>
          <Text style={styles.membersTitle}>Members</Text>
          {members.map(renderMember)}

          {/* Add New Member Button */}
          <TouchableOpacity
            style={styles.addMemberButton}
            onPress={() => router.navigate("/addMember")}
          >
            <Ionicons name="add" size={20} color="#4A90E2" />
            <Text style={styles.addMemberText}>Add new member</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => router.navigate("/Home")}
      >
        <LinearGradient
          colors={["#FFD600", "#2196f3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signUpBtnInner}
        >
          <Text style={styles.signUpText}>Save Changes</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
  signUpBtn: {
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    width: "80%",
    // padding: 20,
  },
  signUpBtnInner: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 28,
    letterSpacing: 1,
  },
  membersSection: {
    marginBottom: 20,
  },
  membersTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 16,
  },
  memberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  memberInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  memberName: {
    fontSize: 16,
    color: "#333",
  },
  addMemberButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 8,
  },
  addMemberText: {
    fontSize: 16,
    color: "#4A90E2",
    marginLeft: 8,
  },
  bottomSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  imageSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  inputSection: {
    marginBottom: 24,
  },
  inputHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: "#666",
    backgroundColor: "#F9F9F9",
  },
});
