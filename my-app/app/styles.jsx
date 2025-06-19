import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    // padding: 20,
  },
  text: {
    color: Colors.text,
  },
  button: {
    color: Colors.primary,
  },
});
export default styles;
