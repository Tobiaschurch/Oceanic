import { Box, HStack, Image, ListItem, UnorderedList, VStack, Text } from '@chakra-ui/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import assets from '../../assets';
import { SidebarData } from '../../data/SidebarData';


function Sidebar() {
    const location = useLocation();
    const match = location.pathname.match(/\/dashboard(?:\/([^/]+))?/);
    const id = match ? match[1] || '' : null;

    return (
        <VStack 
            justify='space-between' 
            align='right' 
            bg='brand.200' 
            color='white' 
            fontWeight='600' 
            pl='40px' 
            py='50px' 
            h='100vh' 
            position='sticky' 
            top='0'
            borderTopRightRadius={40}
        >
            <VStack gap='90px' w='full'>
                <Link to="/" title="oceanic-health-logo">
                    <HStack w="full" justify="start" align="center" gap="14px">
                        <Image
                            src={assets.logo}
                            alt="oceanic-health-logo"
                            bg="white"
                        />
                        <Text
                            fontSize={16}
                            fontWeight={700}
                            color="white"
                            textTransform="uppercase"
                        >
                            Oceanic Health
                        </Text>
                    </HStack>
                </Link>

                <UnorderedList 
                    m='0' 
                    listStyleType='none' 
                    w='full' 
                    gap="20px"
                >
                    {SidebarData.map((item, i) => (
                        <Box position='relative' key={i}>
                            <NavLink to={item.link}>
                                <ListItem 
                                    gap='40px' 
                                    py='18px' 
                                    px='22px' 
                                    roundedTopLeft='full' 
                                    roundedBottomLeft='full' 
                                    w='full' 
                                    bg={id === item.id && 'white'} 
                                    color={id === item.id ? 'brand.200' : ''} 
                                    className={id === item.id ? 'curve' : ''}>
                                    <HStack gap='20px'>
                                        {item.icon}
                                        <Box>{item.title}</Box>
                                    </HStack>
                                </ListItem>
                            </NavLink>
                        </Box>
                    ))}
                </UnorderedList>
            </VStack>
        </VStack>
    );
}

export default Sidebar;
