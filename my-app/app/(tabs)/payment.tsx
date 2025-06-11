import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, 
  SafeAreaView,KeyboardAvoidingView ,Platform} from "react-native";
import styles from "../paymentstyle";

import { Ionicons } from '@expo/vector-icons';


const Payment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
      >
     
    <ScrollView 
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SplitSmart</Text>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>

     
      <Text style={styles.welcomeText}>
         Welcome to SplitSmart Let’s show you how you can split bill NOT
            friendship
      </Text>

     
      <View style={styles.topButtonsRow}>
        <TouchableOpacity style={styles.topButton}>
          <Text style={styles.topButtonText}>Request Payment</Text>
        </TouchableOpacity>
      </View>

      {/* Arc Section */}
      <View style={styles.arcSection}>
        <View style={styles.arcRow}>
          <Text style={styles.arcLabel}>Banks and cards</Text>
          <View style={styles.arcIcons}>
            <Text style={styles.arcIcon}>⚙️</Text>
            <Text style={styles.arcIcon}>🔔</Text>
            <Text style={styles.arcIcon}>👤</Text>
          </View>
        </View>
        <View style={styles.arcCircle}>
          <Text style={styles.arcName}>Sulaimon</Text>
          <Text style={styles.arcAmount}>50</Text>
          <Text style={styles.arcFriends}>5 Friends</Text>
        </View>
        <Text style={{color:"white", fontSize:18, fontWeight:"700",
          textAlign:"center", marginTop:10, marginBottom:10,  }}>Split Bill</Text>
          
      </View>

      {/* Payment History */}
      <Text style={styles.sectionTitle}>View payment History</Text>
      <View style={styles.tabRow}>
        <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
          <Text style={styles.tabTextActive}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Transactions</Text>
        </TouchableOpacity>
      </View>

      {/* Balance */}
      <Text style={styles.balanceLabel}>Balance</Text>
      <Text style={styles.balanceAmount}>50,000</Text>

      {/* Payment Actions */}
      <View style={styles.paymentActionsRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Send Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Request Payment</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.splitPaymentButton}>
        <Text style={styles.splitPaymentButtonText}>Split Payment</Text>
      </TouchableOpacity>

      {/* Add Bank/Card */}
      <View style={styles.addBankRow}>
        <TouchableOpacity style={styles.debitButton}>
          <Text style={styles.debitButtonText}>Debit</Text>
        </TouchableOpacity>
        <Text style={styles.addBankText}>Add a bank{"\n"}or card</Text>
      </View>
    </ScrollView>
     </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Payment;

