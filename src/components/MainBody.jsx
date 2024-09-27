"use clint";
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  flexbox,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { PlusIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";

export default function MainBody({ selectedItem }) {

  const [activeTab, setActiveTab] = useState("Ongoing");

  const CardData = [
    // Ongoing Projects 
    {
      title: "Make an E-Commerce Website for a Brand Store",
      category: "Web",
      progress: "Ongoing",
      nextMilestone: "Dec 5th",
      action: "Follow up with manager",
    },
    {
      title: "Website technical maintenance project",
      category: "Web",
      progress: "Ongoing",
      nextMilestone: "Jan 1st",
      action: "Follow up with manager",
    },
    {
      title: "WordPress website speed and SEO Optimization",
      category: "Web",
      progress: "Ongoing",
      nextMilestone: "In 3 days",
      action: "Follow up with manager",
    },
    {
      title: "Mobile App Development for Fashion Store",
      category: "Mobile",
      progress: "Ongoing",
      nextMilestone: "Dec 12th",
      action: "Follow up with manager",
    },
    {
      title: "Design overhaul for Portfolio Website",
      category: "Web",
      progress: "Ongoing",
      nextMilestone: "Jan 15th",
      action: "Follow up with manager",
    },
    {
      title: "API Integration for Banking System",
      category: "Web",
      progress: "Ongoing",
      nextMilestone: "Dec 28th",
      action: "Follow up with manager",
    },
  
    // Completed Projects 
    {
      title: "Launch of Corporate E-Commerce Site",
      category: "Web",
      progress: "Completed",
      nextMilestone: "N/A",
      action: "Follow up with manager",
    },
    {
      title: "Migration to Cloud Hosting",
      category: "Web",
      progress: "Completed",
      nextMilestone: "N/A",
      action: "Follow up with manager",
    },
    {
      title: "SEO and Speed Optimization for Blog",
      category: "Web",
      progress: "Completed",
      nextMilestone: "N/A",
      action: "Follow up with manager",
    },
  
    // Cancelled Projects 
    {
      title: "Blockchain-based Voting System",
      category: "Web3",
      progress: "Cancelled",
      nextMilestone: "N/A",
      action: "Follow up with manager",
    },
    {
      title: "E-Commerce Mobile App Development",
      category: "Mobile",
      progress: "Cancelled",
      nextMilestone: "N/A",
      action: "Follow up with manager",
    },
  
    // Drafts 
    {
      title: "AI Chatbot Integration for Website",
      category: "AI/ML",
      progress: "Drafts",
      nextMilestone: "Awaiting approval",
      action: "Follow up with manager",
    },
    {
      title: "Redesign Corporate Website",
      category: "Web",
      progress: "Drafts",
      nextMilestone: "Awaiting content",
      action: "Follow up with manager",
    },
    {
      title: "Mobile App for Fitness Tracking",
      category: "Mobile",
      progress: "Drafts",
      nextMilestone: "Initial discussion",
      action: "Follow up with manager",
    },
    {
      title: "New E-Commerce Platform Setup",
      category: "Web",
      progress: "Drafts",
      nextMilestone: "Design phase",
      action: "Follow up with manager",
    },
  ];
  
  

  const filteredCardData = CardData.filter(card => card.progress === activeTab);


  return (
    <Box ml={{ base: "0px", lg: "304px", xl:"350px"}}>
    <Box flexGrow={1}  bg={"white"} py={"56px"} px={"32px"} color={"#707066"}>
      <Box mb={"72px"}>
        <Heading as="h3" size="lg" color={"black"}>
          Welcome Back, {selectedItem.label}!
        </Heading>
        <Text mb={"32px"} mt={"15px"}>
          You have accomplished a lot today.Let us handle the rest
        </Text>
        <Flex gap={"32px"}>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"}>
            <Image src={"Folder.svg"} width={10} height={"38px"} />
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>
                30
              </Text>
              <Text fontSize={"10px"}>Completed</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"}>
            <Image src={"Folder1.svg"} width={10} height={"38px"} />
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>
                02
              </Text>
              <Text fontSize={"10px"}>Ongoing</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"}>
            <Image src={"Folder2.svg"} width={10} height={"38px"} />
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>
                04
              </Text>
              <Text fontSize={"10px"}>Drafts</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"}>
            <Image src={"Folder3.svg"} width={10} height={"38px"} />
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>
                02
              </Text>
              <Text fontSize={"10px"}>Canceled</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box w={{ base: "auto", lg: "998px" }}>
        <Flex justifyContent={"space-between"}>
          <Tabs onChange={(index) => setActiveTab(index === 0 ? "Ongoing" : index === 1 ? "Completed" : index === 2 ? "Cancelled" : "Drafts")}>
            <TabList fontSize={"12px"}>
              <Tab>Ongoing</Tab>
              <Tab>Completed</Tab>
              <Tab>Cancelled</Tab>
              <Tab>Drafts</Tab>
            </TabList>
          </Tabs>
          <Button
            bg={"#5876B7"}
            color={"white"}
            leftIcon={<PlusIcon />}
            _hover={{ bg: "#334876" }}
          >
            {" "}
            Creat a Project{" "}
          </Button>
        </Flex>
        <Flex mt={"32px"} gap={"32px"} flexWrap={"wrap"}>

        {filteredCardData.map((card, index) => (
  <Card key={index} width={"311px"} height={"268px"}>
    <CardHeader py={"12px"}>
      <Flex alignItems={"center"} color={"#050504"}>
        <Heading fontSize={"18px"} w={"237px"} fontWeight={700}>
          {card.title}
        </Heading>
        <Image src={"dot.svg"} w={5} h={5} />
      </Flex>
      <Text fontSize={"12px"} fontWeight={400} mt={"8px"} color={"#707066"}>
        {card.category}
      </Text>
    </CardHeader>
    <CardBody my={"0px"} py={"0px"}>
      <Image src={"Task Progress.svg"} w={300} h={4} my={"22px"} />
      <Text
        color={"#5876B7"}
        fontSize={"12px"}
        bg={"#dbe2f0"}
        w={"68px"}
        h={"24px"}
        textAlign={"Center"}
        justifyContent={"center"}
        borderRadius={"5px"}
        pt={"3px"}
        mb={"8px"}
      >
        {card.progress}
      </Text>
      <Text
        color={"#5876B7"}
        fontSize={"12px"}
        bg={"#dbe2f0"}
        w={"157px"}
        h={"24px"}
        textAlign={"Center"}
        justifyContent={"center"}
        borderRadius={"5px"}
        pt={"3px"}
      >
        Next milestone: {card.nextMilestone}
      </Text>
      <Flex alignItems={"end"} mt={"8px"} justifyContent={"space-between"}>
        <Heading fontWeight={"700"} fontSize={"14px"}>
          {card.action}
        </Heading>
        <Button p={"10px"} bg={"#5876B7"} _hover={{ bg: "#334876" }}>
          <Image src={"Send.svg"} w={7} h={7} />
        </Button>
      </Flex>
    </CardBody>
  </Card>
))}



        </Flex>
      </Box>
    </Box>
    <Flex px={"32px"} h={"64px"} position={"fixed"} bottom={0} zIndex="9999" bg={"#FFFFFF"} w={"full"} alignItems={"center"} gap={"16px"}>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"8px"} w={"225px"}>
        <Image src="1.svg" w={4} h={4} />
        <Text fontSize={"16px"} fontWeight={700}>Explore Documentation</Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"8px"} w={"225px"}>
        <Image src="Calculate.svg" w={4} h={4} />
        <Text fontSize={"16px"} fontWeight={700}>Cost Calculator</Text>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"} gap={"8px"} w={"225px"}>
        <Image src="Calculate.svg" w={4} h={4} />
        <Text fontSize={"16px"} fontWeight={700}>Billing Calculator</Text>
      </Flex>
    </Flex>
    </Box>
  );
}
