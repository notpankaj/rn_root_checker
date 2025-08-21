import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/HomeScreen';
import InfoScreen from '../../screens/InfoScreen';


const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabs;
