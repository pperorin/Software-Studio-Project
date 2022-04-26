import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{color: "Gray", 
                  textAlign: "center",
                  marginBottom: "20px" }}>
          Pran Pran: A Sanctuary of Buddhist
      </h1>
      <Container>
      <Row>
          <Column>
            <Heading>62010243 Noppawat Khamyot</Heading>
          </Column>
          <Column>
            <Heading>62010282 Nattapat Arunkitjaroen</Heading>
          </Column>
          <Column>
            <Heading>62010299 Nichakarn SukhumjitPitayotai</Heading>
          </Column>
          <Column>
            <Heading>62010309 Tan Chaiwongsriaroon</Heading>
          </Column>
          <Column>
            <Heading>62010355 Tanapol Kampoh</Heading>
          </Column>
      </Row>
      </Container>
    </Box>
  );
};
export default Footer;