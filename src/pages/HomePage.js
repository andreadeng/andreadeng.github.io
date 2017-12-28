import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

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
            <Grid.Column width={14}>
              <Paragraph>
                I’m a Product Designer in San Francisco 
                and have previously worked at&nbsp;
                
                <a href="https://scalablepress.com/" target="_blank">
                  <LinkBody>
                    Scalable Press
                  </LinkBody>
                </a>
                ,&nbsp;
                <a href="https://hackclub.com/" target="_blank">
                  <LinkBody>
                    Hack Club
                  </LinkBody>
                </a>
                ,&nbsp;and&nbsp;
                <a href="https://viaprograms.org/expand-your-boundaries/social-innovation-design-thinking/" target="_blank">
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
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid>
        </MarginBottomM>

        <MarginBottomS text>
          <Header xsmall>
            Select Works
          </Header>
        </MarginBottomS>
        <MarginBottomM text>
          <Link to="/orders-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*aSmelP-NN3O_i4uaQ2mBbA.png' fluid />
            <Header link>
              <LinkHeader>
                Reducing order delays
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
            <Header link>
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
            <Header link>
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
            <Image src='https://andreadeng.github.io/img/yumi_promo.jpg' fluid />
            <Header link>
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
            <Image src='http://andreadeng.github.io/img/binder_promo.jpg' fluid />
            <Header link>
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