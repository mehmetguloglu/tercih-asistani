import React, { useState } from "react";
import { Alert, StyleSheet, Dimensions, View } from "react-native";
import {
  addPreferenceItem,
  addPreferenceList,
  getPreferenceList,
} from "../bussiness/actions/preferences";
import { Button, Stack, XStack, Text, YStack, Input } from "tamagui";
import { FlashList } from "@shopify/flash-list";
import Line from "./Line";
import Modal from "react-native-modal";

import * as Burnt from "burnt";

const { width, height } = Dimensions.get("window");
const AddPreferencesListItemModal = ({
  modalVisible,
  setModalVisible,
  universityPreferenceId,
}) => {
  const [preferenceInput, setPreferenceInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const { data, isLoading, mutate } = getPreferenceList();
  const { trigger } = addPreferenceList();
  const { trigger: addPreferenceItemTrigger } = addPreferenceItem();

  const _handleAddPreferenceList = async () => {
    const result = await trigger({ name: preferenceInput } as any);
    if (result.isSuccessfull) {
      Burnt.toast({
        title: "Eklendi",
        preset: "done",
        duration: 2,
        haptic: "success",
      });
      mutate();
      setShowInput(false);
      setPreferenceInput("");
    } else {
      Burnt.toast({
        title: "Kayıt başarısız oldu",
        preset: "error",
        duration: 2,
        haptic: "error",
      });
    }
  };

  const _handleAddPreferenceItem = async (preferenceListId) => {
    const result = await addPreferenceItemTrigger({
      universityPreferenceId: universityPreferenceId,
      preferenceListId: preferenceListId,
    } as any);
    if (result.isSuccessfull) {
      Burnt.toast({
        title: "Eklendi",
        preset: "done",
        duration: 2,
        haptic: "success",
      });
    } else {
      Burnt.toast({
        title: result.message,
        preset: "error",
        duration: 2,
        haptic: "error",
      });
    }
  };
  return (
    // <View style={styles.centeredView}>
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      hasBackdrop={true}
    >
      <View style={styles.centeredView}>
        <YStack
          borderStyle={"solid"}
          backgroundColor="white"
          margin={20}
          //   borderRadius={20}
          //   padding={20}
          alignItems="center"
        >
          <Text fontWeight={"600"} fontSize={17} mb={10}>
            Tercih Listeme Kaydet
          </Text>

          <Stack width={width * 0.8} height={height * 0.5} maxHeight={350}>
            {showInput ? (
              <XStack mb={10}>
                <Input
                  size={"$3.5"}
                  f={1}
                  mr={5}
                  borderColor={"#1a73e8"}
                  placeholder="Liste Adı Giriniz"
                  value={preferenceInput}
                  onChangeText={(e) => setPreferenceInput(e)}
                />
                <Button
                  onPress={() =>
                    data.find((item) => item.name == preferenceInput)
                      ? Burnt.toast({
                          title: "Bu isimde bir liste zaten var",
                          preset: "error",
                          duration: 2,
                          haptic: "error",
                        })
                      : preferenceInput != ""
                      ? _handleAddPreferenceList()
                      : setShowInput(!showInput)
                  }
                  m={0}
                  size={"$3.5"}
                  bg={"#1a73e8"}
                >
                  <Text fow={"600"} color={"white"}>
                    Ekle
                  </Text>
                </Button>
              </XStack>
            ) : null}
            <FlashList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 10 }}
              estimatedItemSize={100}
              data={data}
              renderItem={({ item }: { item: any }) => {
                return (
                  <>
                    <Line height={1} my={4} />
                    <Button
                      onPress={() => {
                        _handleAddPreferenceItem(item.id);
                        setModalVisible(!modalVisible);
                        setShowInput(false);
                      }}
                      size={"$3.5"}
                    >
                      <Text fontSize={14}>{item.name}</Text>
                    </Button>
                  </>
                );
              }}
              keyExtractor={(item) => item.id.toString()}
            />
          </Stack>
          <YStack mt={10} width={width * 0.8}>
            <XStack>
              <Button
                mr={5}
                f={1}
                size={"$3.5"}
                bg={"white"}
                borderColor={"#1a73e8"}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text color={"#1a73e8"} fow={"600"}>
                  İptal
                </Text>
              </Button>
              <Button
                bw={0}
                ml={5}
                bg={"#1a73e8"}
                f={1}
                size={"$3.5"}
                onPress={() => setShowInput(!showInput)}
              >
                <Text color={"white"}> Yeni Liste Oluştur</Text>
              </Button>
            </XStack>
          </YStack>
        </YStack>
      </View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});

export default AddPreferencesListItemModal;
