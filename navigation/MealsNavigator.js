import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import { primaryColor } from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetails: MealDetailScreen
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: primaryColor
    },
    headerTintColor: 'white'
  }
});

export default createAppContainer(MealsNavigator);