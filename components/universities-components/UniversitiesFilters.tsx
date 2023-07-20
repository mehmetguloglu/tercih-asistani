import { View, Text } from "react-native";
import React, { useState } from "react";
import FiltersButton from "../buttons/FiltersButton";
import UniversitiesModal from "./UniversitiesModal";

const UniversitiesFilters = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <FiltersButton onPress={() => setShowModal(true)} />
      <UniversitiesModal showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
};

export default UniversitiesFilters;
