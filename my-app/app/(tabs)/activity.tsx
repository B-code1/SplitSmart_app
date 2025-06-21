import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const FILTERS = ["All", "Payment", "Bills", "Groups"];

const DATA = [
  {
    name: "Peace Joined Holiday Hangout Crew",
    date: "Oct 7. 2:00 PM",
    actions: [],
    showPay: false,
    showAccept: false,
    showDecline: false,
    type: "Groups",
  },
  {
    name: "Your Share For Movie Snacks (1,200) Is Due In 2 Days.",
    date: "Oct 1. 12:00 AM",
    actions: [],
    showPay: true,
    showAccept: false,
    showDecline: false,
    type: "Payment",
  },
  {
    name: "Precious Invited You To A Group",
    date: "Oct 1. 12:00 AM",
    actions: [],
    showPay: false,
    showAccept: true,
    showDecline: true,
    type: "Groups",
  },
  {
    name: "Kenny Declined Your 3,000 Request",
    date: "Oct 1. 12:00 AM",
    actions: [],
    showPay: false,
    showAccept: false,
    showDecline: false,
    type: "Bills",
  },
];

export default function ActivityScreen({ navigation }: any) {
  const [selected, setSelected] = useState("All");

  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});

  const filteredData =
    selected === "All"
      ? DATA
      : DATA.filter((item) => item.type === selected);

  const toggleVisibility = (idx: number) => {
    setVisibleCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity</Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={26} color="#222" />
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View style={styles.filtersRow}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            style={[
              styles.filterBtn,
              selected === f && styles.filterBtnActive,
            ]}
            onPress={() => setSelected(f)}
          >
            <Text
              style={[
                styles.filterText,
                selected === f && styles.filterTextActive,
              ]}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Activity Cards */}
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {filteredData.map((item, idx) => (
          <View key={idx} style={styles.card}>
            <View style={styles.cardRow}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={32} color="#90a4ae" />
              </View>
              <View style={{ flex: 1 }}>
                {visibleCards[idx] ? (
                  <>
                    <Text style={styles.cardName}>{item.name}</Text>
                    {item.showPay && (
                      <TouchableOpacity style={styles.payNowBtn}>
                        <Text style={styles.payNowText}>Pay Now!</Text>
                      </TouchableOpacity>
                    )}
                    {(item.showAccept || item.showDecline) && (
                      <View style={styles.actionRow}>
                        {item.showAccept && (
                          <TouchableOpacity style={styles.acceptBtn}>
                            <Text style={styles.acceptText}>Accept</Text>
                          </TouchableOpacity>
                        )}
                        {item.showDecline && (
                          <TouchableOpacity style={styles.declineBtn}>
                            <Text style={styles.declineText}>
                              Decline <Text style={{ color: "#e53935" }}>✖️</Text>
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                  </>
                ) : (
                  <Text style={styles.cardName}>••••••••••••••••••••••••••••••••</Text>
                )}
              </View>
              <TouchableOpacity onPress={() => toggleVisibility(idx)}>
                <Ionicons
                  name={visibleCards[idx] ?  "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#222"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>{item.date}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  header: {
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
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter_600SemiBold",
  },
  filtersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 18,
    marginBottom: 10,
  },
  filterBtn: {
    backgroundColor: "#AFDDFB",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: "#e3f2fd",
  },
  filterBtnActive: {
    backgroundColor: "#2196f3",
    borderColor: "#2196f3",
  },
  filterText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 16,
  },
  filterTextActive: {
    color: "#fff",
  },
  card: {
    backgroundColor: "#ffff",
    borderRadius: 16,
    marginHorizontal: 10,
    marginVertical: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 6 },
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 5,
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
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#b3d8f7",
  },
  cardName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
    fontFamily: "Inter_600SemiBold",

  },
  payNowBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "flex-start",
    marginTop: 2,
    marginBottom: 2,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 1,
  },
  payNowText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 13,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    gap: 10,
  },
  acceptBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 8,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 1,
  },
  acceptText: {
    color: "#388e3c",
    fontWeight: "bold",
    fontSize: 13,
  },
  declineBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 1,
  },
  declineText: {
    color: "#e53935",
    fontWeight: "bold",
    fontSize: 13,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#d0e6f7",
    paddingTop: 6,
    marginTop: 8,
  },
  cardFooterText: {
    fontSize: 12,
    color: "#90a4ae",
  },
});