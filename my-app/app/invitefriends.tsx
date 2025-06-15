import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";


type InviteFriendsProps = {
  onInvite: () => void;
  onDismiss: () => void;
};

export default function InviteFriends({ onInvite, onDismiss }: InviteFriendsProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="person-add-alt" size={145} color="#e0e0e0" style={styles.icon} />
      <Text style={styles.title}>Invite Friends</Text>
      <Text style={styles.message}>
        Thanks for signing up! Tap the button below{"\n"}to invite friends to join you.
      </Text>
      <TouchableOpacity style={styles.inviteBtn} onPress={onInvite}>
        <Text style={styles.inviteBtnText}>Invite Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDismiss}>
        <Text style={styles.dismissText}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
    marginTop: 1,
  },
  icon: {
    marginBottom: 30,
    opacity: 0.5,
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 18,
    textAlign: "center",
    color: "#fff",
  },
  message: {
    fontSize: 19,
    color: "#222",
    marginBottom: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  inviteBtn: {
    width: "100%",
    backgroundColor: "#F1C40F",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 18,
  },
  inviteBtnText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  dismissText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#222",
    textAlign: "center",
  },
    
});
