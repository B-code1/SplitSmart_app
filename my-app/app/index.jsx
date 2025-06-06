import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const homescreen = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text
          style={{ textAlign: "center", fontSize: 30 }}
          onPress={() => {
            router.navigate("/signUp");
          }}
        >
          move to auth screen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default homescreen;
