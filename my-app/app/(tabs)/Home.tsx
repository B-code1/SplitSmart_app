import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView,Modal,Pressable, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors"; 
import { router } from "expo-router";

export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>SplitSmart</Text>
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.welcomeText}>
        Welcome to SplitSmart! Let's show you how you can split bill NOT friendship.
      </Text>
      <View style={styles.headerIcons}>
        <Ionicons name="notifications-outline" size={22} color="#fff" style={styles.headerIcon} />
         <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu-outline" size={22} color="#fff" style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      {/* Group Profile Card */}
      <View style={styles.groupCard}>
        <View style={styles.groupProfile}>
          <View style={styles.groupProfileImage}>
            <Text style={styles.groupProfileImageText}>Group{"\n"}Profile{"\n"}Image</Text>
          </View>
        </View>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.groupDescription}>Group Description</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="create-outline" size={22} color="#222" />
        </TouchableOpacity>
        
      </View>

      {/* Create Group */}
      <TouchableOpacity onPress={() => router.navigate("/(tabs)/groups")}>
      <Text style={styles.sectionTitle}>Create Group</Text>
      </TouchableOpacity>

      {/* Circle Image */}
      <View style={styles.circleImageWrapper}>
        <Image
          source={require("../../assets/images/P2P.png")}
          style={styles.circleImage}
        />
      </View>

      {/* Quick Settings and Activity */}
      <Text style={styles.quickText} >
    
      Access Quick Settings</Text>
      <Text style={styles.quickText}>View Recent Activity</Text>

      {/* Send Payment */}
      <Text style={styles.sectionTitle}>Send Payment</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.actionButton}
          onPress={() => router.push("../../(payments)/send")}
        >
          <Text style={styles.actionButtonText}
          >Send Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}
          onPress={() => router.push("../../payment")}
        >
          <Text style={styles.actionButtonText}>Create Bill</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menuContainer}>
            <Text style={styles.menuItem}>Profile Information</Text>

            <View>
              <TouchableOpacity onPress={() => {
                setMenuVisible(false);
                router.push("/settings");
              }}>
              <Text style={styles.menuItem}> Account Settings</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.menuItem}>Payment Method</Text>
            <View>
              <TouchableOpacity onPress={() => {
                setMenuVisible(false);
                router.push("/help");
              }}>
              <Text style={styles.menuItem}>Help & Support</Text>
              </TouchableOpacity>

            </View> 
            <View>
              <TouchableOpacity onPress={() => {
                setMenuVisible(false);
                router.push("/invitefriends");
              }}>
              <Text style={styles.menuItem}>Invite Friends</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => {
                setMenuVisible(false);
                router.push("/feedback");
              }}>
              <Text style={styles.menuItem}>FeedBack</Text>
              </TouchableOpacity>
            </View>


            <View>
              <TouchableOpacity onPress={() => {
                setMenuVisible(false);
                router.push("/logout");
              }}>
              <Text style={styles.menuItem}>Logout</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </Pressable>
      </Modal>
    
      
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 16,
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 4,
    marginTop: 25,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginRight: 8,
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 8,
    alignSelf: "stretch",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
  },
  headerIcons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 16,
    marginBottom: 8,
    gap: 12,
  },
  headerIcon: {
    marginHorizontal: 4,
  },
  groupCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
  groupProfile: {
    alignItems: "center",
    justifyContent: "center",
  },
  groupProfileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#03b6fc",
    alignItems: "center",
    justifyContent: "center",
  },
  groupProfileImageText: {
    color: "#fff",
    fontSize: 11,
    textAlign: "center",
    fontWeight: "bold",
  },
  groupDescription: {
    color: "#222",
    fontSize: 15,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 8,
    alignSelf: "center",
  },
  circleImageWrapper: {
    alignItems: "center",
    marginBottom: 10,
  },
  circleImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "cover",
  },
  quickText: {
    fontSize: 18,
    color: "#444",
    textAlign: "center",
    marginVertical: 2,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 16,
  },
  actionButton: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginHorizontal: 6,
    minWidth: 120,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 15,
  },
   overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  menuContainer: {
    width: 240,
    backgroundColor: Colors.backgroundColor2,
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    elevation: 8,
    marginTop: 0,
    height: "100%",
  },
  menuItem: {
    fontSize: 19,
    color: "#222",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
  },
});