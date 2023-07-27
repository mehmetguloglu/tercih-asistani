import { Pressable, Dimensions, Platform } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { XStack, Text, YStack, Button } from "tamagui";
import Line from "../Line";
import DetailsItemText from "../DetailsItemText";
import Ribbon from "../Ribbon";
import {
  addPreferenceItem,
  getPreferenceList,
} from "../../bussiness/actions/preferences";
import * as Burnt from "burnt";
import AddPreferencesListItemModal from "../AddPreferencesListItemModal";

// import AdDetailsItem from "../advertising-components/AdDetailsItem";
// import { getAdvLocationCount } from "../../utils/device-helper";
// const { width } = Dimensions.get("window");
const UniversityDetailsItem = ({ item, index, changeDepartment }) => {
  const [selected, setSelected] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const { data, isLoading, mutate } = getPreferenceList();
  const { trigger } = addPreferenceItem();

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
  const basePoint = item.basePoint?.toFixed(2).toString().replace(".", ",");

  let pointType = "";
  let typeColor = "";
  switch (item.pointType) {
    case "EA":
      pointType = "Eşit Ağırlık";
      typeColor = "#3268bf";
      break;
    case "SAY":
      pointType = "Sayısal";
      typeColor = "green";
      break;
    case "DİL":
      pointType = "Dil";
      typeColor = "#eda547";
      break;
    case "SÖZ":
      pointType = "Sözel";
      typeColor = "#cc434a";
      break;
    default:
      pointType = "TYT";
      typeColor = "gray";
      break;
  }
  // const advLocation = getAdvLocationCount();

  return (
    <YStack f={1}>
      {/* {index % advLocation === 0 && !Platform.isPad && width < 700 ? (
        <AdDetailsItem />
      ) : (Platform.isPad || width > 700) &&
        (index % (advLocation * 2) == 0 || index % (advLocation * 2) == 1) ? (
        <AdDetailsItem />
      ) : null} */}
      <XStack
        bg={"white"}
        mx={15}
        my={8}
        borderRadius={8}
        borderWidth={1}
        f={1}
        borderColor={!selected ? typeColor : "white"}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            setSelected(!selected);
          }}
        >
          <XStack ai="center" px={15} py={12}>
            {selected ? (
              <Ionicons name="add" size={20} color="#0066FF" />
            ) : (
              <AntDesign name="minus" size={20} color="#0066FF" />
            )}
            <Text f={1} color={"black"} ml={9} fontSize={14} fontWeight={"500"}>
              {item.oldDepartmentName
                ? item.oldDepartmentName
                : item.department.name}
            </Text>
            <Button
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
              <Feather name="check-circle" size={24} color="green" />
            </Button>
          </XStack>

          <Line ml={15} mr={3} />

          <XStack ai="center" px={15} my={12}>
            <DetailsItemText info={basePoint} detailsName={"Taban Puan"} />
            <DetailsItemText
              info={item.yksSuccessRanking}
              detailsName={"Başarı Sıralaması"}
            />
          </XStack>

          {!selected ? (
            <>
              <XStack ai="center" px={15} my={12}>
                <DetailsItemText info={pointType} detailsName={"Puan Türü"} />
                <DetailsItemText
                  info={item.educationTime}
                  detailsName={"Öğrenim Süresi"}
                />
              </XStack>

              <XStack ai="center" px={15} my={12}>
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
            changeDepartment == 2
              ? null
              : item.pointType == "EA"
              ? "#3268bf"
              : item.pointType == "DİL"
              ? "#eda547"
              : item.pointType == "SÖZ"
              ? "#cc434a"
              : item.pointType == "SAY"
              ? "green"
              : null
          }
          bgb={
            changeDepartment == 2
              ? null
              : item.pointType == "EA"
              ? "#174082"
              : item.pointType == "DİL"
              ? "#b37019"
              : item.pointType == "SÖZ"
              ? "#96171d"
              : item.pointType == "SAY"
              ? "darkgreen"
              : null
          }
          text={
            changeDepartment == 2
              ? "TYT"
              : item.pointType == "EA"
              ? "Eşit Ağırlık"
              : item.pointType == "DİL"
              ? "Dil"
              : item.pointType == "SÖZ"
              ? "Sözel"
              : item.pointType == "SAY"
              ? "Sayısal"
              : ""
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

export default UniversityDetailsItem;
