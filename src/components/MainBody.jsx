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
          <Tabs>
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
          <Card width={"311px"} height={"268px"}>
            <CardHeader py={"12px"}>
              <Flex alignItems={"center"} color={"#050504"}>
                <Heading fontSize={"18px"} w={"237px"} fontWeight={700}>
                  {" "}
                  Make an E-Commerce Website for a Brand Store
                </Heading>
                <Image src={"dot.svg"} w={5} h={5} />
              </Flex>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                mt={"8px"}
                color={"#707066"}
              >
                Web
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
                Ongoing
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
                Next milestone: Dec 5th
              </Text>
              <Flex
                alignItems={"end"}
                mt={"8px"}
                justifyContent={"space-between"}
              >
                <Heading fontWeight={"700"} fontSize={"14px"}>
                  Follow up with manager
                </Heading>
                <Button p={"10px"} bg={"#5876B7"} _hover={{ bg: "#334876" }}>
                  <Image src={"Send.svg"} w={7} h={7} />
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card width={"311px"} height={"268px"}>
            <CardHeader py={"12px"}>
              <Flex alignItems={"center"} color={"#050504"}>
                <Heading fontSize={"18px"} w={"237px"} fontWeight={700}>
                  {" "}
                  Website technical maintenance project{" "}
                </Heading>
                <Image src={"dot.svg"} w={5} h={5} />
              </Flex>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                mt={"8px"}
                color={"#707066"}
              >
                Web
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
                Ongoing
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
                Next milestone: Jan 1st
              </Text>
              <Flex
                alignItems={"end"}
                mt={"8px"}
                justifyContent={"space-between"}
              >
                <Heading fontWeight={"700"} fontSize={"14px"}>
                  Follow up with manager
                </Heading>
                <Button p={"10px"} bg={"#5876B7"} _hover={{ bg: "#334876" }}>
                  <Image src={"Send.svg"} w={7} h={7} />
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card width={"311px"} height={"268px"}>
            <CardHeader py={"12px"}>
              <Flex alignItems={"center"} color={"#050504"}>
                <Heading fontSize={"18px"} w={"237px"} fontWeight={700}>
                  {" "}
                  WordPress website speed and SEO Optimization{" "}
                </Heading>
                <Image src={"dot.svg"} w={5} h={5} />
              </Flex>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                mt={"8px"}
                color={"#707066"}
              >
                Web
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
                Ongoing
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
                Next milestone: In 3 days
              </Text>
              <Flex
                alignItems={"end"}
                mt={"8px"}
                justifyContent={"space-between"}
              >
                <Heading fontWeight={"700"} fontSize={"14px"}>
                  Follow up with manager
                </Heading>
                <Button p={"10px"} bg={"#5876B7"} _hover={{ bg: "#334876" }}>
                  <Image src={"Send.svg"} w={7} h={7} />
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card width={"311px"} height={"268px"}>
            <CardHeader py={"12px"}>
              <Flex alignItems={"center"} color={"#050504"}>
                <Heading fontSize={"18px"} w={"237px"} fontWeight={700}>
                  {" "}
                  Make an E-Commerce Website for a Brand Store
                </Heading>
                <Image src={"dot.svg"} w={5} h={5} />
              </Flex>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                mt={"8px"}
                color={"#707066"}
              >
                Web
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
                Ongoing
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
                Next milestone: Dec 5th
              </Text>
              <Flex
                alignItems={"end"}
                mt={"8px"}
                justifyContent={"space-between"}
              >
                <Heading fontWeight={"700"} fontSize={"14px"}>
                  Follow up with manager
                </Heading>
                <Button p={"10px"} bg={"#5876B7"} _hover={{ bg: "#334876" }}>
                  <Image src={"Send.svg"} w={7} h={7} />
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card width={"311px"} height={"268px"}>
            <CardHeader py={"12px"}>
              <Flex alignItems={"center"} color={"#050504"}>
                <Heading fontSize={"18px"} w={"237px"} fontWeight={700}>
                  {" "}
                  Website technical maintenance project{" "}
                </Heading>
                <Image src={"dot.svg"} w={5} h={5} />
              </Flex>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                mt={"8px"}
                color={"#707066"}
              >
                Web
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
                Ongoing
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
                Next milestone: Jan 1st
              </Text>
              <Flex
                alignItems={"end"}
                mt={"8px"}
                justifyContent={"space-between"}
              >
                <Heading fontWeight={"700"} fontSize={"14px"}>
                  Follow up with manager
                </Heading>
                <Button p={"10px"} bg={"#5876B7"} _hover={{ bg: "#334876" }}>
                  <Image src={"Send.svg"} w={7} h={7} />
                </Button>
              </Flex>
            </CardBody>
          </Card>

          <Card width={"311px"} height={"268px"}>
            <CardHeader py={"12px"}>
              <Flex alignItems={"center"} color={"#050504"}>
                <Heading fontSize={"18px"} w={"237px"} fontWeight={700}>
                  {" "}
                  WordPress website speed and SEO Optimization{" "}
                </Heading>
                <Image src={"dot.svg"} w={5} h={5} />
              </Flex>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                mt={"8px"}
                color={"#707066"}
              >
                Web
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
                Ongoing
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
                Next milestone: In 3 days
              </Text>
              <Flex
                alignItems={"end"}
                mt={"8px"}
                justifyContent={"space-between"}
              >
                <Heading fontWeight={"700"} fontSize={"14px"}>
                  Follow up with manager
                </Heading>
                <Button p={"10px"} bg={"#5876B7"} _hover={{ bg: "#334876" }}>
                  <Image src={"Send.svg"} w={7} h={7} />
                </Button>
              </Flex>
            </CardBody>
          </Card>
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
