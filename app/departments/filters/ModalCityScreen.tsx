// import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
// import React, { useState } from "react";
// import { FlashList } from "@shopify/flash-list";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigation } from "@react-navigation/native";
// import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
// import { CityItem } from "../../../components/universities-components";
// import { setSelectedCity } from "../../../bussiness/reducers/departmentDetailsReducer";

// const ModalCityScreen = () => {
//   const navigation = useNavigation();
//   const { selectedCity } = useAppSelector(
//     (state) => state.departmentDetailsReducer
//   );
//   const [cityPress, setCityPress] = useState(selectedCity);
//   const dispatch = useAppDispatch();

//   const cities = [
//     "Adana",
//     "Adıyaman",
//     "Afyonkarahisar",
//     "Ağrı",
//     "Amasya",
//     "Ankara",
//     "Antalya",
//     "Ardahan",
//     "Artvin",
//     "Aydın",
//     "Balıkesir",
//     "Bartın",
//     "Batman",
//     "Bayburt",
//     "Bilecik",
//     " Bingöl",
//     "Bitlis",
//     "Bolu",
//     "Burdur",
//     "Bursa",
//     "Çanakkale",
//     "Çankırı",
//     "Çorum",
//     "Denizli",
//     "Diyarbakır",
//     "Düzce",
//     "Edirne",
//     "Elazığ",
//     "Erzincan",
//     "Erzurum",
//     "Eskişehir",
//     "Gaziantep",
//     "Giresun",
//     "Gümüşhane",
//     "Hakkari",
//     "Hatay",
//     "Iğdır",
//     "Isparta",
//     "İstanbul",
//     "İzmir",
//     "Kahramanmaraş",
//     "Karabük",
//     "Karaman",
//     "Kars",
//     "Kastamonu",
//     "Kayseri",
//     "Kırıkkale",
//     "Kırklareli",
//     "Kırşehir",
//     "Kilis",
//     "Kocaeli",
//     "Konya",
//     "Kütahya",
//     "Malatya",
//     "Manisa",
//     "Mardin",
//     "Mersin",
//     "Muğla",
//     "Muş",
//     "Nevşehir",
//     "Niğde",
//     "Ordu",
//     "Osmaniye",
//     "Rize",
//     "Sakarya",
//     "Samsun",
//     "Siirt",
//     "Sinop",
//     "Sivas",
//     "Şanlıurfa",
//     "Şırnak",
//     "Tekirdağ",
//     "Tokat",
//     "Trabzon",
//     "Tunceli",
//     "Uşak",
//     "Van",
//     "Yalova",
//     "Yozgat",
//     "Zonguldak",
//   ];

//   return (
//     <View style={styles.container}>
//       <FlashList
//         ListHeaderComponent={() => (
//           <Text style={{ fontWeight: "600", color: "#777777", marginTop: 16 }}>
//             Şehir Seç
//           </Text>
//         )}
//         estimatedItemSize={200}
//         data={cities}
//         keyExtractor={(item) => item}
//         renderItem={({ item }) => (
//           <CityItem
//             item={item}
//             cityPress={cityPress}
//             setCityPress={setCityPress}
//           />
//         )}
//         extraData={selectedCity}
//       />

//       <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
//         <Pressable
//           style={{
//             paddingVertical: 10,
//             backgroundColor: "#F3F3F3",
//             marginRight: 5,
//             borderRadius: 8,
//             flex: 1,
//             alignItems: "center",
//             margin: 15,
//           }}
//           onPress={() => {
//             return dispatch(setSelectedCity([])), navigation.goBack();
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 14,
//               color: "#BD1E07",
//               fontWeight: "500",
//             }}
//           >
//             Temizle
//           </Text>
//         </Pressable>
//         <Pressable
//           style={{
//             paddingVertical: 10,
//             backgroundColor: "#0066FF",
//             marginLeft: 5,
//             borderRadius: 8,
//             flex: 1,
//             margin: 15,
//             alignItems: "center",
//           }}
//           onPress={() => {
//             return navigation.goBack(), dispatch(setSelectedCity(cityPress));
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 14,
//               color: "white",
//               fontWeight: "500",
//             }}
//           >
//             Uygula
//           </Text>
//         </Pressable>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default ModalCityScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//   },
// });
