import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    // Add any logic you need to perform after the splash screen is displayed
    setTimeout(() => {
      // For example, navigate to the next screen
    }, 2000);
  }, []);

  return (
    // Splash Screen View
    <View style={styles.container}>
      <Image source={require('../img/splash.png')} style={styles.img} />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },

  img: {
    width: 400, // Set width to the screen width
    height: 400, // Set height to the screen height
    resizeMode: 'contain', // You can adjust the resizeMode property as needed
  },
});

export default SplashScreen;
