import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ route }) => {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text>Welcome {username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;