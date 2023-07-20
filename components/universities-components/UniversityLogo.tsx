import React from "react";
import { Image } from "tamagui";

const UniversityLogo = ({ item }) => {
  let images = [
    "64629381311a756d0c43afa2",
    "64629381311a756d0c43afa3",
    "64629381311a756d0c43afa4",
    "64629381311a756d0c43afa5",
    "64629381311a756d0c43afa6",
    "64629381311a756d0c43afa7",
    "64629381311a756d0c43afa8",
    "64629381311a756d0c43afa9",
    "64629381311a756d0c43afaa",
    "64629381311a756d0c43afab",
    "64629381311a756d0c43afac",
    "64629381311a756d0c43afad",
    "64629381311a756d0c43afae",
    "64629381311a756d0c43afaf",
    "64629381311a756d0c43afb0",
    "64629381311a756d0c43afb1",
    "64629381311a756d0c43afb2",
    "64629381311a756d0c43afb3",
    "64629381311a756d0c43afb4",
    "64629381311a756d0c43afb5",
    "64629381311a756d0c43afb6",
    "64629381311a756d0c43afb7",
    "64629381311a756d0c43afb8",
    "64629381311a756d0c43afb9",
    "64629381311a756d0c43afba",
    "64629381311a756d0c43afbb",
    "64629381311a756d0c43afbc",
    "64629381311a756d0c43afbd",
    "64629381311a756d0c43afbe",
    "64629381311a756d0c43afbf",
    "64629381311a756d0c43afc0",
    "64629381311a756d0c43afc5",
    "64629381311a756d0c43afc7",
    "64629381311a756d0c43afc8",
    "64629381311a756d0c43afc9",
    "64629381311a756d0c43afca",
    "64629381311a756d0c43afcb",
    "64629381311a756d0c43afcc",
    "64629381311a756d0c43afcd",
    "64629381311a756d0c43afce",
    "64629381311a756d0c43afcf",
    "64629381311a756d0c43afd0",
    "64629381311a756d0c43afd1",
    "64629381311a756d0c43afd2",
    "64629381311a756d0c43afd3",
    "64629381311a756d0c43afd4",
    "64629381311a756d0c43afd5",
    "64629381311a756d0c43afd6",
    "64629381311a756d0c43afd7",
    "64629381311a756d0c43afd8",
    "64629381311a756d0c43afda",
    "64629381311a756d0c43afdb",
    "64629381311a756d0c43afdc",
    "64629381311a756d0c43afdd",
    "64629381311a756d0c43afdf",
    "64629381311a756d0c43afe1",
    "64629381311a756d0c43afe2",
    "64629381311a756d0c43afe3",
    "64629381311a756d0c43afe4",
    "64629381311a756d0c43afe5",
    "64629381311a756d0c43afe6",
    "64629381311a756d0c43afe7",
    "64629381311a756d0c43afe8",
    "64629381311a756d0c43afe9",
    "64629381311a756d0c43afea",
    "64629381311a756d0c43afeb",
    "64629381311a756d0c43afec",
    "64629381311a756d0c43afed",
    "64629381311a756d0c43afee",
    "64629381311a756d0c43afef",
    "64629381311a756d0c43aff0",
    "64629381311a756d0c43aff1",
    "64629381311a756d0c43aff2",
    "64629381311a756d0c43aff5",
    "64629381311a756d0c43aff6",
    "64629381311a756d0c43aff7",
    "64629381311a756d0c43aff8",
    "64629381311a756d0c43aff9",
    "64629381311a756d0c43affa",
    "64629381311a756d0c43affb",
    "64629381311a756d0c43affc",
    "64629381311a756d0c43affd",
    "64629381311a756d0c43affe",
    "64629381311a756d0c43afff",
    "64629381311a756d0c43b000",
    "64629381311a756d0c43b001",
    "64629381311a756d0c43b002",
    "64629381311a756d0c43b004",
    "64629381311a756d0c43b005",
    "64629381311a756d0c43b006",
    "64629381311a756d0c43b007",
    "64629381311a756d0c43b008",
    "64629381311a756d0c43b009",
    "64629381311a756d0c43b00a",
    "64629381311a756d0c43b00b",
    "64629381311a756d0c43b00c",
    "64629381311a756d0c43b00d",
    "64629381311a756d0c43b00e",
    "64629381311a756d0c43b00f",
    "64629381311a756d0c43b010",
    "64629381311a756d0c43b011",
    "64629381311a756d0c43b012",
    "64629381311a756d0c43b013",
    "64629381311a756d0c43b014",
    "64629381311a756d0c43b015",
    "64629381311a756d0c43b016",
    "64629381311a756d0c43b017",
    "64629381311a756d0c43b018",
    "64629381311a756d0c43b019",
    "64629381311a756d0c43b01a",
    "64629381311a756d0c43b01b",
    "64629381311a756d0c43b01c",
    "64629381311a756d0c43b01d",
    "64629381311a756d0c43b01e",
    "64629381311a756d0c43b01f",
    "64629381311a756d0c43b020",
    "64629381311a756d0c43b021",
    "64629381311a756d0c43b022",
    "64629381311a756d0c43b023",
    "64629381311a756d0c43b024",
    "64629381311a756d0c43b025",
    "64629381311a756d0c43b026",
    "64629381311a756d0c43b027",
    "64629381311a756d0c43b028",
    "64629381311a756d0c43b029",
    "64629381311a756d0c43b02a",
    "64629381311a756d0c43b02b",
    "64629381311a756d0c43b02c",
    "64629381311a756d0c43b02d",
    "64629381311a756d0c43b033",
    "64629381311a756d0c43b034",
    "64629381311a756d0c43b035",
    "64629381311a756d0c43b036",
    "64629381311a756d0c43b037",
    "64629381311a756d0c43b038",
    "64629381311a756d0c43b039",
    "64629381311a756d0c43b03b",
    "64629381311a756d0c43b03c",
    "64629381311a756d0c43b03d",
    "64629381311a756d0c43b03e",
    "64629381311a756d0c43b03f",
    "64629381311a756d0c43b041",
    "64629381311a756d0c43b042",
    "64629381311a756d0c43b043",
    "64629381311a756d0c43b044",
    "64629381311a756d0c43b045",
    "64629381311a756d0c43b046",
    "64629381311a756d0c43b047",
    "64629381311a756d0c43b048",
    "64629381311a756d0c43b049",
    "64629381311a756d0c43b04a",
    "64629381311a756d0c43b04b",
    "64629381311a756d0c43b04c",
    "64629381311a756d0c43b04d",
    "64629381311a756d0c43b04e",
    "64629381311a756d0c43b04f",
    "64629381311a756d0c43b050",
    "64629381311a756d0c43b051",
    "64629381311a756d0c43b052",
    "64629381311a756d0c43b053",
    "64629381311a756d0c43b054",
    "64629381311a756d0c43b055",
    "64629381311a756d0c43b056",
    "64629381311a756d0c43b057",
    "64629381311a756d0c43b058",
    "64629381311a756d0c43b059",
    "64629381311a756d0c43b05a",
    "64629381311a756d0c43b05c",
    "64629381311a756d0c43b05d",
    "64629381311a756d0c43b05e",
    "64629381311a756d0c43b05f",
    "64629381311a756d0c43b060",
    "64629381311a756d0c43b061",
    "64629381311a756d0c43b063",
    "64629381311a756d0c43b064",
    "64629381311a756d0c43b065",
    "64629381311a756d0c43b066",
    "64629381311a756d0c43b067",
    "64629381311a756d0c43b068",
    "64629381311a756d0c43b069",
    "64629381311a756d0c43b06a",
    "64629381311a756d0c43b06b",
    "64629381311a756d0c43b06c",
    "64629381311a756d0c43b06d",
    "64629381311a756d0c43b06e",
    "64629381311a756d0c43b06f",
    "64629381311a756d0c43b070",
    "64629381311a756d0c43b071",
    "64629381311a756d0c43b072",
    "64629381311a756d0c43b073",
    "64629381311a756d0c43b079",
    "64629381311a756d0c43b07a",
    "64629381311a756d0c43b07b",
    "64629381311a756d0c43b07d",
    "64629381311a756d0c43b07e",
    "64629381311a756d0c43b07f",
    "64629381311a756d0c43b080",
    "64629381311a756d0c43b081",
    "64629381311a756d0c43b082",
    "64629381311a756d0c43b083",
  ];
  const CurrentImage = (source) => {
    return <Image source={require("../../assets/blabla")} />;
  };

  if (!images.some((x) => x === item.id)) {
    return <CurrentImage source={source} />;
  }
  if (item.id === "64629381311a756d0c43afa2") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa2.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afa3") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa3.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afa4") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa4.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afa5") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa5.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afa6") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa6.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afa7") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa7.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afa8") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa8.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afa9") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afa9.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afaa") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afaa.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afab") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afab.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afac") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afac.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afad") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afad.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afae") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afae.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afaf") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afaf.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb0") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb0.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb1") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb1.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb2") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb2.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb3") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb3.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb4") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb4.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb5") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb5.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb6") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb6.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb7") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb7.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb8") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb8.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afb9") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afb9.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afba") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afba.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afbb") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afbb.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afbc") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afbc.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afbd") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afbd.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afbe") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afbe.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afbf") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afbf.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afc0") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afc0.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afc5") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afc5.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afc7") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afc7.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afc8") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afc8.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afc9") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afc9.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afca") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afca.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afcb") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afcb.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afcc") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afcc.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afcd") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afcd.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afce") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afce.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afcf") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afcf.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd0") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd0.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd1") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd1.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd2") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd2.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd3") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd3.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd4") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd4.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd5") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd5.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd6") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd6.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd7") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd7.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afd8") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afd8.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afda") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afda.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afdb") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afdb.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afdc") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afdc.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afdd") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afdd.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afdf") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afdf.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe1") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe1.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe2") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe2.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe3") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe3.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe4") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe4.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe5") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe5.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe6") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe6.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe7") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe7.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe8") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe8.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afe9") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afe9.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afea") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afea.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afeb") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afeb.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afec") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afec.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afed") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afed.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afee") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afee.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afef") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afef.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff0") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff0.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff1") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff1.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff2") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff2.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff5") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff5.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff6") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff6.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff7") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff7.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff8") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff8.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43aff9") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43aff9.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43affa") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43affa.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43affb") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43affb.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43affc") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43affc.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43affd") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43affd.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43affe") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43affe.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43afff") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43afff.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b000") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b000.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b001") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b001.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b002") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b002.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b004") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b004.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b005") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b005.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b006") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b006.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b007") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b007.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b008") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b008.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b009") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b009.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b00a") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b00a.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b00b") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b00b.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b00c") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b00c.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b00d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b00d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b00e") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b00e.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b00f") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b00f.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b010") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b010.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b011") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b011.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b012") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b012.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b013") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b013.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b014") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b014.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b015") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b015.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b016") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b016.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b017") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b017.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b018") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b018.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b019") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b019.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b01a") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b01a.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b01b") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b01b.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b01c") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b01c.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b01d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b01d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b01e") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b01e.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b01f") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b01f.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b020") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b020.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b021") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b021.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b022") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b022.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b023") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b023.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b024") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b024.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b025") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b025.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b026") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b026.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b027") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b027.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b028") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b028.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b029") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b029.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b02a") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b02a.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b02b") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b02b.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b02c") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b02c.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b02d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b02d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b033") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b033.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b034") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b034.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b035") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b035.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b036") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b036.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b037") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b037.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b038") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b038.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b039") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b039.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b03b") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b03b.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b03c") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b03c.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b03d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b03d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b03e") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b03e.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b03f") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b03f.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b041") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b041.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b042") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b042.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b043") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b043.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b044") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b044.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b045") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b045.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b046") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b046.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b047") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b047.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b048") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b048.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b049") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b049.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b04a") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b04a.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b04b") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b04b.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b04c") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b04c.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b04d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b04d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b04e") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b04e.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b04f") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b04f.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b050") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b050.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b051") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b051.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b052") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b052.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b053") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b053.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b054") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b054.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b055") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b055.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b056") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b056.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b057") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b057.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b058") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b058.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b059") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b059.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b05a") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b05a.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b05c") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b05c.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b05d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b05d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b05e") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b05e.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b05f") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b05f.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b060") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b060.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b061") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b061.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b063") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b063.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b064") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b064.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b065") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b065.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b066") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b066.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b067") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b067.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b068") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b068.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b069") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b069.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b06a") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b06a.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b06b") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b06b.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b06c") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b06c.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b06d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b06d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b06e") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b06e.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b06f") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b06f.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b070") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b070.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b071") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b071.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b072") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b072.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b073") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b073.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b079") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b079.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b07a") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b07a.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b07b") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b07b.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b07d") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b07d.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b07e") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b07e.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b07f") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b07f.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b080") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b080.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b081") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b081.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b082") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b082.webp")}
      />
    );
  }
  if (item.id === "64629381311a756d0c43b083") {
    return (
      <CurrentImage
        source={require("../../assets/64629381311a756d0c43b083.webp")}
      />
    );
  }
  return <CurrentImage source={require("../../assets/image4.png")} />;
};

export default UniversityLogo;
