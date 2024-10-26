// screens/Page4.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';

const logo = require('../assets/LOGO.png');

const Page4 = () => {
  // State for course selections
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  
  const courses6Weeks = [
    { name: 'Child Minding', price: 750 },
    { name: 'Cooking', price: 750 },
    { name: 'Garden Maintenance', price: 750 },
  ];

  const courses6Months = [
    { name: 'First Aid', price: 1500 },
    { name: 'Sewing', price: 1500 },
    { name: 'Landscaping', price: 1500 },
    { name: 'Life Skills', price: 1500 },
  ];

  // Function to handle checkbox selection
  const toggleCourseSelection = (courseName: string) => {
    setSelectedCourses(prev =>
      prev.includes(courseName) ? prev.filter(c => c !== courseName) : [...prev, courseName]
    );
  };

  // Calculate total and discounts
  const totalPrice = selectedCourses.reduce((total, courseName) => {
    const course = [...courses6Weeks, ...courses6Months].find(c => c.name === courseName);
    return course ? total + course.price : total;
  }, 0);

  const discountPercentage =
    selectedCourses.length === 1 ? 0 :
    selectedCourses.length === 2 ? 5 :
    selectedCourses.length === 3 ? 10 : 15;

  const discountAmount = (totalPrice * discountPercentage) / 100;
  const finalPrice = totalPrice - discountAmount;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.pageTitle}>Checkout</Text>
      <Text style={styles.description}>
        Please select the course you want to study at Empowering The Nation.
        {'\n'}1 selected course = no discount
        {'\n'}2 selected courses = 5% discount
        {'\n'}3 selected courses = 10% discount
        {'\n'}More than 3 courses selected = 15% discount
      </Text>

      {/* 6 Weeks Courses */}
      <Text style={styles.sectionTitle}>6 Weeks Courses</Text>
      {courses6Weeks.map(course => (
        <View key={course.name} style={styles.courseContainer}>
          <Checkbox.Android
            status={selectedCourses.includes(course.name) ? 'checked' : 'unchecked'}
            onPress={() => toggleCourseSelection(course.name)}
          />
          <Text style={styles.courseText}>{course.name} - R{course.price}</Text>
        </View>
      ))}

      {/* 6 Months Courses */}
      <Text style={styles.sectionTitle}>6 Months Courses</Text>
      {courses6Months.map(course => (
        <View key={course.name} style={styles.courseContainer}>
          <Checkbox.Android
            status={selectedCourses.includes(course.name) ? 'checked' : 'unchecked'}
            onPress={() => toggleCourseSelection(course.name)}
          />
          <Text style={styles.courseText}>{course.name} - R{course.price}</Text>
        </View>
      ))}

      {/* Total and Discount */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: R{totalPrice}</Text>
        <Text style={styles.discountText}>Discount: R{discountAmount}</Text>
        <Text style={styles.finalPriceText}>Final Price: R{finalPrice}</Text>
      </View>
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
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  courseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseText: {
    fontSize: 16,
    color: 'black',
  },
  totalContainer: {
    marginTop: 20,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  discountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  finalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
});

export default Page4;
