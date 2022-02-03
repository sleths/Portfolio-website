import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding style={{width: "100%", display: "flex"}}>
    <LeftSection>
      <SectionTitle main center>
        User <br />
        experience <br />
        first
      </SectionTitle>
      <SectionText>Providing responsive websites utilizing the latest technology for your business.</SectionText>
      <Button>Learn More</Button>
    </LeftSection>
 
  </Section>
);

export default Hero;