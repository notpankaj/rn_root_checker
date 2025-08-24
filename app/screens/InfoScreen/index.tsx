import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ----- Types -----
type FAQItem = {
  question: string;
  answer: string;
};

type TerminologyItem = {
  term: string;
  definition: string;
};

type SectionDataItem = {
  title: string;
  description: string;
};

type InfoSection = {
  title: string;
  data: SectionDataItem[];
};

type ExpandedItemsState = {
  [key: string]: boolean;
};

// ----- Data -----
const faqs: FAQItem[] = [
  {
    question: 'What is root on Android?',
    answer:
      'Rooting is the process of gaining superuser (administrator) access to your Android device, which allows you to control and modify system files, apps, and settings that are normally restricted.',
  },
  {
    question: 'Is rooting safe?',
    answer:
      'Rooting itself is not inherently unsafe, but it can expose your device to risks. Malicious apps could misuse root access, and incorrect modifications may cause instability or data loss.',
  },
  {
    question: 'What are the benefits of rooting?',
    answer:
      'Rooting enables advanced customization, removal of bloatware, better backups, performance tweaks, and the ability to install custom ROMs for new features or Android versions.',
  },
  {
    question: 'What are the risks of rooting?',
    answer:
      'Rooting can void your warranty, prevent OTA updates, cause security vulnerabilities, or even brick your device if not done correctly.',
  },
  {
    question: 'Can I unroot my device?',
    answer:
      'Yes. You can unroot by using tools like Magisk Manager or by reinstalling the official stock firmware, which restores the device to factory condition.',
  },
  {
    question: 'Will rooting affect software updates?',
    answer:
      'Rooted devices may fail to install official over-the-air (OTA) updates. You may need to flash updates manually or use a custom ROM instead.',
  },
  {
    question: 'Does rooting void my warranty?',
    answer:
      'In most cases, yes. Manufacturers and carriers usually void the warranty if the device is rooted. Always review your warranty policy first.',
  },
  {
    question: 'Can rooting brick my device?',
    answer:
      'Yes. An incorrect rooting process or flashing unsupported files can permanently damage (“brick”) your device. Always follow trusted guides for your exact model.',
  },
];

const terminology: TerminologyItem[] = [
  {
    term: 'ROM',
    definition:
      'A custom ROM is a modified version of Android created by developers to add features, improve performance, or update old devices.',
  },
  {
    term: 'Kernel',
    definition:
      'The kernel is the core part of the operating system. It connects apps and the Android system to the device’s hardware, managing things like CPU, memory, and battery usage.',
  },
  {
    term: 'Radio',
    definition:
      'The radio is the firmware that controls wireless communications on your device, such as mobile networks, Wi-Fi, GPS, and Bluetooth.',
  },
  {
    term: 'Flash',
    definition:
      'Flashing means installing or overwriting system software (ROMs, kernels, recovery, etc.) onto your device’s internal memory.',
  },
  {
    term: 'Brick',
    definition:
      "A 'bricked' device is one that no longer functions because of corrupted or incorrect software installation. It can be 'soft-bricked' (usually fixable with flashing or recovery) or 'hard-bricked' (permanently unusable).",
  },
  {
    term: 'Bootloader',
    definition:
      'The bootloader is the program that starts up when you power on your device and loads the operating system. Unlocking it is often required for rooting or installing custom ROMs.',
  },
  {
    term: 'Recovery',
    definition:
      'Recovery is a special boot mode that lets you install updates, factory reset, or perform backups. Custom recoveries like TWRP provide advanced features such as flashing ZIP files and creating full backups.',
  },
  {
    term: 'Nandroid',
    definition:
      'A Nandroid backup is a complete image of your device’s system, apps, and data. Restoring it brings your device back to the exact state it was in when the backup was made.',
  },
  {
    term: 'Fastboot',
    definition:
      'Fastboot is a tool and protocol that allows flashing partitions of your device directly from a computer over USB. It is commonly used to unlock bootloaders, install recoveries, or fix bricked devices.',
  },
  {
    term: 'ADB',
    definition:
      'ADB (Android Debug Bridge) is a command-line tool that lets you communicate with your Android device from a computer. It is widely used for debugging, installing apps, transferring files, and issuing root commands.',
  },
  {
    term: 'S-OFF',
    definition:
      'S-OFF (Security OFF) is a state on some HTC devices that disables security checks on the NAND flash memory, giving unrestricted system access.',
  },
  {
    term: 'RUU, SBF, OPS',
    definition:
      'These are manufacturer-specific firmware file formats: RUU (HTC), SBF (Motorola), and OPS (used with Samsung Odin). They are used to restore or update official software.',
  },
  {
    term: 'BusyBox',
    definition:
      'BusyBox is a software package that bundles many common UNIX/Linux commands into a single executable. On rooted devices, it enables advanced scripts and apps that require Linux utilities.',
  },
];

// ----- Component -----
const InfoScreen: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItemsState>({});

  const toggleExpand = (title: string) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const sections: InfoSection[] = [
    {
      title: 'FAQs',
      data: faqs.map(item => ({
        title: item.question,
        description: item.answer,
      })),
    },
    {
      title: 'Terminology',
      data: terminology.map(item => ({
        title: item.term,
        description: item.definition,
      })),
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.title + index}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }: SectionListRenderItemInfo<SectionDataItem>) => (
          <View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => toggleExpand(item.title)}
            >
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
            {expandedItems[item.title] && (
              <Text style={styles.itemDescription}>{item.description}</Text>
            )}
          </View>
        )}
        renderSectionHeader={({
          section,
        }: {
          section: SectionListData<SectionDataItem>;
        }) => (
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default InfoScreen;

// ----- Styles -----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeaderContainer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentContainerStyle: { backgroundColor: 'white', paddingBottom: 20 },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
