import { Dimensions, Platform } from "react-native";
import React from "react";
import { XStack } from "tamagui";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";
import { useAppSelector } from "../../bussiness/hooks";
const { width, height } = Dimensions.get("window");
let currentWidth = width;

const AdDetailsItem = () => {
  const { developerMode } = useAppSelector(
    (state) => state.developerModeReducer
  );
  let unitId = TestIds.BANNER;
  if (!developerMode) {
    if (Platform.OS === "ios" && !__DEV__) {
      unitId = "ca-app-pub-8545961952430100/7304990669";
    } else if (Platform.OS === "android" && !__DEV__) {
      unitId = "ca-app-pub-8545961952430100/7198276938";
    }
  }
  return (
    <XStack f={1} bg={"white"} mx={15} my={8}>
      <BannerAd
        unitId={unitId}
        size={`${(currentWidth - 30).toFixed(0)}x${(
          ((currentWidth - 30) / 32) *
          10
        ).toFixed(0)}`}
      />
    </XStack>
  );
};

export default AdDetailsItem;
