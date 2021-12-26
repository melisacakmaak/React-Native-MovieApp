import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import Movies from '../Pages/Movies';
import MoviesDetail from '../Pages/MoviesDetail';
import color from '../style/color';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: color.chinese_Black},
          headerTintColor: color.white,
        }}>
        <Stack.Screen
          name={routes.MOVIES_PAGE}
          component={Movies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.MOVIES_DETAIL_PAGE}
          component={MoviesDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
