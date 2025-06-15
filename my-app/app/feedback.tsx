import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { router } from "expo-router";

const faces: { name: "emoticon-angry-outline" | "emoticon-sad-outline" | "emoticon-neutral-outline" | "emoticon-happy-outline" | "emoticon-excited-outline"; value: number }[] = [
  { name: "emoticon-angry-outline", value: 1 },
  { name: "emoticon-sad-outline", value: 2 },
  { name: "emoticon-neutral-outline", value: 3 },
  { name: "emoticon-happy-outline", value: 4 },
  { name: "emoticon-excited-outline", value: 5 },
];

export default function Feedback() {
  const [selected, setSelected] = useState<number | null>(null);
  const [comment, setComment] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Feedback</Text>
      <Text style={styles.title}>Share Your Feedbacks!</Text>
      <Text style={styles.subtitle}>How Satisfied Are You?</Text>
      <View style={styles.facesRow}>
        {faces.map((face) => (
          <TouchableOpacity
            key={face.value}
            onPress={() => setSelected(face.value)}
            style={[
              styles.faceCircle,
              selected === face.value && styles.faceCircleSelected,
            ]}
          >
            <MaterialCommunityIcons
              name={face.name}
              size={38}
              color={selected === face.value ? "#fff" : "#222"}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add  a Comment..."
        placeholderTextColor="#888"
        value={comment}
        onChangeText={setComment}
        multiline
      />
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Submit Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 24,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
    marginBottom: 10,
    textAlign: "center",
    color: Colors.text_Light,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 18,
    textAlign: "center",
    color: "#222",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  facesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 24,
    marginTop: 4,
  },
  faceCircle: {
    backgroundColor: "#fff933",
    borderRadius: 30,
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
    opacity: 0.7,
  },
  faceCircleSelected: {
    backgroundColor: "#03b6fc",
    opacity: 1,
  },
  input: {
    width: "100%",
    minHeight: 80,
    backgroundColor: "#eee",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 24,
    color: "#222",
    textAlignVertical: "top",
  },
  submitBtn: {
    width: "100%",
    backgroundColor: "#F1C40F",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  submitBtnText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#222",
  },
});