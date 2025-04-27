import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const WithdrawScreen: React.FC = () => {
  const handleWithdraw = () => {
    // Add your withdraw logic here
    console.log("Withdraw button pressed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Withdraw Screen</Text>
      <Button title="Withdraw" onPress={handleWithdraw} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default WithdrawScreen;
