import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ActivityIndicator,
  NativeModules,
} from 'react-native';
import { ROOT_DETECTION_PATH } from './utils/root_detection_path';

const { RootCheckModule, FileCheckModule } = NativeModules;

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [isRooted, setIsRooted] = useState<boolean | null>(null);
  const [hasZygiskFiles, setHasZygiskFiles] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const checkIsDeviceRooted = async () => {
    try {
      const result = await RootCheckModule.isDeviceRooted();
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const checkForZygiskFiles = async () => {
    try {
      const results = await Promise.all(
        ROOT_DETECTION_PATH.map((path) => FileCheckModule.doesFileExist(path))
      );
      return results.some((result) => result === true);
    } catch (error) {
      console.error('Error checking for Zygisk files:', error);
      return false;
    }
  };

  const init = async () => {
    try {
      const [rooted, zygisk] = await Promise.all([
        checkIsDeviceRooted(),
        checkForZygiskFiles(),
      ]);
      setIsRooted(rooted);
      setHasZygiskFiles(zygisk);
    } catch (error) {
      console.error('Error in init:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#fff' },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
          Root & Zygisk Detection
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#007aff" />
        ) : (
          <>
            <Text style={[styles.resultText, { color: isDarkMode ? '#ccc' : '#333' }]}>
              Device Rooted: {isRooted ? 'Yes 🔓' : 'No 🔐'}
            </Text>
            <Text style={[styles.resultText, { color: isDarkMode ? '#ccc' : '#333' }]}>
              Zygisk Files Detected: {hasZygiskFiles ? 'Yes ⚠️' : 'No ✅'}
            </Text>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
  },
  resultText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default App;
