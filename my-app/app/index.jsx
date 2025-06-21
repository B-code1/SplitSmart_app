import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import CustomButton from "../components/Custombutton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardingData = [
    {
      id: 1,
      title: "Expense Tracking",
      subtitle:
        "Keep tabs on who paid what, and when. View your group's payment history in one simple place.",
      image: require("../assets/images/onbording1.png"),
      colors: ["#FFFFFF", "#3498DB"],
    },
    {
      id: 2,
      title: "Bill Splitting",
      subtitle:
        "Split expenses instantly with your group and see who owes what with automatic calculations.",
      image: require("../assets/images/onbording2.png"),
      colors: ["#FFFFFF", "#2ECC71"],
    },
    {
      id: 3,
      title: "Secure Transactions",
      subtitle:
        "Your financial data is protected with bank-level security and encrypted transactions.",
      image: require("../assets/images/onboarding3.png"),
      colors: ["#FFFFFF", "#9B59B6"],
    },
  ];
  const nextSlide = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to main app or login screen
      router.push("/login"); // or wherever you want to go
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const skipOnboarding = () => {
    router.push("/login"); // or wherever you want to go
  };

  const currentData = onboardingData[currentIndex];
  return (
    <LinearGradient
      colors={["#FFFFFF", "#3498DB"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Header with Skip button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={skipOnboarding}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          <Image source={currentData.image} style={styles.bgImage} />

          <Text style={styles.mainTxt}>{currentData.title}</Text>

          <Text style={styles.subTxt}>{currentData.subtitle}</Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Page Indicators */}
          <View style={styles.pageIndicatorContainer}>
            {onboardingData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.pageIndicator,
                  index === currentIndex
                    ? styles.activePageIndicator
                    : styles.inactivePageIndicator,
                ]}
              />
            ))}
          </View>

          {/* Navigation Buttons */}
          <View style={styles.navigationContainer}>
            {/* Previous Button */}
            <TouchableOpacity
              style={[
                styles.navButton,
                currentIndex === 0 && styles.disabledButton,
              ]}
              onPress={prevSlide}
              disabled={currentIndex === 0}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={currentIndex === 0 ? "#999" : "#333"}
              />
            </TouchableOpacity>

            {/* Next/Get Started Button */}
            <TouchableOpacity style={styles.nextButton} onPress={nextSlide}>
              {currentIndex === onboardingData.length - 1 ? (
                <Text style={styles.nextButtonText}>Get Started</Text>
              ) : (
                <Ionicons name="chevron-forward" size={24} color="#333" />
              )}
            </TouchableOpacity>
          </View>

          {/* Bottom Indicator Line */}
          <View style={styles.bottomIndicator} />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  skipText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bgImage: {
    alignSelf: "center",
    resizeMode: "contain",
    height: "70%",
    width: width * 0.8,
    marginVertical: 20,
  },
  mainTxt: {
    fontWeight: "600",
    fontSize: 28,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  subTxt: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  bottomSection: {
    paddingBottom: 30,
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  pageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    marginTop: 20,
  },
  activePageIndicator: {
    backgroundColor: "#333",
  },
  inactivePageIndicator: {
    backgroundColor: "#333",
    opacity: 0.3,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  navButton: {
    width: 60,
    height: 60,
    backgroundColor: "#FFD700",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nextButton: {
    minWidth: 60,
    height: 60,
    backgroundColor: "#FFD700",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nextButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  disabledButton: {
    opacity: 0.5,
  },
  bottomIndicator: {
    alignSelf: "center",
    width: 50,
    height: 4,
    backgroundColor: "#333",
    borderRadius: 2,
    opacity: 0.3,
  },
});
