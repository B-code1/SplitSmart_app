import { StyleSheet, Text, View } from "react-native";

const DividerOr = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 0 }}>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "#ccc",
        }}
      />
      <Text style={{ marginHorizontal: 15, color: "#666", fontSize: 16 }}>
        OR
      </Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "#ccc",
        }}
      />
    </View>
  );
};

export default DividerOr;
