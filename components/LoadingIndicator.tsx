import { Dimensions } from "react-native";
import React from "react";
import { Spinner, YStack } from "tamagui";
const { height } = Dimensions.get("window");

const LoadingIndicator: React.FC = () => (
  <YStack jc="center" alignItems="center" py={height / 10} f={1}>
    <Spinner size="large" color="#1a73e8" />
  </YStack>
);

export default LoadingIndicator;
