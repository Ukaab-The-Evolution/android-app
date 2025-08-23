import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const FONT_REGULAR = "Poppins-Regular";
const FONT_MEDIUM = "Poppins-Medium";
const FONT_SEMIBOLD = "Poppins-SemiBold";
const FONT_BOLD = "Poppins-Bold";
const FONT_LOGO = "Radley-Regular";

const COLORS = {
  primary: "#3B6255",
  secondary: "#578C7A",
  white: "#FFFFFF",
  black: "#333333",
  background: "#E6EDEC",
  // This is the exact button gradient from RoleSelectionScreen
  buttonGradient: ["#223931", "#578C7A"],
  buttonShadowColor: "#000",
  buttonTextColor: "#FFFFFF",
  screenGradient: [
    "#E6EDEC",
    "#C6E6DC",
    "#579983",
    "#406C5D",
    "#223931",
  ],
};

export default function GetStartedScreen({ onGetStarted }) {
  return (
    <LinearGradient
      colors={COLORS.screenGradient}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.content}>
        {/* Top Section */}
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/logo2.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>Ukaab</Text>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.mainTitle}>Ready to transform your logistics?</Text>
            <Text style={styles.subtitle}>Fast & Secure</Text>
          </View>

          <Text style={styles.descriptionText}>
            Welcome to Ukaab, your all-in-one logistics partner. Track, assign,
            and manage your shipments effortlessly and in real time.
          </Text>

          {/* Get Started button, exactly same as RoleSelectionScreen's Next button */}
          <TouchableOpacity activeOpacity={0.9} style={{ width: "100%" }} onPress={onGetStarted}>
            <LinearGradient
              colors={COLORS.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.nextButton}
            >
              <Text style={styles.nextButtonText}>Get Started</Text>
              <Text style={styles.nextButtonArrow}>»</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/truck_illustration.png")}
              style={styles.mainImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomMainText}>No More Long Delays</Text>
            <Text style={styles.bottomSubText}>
              Get your loads moving faster, smarter, and on time, every time.
            </Text>
          </View>

          <View style={styles.supportSection}>
            <View style={styles.supportIconContainer}>
              <View style={styles.supportIcon}>
                <View style={styles.headsetBody} />
                <View style={[styles.earCup, styles.leftEarCup]} />
                <View style={[styles.earCup, styles.rightEarCup]} />
                <View style={[styles.eye, styles.leftEye]} />
                <View style={[styles.eye, styles.rightEye]} />
                <View style={styles.headShape} />
              </View>
            </View>
            <Text style={styles.supportText}>Support</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 20,
  },

  topSection: {
    alignItems: "flex-start",
    width: "100%",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  logoImage: {
    width: 40,
    height: 30,
  },

  logoText: {
    marginLeft: 8,
    color: COLORS.primary,
    fontSize: 22,
    fontFamily: FONT_LOGO,
    fontWeight: "400",
  },

  headerContent: {
    marginBottom: 12,
  },

  mainTitle: {
    color: COLORS.black,
    fontSize: 26,
    fontFamily: FONT_BOLD,
    fontWeight: "700",
    lineHeight: 32,
    marginBottom: 6,
  },

  subtitle: {
    color: COLORS.primary,
    fontSize: 20,
    fontFamily: FONT_MEDIUM,
    fontWeight: "500",
  },

  descriptionText: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: FONT_REGULAR,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 16,
  },

  /* Button styles copied exactly from RoleSelectionScreen */
nextButton: {
  marginTop: 18,
  borderRadius: 50,
  paddingHorizontal: 25,
  paddingVertical: 6, // matches HTML's top/bottom padding
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 11,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 12,
  elevation: 6,
},

  nextButtonText: {
    color: COLORS.buttonTextColor,
    fontSize: 15,
    fontFamily: FONT_SEMIBOLD,
    fontWeight: "600",
  },

  nextButtonArrow: {
    color: COLORS.buttonTextColor,
    fontSize: 20,
    fontFamily: FONT_MEDIUM,
    fontWeight: "300",
    marginLeft: 8,
    letterSpacing: -1,
  },

bottomSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 500,
  },


 imageContainer: {
   width: '100%',
   alignItems: 'center',
   marginBottom: 15, // reduced
 },

  mainImage: {
    width: 280,
    height: 200,
  },

 bottomTextContainer: {
   width: '100%',
   alignItems: 'center',
   marginBottom: 25, // reduced
 },



  bottomMainText: {
    color: COLORS.white,
    fontSize: 28,
    fontFamily: FONT_BOLD,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 32,
  },



  bottomSubText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONT_REGULAR,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },


  supportSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    paddingBottom: 4,
    width: "100%",
    justifyContent: "center",
  },

  supportIconContainer: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },

  supportIcon: {
    width: 24,
    height: 24,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },

  headsetBody: {
    position: "absolute",
    width: 18,
    height: 3,
    backgroundColor: COLORS.white,
    borderRadius: 2,
    top: 0,
    left: 3,
  },

  earCup: {
    position: "absolute",
    width: 3,
    height: 6,
    backgroundColor: COLORS.white,
    borderRadius: 2,
  },

  leftEarCup: {
    top: 3,
    left: 0,
  },

  rightEarCup: {
    top: 3,
    right: 0,
  },

  eye: {
    position: "absolute",
    width: 2,
    height: 2,
    backgroundColor: COLORS.white,
    borderRadius: 1,
  },

  leftEye: {
    top: 13,
    left: 8,
  },

  rightEye: {
    top: 13,
    right: 8,
  },

  headShape: {
    position: "absolute",
    width: 12,
    height: 8,
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: COLORS.white,
    borderRadius: 6,
    top: 10,
    left: 6,
    borderBottomWidth: 1,
  },

  supportText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONT_MEDIUM,
    fontWeight: "500",
  },
});
