import { Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const HeaderBack = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()}>
      <Ionicons name="chevron-back" size={30} color="black" />
    </Pressable>
  );
};

export default HeaderBack;
