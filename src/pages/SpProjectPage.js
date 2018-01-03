import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomS from '../components/MarginBottomS';
import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import ImageSection from '../components/ImageSection';
import FluidImageSection from '../components/FluidImageSection';
import FullImageSection from '../components/FullImageSection';

import PairImageSection from '../components/PairImageSection';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';


class SpProjectPage extends React.Component {
  render() {
    return (
      <div className="SpProjectPage">
        <MarginBottomM text>
          <Header large>
            Unifying Scalable Press
          </Header>
          <Caption>
            Lead Product Designer &middot; UX / UI / Front-end &middot; May - August 2017
          </Caption>
        </MarginBottomM>
        <MarginBottomM text>
          <Paragraph>
            In just three years since 2014, Scalable Press has evolved 
            from a small screen printer to a national fulfillment network. 
            By 2017, 1 in 6 people in the U.S. owned a shirt printed by the 
            SF-based fulfillment startup. However, our online platform 
            struggled to scale with the company’s rapid growth. 
            I led the redesign of Scalable Press and built the
            design system to achieve a focused and professional experience.
          </Paragraph>
          <Paragraph>
            <Header xsmall>
              Role
            </Header>
            <ul>
              <li>
                Led the design process end-to-end. 
              </li>
              <li>
                Team consisted of PM, other product designer, and 2 engineers. 
              </li>
            </ul>
            <Header xsmall>
              Constraints
            </Header>
            <ul>
              <li>
                3 month timeline
              </li>
              <li>
                Simulaneously built products using the Design System.
              </li>
            </ul>
          </Paragraph>
        </MarginBottomM>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*qJ1Wh8wo97axeJQ1x9WvzQ.png"
        />

        <MarginBottomM text>
          <Header small>
            Problem
          </Header>
          <Header medium branded>
            How do we create a simple and unified experience across Scalable Press?
          </Header>
          <Paragraph>
            After usability testing the existing website 
            with 15 users, we organized pain points into three overarching 
            themes.
          </Paragraph>
        </MarginBottomM> 
       
        <MarginBottomS text>
          <Header xsmall>
            1. Tangled navigation
          </Header>
          <Paragraph>
            Scalable Press is home to orders placed on the website 
            and ecommerce orders populated from a platform such as Shopify.
            Users are confused and frustrated by the inappropriately combined features 
            for different order types in the navigation.
          </Paragraph>
        </MarginBottomS>
        <ImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*mpo1RuI4qTj2WeRMvQa4LQ.png"
        />

        <MarginBottomS text>
          <Header xsmall>
            2. Poor information hierarchy
          </Header>
          <Paragraph>
            Users have trouble finding what they need in a 
            chaotic and excessive nesting of information.
          </Paragraph>
        </MarginBottomS>

        <ImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*U_DGYvGl-0RkgPEmK4izJQ.png"
        />

        <MarginBottomS text>
          <Header xsmall>
            3. Fragmented experiences
          </Header>
          <Paragraph>
            From branding to user flows to page formatting, there is
            little consistency across our products. This 
            creates a feeling of unpredictability and poor quality. Users also
            have to relearn new rules for each feature.
          </Paragraph>
        </MarginBottomS>
     
        <ImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*J6HReqd0AEqNY5T4Wph-eA.png"
        />

        <MarginBottomM text>
          <Header small>
            Hypothesis
          </Header>
          <Header medium branded>
            A Design System for quality and efficiency
          </Header>
          <Paragraph>
            After brainstorming solutions with engineers, PM, and other designer, 
            I realized we needed to redesign our workflow in order to build a sustainable solution. 
            We can’t innovate on our products if we don’t innovate 
            on the tools to build them. We currently relied on Semantic UI 
            for all of our sites, a front-end framework that was quick to set up 
            but a nightmare to customize and maintain. 
            After researching and testing other frameworks, we were unable to find a solution that was  
            both comprehensive and flexible. We would build our own and create a Design System 
            that would enable better collaboration between design and engineering. 
            To kick off the project, I listed out all the parts and created a product roadmap.
          </Paragraph>
        </MarginBottomM>

        <PairImageSection
          src_left="https://cdn-images-1.medium.com/max/1600/1*Jr86I9SZR1vbXXPqcjzyxg.png"
          caption_left="Parts organized by type"
          src_right="https://cdn-images-1.medium.com/max/1600/1*u7u21buSPyIU9pcAhyZ8mQ.jpeg"
          caption_right="Parts organized by urgency"
        />

        <MarginBottomM text>
          <Header small>
            Process
          </Header>
        </MarginBottomM>

        <MarginBottomM text>
          <Header xsmall>
            1. Auditing throughout
          </Header>
          <Paragraph>
            Building the design system while building the products that would use 
            it helped us test and shape the design system. The continuous cycle of specific 
            app-level solutions informing our framework-level 
            decisions enabled us to explore all the boundaries of our system 
            the deeper we got into the products.
          </Paragraph>
        </MarginBottomM>
      
        <FluidImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*W11mmghJJLFHiyS8DV6zPw.png"
          caption="Evolution of Scalable Press iterations from top to bottom"
        />

        <MarginBottomM text>
          <Header xsmall>
            2. Initial exploration
          </Header>
          <Paragraph>
            To optimize for speed, I coded out the basic patterns needed for 
            Scalable Press web using Semantic UI. This helped me understand 
            which parts of Semantic UI we used.
          </Paragraph>
        </MarginBottomM>
     
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*YsZItjaK3De4TMQYWKIchQ.png"
          caption="Design system V1"
        />

        <MarginBottomM text>
          <Header xsmall>
            3. Exploring utility classes
          </Header>
          <Paragraph>
            I worked with one of the engineers to explore utility classes as an easy way to
            gradually moving off Semantic UI. We created utility classes of our spacing sizes 
            and font-sizes which effectively combatted Semantic UI inconsistencies.
          </Paragraph>
        </MarginBottomM>
     
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*Kwi8a7Lm7DQ5drGY6Xrc3Q.png"
        />

        <MarginBottomM text>
          <Header xsmall>
            4. Exploring detailed documentation
          </Header>
          <Paragraph>
            While a master Sketch file of components and 
            utility classes created some standardization, the interaction rules 
            and best practices for each component was still tribal knowledge.                
          </Paragraph>
          <Paragraph>
            The next iteration of the Design System was detailed documentation for each UI pattern. 
            After testing it out with the engineers implementing the new Scalable Press, I learned that 
            detailed documentation 
          </Paragraph>
        </MarginBottomM>
        
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*VCnzIMKuxvlM8N2B9jEtiA.png"
          caption="Button pattern overview"
        />

        <MarginBottomM text>
          <Header small>
            Final solution
          </Header>
          <Header medium branded>
            Unified Scalable Press
          </Header>
        </MarginBottomM>

        <FluidImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*6rx7cdfOlWK1xT24uLofgQ.png"
          caption="New unified Scalable Press web experience (2017)"
        />

        <MarginBottomS text>
          <Header xsmall>
            1. Streamlined navigation
          </Header>
          <Paragraph>
            <ol>
              <li>
                Back arrow and clear copy replaced confusing breadcrumbs.
              </li>
              <li>
                Action is separated out.
              </li>
              <li>
                Active tab is clearly indicated and visible. Sub menu enables quick access to related information.
              </li>
              <li>
                Vertical navigation enables more visible content and quicker context switching.
              </li>
              <li>
                Account details and related links are consolidated into a single user menu.
              </li>
            </ol>
          </Paragraph>
        </MarginBottomS>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*XYJ-MwxcJH77KnT-rHrRVg.png"
          caption="New navigation (2017)"
        />

        <MarginBottomS text>
          <Header xsmall>
            2. Strengthened visual hierachy
          </Header>
          <Paragraph>
            We strengthened visual hierarchy, clearly emphasizing important 
            information such as “order number” and “estimated ship date”. 
            Available actions such as “Track package” and editing the shipping 
            address/method are also easily distinguishable. Order details 
            such as the back print, size, and quantity are quick to find 
            at a glance and not cluttered.
          </Paragraph>
        </MarginBottomS>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*ybNsBbbCuk1ARwhR9DRIHQ.png"
          caption="Strengthened visual hierarchy (2017)"
        />

        <MarginBottomS text>
          <Header xsmall>
            3. Scalable and in sync
          </Header>
          <Paragraph>
            Our extensive set of visual and interaction patterns 
            made the learning curve easier with each additional product. Consistent 
            layout, typescale, colors, interaction patterns contributed to a calm rhythm that
            helped users focus. By keeping sketch files in sync with the code, we could easily spot inconsistents 
            from a high-level and have a foundation for added more to our design system.
          </Paragraph>
        </MarginBottomS>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*U6h81yfcujfd1sAOF0qCgQ.png"
        />

        <MarginBottomM text>
          <Header small>
            Results
          </Header>
          <Paragraph>
            After launching the Design System:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>
                Sketch masterfiles enabled designers to create mocks 
                in a third of the time.
              </li>
              <li>
                Reusable components with detailed documentation 
                and utility classes enabled engineers to spend half 
                the time implementing design specs which were significantly 
                more accurate.
              </li>
              <li>
                Members of engineering, design, and  
                marketing told me the Design System improved their workflow 
                and that it felt rewarding building a cohesive experience.
              </li>
            </ul>
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <Header small>
            Takeaways
          </Header>
          <Header xsmall>
            1. Having grit is powerful.
          </Header>
          <Paragraph>
            Even though we were really tight on the people 
            and time to build out a Design System, I knew we needed 
            to start building it now so we could collaboratively 
            build cohesive products. 
          </Paragraph>

          <Header xsmall>
            2. Products evolve
          </Header>
          <Paragraph>
            I also learned that a Design 
            System is very much a living product who will evolve 
            as our team grows and matures. 
          </Paragraph>

          <Header xsmall>
            3. Don't be afraid to learn new things.
          </Header>
          <Paragraph>
            In addition, I learned how to code 
            out prototypes that more accurately resembled the final 
            product from the engineers. I was also better able to understand 
            the engineering needs for a Design System. 
          </Paragraph>
        </MarginBottomM> 

      </div>   
    );
  }
}

export default SpProjectPage;