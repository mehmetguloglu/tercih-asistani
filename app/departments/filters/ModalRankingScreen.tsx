// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Pressable,
//   SafeAreaView,
// } from "react-native";
// import React, { useState } from "react";
// import { setSelectedRanking } from "../../../bussiness/reducers/departmentDetailsReducer";
// import DismissKeyboardView from "../../../HOC/DismissKeyboardHOC";
// import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
// import { useRouter } from "expo-router";

// const ModalRankingScreen = () => {
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const { selectedRanking } = useAppSelector(
//     (state) => state.departmentDetailsReducer
//   );
//   const [minRank, setMinRank] = useState<number>(selectedRanking[0]);
//   const [maxRank, setMaxRank] = useState<number>(selectedRanking[1]);
//   return (
//     <>
//       <DismissKeyboardView style={styles.container}>
//         <Text style={styles.headerText}>Başarı Sıralaması</Text>

//         <View style={styles.inputsView}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Düşük olan sıralama bilgisini giriniz"
//             value={minRank.toString()}
//             inputMode="numeric"
//             keyboardType="number-pad"
//             onChangeText={(e) =>
//               (Number(e) || e == "") && Number(e) < 10000000
//                 ? setMinRank(Number(e))
//                 : null
//             }
//           />
//           <TextInput
//             style={styles.textInput}
//             placeholder="Yüksek olan sıralama bilgisini giriniz"
//             value={maxRank.toString()}
//             inputMode="numeric"
//             keyboardType="number-pad"
//             onChangeText={(e) =>
//               (Number(e) || e == "") && Number(e) <= 10000000
//                 ? setMaxRank(Number(e))
//                 : null
//             }
//           />
//           {minRank >= maxRank && minRank != 0 && maxRank != 0 ? (
//             <Text style={styles.pointWarningText}>
//               Lütfen üste düşük olan, alta yüksek olan sıralama bilgisini
//               yazınız!
//             </Text>
//           ) : null}
//         </View>
//       </DismissKeyboardView>
//       <SafeAreaView
//         style={{
//           flexDirection: "row",
//           backgroundColor: "white",
//         }}
//       >
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
//             return (
//               dispatch(setSelectedRanking([0, 10000000])),
//               setMinRank(0),
//               setMaxRank(10000000)
//             );
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
//           disabled={minRank > maxRank ? true : false}
//           style={{
//             paddingVertical: 10,
//             backgroundColor: minRank >= maxRank ? "gray" : "#0066FF",
//             marginLeft: 5,
//             borderRadius: 8,
//             flex: 1,
//             alignItems: "center",
//             margin: 15,
//           }}
//           onPress={() => {
//             return (
//               dispatch(setSelectedRanking([minRank, maxRank])), router.back()
//             );
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
//     </>
//   );
// };

// export default ModalRankingScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//     paddingHorizontal: 15,
//   },
//   headerText: {
//     fontWeight: "600",
//     color: "#777777",
//     marginTop: 16,
//   },
//   inputsView: {},
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#D9D9D9",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 4,
//     marginVertical: 4,
//   },
//   pointWarningText: {
//     color: "red",
//     fontWeight: "600",
//     fontSize: 13,
//   },
// });
