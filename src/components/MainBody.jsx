import { Box, Flex, Heading,Text, Image, flexbox, Center } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { PlusIcon } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'

export default function MainBody() {
  return (
    <Box flexGrow={1} bg={"white"} py={"56px"} px={"32px"} color={"#707066"}>
      <Box mb={"72px"} >
        <Heading as='h3' size="lg" color={"black"} >
        Welcome Back, Tauseef!
        </Heading>
        <Text mb={"32px"} mt={"15px"}>You have accomplished a lot today.Let us handle the rest</Text>
        <Flex gap={"32px"}>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"} >
            <Image src={"Folder.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>30</Text>
              <Text fontSize={"10px"}>Completed</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"}>
            <Image src={"Folder1.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>02</Text>
              <Text fontSize={"10px"}>Ongoing</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"}>
            <Image src={"Folder2.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>04</Text>
              <Text fontSize={"10px"}>Drafts</Text>
            </Box>
          </Flex>
          <Flex alignItems={"center"} gap={"8px"} width={"140px"} h={"40px"}>
            <Image src={"Folder3.svg"} width={10} height={"38px"}/>
            <Box>
              <Text fontSize={"14px"} fontWeight={600} color={"black"}>02</Text>
              <Text fontSize={"10px"}>Canceled</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box w={"998px"}>
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
     <Flex mt={"32px"} gap={"32px"} flexWrap={"wrap"} >
  <Card width={'311px'} height={"268px"}>
    <CardHeader py={"12px"}>
      <Flex alignItems={"center"}>
      <Heading size='md'> Make E-Commerce Website for a Brand Store</Heading>
      <Image src={"dot.svg"} w={6} h={6}/>
      </Flex>
      <Text fontSize={"12px"} mt={"10px"} color={"#707066"}>Web</Text>
    </CardHeader>
    <CardBody my={"0px"} py={"0px"}>
      <Image src={"Task Progress.svg"} w={300} h={4} mt={"6px"}/>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"68px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} mb={"8px"} mt={"18px"}>Ongoing</Text>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"157px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} >Next milestone: Dec 5th</Text>
    <Flex alignItems={"center"} mt={"20px"} justifyContent={"space-between"}>
      <Heading size="sm">Follow up with manager</Heading>
      <Button p={"10px"} bg={"#5876B7"} _hover={ {bg:"#334876"}}>
        <Image src={"Send.svg"} w={7} h={7} />
      </Button>
    </Flex>
    </CardBody>
  </Card>

  
  <Card width={'311px'} height={"268px"}>
    <CardHeader py={"12px"}>
      <Flex alignItems={"center"}>
      <Heading size='md'> Make E-Commerce Website for a Brand Store</Heading>
      <Image src={"dot.svg"} w={6} h={6}/>
      </Flex>
      <Text fontSize={"12px"} mt={"10px"} color={"#707066"}>Web</Text>
    </CardHeader>
    <CardBody my={"0px"} py={"0px"}>
      <Image src={"Task Progress.svg"} w={300} h={4} mt={"6px"}/>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"68px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} mb={"8px"} mt={"18px"}>Ongoing</Text>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"157px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} >Next milestone: Dec 5th</Text>
    <Flex alignItems={"center"} mt={"20px"} justifyContent={"space-between"}>
      <Heading size="sm">Follow up with manager</Heading>
      <Button p={"10px"} bg={"#5876B7"} _hover={ {bg:"#334876"}}>
        <Image src={"Send.svg"} w={7} h={7} />
      </Button>
    </Flex>
    </CardBody>
  </Card>

  <Card width={'311px'} height={"268px"}>
    <CardHeader py={"12px"}>
      <Flex alignItems={"center"}>
      <Heading size='md'> Make E-Commerce Website for a Brand Store</Heading>
      <Image src={"dot.svg"} w={6} h={6}/>
      </Flex>
      <Text fontSize={"12px"} mt={"10px"} color={"#707066"}>Web</Text>
    </CardHeader>
    <CardBody my={"0px"} py={"0px"}>
      <Image src={"Task Progress.svg"} w={300} h={4} mt={"6px"}/>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"68px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} mb={"8px"} mt={"18px"}>Ongoing</Text>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"157px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} >Next milestone: Dec 5th</Text>
    <Flex alignItems={"center"} mt={"20px"} justifyContent={"space-between"}>
      <Heading size="sm">Follow up with manager</Heading>
      <Button p={"10px"} bg={"#5876B7"} _hover={ {bg:"#334876"}}>
        <Image src={"Send.svg"} w={7} h={7} />
      </Button>
    </Flex>
    </CardBody>
  </Card>

  <Card width={'311px'} height={"268px"}>
    <CardHeader py={"12px"}>
      <Flex alignItems={"center"}>
      <Heading size='md'> Make E-Commerce Website for a Brand Store</Heading>
      <Image src={"dot.svg"} w={6} h={6}/>
      </Flex>
      <Text fontSize={"12px"} mt={"10px"} color={"#707066"}>Web</Text>
    </CardHeader>
    <CardBody my={"0px"} py={"0px"}>
      <Image src={"Task Progress.svg"} w={300} h={4} mt={"6px"}/>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"68px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} mb={"8px"} mt={"18px"}>Ongoing</Text>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"157px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} >Next milestone: Dec 5th</Text>
    <Flex alignItems={"center"} mt={"20px"} justifyContent={"space-between"}>
      <Heading size="sm">Follow up with manager</Heading>
      <Button p={"10px"} bg={"#5876B7"} _hover={ {bg:"#334876"}}>
        <Image src={"Send.svg"} w={7} h={7} />
      </Button>
    </Flex>
    </CardBody>
  </Card>

  <Card width={'311px'} height={"268px"}>
    <CardHeader py={"12px"}>
      <Flex alignItems={"center"}>
      <Heading size='md'> Make E-Commerce Website for a Brand Store</Heading>
      <Image src={"dot.svg"} w={6} h={6}/>
      </Flex>
      <Text fontSize={"12px"} mt={"10px"} color={"#707066"}>Web</Text>
    </CardHeader>
    <CardBody my={"0px"} py={"0px"}>
      <Image src={"Task Progress.svg"} w={300} h={4} mt={"6px"}/>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"68px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} mb={"8px"} mt={"18px"}>Ongoing</Text>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"157px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} >Next milestone: Dec 5th</Text>
    <Flex alignItems={"center"} mt={"20px"} justifyContent={"space-between"}>
      <Heading size="sm">Follow up with manager</Heading>
      <Button p={"10px"} bg={"#5876B7"} _hover={ {bg:"#334876"}}>
        <Image src={"Send.svg"} w={7} h={7} />
      </Button>
    </Flex>
    </CardBody>
  </Card>

  <Card width={'311px'} height={"268px"}>
    <CardHeader py={"12px"}>
      <Flex alignItems={"center"}>
      <Heading size='md'> Make E-Commerce Website for a Brand Store</Heading>
      <Image src={"dot.svg"} w={6} h={6}/>
      </Flex>
      <Text fontSize={"12px"} mt={"10px"} color={"#707066"}>Web</Text>
    </CardHeader>
    <CardBody my={"0px"} py={"0px"}>
      <Image src={"Task Progress.svg"} w={300} h={4} mt={"6px"}/>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"68px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} mb={"8px"} mt={"18px"}>Ongoing</Text>
      <Text color={"#5876B7"} fontSize={"12px"} bg={"#dbe2f0"} w={"157px"} h={"24px"} textAlign={"Center"} justifyContent={"center"} borderRadius={"5px"} pt={"3px"} >Next milestone: Dec 5th</Text>
    <Flex alignItems={"center"} mt={"20px"} justifyContent={"space-between"}>
      <Heading size="sm">Follow up with manager</Heading>
      <Button p={"10px"} bg={"#5876B7"} _hover={ {bg:"#334876"}}>
        <Image src={"Send.svg"} w={7} h={7} />
      </Button>
    </Flex>
    </CardBody>
  </Card>
  
  
  
  
</Flex>
</Box>
    </Box>
  );
}
