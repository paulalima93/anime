import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/stackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>

  );
}
