import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
const Socials = () => {
  return (
    <View
      style={{
        // flex: 1,
        flexDirection: "row",
        gap: 50,
        alignSelf: "center",
      }}
    >
      <View>
        <Image
          style={{ width: 30, resizeMode: "contain" }}
          source={require("../assets/images/google.png")}
        />
      </View>
      <View>
        <Image
          style={{ width: 30, resizeMode: "contain" }}
          source={require("../assets/images/twitter.png")}
        />
      </View>
      <View>
        <Image
          style={{ width: 30, resizeMode: "contain" }}
          source={require("../assets/images/facebook.png")}
        />
      </View>
      <View>
        <Image
          style={{ width: 30, resizeMode: "contain" }}
          source={require("../assets/images/instagram.png")}
        />
      </View>
    </View>
  );
};
export default Socials;
