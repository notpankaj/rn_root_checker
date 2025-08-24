import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { APP_ICONS } from '../../../assets';
import { CONTACT_LINKS } from '../../constants';
import MainLayout from '../../components/MainLayout';
import DeviceInfo from 'react-native-device-info';

const appVersion = DeviceInfo.getVersion();

const ContactScreen: React.FC = () => {
  const handleEmail = () => Linking.openURL('mailto:' + CONTACT_LINKS.email);
  const handleLink = (url: string) => Linking.openURL(url);

  return (
    <MainLayout title="Contact Us">
      <View style={styles.container}>
        <Text style={styles.headerText}>
          You can get in touch with me through below platforms.{'\n'}I will
          reach out to you as soon as it would be possible
        </Text>

        {/* Customer Support */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Customer Support</Text>

          <TouchableOpacity style={styles.row} disabled>
            <Image source={APP_ICONS.AppLogo} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Root Checker</Text>
              <Text style={styles.value}>Version {appVersion}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={handleEmail}>
            <Image source={APP_ICONS.Mail} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Email Address</Text>
              <Text style={styles.value}>{CONTACT_LINKS.email}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Social Media */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Social Media</Text>

          <TouchableOpacity
            style={styles.row}
            onPress={() => handleLink(CONTACT_LINKS.instagram)}
          >
            <Image source={APP_ICONS.Instagram} style={styles.icon} />
            <Text style={styles.value2}>@its.not.pankaj</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.row}
            onPress={() => handleLink(CONTACT_LINKS.github)}
          >
            <Image source={APP_ICONS.Github} style={styles.icon} />
            <Text style={styles.value2}>@notpankaj</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.row}
            onPress={() => handleLink(CONTACT_LINKS.youtube)}
          >
            <Image source={APP_ICONS.Youtube} style={styles.icon} />
            <Text style={styles.value2}>Localhost Life</Text>
          </TouchableOpacity>
        </View>
      </View>
    </MainLayout>
  );
};
export default ContactScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  headerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 12,
    color: '#777',
  },
  value: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  value2: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginLeft: 10,
  },
});
