import React from "react";
import { Dimensions, Platform } from "react-native";
import { XStack } from "tamagui";
import { BannerAd, TestIds } from "react-native-google-mobile-ads";
import { useAppSelector } from "../../bussiness/hooks";
const { width, height } = Dimensions.get("window");
let currentWidth = width;
// if (Platform.isPad || width > 700) {
//   currentWidth = width / 2;
// }

const AdItem = () => {
  let unitId = TestIds.BANNER;
  const { developerMode } = useAppSelector(
    (state) => state.developerModeReducer
  );
  if (!developerMode) {
    if (Platform.OS === "ios" && !__DEV__) {
      unitId = "ca-app-pub-8545961952430100/9173703584";
    } else if (Platform.OS === "android" && !__DEV__) {
      unitId = "ca-app-pub-8545961952430100/5314349620";
    }
  }

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
