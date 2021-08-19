import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import MealItem from '../components/MealItem';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        image={item.imageUrl}
        title={item.title}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetails', { mealId: item.id });
        }}
      />
    );
  };

  const categoryId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
