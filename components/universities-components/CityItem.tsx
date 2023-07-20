import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const CityItem = ({ item, cityPress, setCityPress }) => {
  let existCity = cityPress.find((x) => x == item);
  return (
    <Pressable
      style={styles.cityItem}
      onPressOut={() => {
        if (existCity) {
          setCityPress(cityPress.filter((x) => x != item));
        } else setCityPress([...cityPress, item]);
      }}
    >
      <View
        style={{
          borderColor: existCity ? "#0066ff" : "#D9D9D9",
          borderWidth: 1,
          width: 20,
          height: 20,
          borderRadius: 10,
          margin: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: existCity ? "#0066ff" : "white",
          }}
        />
      </View>
      <Text>{item}</Text>
    </Pressable>
  );
};

export default CityItem;

const styles = StyleSheet.create({
  cityItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
