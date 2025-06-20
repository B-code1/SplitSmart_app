import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { router } from "expo-router";

export default function Home() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity</Text>
        <View style={{ width: 24 }} />
        <View style={styles.innergrpContainer}>
          <Pressable>
            <Ionicons name="options" size={30} color="Black" />
          </Pressable>
        </View>
      </View>

      <View style={styles.headerItems}>
        <Pressable>
          <Text style={styles.headerItemsTxt}>All</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.headerItemsTxt}>Payments</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.headerItemsTxt}>Bills</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.headerItemsTxt}>Group</Text>
        </Pressable>
      </View>

      {/* Content*/}
      <View style={styles.mainContainer}>
        <View style={styles.mainSub1}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#9D8D9D" />
          </View>
          <View style={styles.Names}>
            <Text style={styles.NamesTxt}>Kosi</Text>
            <Text style={styles.NamesSubTxt}>Paid category due</Text>
          </View>
          <View style={styles.icons}>
            <Ionicons name="eye-outline" size={25} color="Black" />
            <Text style={styles.NamesSubTxt}>Oct 18</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.mainSub2}></View>
          <Text style={styles.AmtTxt}>₦ 3,300</Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainSub1}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#9D8D9D" />
          </View>
          <View style={styles.Names}>
            <Text style={styles.NamesTxt}>Kosi</Text>
            <Text style={styles.NamesSubTxt}>category due overdue soon</Text>
          </View>
          <View style={styles.icons}>
            <Ionicons name="eye-outline" size={25} color="Black" />
            <Text style={styles.NamesSubTxt}>Oct 28</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.mainSub2}></View>
          <Text style={styles.AmtTxt}>Due: Nov,12</Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainSub1}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#9D8D9D" />
          </View>
          <View style={styles.Names}>
            <Text style={styles.NamesTxt}>Kosi</Text>
            <Text style={styles.NamesSubTxt}>Yemi invited you to a group</Text>
          </View>
          <View style={styles.icons}>
            <Ionicons name="eye-off-outline" size={25} color="Black " />
            <Text style={styles.NamesSubTxt}>Oct 18</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.mainSub2}></View>
          <Text style={styles.AmtTxt}>₦ 3,300</Text>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainSub1}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#9D8D9D" />
          </View>
          <View style={styles.Names}>
            <Text style={styles.NamesTxt}>Kosi</Text>
            <Text style={styles.NamesSubTxt}>Paid category due</Text>
          </View>
          <View style={styles.icons}>
            <Ionicons name="eye-outline" size={25} color="Black" />
            <Text style={styles.NamesSubTxt}>Oct 18</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.mainSub2}></View>
          <Text style={styles.AmtTxt}>₦ 3,300</Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainSub1}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#9D8D9D" />
          </View>
          <View style={styles.Names}>
            <Text style={styles.NamesTxt}>Kosi</Text>
            <Text style={styles.NamesSubTxt}>category due overdue soon</Text>
          </View>
          <View style={styles.icons}>
            <Ionicons name="eye-outline" size={25} color="Black" />
            <Text style={styles.NamesSubTxt}>Oct 28</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.mainSub2}></View>
          <Text style={styles.AmtTxt}>Due: Nov,12</Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.mainSub1}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={25} color="#9D8D9D" />
          </View>
          <View style={styles.Names}>
            <Text style={styles.NamesTxt}>Kosi</Text>
            <Text style={styles.NamesSubTxt}>yemi invited you to a group</Text>
          </View>
          <View style={styles.icons}>
            <Ionicons name="eye-off-outline" size={25} color="Black" />
            <Text style={styles.NamesSubTxt}>Oct 18</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.mainSub2}></View>
          <Text style={styles.AmtTxt}>₦ 3,300</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16,
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 4,
    marginTop: 25,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
    height: "20%",
    marginBottom: 8,
    marginTop: 25,
    backgroundColor: "#AFDDFB",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  welcomeText: {
    marginHorizontal: 10,
    fontSize: 17,
    color: "white",
    textAlign: "center",
    marginBottom: 8,
    marginTop: 8,
    alignSelf: "stretch",
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
  },
  actTxt: {
    color: "Black",
    fontSize: 20,
    fontWeight: 600,
  },
  innergrpContainer: {
    flexDirection: "row",
    paddingRight: 15,

    alignItems: "center",
    marginVertical: 20,
    gap: "50%",
  },
  headerItems: {
    flexDirection: "row",
    gap: 30,
  },
  headerItemsTxt: {
    fontSize: 20,
  },
  mainContainer: {
    backgroundColor: "#D9F0FF",
    width: "90%",
    height: "20%",
    borderRadius: 15,
    alignSelf: "center",
    marginVertical: 6,
  },
  mainSub1: {
    flexDirection: "row",
    gap: 25,
    marginVertical: 15,
    alignContent: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  mainSub2: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // marginRight:
  },
  Names: {},
  NamesTxt: {
    fontSize: 25,
    fontWeight: 600,
  },
  NamesSubTxt: {
    fontSize: 15,
  },
  icons: {
    gap: 10,
  },
  AmtTxt: {
    fontSize: 18,
    textAlign: "right",
    marginHorizontal: 20,
    marginVertical: 5,
    fontWeight: 600,
  },
});
