import React from "react";
import { StyleSheet, Pressable, Dimensions, Platform } from "react-native";
import { Stack, Text, Image, XStack } from "tamagui";
import Ribbon from "../Ribbon";
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
const AdItem = () => {
  return (
    <XStack f={1} bg={"white"} mx={15} my={4}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={`${currentWidth - 30}x${((currentWidth - 30) / 32) * 5}`}
        // size="320x50"
      />
    </XStack>
  );
};

export default AdItem;
