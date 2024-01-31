// PoliciesComponent.js

import React, { useEffect } from "react";

import {
  Box,
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PolicySection = ({ title, sections }) => {
  const hasSubheadings = sections.some(
    (section) => typeof section !== "string"
  );

  const renderSections = (dataSections, isSubheading = false) => {
    return hasSubheadings ? (
      <OrderedList listStyleType={isSubheading ? "disc" : "decimal"}>
        {dataSections.map((section, index) => (
          <ListItem key={index}>
            {typeof section === "string" ? (
              <Text textAlign="left">{section}</Text>
            ) : (
              <Box pl={4}>
                <Heading textAlign="left" fontSize="md" mb={2}>
                  {section.title}
                </Heading>
                {renderSections(section.sections, true)}
              </Box>
            )}
          </ListItem>
        ))}
      </OrderedList>
    ) : (
      <UnorderedList>
        {dataSections.map((section, index) => (
          <ListItem key={index}>
            <Text textAlign="left">{section}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    );
  };

  return (
    <Box margin={{base:'3rem 1rem',md:'1rem 7rem'}} mb={6}>
      <Heading
        fontWeight="600"
        fontSize={{base:'1.3rem',md:'1.7rem'}}
        textAlign="left"
        pb="1rem"
        borderBottom="1px solid black"
        mb={4}
      >
        {title}
      </Heading>

      {renderSections(sections)}
    </Box>
  );
};

export const TermsComponent = ({ policiesData }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top when the component mounts or updates
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
   
    navigate(-1);
  };
  return (
    <Box p={4}>
      <Box
        borderBottom="2px solid #216042"
        mb={{base:'2rem',md:'4rem'}}
        mx="auto"
        pb="0rem"
        width="90%"
      >
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/SVG/Left-Arrow.svg`}
          width="30px"
          mb={{base:'1rem',md:'0'}}
          onClick={handleGoBack}
          _hover={{ cursor: "pointer" }}
        />

        <Image
          alignSelf="center"
          mx="auto"
          src={`${process.env.PUBLIC_URL}/Assets/SVG/LandAssets Logo Green.svg`}
          pos="relative"
          top="4px"
          borderBottom="8px solid #216042"
          width="443px"
        />
      </Box>

      {policiesData.map((policy, index) => (
        <PolicySection key={index} {...policy} />
      ))}
    </Box>
  );
};
