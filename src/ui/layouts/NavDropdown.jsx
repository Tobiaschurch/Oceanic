import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text,
    Box
  } from "@chakra-ui/react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import { Link } from "react-router-dom";
  
  function NavDropdown({ label, links }) {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          background="transparent"
          _hover={{ color: "brand.100" }}
          _active={{ background: "transparent" }}
        >
          <Text fontWeight={600}>{label}</Text>
        </MenuButton>
        <MenuList>
          {links.map((link, index) => (
            <MenuItem key={index}>
              <Link to={link.path}>
                <Text>{link.name}</Text>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
  
  export default NavDropdown;
  