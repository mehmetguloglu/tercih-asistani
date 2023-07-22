import { Dimensions, Platform } from "react-native";
import React from "react";
import { XStack } from "tamagui";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";
const { width, height } = Dimensions.get("window");
let currentWidth = width;
if (Platform.isPad || width > 700) {
  currentWidth = width / 2;
}
const AdDetailsItem = () => {
  return (
    <XStack f={1} bg={"white"} mx={15} my={8}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={`${currentWidth - 30}x${((currentWidth - 30) / 32) * 10}`}
      />
    </XStack>
  );
};

export default AdDetailsItem;
