import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import { Button } from "@react-navigation/elements";

const Authstyles = StyleSheet.create({
  logoAuthImg: {
    width: 131,
    height: 138,
    // resizeMode: "contain",
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
    color: "black",
    fontWeight: 500,
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
    marginTop: -10,
  },
  AccntDiv: {
    color: Colors.primary,
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
export default Authstyles;
