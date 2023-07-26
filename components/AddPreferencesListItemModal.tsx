import React, { useMemo, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  Dimensions,
  View,
} from "react-native";
import {
  addPreferenceList,
  getPreferenceList,
} from "../bussiness/actions/preferences";
import {
  Button,
  Stack,
  XStack,
  Text,
  Paragraph,
  SizableText,
  Separator,
  YStack,
  Input,
} from "tamagui";
import { FlashList } from "@shopify/flash-list";
import Line from "./Line";
const { width, height } = Dimensions.get("window");
const App = () => {
  const [preferenceInput, setPreferenceInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const { data, isLoading, mutate } = getPreferenceList();
  const { trigger } = addPreferenceList();

  const _handleAddPreferenceList = async () => {
    await trigger({ name: preferenceInput } as any);
    mutate();
    setShowInput(false);
    setPreferenceInput("");
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <YStack
            borderStyle={"solid"}
            backgroundColor="white"
            margin={20}
            borderRadius={20}
            padding={20}
            alignItems="center"
            borderWidth={1}
          >
            <Text fontWeight={"$10"} fontSize={16} mb={10}>
              Tercih Listeme Kaydet
            </Text>

            <Stack width={width * 0.8} height={height * 0.5} maxHeight={350}>
              <FlashList
                estimatedItemSize={100}
                data={data}
                renderItem={({ item }: { item: any }) => {
                  return (
                    <>
                      <Line height={1} my={4} />
                      <Button size={"$3.5"}>
                        <Text fontSize={14}>{item.name}</Text>
                      </Button>
                    </>
                  );
                }}
                keyExtractor={(item) => item.id.toString()}
              />
            </Stack>
            <YStack width={width * 0.8}>
              {showInput ? (
                <XStack mb={10}>
                  <Input
                    f={1}
                    mr={5}
                    placeholder="Liste Adı Giriniz"
                    value={preferenceInput}
                    onChangeText={(e) => setPreferenceInput(e)}
                  />
                  <Button onPress={() => _handleAddPreferenceList()}>
                    ekle
                  </Button>
                </XStack>
              ) : null}
              <XStack>
                <Button
                  mr={5}
                  f={1}
                  size={"$3.5"}
                  bg={"white"}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>İptal</Text>
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
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Ekle</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
