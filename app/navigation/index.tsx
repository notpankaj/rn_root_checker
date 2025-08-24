import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabs from './TopTabs';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TopTabs} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
