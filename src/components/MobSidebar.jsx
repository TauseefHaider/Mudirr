"use clint";
import {
  Box,
  Heading,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import React, { useState } from "react";
import { Image } from "@chakra-ui/next-js";
import MySvgComponent from "./MySvgComponent";

export default function MobSidebar({ onSelectItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAccordionChange = (index) => {
    setSelectedIndex(index === selectedIndex ? 0 : index);
  };

  const Ary = ["Dashboard", "Project History", "Client History", "Emails"];

  const [selectedOption, setSelectedOption] = useState("option1");

  const options = [
    {
      value: "option1",
      label: "Haseena Jameela",
      email: "Haseenajameela@gmail.com",
      image: "/Avatar.png",
    },
    {
      value: "option2",
      label: "Tauseef Haider",
      email: "tauseefhaider919@gmail.com",
      image: "/tauseef.png",
    },
  ];

  const handleSelect = (value) => {
    setSelectedOption(value);
    const selectedItem = options.find((option) => option.value === value);
    onSelectItem(selectedItem);
  };

  const selectedItem = options.find(
    (option) => option.value === selectedOption
  );

  return (
    <>
      <Button
        onClick={onOpen}
        display={{ base: "block", lg: "none" }}
        position="fixed"
        top="20px"
        left="20px"
        zIndex={20}
        aria-label="Open Menu"
      >
        Open
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={"#F4F6FA"}>
            <DrawerCloseButton />
            <DrawerHeader>
              <MySvgComponent />
            </DrawerHeader>

            <DrawerBody>
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
                      src={selectedItem.image}
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
                        {selectedItem.label}
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
                        {selectedItem.email}
                      </Text>
                    </Box>
                    <Image src={"/chevron-down.svg"} width={5} height={5} />
                  </Flex>
                </MenuButton>
                <MenuList>
                  {options.map((option) => (
                    <MenuItem
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      display="flex"
                      alignItems="center"
                    >
                      <Image
                        src={option.image}
                        width={39}
                        height={39}
                        borderRadius={"50px"}
                        mr={2}
                      />
                      <Box>
                        <Heading
                          sx={{
                            fontSize: "16px",
                            fontWeight: "600",
                            lineHeight: "20px",
                          }}
                        >
                          {option.label}
                        </Heading>
                        <Text
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            color: "#3C3C34",
                            lineHeight: "20px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {option.email}
                        </Text>
                      </Box>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Tabs variant="unstyled" mb="24px">
                <TabList
                  bg={"white"}
                  padding={"4px"}
                  borderRadius={"6px"}
                  fontSize={"14px"}
                  border={1}
                  borderColor={"gray-600"}
                  gap={"6px"}
                >
                  <Tab
                    _selected={{
                      color: "#334876",
                      bg: "#DBE2F0",
                      fontWeight: "600",
                    }}
                    w={"50%"}
                    borderRadius={"6px"}
                    color={"#707066"}
                  >
                    Personal
                  </Tab>
                  <Tab
                    w={"50%"}
                    _selected={{
                      color: "#334876",
                      bg: " #DBE2F0",
                      fontWeight: "600",
                    }}
                    borderRadius={"6px"}
                    color={"#707066"}
                  >
                    Invited
                  </Tab>
                </TabList>
                <TabPanels></TabPanels>
              </Tabs>
              <Box
                height={"432px"}
                overflow={"scroll"}
                scrollBehavior={"smooth"}
              >
                <Box
                  color={"#707066"}
                  bg={"#ebf0fa"}
                  borderRadius={"10px"}
                  p={4}
                >
                  <Accordion
                    defaultIndex={[0]}
                    mb={"10px"}
                    allowToggle
                    onChange={handleAccordionChange}
                  >
                    {Ary.map((item, index) => (
                      <AccordionItem key={item} border={"0px"}>
                        <h2>
                          <AccordionButton
                            _expanded={{
                              bg: "white",
                              color: "black",
                              fontWeight: "600",
                              borderRadius: "10px",
                            }}
                            onClick={() => handleAccordionChange(index)}
                          >
                            <Flex
                              as="span"
                              flex="1"
                              alignItems={"center"}
                              gap={"4px"}
                              fontSize={"14px"}
                            >
                              <Image
                                src={
                                  selectedIndex === index
                                    ? "iconfill.svg"
                                    : "icon.svg"
                                }
                                width={4}
                                height={4}
                              />
                              {item}
                            </Flex>
                          </AccordionButton>
                        </h2>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <Divider />

                  <Accordion
                    defaultIndex={[0]}
                    allowMultiple
                    my={"2px"}
                    borderColor={"#ebf0fa"}
                  >
                    <AccordionItem>
                      <h2>
                        <AccordionButton gap={"4px"}>
                          <AccordionIcon />
                          <Flex
                            as="span"
                            justifyContent={"space-between"}
                            flex="1"
                            color={"#3C3C34"}
                            fontSize={"12px"}
                            fontWeight={600}
                          >
                            WORKSPACE
                            <Text
                              fontSize={"10px"}
                              p={"2px"}
                              px={"4px"}
                              bg={"#dadad7"}
                              fontWeight={600}
                              borderRadius={"10px"}
                              textAlign="right"
                            >
                              Coming Soon
                            </Text>
                          </Flex>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={"14px"}
                        ml={"25px"}
                        gap={"10px"}
                      >
                        <Flex justify={"space-between"} p={"2px"}>
                          Work Space Name 1{" "}
                          <Image
                            src={"chevron-down.svg"}
                            width={4}
                            height={4}
                          />{" "}
                        </Flex>
                        <Flex justify={"space-between"} p={"2px"}>
                          Work Space Name 2{" "}
                          <Image
                            src={"chevron-down.svg"}
                            width={4}
                            height={4}
                          />{" "}
                        </Flex>
                        <Flex justify={"space-between"} p={"2px"}>
                          Work Space Name 3{" "}
                          <Image
                            src={"chevron-down.svg"}
                            width={4}
                            height={4}
                          />{" "}
                        </Flex>
                        <Text
                          color={"blue"}
                          ml={"30px"}
                          mt={"8px"}
                          alignSelf={"center"}
                        >
                          See All
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                  <Divider />

                  <Accordion
                    defaultIndex={[0]}
                    allowMultiple
                    my={"2px"}
                    borderColor={"#ebf0fa"}
                  >
                    <AccordionItem>
                      <h2>
                        <AccordionButton gap={"4px"}>
                          <AccordionIcon />
                          <Flex
                            as="span"
                            justifyContent={"space-between"}
                            flex="1"
                            textAlign="left"
                            color={"#3C3C34"}
                            fontSize={"12px"}
                            fontWeight={600}
                          >
                            LAUNCHPAD
                          </Flex>
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        fontSize={"14px"}
                        ml={"15px"}
                        gap={"10px"}
                      >
                        <Flex justify={"space-between"} p={"2px"}>
                          <Flex gap={"6px"} alignItems={"center"}>
                            {" "}
                            <Image
                              src={"Logo 2.svg"}
                              width={4}
                              height={4}
                            />{" "}
                            Business Name 1
                          </Flex>{" "}
                          <Image
                            src={"chevron-down.svg"}
                            width={4}
                            height={4}
                          />{" "}
                        </Flex>
                        <Flex justify={"space-between"} p={"2px"}>
                          <Flex gap={"6px"} alignItems={"center"}>
                            {" "}
                            <Image
                              src={"Logo 3.svg"}
                              width={4}
                              height={4}
                            />{" "}
                            Business Name 2
                          </Flex>{" "}
                          <Image
                            src={"chevron-down.svg"}
                            width={4}
                            height={4}
                          />{" "}
                        </Flex>
                        <Flex justify={"space-between"} p={"2px"}>
                          <Flex gap={"6px"} alignItems={"center"}>
                            {" "}
                            <Image
                              src={"Logo 4.svg"}
                              width={4}
                              height={4}
                            />{" "}
                            Business Name 3
                          </Flex>{" "}
                          <Image
                            src={"chevron-down.svg"}
                            width={4}
                            height={4}
                          />{" "}
                        </Flex>
                        <Text
                          color={"blue"}
                          ml={"40px"}
                          mt={"8px"}
                          alignSelf={"center"}
                        >
                          See All
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
                <Accordion
                  defaultIndex={[0]}
                  allowMultiple
                  my={"2px"}
                  borderColor={"#ebf0fa"}
                >
                  <AccordionItem>
                    <h2>
                      <AccordionButton gap={"4px"}>
                        <AccordionIcon />
                        <Flex
                          as="span"
                          justifyContent={"space-between"}
                          flex="1"
                          textAlign="left"
                          fontSize={"12px"}
                          color={"#3C3C34"}
                          fontWeight={600}
                        >
                          PINNED PROJECT (3/3)
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel fontSize={"14px"} ml={"15px"} gap={"10px"}>
                      <Flex justify={"space-between"} p={"2px"}>
                        <Flex gap={"6px"} alignItems={"center"}>
                          {" "}
                          <Image src={"icon.svg"} width={4} height={4} />{" "}
                          Project Name 1
                        </Flex>{" "}
                        <Image src={"chevron-down.svg"} width={4} height={4} />{" "}
                      </Flex>
                      <Flex justify={"space-between"} p={"2px"}>
                        <Flex gap={"6px"} alignItems={"center"}>
                          {" "}
                          <Image src={"icon.svg"} width={4} height={4} />{" "}
                          Project Name 2
                        </Flex>{" "}
                        <Image src={"chevron-down.svg"} width={4} height={4} />{" "}
                      </Flex>
                      <Flex justify={"space-between"} p={"2px"}>
                        <Flex gap={"6px"} alignItems={"center"}>
                          {" "}
                          <Image src={"icon.svg"} width={4} height={4} />{" "}
                          Project Name 3
                        </Flex>{" "}
                        <Image src={"chevron-down.svg"} width={4} height={4} />{" "}
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>

              <Box>
                <Box
                  mt={2}
                  mr={"15px"}
                  fontSize={"14px"}
                  ml={"30px"}
                  gap={"10px"}
                  bg={"#f4f6fa"}
                >
                  <Flex justify={"space-between"} p={"2px"}>
                    <Flex gap={"6px"} alignItems={"center"}>
                      {" "}
                      <Image src={"icon.svg"} width={4} height={4} /> Account
                      Setting
                    </Flex>{" "}
                    <Image src={"chevron-down.svg"} width={4} height={4} />{" "}
                  </Flex>
                  <Flex justify={"space-between"} p={"2px"}>
                    <Flex gap={"6px"} alignItems={"center"}>
                      {" "}
                      <Image src={"icon.svg"} width={4} height={4} /> Logout
                    </Flex>{" "}
                    <Image src={"chevron-down.svg"} width={4} height={4} />{" "}
                  </Flex>
                </Box>
              </Box>
            </DrawerBody>

            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
