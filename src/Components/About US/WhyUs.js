import React, { useState } from "react";
import { VStack, Text, Image, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import AboutUsData from "./AboutUsData";

const WhyUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const positionStyle = isMobile
    ? { right: "-85%", marginLeft: "2%" }
    : { right: "0%", marginLeft: "0",left:"50%" };
const isLast=(currentIndex === AboutUsData.whyUs.length - 1)
  const displayStyle = isMobile ? { display: "none" } : { display: "block" };
  const handleNext = () => {
    if (currentIndex < AboutUsData.whyUs.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Flex
      margin={{ base: "2rem 1.5rem", md: "4rem 5rem" }}
      mt={{ base: "2rem", md: "8rem" }}
      justifyContent="center"
      gap={{ base: "3rem", md: "0rem" }}
      flexDirection={{ base: "column", md: "row" }}
      position="relative"
    >
      <VStack
        align={{ base: "center", md: "start" }}
        width="auto"
        spacing={2}
        flex={1}
      >
        <Text
          fontSize={{ base: "2.4rem", md: "2.7rem" }}
          color="about_heading"
          mb={{ base: "1rem", md: "2rem" }}
          fontWeight="bold"
        >
          Why Choose US
        </Text>
        <Text
          fontSize={{ base: "1.7rem", md: "2rem" }}
          textAlign={{ base: "center", md: "left" }}
          width={{ base: "100%", md: "90%" }}
          color="gray.500"
        >
          {AboutUsData.whyUs[currentIndex].subheading}
        </Text>
        <Text
          textAlign={{ base: "center", md: "left" }}
          width={{ base: "100%", md: "80%" }}
        >
          {AboutUsData.whyUs[currentIndex].description}
        </Text>
      </VStack>

      <Box position='relative' display='flex'>
        <motion.div
          key={currentIndex}
          position="relative"
          
          initial={{ opacity: 1, x: "100%", y: "0%" }}
          animate={{ opacity: 1, x: "-100%", y: "0%" }}
          exit={{ opacity: 1, x: "-150%", y: "0%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            width: "auto",
            height: "400px",
            position: "relative",
            ...positionStyle,
          }} 
        >
          <Image
            src={`${process.env.PUBLIC_URL}/Assets/Images/${AboutUsData.whyUs[currentIndex].image}`}
            alt={`Image ${currentIndex + 1}`}
            width="300px"
            height="400px"
            position="relative"
           
            objectFit="cover"
            borderRadius="10px"
          />
        </motion.div>

        {currentIndex < AboutUsData.whyUs.length - 1 && (
          <motion.div
            key={currentIndex + 1}
            position="relative"
            overflow="auto"
            initial={{ opacity: 0.4, x: "10%",y:"-12%"}}
            animate={{ opacity: 0.4, x: "-50%",y:"-12%"}}
            exit={{ opacity: 1, x: "-30%",y:"10%"}}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
              width: "300px",
              height: "400px",
              position: "relative",
              right: "-35%",
              ...displayStyle,
            }} 
          >
            <Image
              position="relative"
              bottom='10%'
              src={`${process.env.PUBLIC_URL}/Assets/Images/${
                AboutUsData.whyUs[currentIndex + 1].image
              }`}
              alt={`Next Image ${currentIndex + 2}`}
              width="300px"
              height="400px"
              objectFit="cover"
              borderRadius="10px"
            />
          </motion.div>
        )}
       

       
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/Images/Right-Arrow@4x.png`}
          aria-label="Next"
          position="relative"
          width="40px"
          height="40px"
          top={{ base: "13rem", md: "50%" }}
          right={{ base: "0", md: "42%" }}
          _hover={{ cursor: "pointer" }}
          transform="translateY(-50%)"
          onClick={handleNext}
        />
        <Image
          src={`${process.env.PUBLIC_URL}/Assets/Images/Left-Arrow@4x.png`}
          aria-label="Previous"
          position="relative"
          top={{ base: "13rem", md: "50%" }}
          _hover={{ cursor: "pointer" }}
          width="40px"
          height="40px"
          left= {{base:'-78%',md: isLast ? '-117%':'-92%' }}
          transform="translateY(-50%)"
          onClick={handlePrev}
        />
         </Box>
      
    </Flex>
  );
};

export default WhyUs;
