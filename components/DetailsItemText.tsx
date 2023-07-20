import React from "react";
import { YStack, Text } from "tamagui";

interface DetailsItemTextProps {
  info: string;
  detailsName: string;
}

const DetailsItemText: React.FC<DetailsItemTextProps> = ({
  info,
  detailsName,
}) => {
  return (
    <YStack f={1}>
      <Text fontSize={14} color={"black"}>
        {info}
      </Text>
      <Text fontSize={12} fontWeight={"500"} color={"#9594A4"}>
        {detailsName}
      </Text>
    </YStack>
  );
};

export default DetailsItemText;
