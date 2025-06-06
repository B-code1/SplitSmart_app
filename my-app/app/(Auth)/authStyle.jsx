import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

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
});
export default Authstyles;
