import React from 'react';
import { Grid } from 'semantic-ui-react';

import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import NumList from '../components/NumList'; 
import ImageSection from '../components/ImageSection';
import PairImageSection from '../components/PairImageSection';
import QuadImageSection from '../components/QuadImageSection'; 
import FullImageSection from '../components/FullImageSection';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';
import Span from '../components/Span';
import { LinkBody } from '../components/Buttons';


class OrdersProjectPage extends React.Component {
  render() {
    return (
      <div className="OrdersProjectPage">
        <MarginBottomM text>
          <Header large>
            Reducing order delays
          </Header>
          <Caption>
            Lead Product Designer &middot; UX / UI &middot; 2017
          </Caption>
        </MarginBottomM>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*aSmelP-NN3O_i4uaQ2mBbA.png"
          caption="New order on hold workflow (2017)"
        />

        <MarginBottomM text>
          <Header small secondary>
            The Brief
          </Header>
          <Paragraph>
            Scalable Press is a technology-driven print and fulfillment company. 
            Their online platform provides businesses with an efficient 
            way to place and manage custom printing orders.
          </Paragraph>
          <Paragraph>
            During fulfillment, an order can have a variety of problems. 
            It may contain low resolution artwork, incorrect print colors, 
            licensed material, and so on. However, users are unaware of 
            these issues until the order is delayed. By then, not only 
            is it too late to fix the issue, there is no system in place 
            to do so. We created the On Hold System to catch 
            issues early and enable users to resolve them.
          </Paragraph>
          <Paragraph>
            I led the end-to-end design and collaborated with 2 Engineers and a Product Manager. 
            We had a tight timeline of 2 months to launch while 
            simultaneously building the Design System the On Hold System would use.
          </Paragraph>
        </MarginBottomM>
    
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*IL66pt7fhcHuoR0JIh0v2g.jpeg"
          caption="Team visit to Indiana facility to understand the fulfillment process"
        />
      
        <MarginBottomM text>
          <Header small secondary>
            Initial problem
          </Header>
          <Header medium branded>
            "Where is my order?!?!"
          </Header>
          <Paragraph>
            After reviewing a breakdown of customer inquiries, 
            I learned that the number one reason customers call sales is to ask where their 
            order is.
          </Paragraph>
        </MarginBottomM>
          

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*8XnaAc6_6g3ZvZJji49eyQ.png"
          caption="Breakdown of customer inquiries from April 2017"
        />

        <MarginBottomM text>
          <Paragraph>
            I then interviewed 12 Scalable Press sales reps and learned 
            that the online platform does have an Events Feed for each order. However, 
            users do not use the feature because it is not accurate or detailed enough.

            Thus, my initial hypothesis was:&nbsp;
            <Span primary italic strong>
              “If we made the Events Feed feature more granular, 
              users would use it to inform their customers.”&nbsp; 
            </Span>
          </Paragraph>
        </MarginBottomM>

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*ytoBHO252eoWfeKKTWrHvA.png"
          caption="Current Events Feed feature is inadequate"
        />

        <MarginBottomM text>
          <Header secondary small>
            User research
          </Header>
          <Header medium branded>
            Order delays is the real problem
          </Header>
          <Paragraph>
            Through interviewing 20 existing users, I realized:
          </Paragraph>
          <NumList 
            content_1="Users don't use Events Feed because they have hundreds of
            orders being fulfilled at a time and can't check them all."
            content_2="Our sales team sends regular reports to larger clients about 
            their common order issues so they can prevent them in the future."
            content_3="Users contact sales reps about delayed orders to expedite them."
          />
          <Paragraph>
            From a data query of order delays, I also learned that 80% of order issues could 
            be caught and resolved early. For customers, preventing order delays 
            was more important than being informed about them. 
          </Paragraph>
        </MarginBottomM>

        <ImageSection 
          src="https://cdn-images-1.medium.com/max/1600/1*lP1trKv700GQyBML0M5SRg.png"
          caption="
            Order delay reasons from data query. All reasons can be caught and resolved 
            early, except for Production error.
          "
        /> 

        <MarginBottomM text>
          <Header small secondary>
            New hypothesis
          </Header>
          <Header medium branded>
            Building an issue resolution flow
          </Header>
          <Paragraph>
            With that in mind, I recruited the engineers and VP of Sales 
            to brainstorm together. After brainstorming, I identified the following opportunity:&nbsp;
            <Span primary italic strong>
              “How might we incorporate an issue resolution flow during the fulfillment process?”
            </Span>
          </Paragraph>
        </MarginBottomM> 

        <PairImageSection 
          src_left="https://cdn-images-1.medium.com/max/1600/1*J2NKYsrN_4mxMbCEymCanA.jpeg"
          caption_left="Affinity map of user research"
          src_right="https://cdn-images-1.medium.com/max/2000/1*Obi0br-pktuxFOdzoreccQ.jpeg"
          caption_right="Categorizing our brainstorm"
        />        

        <MarginBottomM text>
          <Header small secondary>
            Process
          </Header>
          <Header medium branded>
            Feedback early and often
          </Header>
        </MarginBottomM>

        <MarginBottomM text>
          <Header xsmall secondary>
            01. Initial exploration
          </Header>
          <Paragraph>
            I first set out to identify whether the issue resolution flow should exist  
            at the Orders list level. I created a paper prototype to test my approach.
          </Paragraph>
          <Paragraph>
            After usability testing with a few sales reps, 
            I learned that issue resolution on the Orders page was intrusive. 
            It obscurred the list of orders, especially when there were a lot of issues.
            Resolving issues and viewing orders requires different 
            intentions but were inappropriately fused in the same view. 
            Separated from the order it referenced, each issue message did not 
            provide enough context for users to take action. As a result, I 
            decided to I explored ways to present 
            issue resolution in its order context.
          </Paragraph>
        </MarginBottomM>
      
        <ImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*kz2gxTxumq-eTA1Y1SiC0Q.gif"
          caption="Paper prototype of issue resolution in Orders"
        />

        <MarginBottomM text>
          <Header xsmall secondary>
            02. Explorations in Order level
          </Header>
        </MarginBottomM>

        <QuadImageSection
          src_1="https://cdn-images-1.medium.com/max/1200/1*fR3su7IUNuvfMEVWPhHq1g.png"
          caption_1="Issue resolution as separate section "
          subcaption_1="(Heavy since large emphasis on issues)"

          src_2="https://cdn-images-1.medium.com/max/1200/1*NwFV3C5lCFnI9vaIg2kjzg.png"
          caption_2="Issue resolution as collapsible section "
          subcaption_2="(More separation between order details and issue)"

          src_3="https://cdn-images-1.medium.com/max/1200/1*FvXc0Dlv1bJnFHi1ALbBsg.png"
          caption_3="Issue resolution within order details "
          subcaption_3="(More integrated with page)"

          src_4="https://cdn-images-1.medium.com/max/1200/1*5T1T2gmsHihWCGTC1kB7NA.png"
          caption_4="Issue resolution as modal "
          subcaption_4="(Light since separated from rest of page)"
        />
        

        <MarginBottomM text>
          <Paragraph>
            I first tested a prototype of (B) which presents order issues 
            as separate part of the page with expandable sections of 
            more information. However, after testing the prototype 
            with 5 of our users, I learned that it was not prominent 
            enough and felt disconnected from the affected products. 
            After further critique from the other product designer and 
            PM, I decided to test a prototype of (D) which proved to better 
            communicate which issue affected which products, something I 
            didn’t realize was important for users initially. However, it 
            was not clear to users that “View details” will allow them to 
            fix the issue. I looked into clearly communicating how users 
            can fix orders in later iterations.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <iframe src="https://marvelapp.com/2a6f17f?emb=1" width="100%" 
            height="500px" allowtransparency="true" frameBorder="0"
            title="Medium fidelity prototype demo">
          </iframe>
          <Caption italic centered>
            Medium fidelity prototype of (D) from above explorations
          </Caption>
        </MarginBottomM>

        <MarginBottomM text>
          <Header xsmall secondary>
            03. High fidelity explorations
          </Header>
        </MarginBottomM>


        <MarginBottomM text>
          <Header xsmall secondary>
            04. Final solution
          </Header>
          <Paragraph>
            For the On Hold System, I’ve added an “In review” 
            step to the fulfillment process to catch issues early on. Orders that 
            pass the review process will enter fulfillment and orders with issues will 
            be marked "On Hold".
          </Paragraph>
          <Paragraph>
            The final interaction includes a nonintrusive but clear 
            indication of orders with issues with the use of "On Hold" 
            and "Partially On Hold" status labels. The On Hold issue is also 
            introduced in context of which part of the order is affected. 
            This way, users can see at first glance, what the issue is 
            and which products are affected. Additional new features 
            such as the ability to edit the shipping address 
            and method gives users a sense of flexibility and control when 
            handling order issues.
          </Paragraph>
          <Paragraph>
            The new On Hold System was also the first new feature to use the 
            Scalable Press Design System.
          </Paragraph>
        </MarginBottomM> 

        <MarginBottomM>
          <Grid>
            <Grid.Column only='tablet computer' width={1}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={14}>
              <iframe width="100%" height="550" 
                src="https://www.youtube.com/embed/h0qEgbATAp8?rel=0&amp;showinfo=0" 
                frameBorder="0" gesture="media" allow="encrypted-media" 
                allowFullScreen
                title="Final prototype demo">
              </iframe>
            </Grid.Column>
            <Grid.Column only='tablet computer' width={1}>
            </Grid.Column>
          </Grid>
          <Caption italic centered>
            Final prototype of On Hold System on stage 
          </Caption>
        </MarginBottomM>

        <MarginBottomM text>
          <Header small secondary>
            Results
          </Header>
          <Paragraph>
            After launching the On Hold System, order delays decreased 
            by 30%. We also received several complimentary emails from customers  
            and positive comments from sales.
          </Paragraph>
        </MarginBottomM> 

        <MarginBottomM text>
          <Header small secondary>
            Takeaways
          </Header>
          <Paragraph>
            From this project, I learned how important it is to 
            ask the right questions before diving into design. 
            Instead of just improving the Events Feed feature, 
            we provided greater value to users by reducing the 
            number of delayed orders. Involving engineers, sales, 
            and PM early on was also crucial in understanding 
            technical constraints and business goals upfront and 
            exploring a variety of solutions. I learned that stakeholders 
            can be a great resource for user needs if I filter through 
            biased perspectives. I also learned that hustling to get 
            feedback early and often reduces time working in the wrong 
            direction. This is what enabled us to launch the system 
            in 2 months time and see immense success. In the future, we will 
            also be looking into other opportunities to create value 
            for users that we didn’t have time to dive into for this 
            project such as preventing orders issues at the time of 
            placing the order and better illustrating improved turnaround 
            times to users.
          </Paragraph>
        </MarginBottomM> 

      </div>
    );
  }
}

export default OrdersProjectPage;