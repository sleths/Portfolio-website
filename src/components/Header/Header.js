import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
// yarn run dev
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#F1F1F1" }}>
          <DiCssdeck size="3rem" /> <Span>sleths</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sleths" target="_blank">
          <AiFillGithub size="2.25rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/sera-zenginler/" target="_blank">
          <AiFillLinkedin size="2.25rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/sleths" target="_blank">
          <AiFillInstagram size="2.25rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
