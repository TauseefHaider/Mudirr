"use client";

import MainBody from "@/components/MainBody";
import Sidebar from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

const options = [
  {
    value: "option1",
    label: "Haseena Jameela",
    email: "Haseenajameela@gmail.com",
    image: "/Avatar.png", // Replace with your image
  },

  {
    value: "option2",
    label: "Tauseef Haider",
    email: "tauseefhaider919@gmail.com",
    image: "/tauseef.png",
  }
  
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  return (
    <Flex gap={2} minH={"100vh"}>
      <Sidebar onSelectItem={setSelectedItem}  />
      <MainBody selectedItem={selectedItem} />
    </Flex>
  );
}
