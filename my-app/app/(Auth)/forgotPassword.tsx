import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import Authstyles from "./authStyle";
import styles from "../styles";
import Colors from "../../constants/Colors";
import DividerOr from "@/components/Divider";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "@/components/Custombutton";

import { ScrollView } from "react-native";
import Socials from "@/components/Socials";
import { IconSymbol } from "@/components/IconSymbol";
const forgotPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            style={Authstyles.logoAuthImg}
            source={require("../../assets/images/Logo.png")}
          />

          <Text style={{ textAlign: "center", color: Colors.text_Light }}>
            organize.split.resolve
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: Colors.text_Light,
              fontFamily: "PoppinsBold",
              fontSize: 20,
              marginTop: 7,
            }}
          >
            FORGOT PASSWORD
          </Text>

          <View style={Authstyles.secondaryContainer}>
            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Email Address</Text>
               <View style={Authstyles.inputRow}>
              <IconSymbol name ="mail" size={20} color={Colors.white} style={{ marginRight: 5 }} />
              <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Enter your username"
                placeholderTextColor={Colors.white}
                autoCorrect={false}
                style={Authstyles.txtfieldInput}
              />
              </View>
            </View>

            <View style={Authstyles.fieldContainer}>
              <Text style={Authstyles.fieldText}>Confirm Password</Text>
              <View style={Authstyles.inputRow}>
               <IconSymbol name="eye.slash" size={20} color={Colors.white}
               style={{ marginRight: 5 }} />
              <TextInput
                secureTextEntry={true}
                placeholder="*********"
                placeholderTextColor={Colors.white}
                style={Authstyles.txtfieldInput}
              />
             </View>
            </View>

            <CustomButton text={"RESET"} onPress={() => {}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default forgotPasswordScreen;
