import { 
    Stack, 
    Heading, 
    Button, 
    Badge, 
    SimpleGrid, 
    VStack, 
    HStack, 
    Divider, 
    Icon, 
    Text 
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import theme from "../../theme";
import { PricingData } from "../../data/PricingData";
import { getUserData } from "../../hooks/useCurrentUser";
import { useQueryClient } from "@tanstack/react-query";

function Dashboard() {

    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData(["user"]);

    const memberPlan = userData?.member_plan;

    const [activeTab, setActiveTab] = useState("Active Plans");

    const planTabs = [
        { 
            title: "Active Plans", 
            count: 1 
        },
        { 
            title: "Other Plans",
            count: 3 
        }
    ];

    const displayPlans = () => {
        if (activeTab === "Active Plans") {
            return PricingData.filter(plan => plan.planId.toUpperCase() === memberPlan);
        } else {
            return PricingData.filter(plan => plan.planId.toUpperCase() !== memberPlan);
        }
    };

    return (
        <Stack
            w="full"
            justify="start"
            align="start"
            gap="20px"
        >
            <Heading 
                fontSize={[20, 20, 24]}
                fontWeight={700}
                fontFamily={theme.fonts.body}
                lineHeight="24px"
                color="black"
            >
                My Plans
            </Heading>

            {/* ==== Plans Tab ==== */}
            <HStack
                w="full"
                justify="start"
                align="center"
                gap="20px"
                borderBottom="1px"
                borderBottomColor="brand.600"
            >
                {planTabs.map((tab, i) => (
                    <Button
                        key={i}
                        onClick={() => setActiveTab(tab.title)}
                        bg="transparent"
                        color={activeTab === tab.title ? "brand.200" : "alt.400"}
                        borderBottom={activeTab === tab.title ? "4px" : "none"}
                        borderBottomColor={activeTab === tab.title ? "brand.200" : "none"}
                        fontWeight={500}
                        fontSize={20}
                        rounded="0px"
                        h="initial"
                        py="15px"
                        _hover={{
                            bg: "transparent",
                            borderBottom: "4px",
                            borderBottomColor: "brand.200",
                            color: "brand.200",
                        }}
                    >
                        {tab.title}
                        <Badge ml={4} 
                            colorScheme={activeTab === tab.title ? 'green' : 'red'}
                            rounded="full"
                            py="5px"
                            px="10px"
                        >
                            {tab.count}
                        </Badge>
                    </Button>
                ))}
            </HStack>

            {/* === Tab content ==== */}
            <SimpleGrid
                w="full"
                columns={[1, 1, 2]}
                gap="40px"
            >
                {displayPlans().map((item, i) => (
                    <VStack
                        key={i}
                        justify="start"
                        align="start"
                        gap="30px"
                        overflow="hidden"
                        rounded="20px"
                        boxShadow="0 0 8px rgba(0,0,0,0.6)"
                        py="40px"
                        px="30px"
                        minH="550px"
                        bgColor={(i === 1 || i === 2) ? "brand.200" : "white"}
                    >
                        <VStack
                            w="full"
                            justify="start"
                            align="start"
                            gap="10px"
                        >
                            {item.planId.toUpperCase() == memberPlan && (
                                <Text
                                    fontSize={16}
                                    fontWeight={600}
                                    lineHeight="24.59px"
                                    color="brand.400"
                                >
                                    Expires On : <b>{userData?.expiry_date}</b>
                                </Text>
                            )}

                            <Text
                                fontSize={[20, 20, 24]}
                                fontWeight={600}
                                lineHeight="24.59px"
                                color={(i === 1 || i === 2) ? "white" : "brand.200"}
                            >
                                {item.name}
                            </Text>
                        </VStack>

                        <Divider borderColor={(i === 1 || i === 2) ? "white" : "brand.200"} />

                        <VStack
                            w="full"
                            justify="start"
                            align="start"
                            gap="20px"
                        >
                            {item.packageBenefits.map((benefit, j) => (
                                <HStack
                                    key={j}
                                    w="full"
                                    justify="start"
                                    align="center"
                                    gap="10px"
                                >
                                    <Icon
                                        as={FaCircleCheck}
                                        w={6}
                                        h={6}
                                        color="#80ff80"
                                    />
                                    <Text
                                        fontSize={14}
                                        fontWeight={400}
                                        lineHeight="24.59px"
                                        color={(i === 1 || i === 2) ? "white" : "brand.200"}
                                    >
                                        {benefit}
                                    </Text>
                                </HStack>
                            ))}
                        </VStack>

                        {item.planId.toUpperCase() !== memberPlan && (
                            <VStack
                                w="full"
                                justify="center"
                                align="center"
                                pt="20px"
                            >
                                <Link to={`/plans/${item.id}`}>
                                    <Button
                                        w="full"
                                        rounded="10px"
                                        py="20px"
                                        px="30px"
                                        color={(i === 1 || i === 2) ? "brand.200" : "white"}
                                        bg={(i === 1 || i === 2) ? "white" : "brand.200"}
                                        _hover={{
                                            shadow: "0 0 8px rgba(0,0,0,0.6)"
                                        }}
                                        fontWeight={700}
                                        fontSize={16}
                                        lineHeight="20.91px"
                                        textAlign="center"
                                        cursor="pointer"
                                        size="lg"
                                    >
                                        Get Plan
                                    </Button>
                                </Link>
                            </VStack>
                        )}

                    </VStack>
                ))}
            </SimpleGrid>
        </Stack>
    );
}

export default Dashboard;
