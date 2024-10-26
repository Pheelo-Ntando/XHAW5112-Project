// screens/Page2.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const logo = require('../assets/LOGO.png');

const Page2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.pageTitle}>6-Week Courses</Text>
      
      {/* Child Minding */}
      <View style={styles.courseContainer}>
        <Image source={require('../assets/child_minding.png')} style={styles.courseImage} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>Child Minding</Text>
          <Text style={styles.courseDescription}>
            Learn essential skills for caring for children, including safety, basic child psychology, and playtime activities.
          </Text>
        </View>
      </View>

      {/* Cooking */}
      <View style={styles.courseContainer}>
        <Image source={require('../assets/cooking.png')} style={styles.courseImage} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>Cooking</Text>
          <Text style={styles.courseDescription}>
            A practical course focusing on meal preparation, nutritional knowledge, and mastering kitchen basics.
          </Text>
        </View>
      </View>

      {/* Garden Maintenance */}
      <View style={styles.courseContainer}>
        <Image source={require('../assets/garden_maintenance.png')} style={styles.courseImage} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>Garden Maintenance</Text>
          <Text style={styles.courseDescription}>
            Gain hands-on experience in gardening, plant care, and landscaping maintenance.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0000FF',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  courseImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  courseTextContainer: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 16,
    color: 'black',
  },
});

export default Page2;
