import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import Modal from "react-native-modal";
import _ from "lodash";
import { FlashList } from "@shopify/flash-list";
import CityItem from "./CityItem";
import { useDispatch, useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { setSelectedCity } from "../../bussiness/reducers/universitiesReducer";
import { useAppSelector } from "../../bussiness/hooks";

const cities = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  " Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kilis",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şanlıurfa",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];
const UniversitiesModal = ({ showModal, setShowModal }) => {
  const { selectedCity } = useAppSelector((state) => state.universitiesReducer);
  const dispatch = useDispatch();
  const [cityPress, setCityPress] = useState(selectedCity);
  useFocusEffect(
    React.useCallback(() => {
      setCityPress(selectedCity);
    }, [selectedCity])
  );

  return (
    <Modal
      isVisible={showModal}
      style={styles.modal}
      onBackdropPress={() => setShowModal(false)}
      onSwipeComplete={() => setShowModal(false)}
    >
      <View style={styles.content}>
        <View style={styles.modalHeaderView}>
          <Text style={styles.modalHeaderText}>Filtrele</Text>
          <View style={styles.headerButtonsView}></View>
        </View>

        <FlashList
          estimatedItemSize={200}
          data={cities}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CityItem
              item={item}
              cityPress={cityPress}
              setCityPress={setCityPress}
            />
          )}
          extraData={[cityPress]}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            style={{
              paddingVertical: 10,
              backgroundColor: "#F3F3F3",
              marginRight: 5,
              borderRadius: 8,
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => (dispatch(setSelectedCity([])), setShowModal(false))}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#BD1E07",
                fontWeight: "500",
              }}
            >
              Temizle
            </Text>
          </Pressable>
          <Pressable
            style={{
              paddingVertical: 10,
              backgroundColor: "#0066FF",
              marginLeft: 5,
              borderRadius: 8,
              flex: 1,
              alignItems: "center",
            }}
            onPress={() => (
              dispatch(setSelectedCity(cityPress)), setShowModal(false)
            )}
          >
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "500",
              }}
            >
              Uygula
            </Text>
          </Pressable>
        </View>
      </View>

      <SafeAreaView style={{ backgroundColor: "white" }} />
    </Modal>
  );
};

export default UniversitiesModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#777777",
  },
  headerButtonsView: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    backgroundColor: "white",
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: "65%",
  },
});
