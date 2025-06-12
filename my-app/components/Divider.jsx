import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DividerOr = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10,
        gap: 10,
      }}
    >
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
