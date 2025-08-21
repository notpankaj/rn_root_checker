import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabs from './TopTabs';

import Header from './components/Header';





const Stack = createNativeStackNavigator();


function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      header: () => <Header />
    }}>
      <Stack.Screen name="Tabs" component={TopTabs} />
    </Stack.Navigator>
  );
}

export default RootStack