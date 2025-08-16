import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DeviceInfoScreen = () => {
    const [deviceData, setDeviceData] = useState<{
        name: string;
        value: any;
    }[]>([]);

    useEffect(() => {
        const fetchDeviceInfo = async () => {
            const info = [
                { name: 'System Name', value: DeviceInfo.getSystemName() },
                { name: 'System Version', value: await DeviceInfo.getSystemVersion() },
                { name: 'Brand', value: DeviceInfo.getBrand() },
                { name: 'Model', value: await DeviceInfo.getModel() },
                { name: 'Device ID', value: DeviceInfo.getDeviceId() },
                { name: 'Device Type', value: DeviceInfo.getDeviceType() },
                { name: 'Unique ID', value: await DeviceInfo.getUniqueId() },
                { name: 'Manufacturer', value: await DeviceInfo.getManufacturer() },
                { name: 'API Level', value: await DeviceInfo.getApiLevel() },
                { name: 'Is Emulator', value: (await DeviceInfo.isEmulator()).toString() },
                { name: 'Has Notch', value: DeviceInfo.hasNotch().toString() },
                { name: 'Is Tablet', value: DeviceInfo.isTablet().toString() },
                { name: 'Supported ABIs', value: (await DeviceInfo.supportedAbis()).join(', ') },
                { name: 'Bootloader', value: await DeviceInfo.getBootloader() },
                { name: 'Hardware', value: await DeviceInfo.getHardware() },
                { name: 'Display', value: await DeviceInfo.getDisplay() },
                { name: 'Security Patch', value: await DeviceInfo.getSecurityPatch() },
            ];

            setDeviceData(info);
        };

        fetchDeviceInfo();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Device Info</Text>
            {deviceData.map((item, index) => (
                <View
                    key={index}
                    style={[
                        styles.row,
                        { backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' },
                    ]}
                >
                    <Text style={styles.label}>{item.name}</Text>
                    <Text style={styles.value}>{item.value}</Text>
                </View>
            ))}
        </View>
    );
};

export default DeviceInfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    row: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 4,
        flexDirection: 'row',
        marginBottom: 4,
    },
    label: {
        width: 150,
        fontWeight: '600',
        color: '#333',
    },
    value: {
        color: '#555',
    },
});
