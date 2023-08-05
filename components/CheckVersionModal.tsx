import React, { useState, useRef, useEffect } from "react";
import { Button, XStack, YStack } from "tamagui";
import Modal from "react-native-modal";
import useSWR from "swr";
import Constants from "expo-constants";
import * as StoreReview from "expo-store-review";
import { Linking, Platform, View, StyleSheet, Text } from "react-native";
import { getMobileVersionSetting } from "../bussiness/actions/applicationSettings";

const CheckVersionModal = ({}: {}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = getMobileVersionSetting();

  useEffect(() => {
    const getMobileSettings = async () => {
      if (
        (Platform.OS === "android" || Platform.OS === "ios") &&
        data &&
        (!Constants.expoConfig?.extra?.mobileApplicationNextVersionNumber ||
          (Platform.OS === "android"
            ? Constants.expoConfig?.extra?.mobileApplicationNextVersionNumber <
              data.mobileApplicationAndroidNextVersionNumber
            : Constants.expoConfig?.extra?.mobileApplicationNextVersionNumber <
              data.mobileApplicationIOSNextVersionNumber))
      ) {
        let storeUrl = StoreReview.storeUrl();

        if (storeUrl) {
          setIsOpen(true);
        }
      }
    };
    getMobileSettings();
    return () => {};
  }, [data]);

  return (
    <Modal isVisible={isOpen}>
      <View style={styles.centeredView}>
        <YStack
          borderStyle={"solid"}
          backgroundColor="white"
          margin={20}
          alignItems="center"
        >
          <XStack mb={12} alignItems="center" justifyContent="space-between">
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                color: "#202124",
                textAlign: "center",
              }}
            >
              Yeni Sürüm Güncellemesi Mevcut!
            </Text>
          </XStack>
          <XStack space={"$2"} marginTop={"$2"}>
            {!data?.mobileApplicationNextVersionUpdateRequired && (
              <Button
                flex={1}
                borderColor={"#1a73e8"}
                onPress={() => {
                  setIsOpen(false);
                }}
              >
                <Text style={{ color: "#1a73e8", fontWeight: "600" }}>
                  Kapat
                </Text>
              </Button>
            )}
            <Button
              flex={1}
              bg={"#1a73e8"}
              borderWidth={0}
              onPress={() => {
                Linking.openURL(StoreReview.storeUrl() ?? "");
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Güncelle
              </Text>
            </Button>
          </XStack>
        </YStack>
      </View>
    </Modal>
  );
};

export default CheckVersionModal;
const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});
