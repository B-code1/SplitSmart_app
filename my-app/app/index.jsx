import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import CustomButton from "../components/Custombutton";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#03b6fc",  marginHorizontal: 0 }}>
      <Image style={styles.image}
        source={require("../assets/images/Logo.png")}
        />
      <Text style={{ color: 'black', fontSize:30, fontFamily:'Poppins', 
        textAlign:'center',fontWeight:'bold', marginBottom: 10 }}>Expense Tracker</Text>
      <Text style={styles.text}>Track your expenses effortlessly with our intuitive app.</Text>

     
      
      <View>
        <TouchableOpacity  style={styles.Button} onPress={() => router.navigate('/(tabs)/Home')}>
          
        
          <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    
    
        
    </SafeAreaView>
  );
};
export default index;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 8,
  },
   Button: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: "center",
    fontFamily: "PoppinsSemiBold",
    fontStyle: "normal",
    fontWeight: "800",

  },
});