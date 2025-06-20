import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Colors from "../constants/Colors.ts";

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginTop: 40,
        alignSelf: "center",
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 5,
        height: 50,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: Colors.black,
          fontSize: 20,
          textAlign: "center",
          fontFamily: "PoppinsSemiBold",
          fontStyle: "normal",
          fontWeight: "800",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
