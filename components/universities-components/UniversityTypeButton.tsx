import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const UniversityTypeButton = ({ selected, setSelected, text }) => {
  return (
    <Pressable
      style={[
        styles.universityTypeButton,
        { backgroundColor: selected ? "#0066FF" : "white" },
      ]}
      onPress={() => setSelected(!selected)}
    >
      <Text
        style={[
          styles.universityTypeText,
          { color: selected ? "white" : "black" },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default UniversityTypeButton;
const styles = StyleSheet.create({
  universityTypeButton: {
    paddingVertical: 8,
    flex: 1,
    alignItems: "center",
    borderRadius: 24,
    marginHorizontal: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  universityTypeText: {},
});
