import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, ScrollView } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Feather, Entypo } from "@expo/vector-icons";
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
      <View style={styles.actionsRow}>
  <Image
    source={{ uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" }}
    style={styles.ovalImage}
  />
  <View style={styles.actionsList}>
    <Text style={styles.actionText}>Create Group</Text>
    <Text style={styles.actionText}>Access Quick Settings</Text>
    <Text style={styles.actionText}>View Recent Activity</Text>
    <Text style={styles.actionText}>Send Payment</Text>
  </View>
</View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonShadow}>
          <LinearGradient
            colors={["#4fc3f7", "#ffe082"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Send  Payment</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonShadow}>
          <LinearGradient
            colors={["#4fc3f7", "#ffe082"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create Bill</Text>
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
              <TouchableOpacity onPress={() => setMenuVisible(false)} style={{ marginBottom: 24, marginTop: 12 }}>
                <Ionicons name="arrow-back" size={28} color="#222" />
              </TouchableOpacity >
              <TouchableOpacity onPress={() => router.navigate("/profileinfo")}>
              <MenuItem icon={<Ionicons name="person" size={28} color="#2196f3" />} label="Profile Information" />
              </TouchableOpacity>
              <MenuItem icon={<MaterialIcons name="settings" size={28} color="#2196f3" />} label="Account Settings" />
              <MenuItem icon={<MaterialCommunityIcons name="cash" size={28} color="#2196f3" />} label="PaymentMethods" /> 
          <TouchableOpacity onPress={() => router.navigate("/feedback")}>
              <MenuItem icon={<Feather name="message-square" size={28} color="#2196f3" />} label="Feedback" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.navigate("/help")}>
                <MenuItem icon={<Ionicons name="help-circle" size={28} color="#2196f3" />} label="Help & Support" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.navigate("/invitefriends")}>
               <MenuItem icon={<FontAwesome5 name="user-friends" size={24} color="#2196f3" />} label="Invite Friends" />
              </TouchableOpacity>
              <View style={{ flex: 1 }} />
              <TouchableOpacity onPress={() => router.navigate("/logout")}
               style={styles.logoutBtn}>
                <LinearGradient
                  colors={["#3498DB", "#F1C40F"]}
                  start={{ x: 1, y: 0 }}
                  end={{ x:   1, y:  1}}
                  style={styles.logoutBtnInner}
                >
                  <Entypo name="log-out" size={22} color="#222" style={{ marginRight: 8 }} />
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
  borderRadius: 20,
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
  
actionsRow: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 38,
  marginBottom: 8,
  width: "100%",
},
ovalImage: {
  width: 169,
  height:  229,
  borderRadius: 100,
  marginLeft: 10,
  marginRight: 18,
  resizeMode: "cover",
},
actionsList: {
  justifyContent: "space-between",
  height: 180,
  marginLeft: 0,
},
actionText: {
  fontSize: 16,
  color: "#222",
  fontWeight: "bold",
  marginBottom: 12,
},
// ...existing code...
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 35,
    marginBottom: 12,
    gap: 18,
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
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
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