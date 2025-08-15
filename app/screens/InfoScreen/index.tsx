import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const faqs = [
  {
    question: "What is root?",
    answer: "Rooting is the process of gaining full administrative (superuser) access to your Android device, allowing you to modify system files and settings that are normally restricted."
  },
  {
    question: "Root and security",
    answer: "While rooting gives you more control, it can also make your device more vulnerable to security threats if used carelessly, as malicious apps could gain system-level access."
  },
  {
    question: "What are the benefits of root?",
    answer: "Root access allows you to customize your device beyond manufacturer limits, remove pre-installed apps, improve performance, and use advanced apps that require superuser permissions."
  },
  {
    question: "What are the advantages of rooting?",
    answer: "Advantages include deeper customization, better backup options, performance tweaks, and the ability to install custom ROMs for newer Android versions or extra features."
  },
  {
    question: "Can I un-root my device?",
    answer: "Yes. You can un-root by using apps like Magisk Manager or by flashing the stock firmware, which restores your device to factory settings."
  },
  {
    question: "Will rooting void my warranty?",
    answer: "In many cases, yes. Manufacturers and carriers often void warranties if the device is found to be rooted. Check your warranty terms before proceeding."
  },
  {
    question: "Could rooting brick my device?",
    answer: "Yes, if done incorrectly, rooting can 'brick' your device, making it unusable. Always follow trusted guides and ensure your device is supported."
  },
  {
    question: "Will I get over-the-air updates?",
    answer: "Rooted devices may not receive official OTA updates, or updates may fail to install. You might need to manually flash updates or custom ROMs."
  }
];

const terminology = [
  {
    term: "ROM",
    definition: "A ROM (Read-Only Memory) in Android terms is the operating system or firmware that runs your device. Custom ROMs are modified versions of Android created by developers."
  },
  {
    term: "Kernel",
    definition: "The kernel is the core part of the operating system that manages communication between hardware and software."
  },
  {
    term: "Radio",
    definition: "The radio is the firmware that controls your device’s communication hardware like mobile networks, Wi-Fi, and Bluetooth."
  },
  {
    term: "Flash",
    definition: "Flashing means installing firmware, ROMs, or other system-level files onto your device’s internal memory."
  },
  {
    term: "Brick",
    definition: "A bricked device is one that no longer functions due to corrupted or incorrect software installation. It can be 'soft-bricked' (recoverable) or 'hard-bricked' (permanently damaged)."
  },
  {
    term: "Bootloader",
    definition: "A bootloader is the program that loads the operating system when the device starts. Unlocking it is often required for rooting and installing custom ROMs."
  },
  {
    term: "Recovery",
    definition: "Recovery is a separate bootable partition that allows you to install updates, reset the device, or perform backups. Custom recoveries like TWRP offer more features."
  },
  {
    term: "Nandroid",
    definition: "A Nandroid backup is a complete snapshot of your device’s system, data, and apps, allowing you to restore your device to the exact state it was in."
  },
  {
    term: "Fastboot",
    definition: "Fastboot is a tool and protocol that allows you to write data directly to your device’s flash memory from a computer via USB."
  },
  {
    term: "ADB",
    definition: "ADB (Android Debug Bridge) is a command-line tool that lets you communicate with and control your Android device from a computer."
  },
  {
    term: "S-off",
    definition: "S-OFF (Security OFF) disables the security flag on some devices, allowing unrestricted access to the device’s NAND flash memory."
  },
  {
    term: "Ruu, SBF, and OPS",
    definition: "These are file formats for official firmware packages used by different manufacturers: RUU (HTC), SBF (Motorola), and OPS (Samsung Odin)."
  },
  {
    term: "BusyBox",
    definition: "BusyBox is a software package that provides many common UNIX/Linux command-line tools in a single binary, often used on rooted Android devices to enhance functionality."
  }
];

const InfoScreen = () => {
  return (
    <View>
      <Text>InfoScreen</Text>
    </View>
  )
}

export default InfoScreen

const styles = StyleSheet.create({})