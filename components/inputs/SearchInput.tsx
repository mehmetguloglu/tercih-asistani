import React from "react";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import _ from "lodash";
import { useAppDispatch } from "../../bussiness/hooks";
import { Input, XStack } from "tamagui";

const SearchInput = ({ input, setInput, mx, my }) => {
  const dispatch = useAppDispatch();
  return (
    <XStack
      bg={"white"}
      px={8}
      borderRadius={16}
      ai={"center"}
      mx={mx}
      my={my}
      f={1}
    >
      <Feather style={{ padding: 8 }} name="search" size={24} color="#777777" />
      <Input
        f={1}
        bw={0}
        bg={"white"}
        p={0}
        value={input}
        onChangeText={(text) => {
          dispatch(setInput(text));
        }}
        placeholder="Ara"
      />
      {input != "" ? (
        <Pressable onPress={() => dispatch(setInput(""))}>
          <Feather name="x" size={20} color="#777777" />
        </Pressable>
      ) : null}
    </XStack>
  );
};

export default SearchInput;
