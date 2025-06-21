import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
const TABS = ["All", "Sent", "Received", "Pending"];

const payments = [
  {
    id: 1,
    name: "Kenny",
    desc: "Owes You For Game Night",
    amount: "2,500",
    status: "Pending",
    statusIcon: <MaterialIcons name="hourglass-empty" size={18} color="#888" />,
    statusColor: "#888",
    requested: "Oct 7",
    time: "12:45 PM",
    type: "Pending",
  },
  {
    id: 2,
    name: "Jason",
    desc: "Paid To You",
    amount: "2,500",
    status: "Received",
    statusIcon: <Ionicons name="checkmark-circle" size={18} color="#2ecc40" />,
    statusColor: "#2ecc40",
    requested: "Oct 7",
    time: "12:45 PM",
    type: "Received",
  },
  {
    id: 3,
    name: "Adeola",
    desc: "You Paid For Dinner Bill",
    amount: "1,800",
    status: "Sent",
    statusIcon: <Ionicons name="checkmark-circle" size={18} color="#2ecc40" />,
    statusColor: "#2ecc40",
    requested: "Oct 6",
    time: "11:25 PM",
    type: "Sent",
  },
  {
    id: 4,
    name: "Tofunmi",
    desc: "Hasn't Paid For Dinner Bill",
    amount: "1,800",
    status: "Pending",
    statusIcon: <MaterialIcons name="hourglass-empty" size={18} color="#888" />,
    statusColor: "#888",
    requested: "Oct 6",
    time: "11:20 PM",
    type: "Pending",
  },
];

export default function SplitPaymentScreen() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPayments =
    activeTab === "All"
      ? payments
      : payments.filter((p) => p.type === activeTab);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Split Payment</Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color="#222" />
        </TouchableOpacity>
      </View>

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

      {/* Payment Cards */}
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        {filteredPayments.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardRow}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={38} color="#636363" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.cardAmount}>₦{item.amount}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.statusIcon}
                  <Text style={[styles.cardStatus, { color: item.statusColor }]}>
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>Requested {item.requested}</Text>
              <Text style={styles.cardFooterText}>{item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Tab Bar */}
      
      
    </SafeAreaView>
  );
}

const CARD_BG = "#D9F0FF";
const TAB_BG = "#AFDDFB";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  headerRow: {
   flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 70,
    
    backgroundColor: "#F3F9FD",
    justifyContent: "space-between",
    borderTopLeftRadius: 28,
    
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter_500Medium",
  },
  tabsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    
    marginBottom: 6,
    gap: 8,
  },
  tabBtn: {
    flex: 1,
    backgroundColor: TAB_BG,
    borderRadius: 10,
    paddingVertical: 7,
    marginHorizontal: 2,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b3d8f7",
  },
  tabBtnActive: {
    backgroundColor: "#3498DB",
    borderColor: "#03b6fc",
  },
  tabBtnText: {
    color: "#222",
    fontSize: 15,
    fontWeight: "500",
  },
  tabBtnTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 20,
    marginHorizontal: 12,
    marginVertical: 7,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5,
    width: "95%",
    height: 120,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#b3d8f7",
  },
  cardName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    textTransform: "capitalize",
    fontFamily: "Inter_600SemiBold",
  },
  cardDesc: {
    fontSize: 15,
    color: "#000",
    opacity: 0.7,
    marginBottom: 2,
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
  },
  cardAmount: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#222",
  },
  cardStatus: {
    fontSize: 14,
    marginLeft: 4,
    fontWeight: "500",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#b3d8f7",
    paddingTop: 4,
    marginTop: 2,
  },
  cardFooterText: {
    fontSize: 14,
    color: "#222",
    opacity: 0.7,
  },
  
});