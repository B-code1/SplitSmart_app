
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';



const TandC = () => {
  return (
    <View style={{marginVertical: 10, marginTop: 20 }}>
                
                  <Text
                    style={{ color: Colors.text_Light, fontFamily: "PoppinsBold" ,
                      fontSize: 12, textAlign: "center"
                    }}
                  >
                    Terms of Service{" "}
                  
                  and{" "}
                  <Text
                    style={{ color: Colors.text_Light, fontFamily: "PoppinsBold" }}
                  >
                    Privacy Policy
                  </Text>
                  </Text>
               
              </View>
  );
}
export default TandC;