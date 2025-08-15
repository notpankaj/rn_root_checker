import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabs from './TopTabs';





const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs"  options={{
        headerTitle:"#Root Checker"
      }} component={TopTabs} />
    </Stack.Navigator>
  );
}

export default RootStack