import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { router } from "expo-router";
import Authstyles from "../(Auth)/authStyle";
import CustomButton from "@/components/Custombutton";
import { LinearGradient } from "expo-linear-gradient";
export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  type GroupMember = {
    name: string;
    amount: string;
    paid: string;
    color: string;
  };

  const groupData: GroupMember[] = [
    { name: "Olaris", amount: "₦5,000", paid: "₦2,500", color: "#EF00CF8C" },
    { name: "Beloved", amount: "₦5,000", paid: "₦3000", color: "#34A853" },
    { name: "Chris", amount: "₦5,000", paid: "₦0.00", color: "#EF00048C" },
    { name: "Hanifa", amount: "₦5,000", paid: "₦5,000", color: "#3F51B5" },
    { name: "Adeola", amount: "₦5,000", paid: "₦5,000", color: "#FFD600" },
  ];

  // What we show for each person
  const MemberRow = ({ item }: { item: GroupMember }) => (
    <View style={styles.row}>
      <View style={styles.memberCell}>
        <View style={[styles.avatar, { backgroundColor: item.color }]}>
          <Text style={styles.avatarText}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
      <Text style={styles.cell}>{item.amount}</Text>
      <Text style={styles.cell}>{item.paid}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View Group Details</Text>
        <View style={{ width: 24 }} />
      </View> */}

      {/* Table */}
      <View>
        {/* <Text style={styles.title}>View Group Details</Text> */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#222" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>View Group Details</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.headerCell}>Members</Text>
          <Text style={styles.headerCell}>Amount</Text>
          <Text style={styles.headerCell}>Paid</Text>
        </View>

        {/* List of People */}
        <FlatList
          data={groupData}
          keyExtractor={(item) => item.name}
          renderItem={MemberRow}
        />
      </View>

      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => router.navigate("/groups")}
      >
        <LinearGradient
          colors={["#FFD600", "#2196f3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signUpBtnInner}
        >
          <Text style={styles.signUpText}>Leave Group</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   paddingTop: 40,
  //   paddingHorizontal: 16,
  //   backgroundColor: "#fff",
  //   flex: 1,
  // },
  title: {
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#cce8ff",
    padding: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ccc",
    alignItems: "center",
  },
  headerRow: {
    borderBottomWidth: 1,
    borderColor: "#000",
    marginTop: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 14,
  },
  memberCell: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 14,
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },

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
    color: "#222",
  },
  signUpBtn: {
  justifyContent: "center",
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    padding: 20,
     shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 4,
  
  },
  signUpBtnInner: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 28,
    letterSpacing: 1,
  },
});
