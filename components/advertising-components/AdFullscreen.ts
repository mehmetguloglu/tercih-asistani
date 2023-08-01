import { View, Text, Platform } from "react-native";
import React, { useCallback } from "react";
import { TestIds, useInterstitialAd } from "react-native-google-mobile-ads";
import { useFocusEffect } from "expo-router";
import { useAppSelector } from "../../bussiness/hooks";

function AdFullscreen() {
  const { developerMode } = useAppSelector(
    (state) => state.developerModeReducer
  );
  let unitId = TestIds.INTERSTITIAL;
  if (!developerMode) {
    if (Platform.OS === "ios" && !__DEV__) {
      unitId = "ca-app-pub-8545961952430100/3514300331";
    } else if (Platform.OS === "android" && !__DEV__) {
      unitId = "ca-app-pub-8545961952430100/4084080316";
    }
  }

  const { load, isLoaded, show, isShowing } = useInterstitialAd(unitId, {
    requestNonPersonalizedAdsOnly: true,
  });
  useFocusEffect(
    useCallback(() => {
      if (isLoaded === false) load();
    }, [load, isLoaded])
  );

  return {
    show,
    isLoaded,
    isShowing,
  };
}

export default AdFullscreen;
