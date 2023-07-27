import { Pressable, Platform, Dimensions } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import DetailsItemText from "../DetailsItemText";
import { Button, Text, XStack, YStack } from "tamagui";
import Line from "../Line";
import Ribbon from "../Ribbon";
import * as Haptics from "expo-haptics";
import AddPreferencesListItemModal from "../AddPreferencesListItemModal";
import {
  addPreferenceItem,
  getPreferenceList,
} from "../../bussiness/actions/preferences";
import * as Burnt from "burnt";

// import AdDetailsItem from "../advertising-components/AdDetailsItem";
// import { getAdvLocationCount } from "../../utils/device-helper";
// const { width } = Dimensions.get("window");
const DepartmentDetailsItem = ({ item, departmentName, index }) => {
  const { data, isLoading, mutate } = getPreferenceList();
  const [selected, setSelected] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const basePoint = item.basePoint?.toFixed(2).toString().replace(".", ",");
  const { trigger, isMutating } = addPreferenceItem();

  const _handleAddPreferenceDirect = async () => {
    const result = await trigger({
      universityPreferenceId: item.id,
      preferenceListId: data[0].id,
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
    <YStack f={1}>
      {/* {index % advLocation === 0 && !Platform.isPad && width < 700 ? (
        <AdDetailsItem />
      ) : (Platform.isPad || width > 700) &&
        (index % (advLocation * 2) == 0 || index % (advLocation * 2) == 1) ? (
        <AdDetailsItem />
      ) : null} */}

      <XStack
        f={1}
        bg={"white"}
        mx={15}
        my={8}
        br={8}
        borderWidth={1}
        borderColor={
          !selected
            ? item.university.type == 2
              ? "#3268bf"
              : item.university.type == 1
              ? "#eda547"
              : "#cc434a"
            : "white"
        }
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            setSelected(!selected);
          }}
        >
          <XStack px={15} py={12} ai="center">
            {selected ? (
              <Ionicons name="add" size={20} color="#0066FF" />
            ) : (
              <AntDesign name="minus" size={20} color="#0066FF" />
            )}
            <YStack ml={9} f={1}>
              <Text color={"black"} fontSize={14} fontWeight={"500"}>
                {item.university.name}
              </Text>
              <Text fontSize={12} fontWeight={"500"} color={"#9594A4"}>
                {item.oldDepartmentName
                  ? item.oldDepartmentName
                  : departmentName}
              </Text>
            </YStack>
            <Button
              disabled={isMutating}
              aspectRatio={1}
              p={0}
              bw={0}
              m={0}
              mr={-10}
              br={30}
              bg="white"
              onPress={() => {
                data?.length != 1
                  ? setModalVisible(!modalVisible)
                  : _handleAddPreferenceDirect();
                // Haptics.notificationAsync(
                //   Haptics.NotificationFeedbackType.Error
                // );
              }}
            >
              <Feather
                name="check-circle"
                size={24}
                color={isMutating ? "gray" : "green"}
              />
            </Button>
          </XStack>
          <Line ml={15} mr={3} />

          <XStack ai="center" my={12} px={15}>
            <DetailsItemText info={basePoint} detailsName={"Taban Puan"} />
            <DetailsItemText
              info={item.yksSuccessRanking}
              detailsName={"Başarı Sıralaması"}
            />
          </XStack>

          {!selected ? (
            <>
              <XStack ai="center" my={12} px={15}>
                <DetailsItemText
                  info={
                    item.pointType == "SAY"
                      ? "Sayısal"
                      : item.pointType == "EA"
                      ? "Eşit Ağırlık"
                      : item.pointType == "SÖZ"
                      ? "Sözel"
                      : item.pointType == "DİL"
                      ? "Dil"
                      : "TYT"
                  }
                  detailsName={"Puan Türü"}
                />
                <DetailsItemText
                  info={item.educationTime}
                  detailsName={"Öğrenim Süresi"}
                />
              </XStack>

              <XStack ai="center" my={12} px={15}>
                <DetailsItemText
                  info={item.generalQuota}
                  detailsName={"Kontenjan"}
                />
                <DetailsItemText
                  info={item.faculty.name}
                  detailsName={"Fakülte Adı"}
                />
              </XStack>
            </>
          ) : null}
        </Pressable>
        <Ribbon
          bg={
            item.university.type == 2
              ? "#3268bf"
              : item.university.type == 1
              ? "#eda547"
              : "#cc434a"
          }
          bgb={
            item.university.type == 2
              ? "#174082"
              : item.university.type == 1
              ? "#b37019"
              : "#96171d"
          }
          text={
            item.university.type == 2
              ? "Devlet"
              : item.university.type == 1
              ? "Vakıf"
              : "Yurtdışı"
          }
        />
      </XStack>
      <AddPreferencesListItemModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        universityPreferenceId={item.id}
      />
    </YStack>
  );
};

export default DepartmentDetailsItem;
