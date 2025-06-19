import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Modal, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const paymentsToday = [
  { id: 1, name: "Sulaimon O (You)", owes: true, amount: "2,500" },
  { id: 2, name: "Adeola B (You)", owes: false, amount: "2,500" },
];
const paymentsYesterday = [
  { id: 3, name: "Sulaimon O (You)", owes: true, amount: "2,500" },
  { id: 4, name: "Adeola B (You)", owes: false, amount: "2,500" },
];

export default function SendPaymentScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Payment</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Today */}
        <Text style={styles.sectionTitle}>Today</Text>
        <View style={styles.sectionDivider} />
        {paymentsToday.map((item) => (
          <View key={item.id} style={styles.paymentRow}>
            <View>
              <Text style={styles.paymentName}>{item.name}</Text>
              <Text style={styles.paymentOwes}>Owes</Text>
              <Text style={styles.paymentAmount}>₦ {item.amount}</Text>
            </View>
            <TouchableOpacity
              style={styles.payBtnWrapper}
              onPress={() => setModalVisible(true)}
            >
              <LinearGradient
                colors={["#4fc3f7", "#ffe082"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.payBtn}
              >
                <Text style={styles.payBtnText}>Pay</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ))}

        {/* Yesterday */}
        <Text style={styles.sectionTitle}>Yesterday</Text>
        <View style={styles.sectionDivider} />
        {paymentsYesterday.map((item) => (
          <View key={item.id} style={styles.paymentRow}>
            <View>
              <Text style={styles.paymentName}>{item.name}</Text>
              <Text style={styles.paymentOwes}>Owes</Text>
              <Text style={styles.paymentAmount}>₦ {item.amount}</Text>
            </View>
            <TouchableOpacity
              style={styles.payBtnWrapper}
              onPress={() => setModalVisible(true)}
            >
              <LinearGradient
                colors={["#4fc3f7", "#ffe082"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.payBtn}
              >
                <Text style={styles.payBtnText}>Pay</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Payment Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Pay</Text>
            <View style={styles.modalDivider} />
            <Text style={styles.modalLabel}>Amount</Text>
            <Text style={styles.modalAmount}>₦ 2,500</Text>
            <Text style={styles.modalBalance}>Your available balance: ₦ 55,250</Text>
            <View style={styles.modalDivider} />
            <Text style={styles.modalLabel}>Pay To</Text>
            <View style={styles.modalPayToRow}>
              <View style={styles.modalAvatar}>
                <Ionicons name="person" size={32} color="#bbb" />
              </View>
              <View>
                <Text style={styles.modalPayToName}>Adeola B</Text>
                <Text style={styles.modalPayToEmail}>adeolab.@gmail.com</Text>
              </View>
            </View>
            <View style={styles.modalBtnRow}>
              <TouchableOpacity
                style={{ flex: 1, marginRight: 8 }}
                onPress={() => setModalVisible(false)}
              >
                <LinearGradient
                  colors={["#4fc3f7", "#ffe082"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.modalBtn}
                >
                  <Text style={styles.modalBtnText}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginLeft: 8 }}>
                <LinearGradient
                  colors={["#4fc3f7", "#ffe082"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.modalBtn}
                >
                  <Text style={styles.modalBtnText}>Pay Now</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3f2fd",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 10,
    backgroundColor: "#e3f2fd",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginLeft: 18,
    marginTop: 10,
    marginBottom: 2,
  },
  sectionDivider: {
    height: 1,
    backgroundColor: "#bbb",
    marginHorizontal: 18,
    marginBottom: 8,
    opacity: 0.5,
  },
  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e3f2fd",
    borderRadius: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 14,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  },
  paymentName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  paymentOwes: {
    fontSize: 13,
    color: "#888",
    marginBottom: 2,
  },
  paymentAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 2,
  },
  payBtnWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  payBtn: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 28,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
  },
  payBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.18)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalCard: {
    width: "96%",
    backgroundColor: "#2196f3",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 22,
    alignItems: "center",
    marginBottom: 8,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    alignSelf: "center",
  },
  modalDivider: {
    height: 1,
    backgroundColor: "#fff",
    opacity: 0.3,
    width: "100%",
    marginVertical: 8,
  },
  modalLabel: {
    color: "#fff",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 2,
    alignSelf: "flex-start",
  },
  modalAmount: {
    color: "#ffe082",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 2,
    alignSelf: "flex-start",
  },
  modalBalance: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  modalPayToRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 8,
    marginBottom: 18,
  },
  modalAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  modalPayToName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalPayToEmail: {
    color: "#fff",
    fontSize: 13,
    opacity: 0.8,
  },
  modalBtnRow: {
    flexDirection: "row",
    width: "100%",
    marginTop: 8,
  },
  modalBtn: {
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
  },
  modalBtnText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
   },
  });