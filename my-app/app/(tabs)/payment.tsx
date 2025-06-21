import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PaymentScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Payment Options */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}  activeOpacity={0.8} onPress={() =>  router.navigate("/(payments)/send")}>
          <Image style={styles.image}
            source={require("../../assets/images/material.png")}
            />
          <Text style={styles.cardTitle}>send payment</Text>
          <Text style={styles.cardDesc}>transfer to someone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.8}
          onPress={() => router.navigate("/(payments)/request")}>
         <Image style={styles.image}
            source={require("../../assets/images/Vector.png")}
            />
          <Text style={styles.cardTitle}>Request Payment</Text>
          <Text style={styles.cardDesc}>ask someone to pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.8}
                  onPress={() => router.navigate("/(payments)/split")}>
          <Image style={styles.image}
            source={require("../../assets/images/split.png")}
            />
          <Text style={styles.cardTitle}>Split Bill</Text>
          <Text style={styles.cardDesc}>divide expenses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image style={styles.image}
            source={require("../../assets/images/payment.png")}
            />
         
          <Text style={styles.cardTitle}>payment history</Text>
          <Text style={styles.cardDesc}>track all payments</Text>
        </TouchableOpacity>
      </View>

      
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
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
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
    
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 18,
    marginBottom: 18,
    gap: 18,
  },
  card: {
    width: 145,
    height: 212,
    backgroundColor: "#AFDDFB",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    shadowColor:  "#3498DB99",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  cardIcon: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
    marginBottom: 2,
    textTransform: "capitalize",
    fontFamily: "Inter_400Regular",

  },
  cardDesc: {
    fontSize: 15,
    color: "#000",
    textAlign: "center",
    opacity: 0.7,
    fontFamily: "Inter_400Regular",
    fontWeight: "300",
  },
  image: {
    width: 36,
    height: 40,
    resizeMode: "contain",
    marginBottom: 12,
  },
  
 });