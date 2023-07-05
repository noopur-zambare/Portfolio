import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <>
    <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#d3fff4"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://noopur-zambare.github.io/Portfolio/public/me.png"
          />

          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn">
            Hello! My name is <strong>Noopur Zambare</strong>. I'm final year undergraduate at Indian Institute of Technology Jodhpur, India.
   
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeIn">
            I have been captivated by the intersection of technology and engineering throughout my academic career. I believe the solution to today's complicated problems lies in harnessing the power of data and using it to encourage innovation. I have a strong foundation in problem-solving and analytical thinking thanks to my degree in Mechanical Engineering, and my Minor degree in Data Science has allowed me to delve even further into the world of algorithms, data science, and predictive modelling.
            </ScrollAnimation><br />

            <ScrollAnimation animateIn="fadeIn">
            During my time as a student, I have actively pursued opportunities to expand my knowledge and gain practical experience. One such opportunity was my role as a Data Science and Machine Learning intern. This experience allowed me to work on real-world projects, collaborating with a team to analyze and extract insights from large datasets. It was during this internship that I discovered my passion for using machine learning techniques to uncover patterns and make data-driven predictions.
            </ScrollAnimation><br/>

            <ScrollAnimation animateIn="fadeIn">
            As I approach the end of my undergraduate journey, I am excited about the endless possibilities that lie ahead. I hope to contribute to innovative projects that make a positive impact on society while continuously learning and pushing the boundaries of what is possible. <br/>
            I'm excited to get in touch with individuals and organisations who share my enthusiasm for technology, creativity, and changing the world. Together, let's create something amazing!
            </ScrollAnimation>

            <br /><br />
            <ScrollAnimation animateIn="fadeIn">
              <h2><b><u>Education</u></b></h2><br/>
                <ul>
                  <li> 
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={'https://noopur-zambare.github.io/Portfolio/public/iitj.png'} alt="IIT Jodhpur Logo" style={{ height: '70px', marginRight: '28px' }} />
                      <div>
                        <b>Indian Institute of Technology, Jodhpur India</b>
                        <ul>
                          <li>Bachelor's in Mechanical Engineering</li>
                          <li>Minor in Data Science</li>
                        </ul>
                      </div>
                    </div>
                  </li><br/><hr/>
                  <li> 
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={'https://noopur-zambare.github.io/Portfolio/public/gvhs.png'} alt="GVHS Logo" style={{ height: '70px', marginRight: '23px' }} />
                      <div>
                        <b>Green Valley High School, Vadodara India </b>
                          <ul>
                            <li> Grade 12 | Higher Secondary | CBSE  </li>
                            <li>• Among the top 1% of 1 million applicants in Joint Entrance Examination 2020 </li>
                            <li>• Among the top 1% in CBSE Higher Secondary Examination</li>  
                          </ul>
                      </div>
                    </div>
                  </li><br/><hr/>
                  <li> 
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={'https://noopur-zambare.github.io/Portfolio/public/skis.jpg'} alt="SKIS Logo" style={{ height: '70px', marginRight: '18px' }} />
                      <div>
                        <b>SKI School, Vapi India </b>
                          <ul>
                            <li> Grade 10 | Senior Secondary | CBSE  </li>
                            <li>• Received Certificate of Merit from CBSE</li>
                            <li>• Among the top 1% in CBSE Secondary Secondary Examination</li>  
                          </ul>
                      </div>
                    </div>
                  </li><br/><hr/>
                </ul>
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeIn" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
    </>
  );
}

export default About;
