import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "../../constants/Colors";

const TABS = ["All", "Sent", "Received", "Pending"];
const DATA = [
  {
    id: 1,
    name: "jason",
    desc: "paid to you",
    time: "oct6. 4:25 PM",
    amount: "₦2,500",
    status: "received",
    method: "via wallet",
  },
  // ...repeat as needed for demo
  {
    id: 2,
    name: "jason",
    desc: "paid to you",
    time: "oct6. 4:25 PM",
    amount: "₦2,500",
    status: "received",
    method: "via wallet",
  },
  {
    id: 3,
    name: "jason",
    desc: "paid to you",
    time: "oct6. 4:25 PM",
    amount: "₦2,500",
    status: "received",
    method: "via wallet",
  },
  {
    id: 4,
    name: "jason",
    desc: "paid to you",
    time: "oct6. 4:25 PM",
    amount: "₦2,500",
    status: "received",
    method: "via wallet",
  },
 
];

export default function SplitPayment() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLogoRow}>
          <Text style={styles.headerTitle}>SplitSmart</Text>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>
        Welcome to SplitSmart! Let’s show you how you can split bill MOF free/easy.
      </Text>
      <Text style={styles.pageTitle}>Split Payment</Text>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabBtn,
              activeTab === tab && styles.tabBtnActive,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabBtnText,
                activeTab === tab && styles.tabBtnTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <ScrollView style={{ flex: 1 }}>
        {DATA.map((item) => (
          <View key={item.id} style={styles.listRow}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={28} color="#bbb" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.amountCol}>
              <Text style={styles.amount}>{item.amount}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="checkmark-circle" size={14} color="white" style={{ marginRight: 2 }} />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
              <Text style={styles.methodText}>{item.method}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export const options = {
  title: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 19,
    paddingHorizontal: 16,

   

  },
  headerLogoRow: {
    flexDirection: "row",
    alignSelf:"center",
    alignItems: "center",
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginRight: 6,
  },
  logo: {
    width: 32,
    height:32,
    resizeMode: "contain",
    alignItems:"center",
    justifyContent:"center",
    marginRight: 8,
    
  },
  backBtn: {
    padding: 4,
    borderRadius: 16,
    backgroundColor: "#eee",
  },
  welcomeText: {
    fontSize: 16,
    color: "#ffff",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 4,
  },
  pageTitle: {
    fontSize: 20,
    color: "#222",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  tabsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    gap: 8,
  },
  tabBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    marginHorizontal: 2,
  },
  tabBtnActive: {
    backgroundColor: "#03b6fc",
  },
  tabBtnText: {
    color: "#888",
    fontWeight: "bold",
    fontSize: 14,
  },
  tabBtnTextActive: {
    color: "#fff",
  },
  listRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    gap: 12,
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    color: "#222",
    fontWeight: "bold",
  },
  desc: {
    fontSize: 13,
    color: Colors.primary,
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 2,
  },
  amountCol: {
    alignItems: "flex-end",
    minWidth: 80,
  },
  amount: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 12,
    color: "#fff",
    marginLeft: 2,
  },
  methodText: {
    fontSize: 12,
    color: "black",
    marginTop: 2,
  },
});
