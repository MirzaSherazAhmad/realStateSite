import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


import VillaIcon from "@mui/icons-material/Villa";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <Container>
      <Item>
         SHEZ REAL ESTATE AGENCY      </Item>
      <Buttons>
        <Link to="login" style={{ color: "inherit" }}>
          <SignIn>
            <PersonIcon />
            <ArrowDropDownIcon />
          </SignIn>
        </Link>
      </Buttons>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  height: 10vh;
  margin:0 0;
`;

const Item = styled.div`
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  gap: 5px;
 color: blue
 
`;

const Button = styled.div`

  border: 1.5px solid black;
  border-radius: 4px;
  padding: 7px 15px;
  display: flex;
  gap: 5px;
  align-items: center;
  background-color: white;
  margin-right:420px ;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #f5f5f5;
  }
`;

const SignIn = styled.div`
  border: 1.5px solid black;
  border-radius: 4px;
  padding: 7px 15px;
  display: flex;
  gap: 3px;
  align-items: center;
  background-color: white;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #f5f5f5;
  }
`;
