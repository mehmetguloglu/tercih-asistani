import React from "react";
import { Button } from "tamagui";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

const PreferencesButton: React.FC = () => {
  const router = useRouter();
  return (
    <Button
      onPress={() => router.push("preferences")}
      aspectRatio={1}
      bg="white"
      p={0}
      br={30}
      bw={0}
    >
      <Feather name="check-circle" size={32} color="black" />
    </Button>
  );
};

export default PreferencesButton;
