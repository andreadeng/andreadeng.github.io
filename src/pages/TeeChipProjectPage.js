import React from 'react';
import { Grid } from 'semantic-ui-react';

import MarginBottomM from '../components/MarginBottomM';
import MarginBottomS from '../components/MarginBottomS';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import NumList from '../components/NumList'; 
import ImageSection from '../components/ImageSection';
import FullImageSection from '../components/FullImageSection';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';
import { LinkHeader } from '../components/Buttons';


class TeeChipProjectPage extends React.Component {
  render() {
    return (
      <div className="TeeChipProjectPage">
        <MarginBottomM text>
          <Header large>
            Renovating the ecommerce experience
          </Header>
          <Caption>
            Lead Product Designer &middot; UX / UI / Front-end &middot; 2017
          </Caption>
        </MarginBottomM>
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*4AUIVpuqEZLZXDFlyt1X2Q.png"
          caption="New Campaigns page design from seller dashboard (2017)"
        />

        <MarginBottomM text>
          <Header medium>
            The Brief
          </Header>
          <Paragraph>
            TeeChip is a platform for selling custom products 
            by leveraging crowd funding and social media. 
            Users launch campaigns to sell custom products and 
            TeeChip handles the production and distribution of 
            the products, as well as the customer service associated 
            with any order placed on their site.
          </Paragraph>
          <Paragraph>
            Since launching in 2014, TeeChip has reached a point 
            where it needed a complete overhaul to cater to its 
            growing seller base and pay down product debt. 
          </Paragraph>
          <Paragraph italic>
            To comply with my non-disclosure agreement, I have omitted 
            details and any links of this project. The information 
            presented is my own and does not necessarily reflect the 
            views of Scalable Press or TeeChip.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <Header medium>
            My Role
          </Header>
          <Paragraph>
            I led the design process from user research to implementation 
            to build a new seller dashboard experience. I worked
            closely with Raymond Lei, the founder and CEO of the 
            company, sellers, and four engineers to 
            re-imagine the selling experience. The new TeeChip seller 
            dashboard and buyer experience, coined TeeChip Pro, 
            launched globally on April, 2017.
          </Paragraph>
        </MarginBottomM>


        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*k3HKeaycveBZ3dTq8irxIA.png"
          caption="Pics from our customers"
        />

        <MarginBottomM text>
          <Header medium>
            Get to know the community
          </Header>
          <Paragraph>
            To kick off the design process I got connected to sellers 
            through our TeeChip seller support team. I interviewd over 
            20 sellers about the seller experience. I also looked at their 
            storefronts and campaigns and noted  
            patterns from what they chose to feature to how they position 
            the product. I learned most of the sellers were males in their 20s 
            living in Vietnam who hustled. They were
            aggressively promoting and selling their products and hopping from our platform 
            to ours competitors based on promos and deals.
          </Paragraph>
          <Paragraph>
            I learned TeeChip sellers are not interested in dealing with store 
            setup and complicated e-commerce systems. They want a simple 
            way to set up an online store and start marketing their products 
            to the world immediately.
          </Paragraph>
        </MarginBottomM>

        <TextSection
          header="TeeChip’s Design Language"
          content={
            <Paragraph>
              The new design for the seller dashboard needed 
              to have the capacity to grow with the company. In order to 
              achieve this, I focused on creating a consistent design 
              language and working with an engineer to implement 
              it into a scalable system that would make building additional 
              features in the future faster and in line with existing guidelines.
            </Paragraph>
          }
        />

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*b6gyJahydn-TD553zGSybg.png"
          caption="New TeeChip design language"
        />

        <TextSection
          header="Campaign Creation: Fast and Comprehensive"
          content={
            <Paragraph>
              The Campaign Creation Flow was a core part of the seller experience. 
              I tested the existing TeeChip create campaign 
              flow with 5 participants in person. My objective 
              was to understand the user goals.
            </Paragraph>
          }
        />

        <NumList 
          content_1="Quickly see what products are offered."
          content_2="Be able to place my design where I want to on the shirt."
          content_3="Quickly select a bunch of products and colors sharing the same design."
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*QIMpETN766q5OjW-GaKHbw.jpeg"
          caption="Card sorting to understand sellers' mental model of products "
        />
      
        <MarginBottomM text>
          <Header small>
            Introducing new campaign creation flow
          </Header>
          <Header xsmall>
            <a href="https://pro.teechip.com/manager/campaigns/create/product" target="_blank" rel="noopener noreferrer">
              <LinkHeader>
                See it live
              </LinkHeader>
            </a>   
          </Header>
        </MarginBottomM>


        <TextSectionSub 
          header="Knowing product offerings upfront"
          content={
            <Paragraph>
              By showing the product catalog as the first step in creating 
              a campaign, sellers quickly see what products are 
              currently available and upload their design accordingly.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*it7kZJbepPMBioGobqmV4Q.gif"
          caption="Adding a product to campaign"
        />
  
        <TextSectionSub 
          header="Intuitive and easy way to add artwork."
          content={
            <Paragraph>
              Sellers are not concerned with the specifics of 
              custom printing but instead want to focus on designing 
              and selling. Having a super easy way to add and 
              position designs is crucial.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*4ttO4sYH6lDEnM2ur9iPkQ.gif"
          caption="Drag and auto alignment interface"
        />

        <TextSectionSub 
          header="Easily add more products"
          content={
            <Paragraph>
              The campaign model of the TeeChip ecommerce sites 
              emphasizes offering the same design on a variety 
              of products, shown in our A/B testing to increase 
              conversion significantly.
            </Paragraph>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*sR6h2pOkLjxuyXp0LSNl7Q.gif"
          caption="Adding additional products that share the same design"
        />

        <TextSection
          header="Analytics: Determine the future"
          content={
            <div>
              <Paragraph>
                Sellers are constantly trying to figure out what is selling successfully. 
                Big picture analytics about when sales are higher can provide a lot of insight 
                as to when to release ads. Specific campaign and storefront level analytics 
                provide insight into how one campaign may be doing better. The analytics also 
                encourage sellers to experiment more with descriptions, images, and more variations. 
              </Paragraph>
              <Paragraph>
                The goal of the analytics is to help sellers make decisions which items they should invest their time. 
                We want to help sellers know what to make next and predict future trends to grow their business.
              </Paragraph>
            </div>
          }
        />

        <MarginBottomM>
          <Grid>
            <Grid.Column only='tablet computer' width={1}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={14}>
              <iframe 
                allow="encrypted-media" 
                allowfullscreen
                frameborder="0" 
                gesture="media" 
                height="550px" 
                src="https://www.youtube.com/embed/OCKvwjLXpWY?rel=0&amp;showinfo=0" 
                title="TeeChip analytics video"
                width="100%">
              </iframe>
            </Grid.Column>
            <Grid.Column only='tablet computer' width={1}>
            </Grid.Column>
          </Grid>
          <Caption italic centered>
            Live analytics on new seller dashboard
          </Caption>
        </MarginBottomM>

        <TextSection
          header="Buyer Experience: Building trust"
          content={
            <Paragraph>
              I tested the existing TeeChip experience with 10
              participants in person (both buyers and sellers). 
              My objective was to understand the user goals. When 
              purchasing products, I want to:
            </Paragraph>
          }
        />

        <NumList 
          content_1="Clearly see how the product looks like."
          content_2="See the available options for the product such as color and size."
          content_3="See similar products to the one I am looking at."
        />

        <MarginBottomS text>
          <Header medium>
          </Header>
        </MarginBottomS>

        <MarginBottomM text>
          <Header small>
            Introducing new buyer experience
          </Header>
        </MarginBottomM>
        
        <TextSectionSub 
          header="Show more product options"
          content={
            <Paragraph>
              Visually indicating more product options for same design 
              reduced page abandonment. Making it easy to add 
              another product with the same design increased 
              average total per transaction.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*463XzgjVcsyZJkBsRJuiBQ.gif"
          caption="Adding products to cart"
        />
  
        <TextSectionSub 
          header="Reduce cart abandonment"
          content={
            <Paragraph>
              Showing similar designs and products selection increased 
              the customer’s trust of the site. This reduced cart 
              abandonment and increased average number of items in cart.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*TDD4sheXS-vwS8B1dusoHw.gif"
          caption="Recommended products on cart page"
        />

        <TextSectionSub 
          header="Quick and easy single page checkout"
          content={
            <Paragraph>
              Most buyers stumble upon a product via a Facebook ad and 
              were not planning on buying something online. Thus, 
              their attention span is even shorter than other ecommerce groups.
            </Paragraph>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*izZ2dwsao5jO3KIdkAeCPg.gif"
          caption="Single page checkout form"
        />

        <TextSection
          header="Results and Reflection"
          content={
            <Paragraph>
              Within a month of launching the redesigned seller dashboard 
              and buyer site, sales on the platform surpassed that of 
              the legacy TeeChip site and increased by 40% after 3 months of launch. The success is attributed to all 
              the hard work cross-department to create a more unified 
              experience for everyone that will scale as TeeChip continues to grow.
            </Paragraph>
          }
        />

      </div>
    );
  }
}

export default TeeChipProjectPage;