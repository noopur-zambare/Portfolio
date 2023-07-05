import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer >
        
        <HeroWrapper>
          <HeroLeft>
        
            <ScrollAnimation animateIn="fadeIn" >
              
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Noopur.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'An IIT undergraduate.',
                    1000,
                    'An ML Enthusiast.',
                    1000,
                    'A Full-Stack Developer.',
                    1000,
                    'A problem solver.',
                    1000,
                    'An innovative thinker.',
                    1000,
                    'A blog writer.',
           
                    1000,
                    'An Adventurer.',
                    500,
                  ]}
                  speed={55}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
