import React, { PropsWithChildren } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { APP_ICONS } from '../../assets';
import { COLORS } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MainLayoutProps extends PropsWithChildren {
  title?: string;
}
interface MainHeaderProps {
  title: string;
}

const MainHeader = ({ title }: MainHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightgrey,
      }}
    >
      <TouchableOpacity onPress={navigation.goBack}>
        <Image style={{ width: 12, height: 12 }} source={APP_ICONS.leftArrow} />
      </TouchableOpacity>
      <Text style={{ color: COLORS.black, fontSize: 14, fontWeight: '500' }}>
        {title}
      </Text>
    </View>
  );
};

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainHeader title={title || ''} />
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;
