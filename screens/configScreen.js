import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const ConfigScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Configuração</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ConfigScreen;