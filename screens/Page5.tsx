// screens/Page5.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Page5 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/LOGO.png')} style={styles.logo} />
      </View>

      {/* Page Title */}
      <Text style={styles.pageTitle}>Contact Us</Text>

      {/* Section 1: Introduction */}
      <Text style={styles.heading}>Get in Touch With Empowering The Nation</Text>
      <Text style={styles.paragraph}>
        Thank you for considering Empowering The Nation for your training needs! Our dedicated team is here to support you every step of the way.
      </Text>

      {/* Section 2: Contact Information */}
      <Text style={styles.heading}>Contact Information:</Text>
      <Text style={styles.paragraph}>Email: empoweringthenation@gmail.com</Text>
      <Text style={styles.paragraph}>Phone: 011 555 1234</Text>
      <Text style={styles.paragraph}>Address: 123 Main Street, Johannesburg, South Africa</Text>
      <Text style={styles.paragraph}>Fax: 011 555 5678</Text>

      {/* Section 3: Department Contacts */}
      <Text style={styles.heading}>Department Contacts:</Text>
      <Text style={styles.paragraph}>General Enquiries: enquiries@empoweringthenation.com</Text>
      <Text style={styles.paragraph}>Course Registration: registration@empoweringthenation.com</Text>
      <Text style={styles.paragraph}>Customer Support: support@empoweringthenation.com</Text>

      {/* Section 4: Social Media */}
      <Text style={styles.heading}>Social Media:</Text>
      <Text style={styles.paragraph}>Facebook: @EmpoweringTheNationSA</Text>
      <Text style={styles.paragraph}>Twitter: @EmpoweringTheNationSA</Text>
      <Text style={styles.paragraph}>Instagram: @EmpoweringTheNationSA</Text>
      <Text style={styles.paragraph}>LinkedIn: @EmpoweringTheNationSA</Text>

      {/* Section 5: Reasons to Contact */}
      <Text style={styles.heading}>Why Contact Us?</Text>
      <Text style={styles.paragraph}>Register for a course</Text>
      <Text style={styles.paragraph}>Enquire about course content or schedules</Text>
      <Text style={styles.paragraph}>Request a quote for group training</Text>
      <Text style={styles.paragraph}>Provide feedback or suggestions</Text>
      <Text style={styles.paragraph}>Learn more about our services</Text>

      {/* Section 6: Founders */}
      <Text style={styles.heading}>Founders:</Text>
      <Text style={styles.paragraph}>Pheelo Ntando: ST10436148@imconnect.edu.za</Text>
      <Text style={styles.paragraph}>Siweya Makungu: ST10453070@imconnect.edu.za</Text>
      <Text style={styles.paragraph}>Samkhelo Setlaleleng: ST10449148@imconnect.edu.za</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0000FF', // Blue background
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
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default Page5;
