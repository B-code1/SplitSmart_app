import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Route, router } from "expo-router";

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerSection}>
        {/* Top Row: Menu and Status */}
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color="#222" />
          </TouchableOpacity>
        </View>
        {/* Title */}
        <Text style={styles.headerTitleBlack}>Group</Text>
        {/* Row: Group Image, Input, Icons */}
        <View style={styles.headerRow}>
          <View style={styles.avatarCircleBig}>
            <Text style={styles.avatarLabelBlack}>Group Image</Text>
          </View>
          <View style={styles.inputBoxBig} />
          <TouchableOpacity style={styles.iconBtnBig}>
            <Ionicons name="pencil" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtnBig}>
            <Ionicons name="settings-outline" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtnBig}>
            <Ionicons name="notifications-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Group Image */}
      <View style={styles.ovalActionsRow}>
        <View style={styles.ovalImageWrapper}>
          <View style={styles.ovalImageTrue}>
            <Image
              source={require("../../assets/images/home.png")} // Replace with your image path
              style={{ width: 200, height: 270, borderRadius: 115 }}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.ovalActionsList}>
          <TouchableOpacity onPress={() => router.navigate("/(Group)/create")}>
            <Text
              style={{
                color: "#000",
                fontFamily: "inter",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 18,
                textAlign: "left",
              }}
            >
              Create Group
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate("/settings")}>
            <Text
              style={{
                color: "#000",
                fontFamily: "inter",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 18,
                textAlign: "left",
                marginLeft: 35,
              }}
            >
              Access Quick{"\n"}Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate("/activity")}>
            <Text
              style={{
                color: "#000",
                fontFamily: "inter",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 18,
                textAlign: "left",
                marginLeft: 40,
              }}
            >
              View Recent{"\n"}Activity
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.navigate("/(payments)/send")}>
            <Text
              style={{
                color: "#000",
                fontFamily: "inter",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 18,
                textAlign: "left",
                marginLeft: 24,
              }}
            >
              Send Payment
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
        onPress={() => router.navigate("/(payments)/send")}
         style={styles.buttonShadow}>
          <LinearGradient
            colors={["#3498DB", "#F1C40F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Send Payment</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => router.navigate("/(tabs)/payment")}
        style={styles.buttonShadow}>
          <LinearGradient
            colors={["#3498DB", "#F1C40F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Create Bill </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Bar (for visual reference, actual tabs handled by layout) */}

      {/* Menu Drawer */}
      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.menuOverlay}>
          <LinearGradient
            colors={["#F1C40F", "#AFDDFB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.menuDrawer}
          >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <TouchableOpacity
                onPress={() => setMenuVisible(false)}
                style={{ marginBottom: 24, marginTop: 12 }}
              >
                <Ionicons name="arrow-back" size={28} color="#222" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.navigate("/profileinfo")}>
                <MenuItem
                  icon={<Ionicons name="person" size={28} color="#2196f3" />}
                  label="Profile Information"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.navigate("/settings")}>
                <MenuItem
                  icon={
                    <MaterialIcons name="settings" size={28} color="#2196f3" />
                  }
                  label="Account Settings"
                />
              </TouchableOpacity>
              <MenuItem
                icon={
                  <MaterialCommunityIcons
                    name="cash"
                    size={28}
                    color="#2196f3"
                  />
                }
                label="PaymentMethods"
              />
              <TouchableOpacity onPress={() => router.navigate("/feedback")}>
                <MenuItem
                  icon={
                    <Feather name="message-square" size={28} color="#2196f3" />
                  }
                  label="Feedback"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.navigate("/help")}>
                <MenuItem
                  icon={
                    <Ionicons name="help-circle" size={28} color="#2196f3" />
                  }
                  label="Help & Support"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.navigate("/invitefriends")}
              >
                <MenuItem
                  icon={
                    <FontAwesome5
                      name="user-friends"
                      size={24}
                      color="#2196f3"
                    />
                  }
                  label="Invite Friends"
                />
              </TouchableOpacity>
              <View style={{ flex: 1 }} />
              <TouchableOpacity
                onPress={() => router.navigate("/logout")}
                style={styles.logoutBtn}
              >
                <LinearGradient
                  colors={["#3498DB", "#F1C40F"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.logoutBtnInner}
                >
                  <Entypo
                    name="log-out"
                    size={22}
                    color="#222"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.logoutText}>Log Out</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <View style={styles.menuItem}>
      {icon}
      <Text style={styles.menuItemText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffff",
  },
  // ...existing code...
  headerSection: {
    backgroundColor: "#3498DB",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 30,
    paddingBottom: 18,
    paddingHorizontal: 16,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    marginTop: 10,
  },

  headerTitleBlack: {
    fontSize: 24,
    fontWeight: "400",
    color: "#000",
    marginBottom: 12,
    marginLeft: 2,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  avatarCircleBig: {
    width: 52,
    height: 52,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarLabelBlack: {
    fontSize: 7,
    color: "#000",
    fontWeight: "300",
  },
  inputBoxBig: {
    flex: 1,
    height: 50,
    width: 204,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
  },
  iconBtnBig: {
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },
  // ...existing code...

  ovalActionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",

    marginTop: 20,
    paddingBottom: 30,
    marginBottom: 8,
    paddingHorizontal: 0,
  },
  ovalImageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 0,
    marginRight: 8,
  },
  ovalImageTrue: {
    width: 200,
    height: 270,
    borderRadius: 115, // half of height for perfect oval
    overflow: "hidden",
    backgroundColor: "#f3f6f9",
    shadowColor: "#ccc",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  ovalImage: {
    width: 200,
    height: 270,
  },

  ovalActionsList: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 290,
    marginLeft: 2,
    paddingVertical: 0,
    padding: 4,
  },
  ovalActionText: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "left",
  },
  // ...existing code...
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginBottom: 0,
    gap: 10,
  },
  buttonShadow: {
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#b3d8f7",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 28,
    minWidth: 120,
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
  },

  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.18)",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  menuDrawer: {
    width: 240,
    height: "100%",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
    paddingVertical: 10,
    gap: 18,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#222",
  },
  logoutBtn: {
    marginTop: 32,
    marginBottom: 8,
    alignSelf: "center",
    width: "90%",
  },
  logoutBtnInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 0,
    minWidth: 120,
  },
  logoutText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
});
