import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to React-Native Cross-Platform Project
      </Text>
      <Text style={styles.os}>Platform: {Platform.OS.toUpperCase()}</Text>
      <Text style={styles.os}>
        In favor of react, react-native, react-native-web and electron{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'darkblue',
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#e9e8e8',
    textAlign: 'center',
    marginVertical: 12,
  },
  os: {
    color: '#e4e4e4da',
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 24,
    alignSelf: 'center',
  },
});
