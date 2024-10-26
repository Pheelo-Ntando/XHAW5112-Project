// screens/Page1.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const logo = require('../assets/LOGO.png');

const Page1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Title */}
      <Text style={styles.pageTitle}>Welcome to Empowering The Nation</Text>

      {/* Slogan */}
      <Text style={styles.slogan}>Your Gateway To Essential Life Skills And Practical Knowledge!</Text>

      {/* Paragraph */}
      <Text style={styles.paragraph}>
        Welcome to Empowering The Nation, a platform dedicated to unlocking your potential through innovative courses and resources. 
        Our mission is to provide accessible, top-quality education that empowers individuals to grow, learn, and make a positive impact. 
        Whether you’re looking to enhance your skills in a short course or commit to a transformative 6-month program, we’re here to guide 
        you every step of the way. Join us and be part of a community striving for growth, success, and a brighter future!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0000FF', // Blue background
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 190, // Adjust width as needed
    height: 190, // Adjust height as needed
    resizeMode: 'contain',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  slogan: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Page1;
