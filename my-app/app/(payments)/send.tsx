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
        <View style={styles.header}> 
        <Text style={styles.sectionTitle}>Today</Text>
        <View style={styles.sectionDivider} />
        </View>
        {paymentsToday.map((item) => (
          <View key={item.id}>
            
              <Text style={styles.paymentName}>{item.name}</Text>
              <View  style={styles.paymentRow}>
              <Text style={styles.paymentOwes}>Owes</Text>
              <Text style={styles.paymentAmount}>₦ {item.amount}</Text>
            
            <TouchableOpacity
              style={styles.payBtnWrapper}
              onPress={() => setModalVisible(true)}
            >
              <LinearGradient
                colors={["#F1C40F", "#3498DB"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0}}
                style={styles.payBtn}
              >
                <Text style={styles.payBtnText}>Pay</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          </View>
        ))}

        {/* Yesterday */}
        <View style={styles.header}>
        <Text style={styles.sectionTitle}>Yesterday</Text>
        <View style={styles.sectionDivider} />
        </View>
        {paymentsYesterday.map((item) => (
           <View key={item.id}>
            
              <Text style={styles.paymentName}>{item.name}</Text>
              <View  style={styles.paymentRow}>
              <Text style={styles.paymentOwes}>Owes</Text>
              <Text style={styles.paymentAmount}>₦ {item.amount}</Text>
            
            <TouchableOpacity
              style={styles.payBtnWrapper}
              onPress={() => setModalVisible(true)}
            >
              <LinearGradient
                colors={["#F1C40F", "#3498DB"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0}}
                style={styles.payBtn}
              >
                <Text style={styles.payBtnText}>Pay</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          </View>
        ))}
     

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
                  colors={["#F1C40F", "#3498DB"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.modalBtn}
                >
                  <Text style={styles.modalBtnText}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, marginLeft: 8 }}>
                <LinearGradient
                  colors={["#F1C40F", "#3498DB"]}
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
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 50,
    paddingBottom: 55,
    backgroundColor: "#F3F9FD",
  },
  header:{
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 8, 
    marginHorizontal: 12 
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
    
    fontFamily: "Inter_400Regular",
  },
  sectionDivider: {
    flex: 1,
    height: 1,
    backgroundColor: "#000",
   
    marginLeft: 40,
    opacity: 0.5,
  },
  paymentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 12,
    marginVertical: 3,
    padding: 14,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 2,
  
  },
  paymentName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
    fontFamily: "Inter_600SemiBold",
    marginLeft: 15,
    marginTop: 2,

  },
 
  
  paymentOwes: {
    fontSize: 20,
    color: "#000",
    marginBottom: 2,
    fontWeight: "400",
    fontFamily: "Inter_500Medium",
  },
  paymentAmount: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    marginBottom: 2,
    fontFamily: "Inter_600SemiBold",
    alignSelf: "center",

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
    color: "#000",
    fontWeight: "500",
    fontSize: 20,
    
    fontFamily: "Inter_500Medium",
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
    backgroundColor: "#3498DB",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 22,
    alignItems: "center",
    marginBottom: 8,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 8,
    alignSelf: "center",
  },
  modalDivider: {
    height: 1,
    backgroundColor: "#000",
    opacity: 0.3,
    width: "100%",
    marginVertical: 8,
  },
  modalLabel: {
    color: "#fff",
    fontSize: 16,
    marginTop: 6,
    marginBottom: 2,
    alignSelf: "center",
  },
  modalAmount: {
    color: "#FFDD55",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 2,
    alignSelf: "center",
  },
  modalBalance: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
    alignSelf: "center",
    fontWeight: "400",
  },
  modalPayToRow: {
    flexDirection: "row",
    
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
    fontSize: 24,
    fontWeight: "500",
  },
  modalPayToEmail: {
    color: "#FFDD55",
    fontSize: 16,
    opacity: 0.8,
    fontWeight: "400",
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