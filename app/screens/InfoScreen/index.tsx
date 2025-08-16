import React, { useState } from "react";
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
} from "react-native";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
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
  { question: "What is root?", answer: "Rooting is the process of gaining full administrative (superuser) access to your Android device, allowing you to modify system files and settings that are normally restricted." },
  { question: "Root and security", answer: "While rooting gives you more control, it can also make your device more vulnerable to security threats if used carelessly, as malicious apps could gain system-level access." },
  { question: "What are the benefits of root?", answer: "Root access allows you to customize your device beyond manufacturer limits, remove pre-installed apps, improve performance, and use advanced apps that require superuser permissions." },
  { question: "What are the advantages of rooting?", answer: "Advantages include deeper customization, better backup options, performance tweaks, and the ability to install custom ROMs for newer Android versions or extra features." },
  { question: "Can I un-root my device?", answer: "Yes. You can un-root by using apps like Magisk Manager or by flashing the stock firmware, which restores your device to factory settings." },
  { question: "Will rooting void my warranty?", answer: "In many cases, yes. Manufacturers and carriers often void warranties if the device is found to be rooted. Check your warranty terms before proceeding." },
  { question: "Could rooting brick my device?", answer: "Yes, if done incorrectly, rooting can 'brick' your device, making it unusable. Always follow trusted guides and ensure your device is supported." },
  { question: "Will I get over-the-air updates?", answer: "Rooted devices may not receive official OTA updates, or updates may fail to install. You might need to manually flash updates or custom ROMs." },
];

const terminology: TerminologyItem[] = [
  { term: "ROM", definition: "A ROM (Read-Only Memory) in Android terms is the operating system or firmware that runs your device. Custom ROMs are modified versions of Android created by developers." },
  { term: "Kernel", definition: "The kernel is the core part of the operating system that manages communication between hardware and software." },
  { term: "Radio", definition: "The radio is the firmware that controls your device’s communication hardware like mobile networks, Wi-Fi, and Bluetooth." },
  { term: "Flash", definition: "Flashing means installing firmware, ROMs, or other system-level files onto your device’s internal memory." },
  { term: "Brick", definition: "A bricked device is one that no longer functions due to corrupted or incorrect software installation. It can be 'soft-bricked' (recoverable) or 'hard-bricked' (permanently damaged)." },
  { term: "Bootloader", definition: "A bootloader is the program that loads the operating system when the device starts. Unlocking it is often required for rooting and installing custom ROMs." },
  { term: "Recovery", definition: "Recovery is a separate bootable partition that allows you to install updates, reset the device, or perform backups. Custom recoveries like TWRP offer more features." },
  { term: "Nandroid", definition: "A Nandroid backup is a complete snapshot of your device’s system, data, and apps, allowing you to restore your device to the exact state it was in." },
  { term: "Fastboot", definition: "Fastboot is a tool and protocol that allows you to write data directly to your device’s flash memory from a computer via USB." },
  { term: "ADB", definition: "ADB (Android Debug Bridge) is a command-line tool that lets you communicate with and control your Android device from a computer." },
  { term: "S-off", definition: "S-OFF (Security OFF) disables the security flag on some devices, allowing unrestricted access to the device’s NAND flash memory." },
  { term: "Ruu, SBF, and OPS", definition: "These are file formats for official firmware packages used by different manufacturers: RUU (HTC), SBF (Motorola), and OPS (Samsung Odin)." },
  { term: "BusyBox", definition: "BusyBox is a software package that provides many common UNIX/Linux command-line tools in a single binary, often used on rooted Android devices to enhance functionality." },
];

// ----- Component -----
const InfoScreen: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItemsState>({});

  const toggleExpand = (title: string) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const sections: InfoSection[] = [
    { title: "FAQs", data: faqs.map((item) => ({ title: item.question, description: item.answer })) },
    { title: "Terminology", data: terminology.map((item) => ({ title: item.term, description: item.definition })) },
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
            <TouchableOpacity style={styles.item} onPress={() => toggleExpand(item.title)}>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </TouchableOpacity>
            {expandedItems[item.title] && (
              <Text style={styles.itemDescription}>{item.description}</Text>
            )}
          </View>
        )}
        renderSectionHeader={({ section }: { section: SectionListData<SectionDataItem> }) => (
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
    backgroundColor: "#fff",
  },
  sectionHeaderContainer: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainerStyle: { backgroundColor: 'white', paddingBottom: 20, },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemDescription: {
    fontSize: 14,
    color: "#555",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
