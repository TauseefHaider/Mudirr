import { Box, Flex, Heading,Text, Image } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { PlusIcon } from "lucide-react";

export default function MainBody() {
  return (
    <Box flexGrow={1} bg={"white"} py={"56px"} px={"32px"} color={"#707066"}>
      <Box mb={"72px"} >
        <Heading as='h3' size="lg" color={"black"} >
        Welcome Back, Tauseef!
        </Heading>
        <Text mb={"32px"} mt={"15px"}>You have accomplished a lot today.Let us handle the rest</Text>
        <Flex gap={"56px"}>
          <Flex alignItems={"center"} gap={"4px"}>
            <Image src={"Folder.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>30</Text>
              <Text fontSize={"10px"}>Completed</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"4px"}>
            <Image src={"Folder1.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>02</Text>
              <Text fontSize={"10px"}>Ongoing</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"4px"}>
            <Image src={"Folder2.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>04</Text>
              <Text fontSize={"10px"}>Drafts</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"4px"}>
            <Image src={"Folder3.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>02</Text>
              <Text fontSize={"10px"}>Canceled</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Flex justifyContent={"space-between"}>
      <Tabs>
  <TabList fontSize={"12px"}>
    <Tab>Ongoing</Tab>
    <Tab>Completed</Tab>
    <Tab>Cancelled</Tab>
    <Tab>Drafts</Tab>
  </TabList>


     </Tabs>
     <Button bg={"#5876B7"} color={"white"} leftIcon={<PlusIcon/>} _hover={{ bg: "#334876" }}> Creat a Project </Button>
     </Flex>
    </Box>
  );
}
