import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Button } from "@react-navigation/elements";

const Authstyles = StyleSheet.create({
  logoAuthImg: {
    width: "50%",
    height: "25%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    color: Colors.white,
    fontFamily: "PoppinsSemiBold",
    fontSize: 22,
  },
  secondaryContainer: {
    // marginTop: 10,
  },

  fieldContainer: {
    gap: 10,
    marginVertical: 10,
  },
  fieldText: {
    fontFamily: " PoppinsSemiBold",
    fontSize: 16,
    color: Colors.text_Light,
  },
  txtfieldInput: {
    height: 58,
    backgroundColor: Colors.backgroundColor2,
    borderRadius: 8,
    color: Colors.white,
    paddingLeft: 20,
    fontSize: 16,
  },
  AccntText: {
    color: Colors.white,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  AccntDiv: {
    color: Colors.primary,
  },
  Button: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: Colors.black,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
    fontStyle: "normal",
    fontWeight: "800",

  },
});
export default Authstyles;
