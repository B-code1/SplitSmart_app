import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const initialMembers = [
  { name: "Adeola", initial: "A" },
  { name: "Promise", initial: "P" },
  { name: "Sulaimon", initial: "S" },
];

export default function EditGroupScreen({ navigation }: any) {
  const [groupName, setGroupName] = useState("prefilled with existing group name");
  const [groupDesc, setGroupDesc] = useState("prefilled with existing group descriptin");
  const [members, setMembers] = useState(initialMembers);

  const handleRemoveMember = (idx: number) => {
    setMembers(members.filter((_, i) => i !== idx));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Group</Text>
        <View style={{ width: 24 }} />
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 30 }}>
        {/* Avatar with camera icon */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Ionicons name="camera-outline" size={28} color="#222" style={styles.cameraIcon} />
          </View>
        </View>
        {/* Group Name */}
        <Text style={styles.label}>Group Name</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={groupName}
            onChangeText={setGroupName}
          />
          <TouchableOpacity>
            <MaterialIcons name="edit" size={22} color="#888" />
          </TouchableOpacity>
        </View>
        {/* Group Description */}
        <Text style={styles.label}>Group Description</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={groupDesc}
            onChangeText={setGroupDesc}
          />
          <TouchableOpacity>
            <MaterialIcons name="edit" size={22} color="#888" />
          </TouchableOpacity>
        </View>
        {/* Members */}
        <Text style={styles.label}>Members</Text>
        <View style={{ width: "100%", paddingHorizontal: 30 }}>
          {members.map((member, idx) => (
            <View key={idx} style={styles.memberRow}>
              <View style={styles.memberAvatar}>
                <Text style={styles.memberInitial}>{member.initial}</Text>
              </View>
              <Text style={styles.memberName}>{member.name}</Text>
              <TouchableOpacity onPress={() => handleRemoveMember(idx)}>
                <Ionicons name="trash-outline" size={22} color="#888" />
              </TouchableOpacity>
            </View>
          ))}
          {/* Add new member */}
          <TouchableOpacity style={styles.addMemberRow} onPress={() => router.navigate("/(Group)/addMember")}>
            <Ionicons name="add" size={22} color="#3498DB" />
            <Text style={styles.addMemberText}>Add new member</Text>
          </TouchableOpacity>
        </View>
        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveBtn}>
          <LinearGradient
            colors={["#FFD600", "#2196f3"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.saveBtnInner}
          >
            <Text style={styles.saveBtnText}>Save Changes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    color: "#000",
  },
  avatarWrapper: {
    alignItems: "center",
    marginVertical: 18,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 2,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  label: {
    color: "#000",
    fontSize: 24,
    fontWeight: "400",
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 30,
    alignSelf: "flex-start",
    letterSpacing: 0.5,
    fontFamily: "Inter_400Regular",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F9FD",
    borderRadius: 10,
    marginHorizontal: 30,
    marginBottom: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 6,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 15,
    color: "#000",
    backgroundColor: "transparent",
    fontWeight: "300",
    fontFamily: "Inter_300Light",
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  memberAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#5DADE2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  memberInitial: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  memberName: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    fontWeight: "400",
  },
  addMemberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 18,
    marginLeft: 2,
  },
  addMemberText: {
    color: "#3498DB",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 6,
  },
  saveBtn: {
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 18,
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
    fontSize: 20, 
    letterSpacing: 1,
    fontFamily: "Inter_700Bold",
  },
});