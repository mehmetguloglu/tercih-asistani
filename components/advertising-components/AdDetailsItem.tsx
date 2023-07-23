import { Dimensions, Platform } from "react-native";
import React from "react";
import { XStack } from "tamagui";
// import { BannerAd, TestIds } from "react-native-google-mobile-ads";
// const { width, height } = Dimensions.get("window");
// let currentWidth = width;
// if (Platform.isPad || width > 700) {
//   currentWidth = width / 2;
// }
// let unitId = TestIds.BANNER;
// if (Platform.OS === "ios" && !__DEV__) {
//   unitId = "ca-app-pub-8545961952430100/7304990669";
// } else if (Platform.OS === "android" && !__DEV__) {
//   unitId = "ca-app-pub-8545961952430100/7198276938";
// }
const AdDetailsItem = () => {
  return (
    <XStack f={1} bg={"white"} mx={15} my={8}>
      {/* <BannerAd
        unitId={unitId}
        size={`${currentWidth - 30}x${((currentWidth - 30) / 32) * 10}`}
      /> */}
    </XStack>
  );
};

export default AdDetailsItem;
