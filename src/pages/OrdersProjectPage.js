import React from 'react';
import { Grid } from 'semantic-ui-react';
import { List } from 'semantic-ui-react'

import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import ImageSection from '../components/ImageSection';
import PairImageSection from '../components/PairImageSection';
import QuadImageSection from '../components/QuadImageSection'; 
import FullImageSection from '../components/FullImageSection';
import FluidImageSection from '../components/FluidImageSection';
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
            Issue Resolution system
          </Header>
          <Caption>
            Lead Product Designer &middot; UX / UI &middot; June - July 2017
          </Caption>
        </MarginBottomM>
        <MarginBottomM text>
          <Paragraph>
            Scalable Press is a print and fulfillment startup. 
            Their online platform enables businesses to easily place 
            and manage custom printing orders. 
            I led the design of the Issue Resolution system to 
            enable users to resolve order issues before they caused delays.
          </Paragraph>
          <Paragraph>
            <Header xsmall>
              Role
            </Header>
            <ul>
              <li>
                I was sole designer and led the design process end-to-end. 
              </li>
              <li>
                Team consisted of PM and 2 engineers. 
              </li>
            </ul>
            <Header xsmall >
              Constraints
            </Header>
            <ul>
              <li>
                2 month timeline.
              </li>
              <li>
                Simulaneously built the Design System.
              </li>
            </ul>
          </Paragraph>
        </MarginBottomM>
    

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*aSmelP-NN3O_i4uaQ2mBbA.png"
          caption="New Issue Resolution workflow (2017)"
        />

        <MarginBottomM text>
          <Header small>
            Problem
          </Header>
          <Header medium branded>
            How do we communicate what is wrong with an order and how to fix it?
          </Header>
          <Paragraph>
            Since over&nbsp;
            <Span primary strong>
              40% of customer inquiries is about order status
            </Span>
            , I originally thought the problem was insufficient order status information. 
            After interviewing 20 users, I learned:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>
                Users called about order status because they were worried about a delayed order.
              </li>
              <li>
                Users want to know the reason for the delay to provide an explanation to their client 
                and to prevent such delays in the future.
              </li>
              <li>
                Users want more options to expedite a delayed order 
                such as changing the shipping address or method.
              </li>
            </ul>
          </Paragraph>

          <Paragraph>
            For customers, preventing order delays was more important than being informed about them. 
            From a data query of order delays, I also learned that&nbsp;
            <Span primary strong>
              80% of delay reasons can be caught early
            </Span>
            .
          </Paragraph>
        </MarginBottomM> 
        
        <PairImageSection
          src_left="https://cdn-images-1.medium.com/max/1600/1*S0FOsYZF9yYHttOt14K3EA.png"
          caption_left="Customer inquiry breakdown from April 2017 report"
          src_right="https://cdn-images-1.medium.com/max/1600/1*dBm5nwY6VF0UQ72LL59LGA.png"
          caption_right="
            Delay reasons from data query
          "
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*IL66pt7fhcHuoR0JIh0v2g.jpeg"
          caption="Team visit to Indiana facility to understand the fulfillment process"
        />

        <MarginBottomM text>
          <Header small>
            Hypothesis
          </Header>
          <Header medium branded>
            An Issue Resolution system that is informative and flexible.
          </Header>
          <Paragraph>
            I recruited the engineers, PM, and VP of 
            Sales to organize user research insights and 
            brainstorm solutions. After brainstorming, I identified 
            the following opportunity: “How might we incorporate an 
            Issue Resolution system during the fulfillment process?” 
          </Paragraph>
        </MarginBottomM>

        <PairImageSection 
          src_left="https://cdn-images-1.medium.com/max/1600/1*J2NKYsrN_4mxMbCEymCanA.jpeg"
          caption_left="Affinity map of user research"
          src_right="https://cdn-images-1.medium.com/max/2000/1*Obi0br-pktuxFOdzoreccQ.jpeg"
          caption_right="Team brainstorm"
        />   
        
        <MarginBottomM text>
          <Header small>
            Process
          </Header>
        </MarginBottomM>

        <MarginBottomM text>
          <Header xsmall>
            01. Market research
          </Header>
          <Paragraph>
            Before diving into the problem, I surveyed other
            products and put together an audit of notifications. Here’s a few of them.
          </Paragraph>
        </MarginBottomM>
        <FluidImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*In03ZrrwnRbWJ5ppTIhnyg.png"
          caption=""
        />

        <MarginBottomM text>
          <Header xsmall>
            02. Initial exploration
          </Header>
          <Paragraph>
            I first set out to identify whether to incorporate Issue Resolution at the orders level.
            I tested a paper prototype of this approach with sales and learned:
            <ul>
              <li>
                Issue resolution at the orders level was intrusive 
                as it obscurred the list of orders, especially when there were a lot of issues.
              </li>
              <li>
                Resolving issues and viewing orders requires different 
                intentions but were inappropriately fused in the same view. 
              </li>
              <li>
                Separated from the order it referenced, each issue message did not 
                provide enough context for users to take action.
              </li>
            </ul>
              As a result, I decided to I explored ways to present 
              issue resolution in its order context.
          </Paragraph>
        </MarginBottomM>
      
        <ImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*kz2gxTxumq-eTA1Y1SiC0Q.gif"
          caption="Paper prototype of issue resolution in Orders"
        />

        <MarginBottomM text>
          <Header xsmall>
            03. Medium-fidelity explorations
          </Header>
          <Paragraph>
            I explored many different ways of incorporating Issue Resolution 
            into Order Details. Here are a few.
          </Paragraph>
        </MarginBottomM>

        <QuadImageSection
          src_1="https://cdn-images-1.medium.com/max/1200/1*fR3su7IUNuvfMEVWPhHq1g.png"
          caption_1="Issue resolution as separate section "

          src_2="https://cdn-images-1.medium.com/max/1200/1*NwFV3C5lCFnI9vaIg2kjzg.png"
          caption_2="Issue resolution as collapsible section "

          src_3="https://cdn-images-1.medium.com/max/1200/1*FvXc0Dlv1bJnFHi1ALbBsg.png"
          caption_3="Issue resolution within order details "

          src_4="https://cdn-images-1.medium.com/max/1200/1*5T1T2gmsHihWCGTC1kB7NA.png"
          caption_4="Issue resolution as modal "
        />

        <MarginBottomM text>
          <Paragraph>
            After testing a prototype of (B) with 5 users, 
            I learned the section was overlooked and 
            felt disconnected from the affected products. 
            I then tested a prototype of (D) which 
            clarified which products were affected. However, it 
            was unclear that clicking “View details” enabled users to 
            resolve the issue. I addressed this in later explorations.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <iframe src="https://marvelapp.com/2a6f17f?emb=1" width="100%" 
            height="500px" allowtransparency="true" frameBorder="0"
            title="Medium fidelity prototype demo">
          </iframe>
          <Caption italic centered>
            Prototype of (D) from above explorations
          </Caption>
        </MarginBottomM>

        <MarginBottomM text>
          <Header small>
            Final solution
          </Header>
          <Header medium branded>
            Flexible and integrated system
          </Header>
          <Paragraph>
            In the end, I decided on a flexible and integrated solution and used the new 
            Design System to implement the visual design. Highlights of the final solution are:
            <ul>
              <li>
                High level error message on Orders page.
              </li>
              <li>
                "On Hold" and "Partially On Hold" labels to indicate orders with issues.
              </li>
              <li>
                Issue Resolution in context of affected items.
              </li>
              <li>
                Surfaced and clear action to resolve issue.
              </li>
              <li>
                Modal with more details, including if issue affects other orders.
              </li>
              <li>
                Modals to edit shipping address or method.
              </li>
            </ul>
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
            Final prototype of Issue Resolution system on stage 
          </Caption>
        </MarginBottomM>

        <MarginBottomM text>
          <Header small>
            Results
          </Header>
          <Paragraph>
            After launching Issue Resolution system:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>
                Order delays decreased by 30%.
              </li>
              <li>
                Received complimentary emails from customers
              </li>
              <li>
                Received positive comments from sales
              </li>
            </ul>
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <Header small>
            Takeaways
          </Header>
          <Header xsmall>
            1. Ask questions before diving into design.
          </Header>
          <Paragraph>
            Instead of just improving Order Status information, 
            we provided greater value by reducing order delays. 
          </Paragraph>

          <Header xsmall>
            2. Collaborate to understand all needs.
          </Header>
          <Paragraph>
            Involving engineers, sales, 
            and PM early on was also crucial in understanding 
            technical constraints and business goals upfront and 
            exploring a variety of solutions. I also learned that stakeholders 
            can be a great resource for user needs if I filter through 
            biased perspectives. 
          </Paragraph>

          <Header xsmall>
            3. Get feedback early and often.
          </Header>
          <Paragraph>
            Hustling to get feedback early and often reduced the time working in the wrong 
            direction. This is what enabled us to launch the system 
            in 2 months time and see immense success. 
          </Paragraph>
        </MarginBottomM> 
        
      </div>
    );
  }
}

export default OrdersProjectPage;