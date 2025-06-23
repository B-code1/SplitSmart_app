import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateGroupScreen() {
  const params = useLocalSearchParams();
  const [emailInput, setEmailInput] = useState<string>("");
  const [emails, setEmails] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [alertText, setAlertText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Add a new email to the list if valid and unique
  const addEmail = () => {
    const email = emailInput.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailRegex.test(email) && !emails.includes(email)) {
      setEmails([...emails, email]);
      setEmailInput("");
    } else {
      Alert.alert("Invalid Email", "Please enter a valid and unique email address.");
    }
  };

  // Main handler: create group and expense
  const handleCreateGroup = async () => {
    setAlertText(null);

    if (!emails.length) {
      setAlertText("Please add at least one member email.");
      return;
    }

    setLoading(true);

    try {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        setAlertText("Session expired. Please log in again.");
        setLoading(false);
        return router.replace("/login");
      }

      const groupData = {
        name: params.groupName || "Group Name",
        description: description || "No description provided",
        members: emails,
        amount: params.amount,
        image: params.groupImage || null,
      };

      // 1. Create the group
      const response = await fetch(
        "https://splitsmart-project.onrender.com/api/groups",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(groupData),
        }
      );

      const raw = await response.text();
      let data;
      try {
        data = JSON.parse(raw);
      } catch (e) {
        setAlertText("Unexpected response from server.");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setAlertText(data.message || "Failed to create group");
        setLoading(false);
        return;
      }

      const groupId = data.group?._id;
      if (!groupId) {
        setAlertText("Group created but no group ID returned.");
        setLoading(false);
        return;
      }

      // 2. Create the group expense
      const expenseData = {
        groupId,
        amount: params.amount || 0,
        description: description || "Group expense",
        paidBy: params.creatorEmail || "", // replace with actual user if available
        splitamong: emails,
      };

      const expenseRes = await fetch("https://splitsmart-project.onrender.com/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(expenseData),
      });

      const expenseRaw = await expenseRes.text();
      let expenseResult;
      try {
        expenseResult = JSON.parse(expenseRaw);
      } catch (e) {
        setAlertText("Group created, but error parsing expense response.");
        setLoading(false);
        return;
      }

      if (!expenseRes.ok) {
        setAlertText(expenseResult.message || "Group created, but failed to add expense.");
        setLoading(false);
        return;
      }

      setAlertText("Group and expense created successfully!");
      setTimeout(() => {
        router.replace("/(tabs)/Home");
      }, 1500);
    } catch (err) {
      setAlertText("Failed to create group. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create A Group</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Member Email Input */}
        <View style={styles.section}>
          <Text style={styles.label}>Add Members (Email)</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Enter member's email"
              placeholderTextColor="#8a8a8a"
              style={styles.inputBox}
              value={emailInput}
              onChangeText={setEmailInput}
              keyboardType="email-address"
              autoCapitalize="none"
              onSubmitEditing={addEmail}
            />
            <TouchableOpacity onPress={addEmail} style={styles.addBtn}>
              <Ionicons name="add" size={28} color="#222" />
            </TouchableOpacity>
          </View>
          {/* Chips */}
          <View style={styles.chipsContainer}>
            {emails.map((email) => (
              <View key={email} style={styles.chip}>
                <Text style={styles.chipText}>{email}</Text>
                <TouchableOpacity
                  onPress={() => setEmails(emails.filter((e) => e !== email))}
                >
                  <Ionicons name="close-circle" size={16} color="#fff" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.label}>Description </Text>
          <TextInput
            placeholder="What's this group about?"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>
        {alertText && (
          <Text style={{ color: alertText.includes("success") ? "green" : "red", textAlign: "center", marginVertical: 8 }}>
            {alertText}
          </Text>
        )}

        {/* Create Button */}
        <TouchableOpacity onPress={handleCreateGroup} style={styles.createBtn} activeOpacity={0.8} disabled={loading}>
          <LinearGradient
            colors={["#2196f3", "#FFD600"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.createBtnInner}
          >
            <Text style={styles.createBtnText}>{loading ? "Creating..." : "Create Group"}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 60,
    backgroundColor: '#AFDDFB',
    justifyContent: 'space-between',
    borderTopLeftRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#222' },
  section: { width: '92%', alignSelf: 'center', marginVertical: 12 },
  label: { fontSize: 18, fontWeight: '500', marginBottom: 6, color: '#000' },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F9FD', borderRadius: 12, elevation: 2 },
  inputBox: { flex: 1, height: 50, paddingHorizontal: 16, fontSize: 16, color: '#222' },
  addBtn: { padding: 8 },
  chipsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  chip: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#222', borderRadius: 16, paddingHorizontal: 10, paddingVertical: 4, marginRight: 8, marginBottom: 8 },
  chipText: { color: '#fff', fontWeight: '500', marginRight: 6 },
  createBtn: { marginTop: 30, width: '95%', alignSelf: 'center', borderRadius: 10, overflow: 'hidden' },
  createBtnInner: { paddingVertical: 14, alignItems: 'center', justifyContent: 'center' },
  createBtnText: { color: '#222', fontWeight: 'bold', fontSize: 20, letterSpacing: 1 },
  input: {
    height: 60,
    backgroundColor: '#F3F9FD',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#222',
    textAlignVertical: 'top',
    elevation: 2,
  },
});