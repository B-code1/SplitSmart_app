
import React from "react";
import{ TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
export default CustomButton;