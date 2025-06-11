import { StyleSheet, Text, View } from "react-native";

const DividerOr = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 0 }}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "#666",
        }}
      />
      <Text style={{  color: "black", fontSize: 16 }}>
        OR
      </Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "#666",
        }}
      />
    </View>
  );
};

export default DividerOr;
