import React from "react";
import { InternshipsList } from "../../../data/InternshipsData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./InternshipsCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function InternshipsCard() {
  return (
    <>
      {InternshipsList.map((list, index) => (
        <ScrollAnimation animateIn="fadeIn" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.duration}</p>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                   {list.certificate && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certificate
                  </a>
                )}

              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default InternshipsCard;
