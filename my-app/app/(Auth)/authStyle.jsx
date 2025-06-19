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
   
    marginTop: 20,
    
  },
  fieldText: {
    fontFamily: " PoppinsSemiBold",
    fontSize: 18,
    color: Colors.text_Light,

  },
  txtfieldInput: {
    height: 58,
    backgroundColor: Colors.backgroundColor2,
    borderRadius: 8,
    color: Colors.white,
    paddingLeft: 0,
    fontSize: 16,
    fontFamily: "PoppinsRegular",
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
  inputRow: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: Colors.backgroundColor2,
  borderRadius: 8,
  height: 58,
  marginTop: 8,
  paddingHorizontal: 10,
},
});
export default Authstyles;
