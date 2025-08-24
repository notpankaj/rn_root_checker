import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/HomeScreen';
import InfoScreen from '../../screens/InfoScreen';
import { COLORS } from '../../styles';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

const TopTabs: React.FC = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: { backgroundColor: COLORS.white },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.black,
            height: 3,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabs;
