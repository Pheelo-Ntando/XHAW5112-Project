// screens/Page3.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const logo = require('../assets/LOGO.png');

const Page3 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.pageTitle}>6-Month Courses</Text>
      
      {/* First Aid */}
      <View style={styles.courseContainer}>
        <Image source={require('../assets/first_aid.png')} style={styles.courseImage} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>First Aid</Text>
          <Text style={styles.courseDescription}>
            Comprehensive training in emergency care, CPR, and handling injuries.
          </Text>
        </View>
      </View>

      {/* Landscaping */}
      <View style={styles.courseContainer}>
        <Image source={require('../assets/landscaping.png')} style={styles.courseImage} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>Landscaping</Text>
          <Text style={styles.courseDescription}>
            Dive into professional landscaping design, installation, and maintenance.
          </Text>
        </View>
      </View>

      {/* Life Skills */}
      <View style={styles.courseContainer}>
        <Image source={require('../assets/life_skills.png')} style={styles.courseImage} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>Life Skills</Text>
          <Text style={styles.courseDescription}>
            A holistic course covering essential skills like communication, financial literacy, and personal development.
          </Text>
        </View>
      </View>

      {/* Sewing */}
      <View style={styles.courseContainer}>
        <Image source={require('../assets/sewing.png')} style={styles.courseImage} />
        <View style={styles.courseTextContainer}>
          <Text style={styles.courseTitle}>Sewing</Text>
          <Text style={styles.courseDescription}>
            Learn the art of sewing, tailoring, and garment repair.
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

export default Page3;
