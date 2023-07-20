import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";

const FiltersButton = ({ onPress }) => {
  return (
    <View style={styles.filtersView}>
      {/* <Pressable style={styles.filtersButton}>
        <Text style={styles.filtersText}>Sırala</Text>
      </Pressable>
      <View style={{ width: 1, height: 16, backgroundColor: "#D9D9D9" }} /> */}
      <Pressable style={styles.filtersButton} onPress={onPress}>
        <Feather name="filter" size={24} color="#777777" />
        <Text style={styles.filtersText}>Filtrele</Text>
      </Pressable>
    </View>
  );
};

export default FiltersButton;
const styles = StyleSheet.create({
  filtersView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 8,
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
  },
  filtersButton: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  filtersText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#777777",
    paddingHorizontal: 10,
  },
});
