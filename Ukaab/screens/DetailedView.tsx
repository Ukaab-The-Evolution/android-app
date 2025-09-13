import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Theme } from "../Theme";

interface DetailedViewProps {
  onAccept?: () => void;
  onReject?: () => void;
}

const DetailedView: React.FC<DetailedViewProps> = ({ onAccept, onReject }) => {
  const handleAccept = () => {
    if (onAccept) {
      onAccept();
    }
    console.log("Load accepted");
  };

  const handleReject = () => {
    if (onReject) {
      onReject();
    }
    console.log("Load rejected");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.loadCard}>
          {/* Load Details */}
          <View style={styles.loadDetails}>
            <Text style={styles.companyText}>abc ltd.</Text>

            {/* Route and Rate on same line */}
            <View style={styles.routeRateContainer}>
              <Text style={styles.routeText}>Lahore → Karachi</Text>
              <View style={styles.rateContainer}>
                <Text style={styles.rateLabel}>Rate: </Text>
                <Text style={styles.rateAmount}>$2,450</Text>
              </View>
            </View>

            <Text style={styles.weightText}>Weight: 15,000 lbs</Text>
            <Text style={styles.trucksText}>Trucks: 2</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
              <LinearGradient
                colors={[Theme.palette.primary, Theme.palette.secondary]}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.buttonText}>Accept</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
              <LinearGradient
                colors={["#760000", "#D64343"]}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
  },
  loadCard: {
    width: "100%",
    backgroundColor: Theme.palette.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 24.68,
    paddingTop: 22.74,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,

   marginBottom: 0,
  },
  loadDetails: {
    marginBottom: 15,
  },
  companyText: {
    color: "#5F5F5F",
    fontSize: 14,
    fontFamily: Theme.fonts.poppinsRegular,
    fontWeight: "400",
    marginBottom: 6,
  },
  routeRateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  leftContent: {
    flex: 1,
  },
  routeText: {
    color: "#5F5F5F",
    justifyContent: "center",
    fontSize: 14,
    fontFamily: Theme.fonts.poppinsRegular,
    fontWeight: "400",
  },
  rateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rateLabel: {
    color: "#5F5F5F",
    fontSize: 20,
    fontFamily: Theme.fonts.poppinsRegular,
    fontWeight: "400",
  },
  rateAmount: {
    color: "#16A34A",
    fontSize: 20,
    fontFamily: Theme.fonts.poppinsRegular,
    fontWeight: "400",
  },
  weightText: {
    color: "#5F5F5F",
    fontSize: 14,
    fontFamily: Theme.fonts.poppinsRegular,
    fontWeight: "400",
    marginBottom: 6,
  },
  trucksText: {
    color: "#5F5F5F",
    fontSize: 14,
    fontFamily: Theme.fonts.poppinsRegular,
    fontWeight: "400",
  },
  buttonsContainer: {
    gap: 7,
  },
  acceptButton: {
    width: "100%",
    height: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,
  },
  rejectButton: {
    width: "100%",
    height: 40,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,
  },
  buttonGradient: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Theme.palette.white,
    fontSize: 15,
    fontFamily: Theme.fonts.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default DetailedView;
