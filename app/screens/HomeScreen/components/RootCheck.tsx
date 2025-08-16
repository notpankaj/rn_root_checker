import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { LOTTIE_JSON } from "../../../../assets/lottie";
import useRootChecker from "../../../hooks/useRootChecker";

type AnimationType = "idle" | "loading" | "success" | "fail";

const RootCheck: React.FC = () => {
  const [status, setStatus] = useState<AnimationType>("idle");
  const { init, loading, isRooted } = useRootChecker()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (loading) {
      setStatus("loading")
    } else {
      timeoutId = setTimeout(() => {
        if (isRooted !== null) {
          setStatus(isRooted ? "success" : "fail");
        }
      }, 1000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  }, [loading, isRooted])

  useEffect(() => {
    init()
  }, [])

  const renderAnimation = () => {
    switch (status) {
      case "idle":
        return (
          <TouchableOpacity
            disabled={loading}
            style={styles.blackBox}
            activeOpacity={0.7}
            onPress={init}
          >
            <Text style={styles.goText}>GO</Text>
          </TouchableOpacity>
        );
      case "loading":
        return (
          <LottieView
            source={LOTTIE_JSON.loadingJson}
            autoPlay
            loop
            style={styles.lottieBox}
          />
        );
      case "success":
        return (
          <LottieView
            source={LOTTIE_JSON.successJson}
            autoPlay
            loop={false}
            style={styles.lottieBox}
          />
        );
      case "fail":
        return (
          <LottieView
            source={LOTTIE_JSON.failJson}
            autoPlay
            loop={false}
            style={styles.lottieBox}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Root Check Result</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.animationContainer}>{renderAnimation()}</View>

        <View style={styles.info}>
          <Text>
            POCO F1 <Text>is not Rooted</Text>
          </Text>
          <Text>
            Running <Text>Android 12</Text> (Oreo)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RootCheck;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 5,
    borderColor: "grey",
    padding: 10,
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    borderBottomColor: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  animationContainer: {
    height: 100,
    width: 100,
    // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  blackBox: {
    height: 100,
    width: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  goText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  lottieBox: {
    height: 100,
    width: 100,
  },
  info: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 5,
  },
});
