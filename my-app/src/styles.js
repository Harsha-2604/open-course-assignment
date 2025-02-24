import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #282c34;
  color: white;
  nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
`;

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  background: #282c34;
  color: white;
  margin-top: 20px;
`;

export const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;
