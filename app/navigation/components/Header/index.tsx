import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../../styles';
import { APP_ICONS } from '../../../../assets';

const Header = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();

  const onSettingPress = () => {
    // @ts-ignore
    navigation.navigate('Contact');
  };

  return (
    <View
      style={{
        paddingTop: inset.top + 15,
        paddingBottom: 15,
        backgroundColor: COLORS.primary,
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: '5%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: COLORS.black, fontSize: 24, fontWeight: '500' }}>
          #RootChecker Next
        </Text>
        <TouchableOpacity
          onPress={onSettingPress}
          style={{ width: 25, height: 25 }}
        >
          <Image style={{ width: 25, height: 25 }} source={APP_ICONS.Setting} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
