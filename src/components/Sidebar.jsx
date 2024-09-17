"use client";
import { Image } from "@chakra-ui/next-js";
import {
  Box,
  Heading,
  Select,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import { Divider } from '@chakra-ui/react'


export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleAccordionChange = (index) => {
    setSelectedIndex(index === selectedIndex ? 0 : index);
  };

   const Ary = ["Dashboard", "Project Histoy", "Clint History", "Emails"]

  return (
    <Box w="304px" bg={"#F4F6FA"} py={"20px"} px={"16px"}>
      
      <Image src="/logo.svg" width={116} height={39} alt="Logo" />
      
      <Menu w={272}>
        <MenuButton
          as={Button}
          variant={"unstyled"}
          sx={{
            bg: "F4F6FA",
            ":hover": {
              bg: "F4F6FA",
            },
            mt: "24px",
            mb: "28px",
          }}
        >
          <Flex gap={"10px"} alignItems={"center"}>
            <Image
              src={"/tauseef.png"}
              width={39}
              height={39}
              borderRadius={"50px"}
            />
            <Box gap={"12px"} w={185}>
              <Heading
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "20px",
                  color: "#050504",
                  textAlign: "left",
                }}
              >
                Tauseef Haider
              </Heading>
              <Text
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#3C3C34",
                  lineHeight: "20px",
                  textAlign: "left",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                tauseefhaider919@gmail.com
              </Text>
            </Box>
            <Image src={"/chevron-down.svg"} width={5} height={5} />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Flex gap={"8px"}>
              <Image
                src={"/tauseef.png"}
                width={39}
                height={39}
                borderRadius={"50px"}
              />
              <Box gap={"12px"}>
                <Heading
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "20px",
                    color: "#050504",
                  }}
                >
                  Tauseef Haider
                </Heading>
                <Text
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#3C3C34",
                    lineHeight: "20px",
                    overflow: "ellipsis",
                  }}
                >
                  tauseefhaider919@gmail.com
                </Text>
              </Box>
            </Flex>
          </MenuItem>
          <MenuItem>
            {" "}
            <Flex gap={"8px"}>
              <Image
                src={"/tauseef.png"}
                width={39}
                height={39}
                borderRadius={"50px"}
              />
              <Box gap={"12px"}>
                <Heading
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "20px",
                    color: "#050504",
                  }}
                >
                  Tauseef Haider
                </Heading>
                <Text
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#3C3C34",
                    lineHeight: "20px",
                  }}
                >
                  tauseefhaider@gmail.com
                </Text>
              </Box>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
      
      <Tabs variant="unstyled" mb="24px">
        <TabList bg={"white"} padding={"4px"} borderRadius={"6px"} fontSize={"14px"} border={1} borderColor={"gray-600"} gap={"6px"} >
          <Tab _selected={{ color: "#334876", bg: "#DBE2F0", fontWeight:"600"  }} w={"50%"} borderRadius={"6px"} color={"#707066"}>Personal</Tab>
          <Tab  w={"50%"} _selected={{ color: "#334876", bg: " #DBE2F0", fontWeight:"600", }} borderRadius={"6px"} color={"#707066"}>Invited</Tab>
        </TabList>
        <TabPanels>
          
        </TabPanels>
      </Tabs>

      <Box color={"#707066"} bg={"#ebf0fa"} borderRadius={"10px"} p={4}>
      <Accordion defaultIndex={[0]} mb={"12px"} allowToggle onChange={handleAccordionChange}>
      {Ary.map((item, index) => (
        <AccordionItem key={item} border={"0px"}>
          <h2>
            <AccordionButton  _expanded={{ bg: 'white', color: 'black', fontWeight:"600", borderRadius:"10px"}} onClick={() => handleAccordionChange(index)}>
              <Flex as='span' flex='1'  alignItems={"center"} gap={"4px"} fontSize={"14px"}>
              <Image src={selectedIndex === index ? "iconfill.svg" : "icon.svg"} width={4} height={4}/>
                {item}
              </Flex>
              
              
            </AccordionButton>
          </h2>
          
        </AccordionItem>
      ))}
    </Accordion>

    <Divider/>

    <Accordion defaultIndex={[0]} allowMultiple my={"10px"} borderColor={"#ebf0fa"}>
  <AccordionItem>
    <h2>
      <AccordionButton gap={"4px"}>
      <AccordionIcon />
        <Box as='span' flex='1' textAlign='left' fontSize={"14px"} fontWeight={600}>
          WORKSPACE
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} fontSize={"14px"} ml={"25px"} gap={"10px"}>
      <Flex  justify={"space-between"} p={"2px"}>Work Space Name 1 <Image src={"chevron-down.svg"} width={4} height={4}/> </Flex>
      <Flex  justify={"space-between"} p={"2px"}>Work Space Name 2 <Image src={"chevron-down.svg"} width={4} height={4}/> </Flex>
      <Flex  justify={"space-between"} p={"2px"}>Work Space Name 3 <Image src={"chevron-down.svg"} width={4} height={4}/> </Flex>
      <Text color={"blue"} ml={"30px"} mt={"8px"} alignSelf={"center"}>See All</Text>
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
      
      </Box>

    </Box>
  );
}
