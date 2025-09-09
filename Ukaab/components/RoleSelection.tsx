import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const FONT_REGULAR = "Poppins-Regular";
const FONT_MEDIUM = "Poppins-Medium";
const FONT_SEMIBOLD = "Poppins-SemiBold";
const FONT_BOLD = "Poppins-Bold";
const FONT_LOGO = "Radley-Regular";

const COLORS = {
  primary: "#3B6255",
  overlayLabelText: "rgba(59, 98, 85, 0.72)",
backgroundGradient: [
  "rgba(34, 57, 49, 0.4)",
  "rgba(64, 108, 93, 0.4)",
  "rgba(87, 153, 131, 0.4)",
  "rgba(198, 230, 220, 0.4)",
  "rgba(230, 237, 236, 0.4)",
],

  cardBackground: "#E8EDEC",
  cardBorder: "#3B6255",
  dropdownBackground: "rgba(178, 215, 202, 0.23)",
  dropdownBorder: "#578C7A",
  roleLabelColor: "#7B7F8D",
  buttonGradient: ["#223931", "#578C7A"],
  buttonShadowColor: "#000",
  buttonTextColor: "#FFFFFF",
  textBlack: "#333333",
  textPrimary: "#3B6255",
};

const OPTIONS = ["Shipper", "Truck Driver", "Trucking Company"];

export default function RoleSelectionScreen() {
  const [role, setRole] = useState("Select Role");
  const [open, setOpen] = useState(false);

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.root}
      resizeMode="cover"
    >
      <LinearGradient
        colors={COLORS.backgroundGradient}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        {/* Floating Label */}
        <View style={styles.floatingLabel}>
          <View style={styles.floatingRect} />
          <Text style={styles.floatingLabelText}>Select your role</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            {/* Logo Row */}
            <View style={styles.logoRow}>
              <Image
                source={require("../assets/images/logo2.png")}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.logoText}>Ukaab</Text>
            </View>

            {/* Header */}
            <View style={styles.headerBlock}>
              <Text style={styles.title}>Choose Your Role to Get Started</Text>
              <Text style={styles.subtitle}>
                Tell us how you want to use Ukaab so we can set up the right
                experience for you.
              </Text>
            </View>

            {/* Role Label */}
            <Text style={styles.roleLabel}>Role</Text>

            {/* Dropdown Menu */}
            <View style={styles.dropdownWrapper}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.dropdownHeader}
                onPress={() => setOpen((v) => !v)}
              >
                <Text style={styles.dropdownHeaderText}>{role}</Text>
                {/* Arrow points down when closed, up when open */}
                <Text style={styles.chev}>{open ? "▲" : "▼"}</Text>
              </TouchableOpacity>

              {open && (
                <View style={styles.group32}>
                  {OPTIONS.map((opt) => (
                    <TouchableOpacity
                      key={opt}
                      onPress={() => {
                        setRole(opt);
                        setOpen(false);
                      }}
                      style={styles.optionBox}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.optionText}>{opt}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Next Button */}
            <TouchableOpacity activeOpacity={0.9} style={{ width: "100%" }}>
              <LinearGradient
                colors={COLORS.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.nextButton}
              >
                <Text style={styles.nextButtonText}>Next</Text>
                <Text style={styles.nextButtonArrow}>»</Text>

              </LinearGradient>
            </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  group32: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: "#D9DFDD",
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    zIndex: 999,
  },

  optionBox: {
    width: "100%",
    height: 31,
    justifyContent: "center",
    paddingLeft: 11,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
  },

  optionText: {
    color: COLORS.overlayLabelText,
    fontSize: 16,
    fontFamily: FONT_REGULAR,
    fontWeight: "400",
  },

  floatingLabel: {
    position: "absolute",
    left: 86,
    top: 406,
    width: 222,
    height: 36,
    justifyContent: "center",
  },
  floatingRect: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 222,
    height: 36,
    backgroundColor: COLORS.dropdownBackground,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  floatingLabelText: {
    position: "absolute",
    left: 12,
    top: 8,
    color: COLORS.overlayLabelText,
    fontSize: 16,
    fontFamily: FONT_BOLD,
  },

  card: {
    width: 341,
    height: 436,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 31,
    paddingBottom: 31,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    flex: 0,
    width: "100%",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 36,
  },
  logoText: {
    marginLeft: 7,
    fontSize: 24,
    color: COLORS.primary,
    fontFamily: FONT_LOGO,
    fontWeight: "400",
  },

  headerBlock: {
    marginTop: 14,
    marginBottom: 14,
  },
  title: {
    color: COLORS.textBlack,
    fontSize: 24,
    fontFamily: FONT_BOLD,
    lineHeight: 30,
  },
  subtitle: {
    color: COLORS.textBlack,
    fontSize: 12,
    marginTop: 8,
    fontFamily: FONT_REGULAR,
  },

  roleLabel: {
    alignSelf: "flex-start",
    color: COLORS.roleLabelColor,
    fontSize: 12,
    fontFamily: FONT_REGULAR,
    marginTop: 12,
    marginBottom: 6,
    fontWeight:400,
  },
  dropdownWrapper: {
    width: "100%",
    position: "relative",
  },

  dropdownHeader: {
    width: "100%",
    paddingVertical: 9,
    paddingHorizontal: 18,
    backgroundColor: COLORS.dropdownBackground,
    borderRadius: 6,
    borderWidth: 1.3,
    borderColor: COLORS.dropdownBorder,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownHeaderText: {
    color: COLORS.primary,
    fontSize: 12,
    fontFamily: FONT_REGULAR,
  },
  chev: {
    color: COLORS.primary,
    fontSize: 16,
    opacity: 0.9,
    // No rotation needed; using characters ▲ and ▼ directly
  },
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

});
