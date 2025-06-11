import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";


const PaymentStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: 16,
        
  },
    scrollView: {
        flexGrow: 1,
        paddingBottom: 20,
        
    },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginBottom: 8,
    marginTop: 19,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 8,
    color: "#222",
   
  },
  logo: {
    width: 36,
    height: 36,
    resizeMode: "contain",
    
  },
  welcomeText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 8,
  },
  topButtonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    width: "100%",
  },
  topButton: {
    backgroundColor:  Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  topButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  arcSection: {
    alignItems: "center",
    marginBottom: 24,
    width: "100%",
  },
  arcRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  arcLabel: {
    fontSize: 15,
    color: "white",
  },
  arcIcons: {
    flexDirection: "row",
    gap: 8,
  },
  arcIcon: {
    fontSize: 18,
    marginHorizontal: 2,
  },
  arcCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#03b6fc",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5faff",
    marginBottom: 8,
  },
  arcName: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 4,
  },
  arcAmount: {
    fontSize: 32,
    color: "#03b6fc",
    fontWeight: "bold",
    marginBottom: 2,
  },
  arcFriends: {
    fontSize: 13,
    color: "#888",
  },
  arcSplitBill: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 15,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 8,
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  tabRow: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 8,
    justifyContent: "center",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  activeTab: {
    borderBottomColor: "#03b6fc",
  },
  tabText: {
    color: "#888",
    fontSize: 15,
  },
  tabTextActive: {
    color: "#03b6fc",
    fontWeight: "bold",
    fontSize: 15,
  },
  balanceLabel: {
    fontSize: 15,
    color: "#888",
    marginTop: 8,
    marginBottom: 2,
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  balanceAmount: {
    fontSize: 28,
    color: "#222",
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "flex-start",
    marginLeft: 8,
  },
  paymentActionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#03b6fc",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: "#03b6fc",
    fontWeight: "bold",
    fontSize: 16,
  },
  splitPaymentButton: {
    backgroundColor: "#222",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  splitPaymentButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  addBankRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    gap: 16,
  },
  debitButton: {
    backgroundColor: "#eee",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginRight: 8,
  },
  debitButtonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 16,
  },
  addBankText: {
    color: "#black",
    fontSize: 15,
    textAlign: "center",
  },
});
export default PaymentStyle;