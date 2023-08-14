import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Catagories = () => {
  return (
    <View>
      <Text>Categories </Text>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </View>
  )
}

export default Catagories
