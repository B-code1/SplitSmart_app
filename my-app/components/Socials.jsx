import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
const Socials = () => {
  return (
    <View
      style={{
        // marginTop: 20,
        flexDirection: "row",
        gap: 35,
        alignSelf: "center",
      }}
    >
      <View>
        <TouchableOpacity>
          <Image
            style={{ width: 27, height:  17, resizeMode: "contain" }}S
            source={require("../assets/images/google.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={{ width: 27,height:  17,resizeMode: 'contain' }}S
            source={require("../assets/images/twitter.png")}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Image
          style={{ width: 27, height: 17, resizeMode: 'contain' }}
          source={require("../assets/images/facebook.png")}
        />
        </TouchableOpacity>
        
      </View>
      <View>
        <TouchableOpacity>
         <Image
          style={{ width: 27, height: 17, resizeMode: 'contain' }}
          source={require("../assets/images/instagram.png")}
        />



        </TouchableOpacity>
        
      </View>
    </View>
  );
};
export default Socials;
