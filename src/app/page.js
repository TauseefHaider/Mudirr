import MainBody from "@/components/MainBody";
import Sidebar from "@/components/Sidebar";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex gap={2} minH={"100vh"}>
      <Sidebar />
      <MainBody />
    </Flex>
  );
}
