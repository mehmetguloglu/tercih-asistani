import React from "react";
import { Dimensions, Platform } from "react-native";
import { XStack } from "tamagui";
import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";
const { width, height } = Dimensions.get("window");
let currentWidth = width;
if (Platform.isPad || width > 700) {
  currentWidth = width / 2;
}
let unitId = TestIds.BANNER;
if (Platform.OS === "ios" && !__DEV__) {
  unitId = "ca-app-pub-8545961952430100/9173703584";
} else if (Platform.OS === "android" && !__DEV__) {
  unitId = "ca-app-pub-8545961952430100/5314349620";
}
const AdItem = () => {
  return (
    <XStack f={1} bg={"white"} mx={15} my={4}>
      <BannerAd
        unitId={unitId}
        size={`${(currentWidth - 30).toFixed(0)}x${(
          ((currentWidth - 30) / 32) *
          5
        ).toFixed(0)}`}
      />
    </XStack>
  );
};

export default AdItem;
