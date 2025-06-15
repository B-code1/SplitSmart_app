import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "../../constants/Colors"; // Adjust the path as necessary


export default function SendPayment() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Payment</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Today */}
        <Text style={styles.sectionLabel}>Today</Text>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Sulaimon O (You)</Text>
            <Text style={styles.owes}>Owes</Text>
          </View>
          <View style={styles.amountRequest}>
            <Text style={styles.amount}>₦ 2,500</Text>
            <TouchableOpacity style={styles.payBtn}>
              <Text style={styles.payBtnText}>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Adeola B</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Yesterday */}
        <Text style={styles.sectionLabel}>Yesterday</Text>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Sulaimon O (You)</Text>
            <Text style={styles.owes}>Owes</Text>
          </View>
          <View style={styles.amountRequest}>
            <Text style={styles.amount}>₦ 2,500</Text>
            <TouchableOpacity style={styles.payBtn}>
              <Text style={styles.payBtnText}>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Adeola B</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Pay Card */}
        <View style={styles.payCard}>
          <Text style={styles.payCardTitle}>Pay</Text>
          <Text style={styles.payCardLabel}>Amount</Text>
          <Text style={styles.payCardAmount}>₦ 2,500</Text>
          <Text style={styles.payCardBalance}>Your available balance: ₦ 55,250</Text>
          <Text style={styles.payCardLabel}>Pay To</Text>
          <View style={styles.payToRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <View>
              <Text style={styles.payToName}>Adeola B</Text>
              <Text style={styles.payToEmail}>adeola@gmail.com</Text>
            </View>
          </View>
          <View style={styles.payCardBtnRow}>
            <TouchableOpacity style={styles.cancelBtn}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.payNowBtn}>
              <Text style={styles.payNowBtnText}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Hide the folder name/title in the header if using Expo Router
export const options = {
  title: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 8,
  },
    scrollView: {
        paddingHorizontal: 16,
    },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
    
    marginBottom: 8,
    marginTop: 25,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  sectionLabel: {
    fontSize: 15,
    color: "yellow",
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 4,
    fontWeight: "500",
  },
  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 2,
  },
  name: {
    fontSize: 22,
    color: "#222",
    fontWeight: "500",
  },
  owes: {
    fontSize: 15,
    color: "#fff",
  },
  amountRequest: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  amount: {
    fontSize: 18,
    color: "#222",
    fontWeight: "bold",
    marginRight: 8,
  },
  payBtn: {
    backgroundColor: "#eee",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  payBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  payCard: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 12,
    margin: 16,
    padding: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  payCardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
    textAlign: "center",
  },
  payCardLabel: {
    fontSize: 15,
    color: "#888",
    marginTop: 8,
    marginBottom: 2,
  },
  payCardAmount: {
    fontSize: 22,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },
  payCardBalance: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
    textAlign: "center",
  },
  payToRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    gap: 10,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  payToName: {
    fontSize: 18,
    color: "#222",
    fontWeight: "bold",
  },
  payToEmail: {
    fontSize: 14,
    color: "#888",
  },
  payCardBtnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 12,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 6,
  },
  cancelBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 15,
  },
  payNowBtn: {
    flex: 1,
    backgroundColor: "#03b6fc",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginLeft: 6,
  },
  payNowBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});