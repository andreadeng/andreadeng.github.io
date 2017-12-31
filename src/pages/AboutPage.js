import React from 'react';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import MarginBottomM from '../components/MarginBottomM';
import MarginBottomS from '../components/MarginBottomS';
import ImageSection from '../components/ImageSection';
import { LinkBody } from '../components/Buttons';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <MarginBottomS text>
          <Header medium>
          </Header>
        </MarginBottomS>
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*SdsGU5BxaHwj4w2Rsdyjcw.jpeg"
          caption="Sipping iced matcha at Tea Chai Te in Portland, Oregon"
        />
        <MarginBottomM text>
          <Header medium>
            Hi there, I’m Andrea!
          </Header>
          <Paragraph>
            I’m a Product Designer in SF who has worked
            at Scalable Press, a fulfillment startup in San Francisco, Hack Club, 
            a nonprofit network of free student-led coding clubs, and the VIA Social Innovation 
            and Design Thinking program.
          </Paragraph>
          <Paragraph>
            My fascination for people drives me to be a Product 
            Designer. I am constantly intrigued by how people use 
            and feel about technology. My vision is to unleash a 
            person’s potential by designing tools that empower.
          </Paragraph>
          <Paragraph>
            Take a look at my&nbsp;
            <a href="https://www.dropbox.com/s/776nhv4b9me87i0/Andrea_Resume.12.28.17.pdf?dl=0" target="_blank" rel="noopener noreferrer">
              <LinkBody>
                resume
              </LinkBody>
            </a>
            .
          </Paragraph>
        </MarginBottomM>
        <MarginBottomM text>
          <Header small>
            Lets chat!
          </Header>
          <Paragraph>
            Email me at&nbsp;
            <a href="mailto:im.andreadeng@gmail.com">
              <LinkBody>
                im.andreadeng@gmail.com
              </LinkBody>
            </a>
            &nbsp;or connect on&nbsp;
            <a href="https://www.linkedin.com/in/andreadeng/" target="_blank" rel="noopener noreferrer">
              <LinkBody>
                LinkedIn
              </LinkBody>
            </a>
            .
          </Paragraph>

        </MarginBottomM>
      </div>
    );
  }
}

export default AboutPage;