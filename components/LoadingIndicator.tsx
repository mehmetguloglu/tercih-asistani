import React from "react";
import { Portal, PortalHost, Spinner, View, YStack } from "tamagui";

const LoadingIndicator: React.FC = () => (
  <Portal host={"loadingindicatorportal"}>
    <Portal>
      <YStack
        zIndex={999}
        position="absolute"
        jc="center"
        alignItems="center"
        width={"100%"}
        height={"100%"}
        f={1}
      >
        <View
          bg={"gray"}
          opacity={0.3}
          width={"100%"}
          height={"100%"}
          position="absolute"
        />
        <Spinner size="large" color="orange" />
      </YStack>
    </Portal>
  </Portal>
);

export default LoadingIndicator;
