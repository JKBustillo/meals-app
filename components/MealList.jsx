import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        image={item.imageUrl}
        title={item.title}
        onSelectMeal={() => {
          navigation.navigate('MealDetails', { mealId: item.id });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList data={listData} renderItem={renderMealItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
