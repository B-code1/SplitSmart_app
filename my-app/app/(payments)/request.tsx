import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "../../constants/Colors"; 
export default function RequestPayment() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
        >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request Payment</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Today */}
        <Text style={styles.sectionLabel}>Today</Text>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Sulaimon O</Text>
            <Text style={styles.owes}>Owes</Text>
          </View>
          <View style={styles.amountRequest}>
            <Text style={styles.amount}>₦ 2,500</Text>
            <TouchableOpacity style={styles.requestBtn}>
              <Text style={styles.requestBtnText}>Request</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Adeola B (You)</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Yesterday */}
        <Text style={styles.sectionLabel}>Yesterday</Text>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Sulaimon O</Text>
            <Text style={styles.owes}>Owes</Text>
          </View>
          <View style={styles.amountRequest}>
            <Text style={styles.amount}>₦ 2,500</Text>
            <TouchableOpacity style={styles.requestBtn}>
              <Text style={styles.requestBtnText}>Request</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.paymentRow}>
          <View>
            <Text style={styles.name}>Adeola B (You)</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Request Card */}
        <View style={styles.requestCard}>
          <Text style={styles.requestCardTitle}>Request</Text>
          <Text style={styles.requestCardLabel}>Amount</Text>
          <Text style={styles.requestCardAmount}>₦ 2,500</Text>
          <Text style={styles.requestCardBalance}>Your available balance: ₦ 55,250</Text>
          <Text style={styles.requestCardLabel}>Request To</Text>
          <View style={styles.requestToRow}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>S</Text>
            </View>
            <View>
              <Text style={styles.requestToName}>Sulaimon O</Text>
              <Text style={styles.requestToEmail}>sulaimon@gmail.com</Text>
            </View>
          </View>
          <View style={styles.requestCardBtnRow}>
            <TouchableOpacity style={styles.cancelBtn}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.requestNowBtn}>
              <Text style={styles.requestNowBtnText}>Request Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
    </SafeAreaView>
  );
};

export const options = {
 title:"",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 16,
  },
    scrollView: {
        flexGrow: 1,
        
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
    fontSize: 18,
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
    fontSize: 20,
    color: "#222",
    fontWeight: "500",
  },
  owes: {
    fontSize: 16,
    color: "#fff",
  },
  amountRequest: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  amount: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
    marginRight: 8,
  },
  requestBtn: {
    backgroundColor: "#eee",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  requestBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  requestCard: {
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
  requestCardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
    textAlign: "center",
  },
  requestCardLabel: {
    fontSize: 13,
    color: "#888",
    marginTop: 8,
    marginBottom: 2,
  },
  requestCardAmount: {
    fontSize: 22,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },
  requestCardBalance: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
    textAlign: "center",
  },
  requestToRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    gap: 10,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#03b6fc",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  requestToName: {
    fontSize: 17,
    color: "#222",
    fontWeight: "bold",
  },
  requestToEmail: {
    fontSize: 14,
    color: "#888",
  },
  requestCardBtnRow: {
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
  requestNowBtn: {
    flex: 1,
    backgroundColor: "#03b6fc",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginLeft: 6,
  },
  requestNowBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    },
});
