import { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, NativeModules } from 'react-native';
import { ROOT_DETECTION_PATH } from './utils/root_detection_path';

const { RootCheckModule, FileCheckModule } = NativeModules


// console.log(RootCheckModule, 'RootCheckModule');
// console.log(FileCheckModule, 'FileCheckModule');


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const checkIsDeviceRooted = async () => {
    try {
      const result = await RootCheckModule.isDeviceRooted()
      return result;
    } catch (error) {
      console.error(error)
    }
  }

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
    const TASK = [checkIsDeviceRooted, checkForZygiskFiles]
    try {
      const result = await Promise.all(TASK.map(f=> f()));
      console.log(result, 'res')
    } catch (error) {
      console.error(error, 'Error in init')
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
