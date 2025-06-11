import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DividerOr = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 0,
      }}
    >
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "#ccc",
        }}
      />
      <Text style={{ marginHorizontal: 15, color: "white", fontSize: 16 }}>
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
