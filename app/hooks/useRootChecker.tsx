import { useCallback, useState } from 'react';
import { NativeModules, ToastAndroid } from 'react-native';
import { ROOT_DETECTION_PATH } from '../../utils/root_detection_path';
const { RootCheckModule, FileCheckModule } = NativeModules;

const useRootChecker = () => {
  const [isRooted, setIsRooted] = useState<boolean | null>(null);
  const [hasZygiskFiles, setHasZygiskFiles] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const checkIsDeviceRooted = useCallback(async () => {
    try {
      const result = await RootCheckModule.isDeviceRooted();
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  }, []);

  const checkForZygiskFiles = useCallback(async () => {
    try {
      const results = await Promise.all(
        ROOT_DETECTION_PATH.map(path => FileCheckModule.doesFileExist(path)),
      );
      return results.some(result => result === true);
    } catch (error) {
      console.error('Error checking for Zygisk files:', error);
      return false;
    }
  }, []);

  const init = useCallback(async () => {
    ToastAndroid.show('Verifying root status...', 1000);

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
  }, []);

  return {
    init,
    hasZygiskFiles,
    isRooted,
    loading,
  };
};

export default useRootChecker;
