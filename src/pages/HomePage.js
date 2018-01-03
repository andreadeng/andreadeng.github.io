import React from 'react';
import { Link } from 'react-router';

import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomM from '../components/MarginBottomM';
import MarginBottomS from '../components/MarginBottomS';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';
import { LinkHeader, LinkBody } from '../components/Buttons';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MarginBottomM text>
          <Grid>
            <Grid.Column computer={14} mobile={16}>
              <Paragraph>
                I’m a Product Designer in San Francisco 
                and have previously worked at&nbsp;
                
                <a href="https://scalablepress.com/" target="_blank" rel="noopener noreferrer">
                  <LinkBody>
                    Scalable Press
                  </LinkBody>
                </a>
                ,&nbsp;
                <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">
                  <LinkBody>
                    Hack Club
                  </LinkBody>
                </a>
                ,&nbsp;and&nbsp;
                <a href="https://viaprograms.org/expand-your-boundaries/social-innovation-design-thinking/" target="_blank" rel="noopener noreferrer">
                  <LinkBody>
                    VIA
                  </LinkBody>
                </a>
                .&nbsp;
                I use my multidisciplinary background in psychology, computer science, and 
                entrepreneurship to uncover opportunities that create the most value.
                &nbsp;
                <Link to="/about">
                  <LinkHeader>
                    Read more
                  </LinkHeader>
                </Link>
              </Paragraph>
            </Grid.Column>
            <Grid.Column only='computer' width={2}>
            </Grid.Column>
          </Grid>
        </MarginBottomM>

        <MarginBottomM text>
          <Header medium>
            Case studies
          </Header>
        </MarginBottomM>
        <MarginBottomM text>
          <Link to="/orders-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*aSmelP-NN3O_i4uaQ2mBbA.png' fluid />
            <Header link small>
              <LinkHeader>
                Issue Resolution system
              </LinkHeader>
            </Header>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </MarginBottomM>

        <MarginBottomM text>
          <Link to="/sp-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*qJ1Wh8wo97axeJQ1x9WvzQ.png' fluid />
            <Header link small>
              <LinkHeader>
                Unifying Scalable Press web
              </LinkHeader>
            </Header>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </MarginBottomM>

        <MarginBottomM text>
          <Link to="/teechip-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*4AUIVpuqEZLZXDFlyt1X2Q.png' fluid />
            <Header link small>
              <LinkHeader>
                Renovating the ecommerce experience
              </LinkHeader>
            </Header>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </MarginBottomM>

        <MarginBottomM text>
          <Link to="/yumi-project-page">
            <Image src='https://cdn-images-1.medium.com/max/1600/1*1FIQk3-YHKlvoxEG_MsI3g.jpeg' fluid />
            <Header link small>
              <LinkHeader>
                YUMI: Eat together
              </LinkHeader>
            </Header>
            <Caption>
              Project Lead &middot; Technology Entrepreneurship Course &middot; 2016
            </Caption>
          </Link>
        </MarginBottomM>

        <MarginBottomM text>
          <Link to="/binder-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*BAZsAWF2_TiNduMkoEjzcw.jpeg' fluid />
            <Header link small>
              <LinkHeader>
                Binder: Augmented note-taking app
              </LinkHeader>
            </Header>
            <Caption>
              Product Designer &middot; Berkeley Innovation / Vertigo Software, Inc. &middot; 2013
            </Caption>
          </Link>
        </MarginBottomM>
        
      </div>
    );
  }
}

export default HomePage;