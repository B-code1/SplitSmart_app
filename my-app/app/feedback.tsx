import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Route, router } from "expo-router";

const emojis = [
  { key: "happy", emoji: "😃", label: "Very Satisfied" },
  { key: "angry", emoji: "😡", label: "Angry" },
  { key: "sad", emoji: "😢", label: "Sad" },
  { key: "love", emoji: "😍", label: "Loved" },
  { key: "neutral", emoji: "😐", label: "Neutral" },
];
export default function FeedbackScreen({ navigation }: any) {
  const [selected, setSelected] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  


  const handleEmojiPress = (key: string) => {
    setSelected(key);
    // You can also handle rating logic here if needed
    // For example, you could set a rating based on the selected emoji
    switch (key) {
      case "happy":
        setRating(5);
        break;
      case "angry":
        setRating(1);
        break;
      case "sad":
        setRating(2);
        break;
      case "love":
        setRating(4);
        break;
      case "neutral":
        setRating(3);
        break;
      default:
        setRating(0);
    }
  };
  const handleCommentChange = (text: string) => {
    setComment(text);
  };
  const handleRatingCountChange = (count: number) => {
    setRatingCount(count);
  };
  const handleSave = () =>
    {
      // Save the feedback data to your backend or local storage
      console.log("Feedback saved:", { selected, comment, rating, ratingCount });
      // Optionally, navigate back or show a success message
      navigation.goBack();
    }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Feedback</Text>
        <View style={{ width: 26 }} />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.title}>Share Your Feedbacks!</Text>
        <Text style={styles.label}>How Satisfied Are You?</Text>
        <View style={styles.emojiRow}>
          {emojis.map((e) => (
            <TouchableOpacity
              key={e.key}
              style={[
                styles.emojiBtn,
                selected === e.key && styles.emojiSelected,
              ]}
              onPress={() => setSelected(e.key)}
              activeOpacity={0.7}
            >
              <Text style={{fontSize:44}}>{e.emoji}</Text>
              
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label2}>Tell Us More (Optional)</Text>
        <View style={styles.inputShadow}>
          <TextInput
            style={styles.input}
            placeholder="Add  a Comment..."
            placeholderTextColor="#bbb"
            value={comment}
            onChangeText={setComment}
            multiline
            numberOfLines={4}
          />
        </View>
        <TouchableOpacity style={styles.submitBtn}>
          <LinearGradient
            colors={["#4fc3f7", "#ffe082"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.submitBtnInner}
          >
            <Text style={styles.submitText}>Submit Now</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffff",
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
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 35,
  },
  label: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginLeft: 28,
    marginBottom: 8,
  },
  emojiRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 50,
  },
  emojiBtn: {
    padding: 6,
    borderRadius: 30,
  },
  emojiSelected: {
    backgroundColor: "#fffde7 ",
    borderWidth: 2,
    borderColor: "#FFD600",
  },
  label2: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginLeft: 20,

    marginBottom: 25,
  },
  inputShadow: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginHorizontal: 18,
    marginBottom: 28,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    minHeight: 87,
    fontSize: 16,
    color: "#000",
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#fff",
    textAlignVertical: "top",
  },
  submitBtn: {
    marginHorizontal: 18,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 2  , height: 4 },
    shadowOpacity: 0.18,
    shadowRadius:  8,
  },
  submitBtnInner: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "500",
  },
  emojiIcon: {
    textShadowColor: "#000",
    textShadowRadius: 2,
  },
});