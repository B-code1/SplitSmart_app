import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";

import { IconSymbol } from "@/components/IconSymbol";
import { ReactNode } from "react";
// import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>["name"] =
            "home-outline";
          if (route.name === "home") iconName = "home-outline";
          else if (route.name === "groups") iconName = "people-outline";
          else if (route.name === "payment") iconName = "wallet-outline";
          else if (route.name === "activity") iconName = "stats-chart-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#03b6fc",
        tabBarInactiveTintColor: "#222",

        headerShown: false,
        tabBarButton: HapticTab,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      })}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment",
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
        }}
      />
     
    </Tabs>
  );
}
