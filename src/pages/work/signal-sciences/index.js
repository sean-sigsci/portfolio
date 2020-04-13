import React from "react"
import { Box, Container, Grid, Heading, Image, Link, Text } from "theme-ui"
import consoleWorkspace from "../../../images/signal-sciences/console-workspace.png"
import consoleAgent from "../../../images/signal-sciences/console-agent.png"
import consoleEvent from "../../../images/signal-sciences/console-event.png"
import consoleRules from "../../../images/signal-sciences/console-rules.png"
import cultureArchery from "../../../images/signal-sciences/culture-archery.jpg"
import cultureBirdcall from "../../../images/signal-sciences/culture-birdcall.jpg"
import cultureMatching from "../../../images/signal-sciences/culture-matching.jpg"
import cultureThrowing from "../../../images/signal-sciences/culture-throwing.jpg"
import principleInsights from "../../../images/signal-sciences/principle-insights.jpg"
import principlePragmatic from "../../../images/signal-sciences/principle-pragmatic.jpg"
import principleUncertainty from "../../../images/signal-sciences/principle-uncertainty.jpg"
import principleVisibility from "../../../images/signal-sciences/principle-visibility.jpg"
import designSystems from "../../../images/signal-sciences/design-systems.png"

import Layout from "../../../components/layout"
import WorkFooter from "../../../components/workFooter"
import SEO from "../../../components/seo"

const APMPage = () => (
  <Layout>
    <SEO title="Signal Sciences" />
    <Box
      sx={{
        backgroundColor: "grays.6",
        pt: 9,
        pb: 5,
      }}>
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", maxWidth: "1244px" }}>
        <Box
          sx={{
            gridColumn: "3 / 11",
          }}>
          <Heading sx={{ variant: "headings.workH1" }}>Signal Sciences</Heading>
        </Box>
        <Box
          sx={{
            mb: 5,
            mt: -2,
            gridColumn: "3 / 9",
          }}>
          <Text
            sx={{
              variant: "texts.workSubheadLight",
            }}>
            Making the world’s best web security technology accessible to every business
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: "3 / 5",
          }}>
          <Text color="slates.2" sx={{ mb: 1, variant: "texts.metadata" }}>
            My Role
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            Head of Product Design
          </Text>
          <Text color="grays.3" sx={{ mb: 4, variant: "texts.metadata" }}>
            2016 - Present
          </Text>
          <Text color="slates.2" sx={{ mb: 1, variant: "texts.metadata" }}>
            Design Team
          </Text>
          <Text sx={{ mb: 1, variant: "texts.metadata" }}>
            <Link href="https://www.juliehollandlogue.com/" color="grays.3">Julie Logue</Link>
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            <Link href="https://www.behance.net/thepatrickmorgan/" color="grays.3">Patrick Morgan</Link>
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            <Link href="https://www.ashleysoo.com/" color="grays.3">Ashley Soo</Link>
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            <Link href="https://alitorbati.com/" color="grays.3">Ali Torbati</Link>
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            <Link href="http://www.shannontsai.com/" color="grays.3">Shannon Tsai</Link>
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            <Link href="http://jbarr.co/" color="grays.3">Justin Young</Link>
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: "6 / 11",
          }}>
          <Text sx={{ variant: "texts.workDescription" }}>
            <p>Signal Sciences is a powerful web security platform founded in 2014 by the practitioners who ran security at Etsy. Signal Sciences protects over 1.5 trillion requests per month across 34,000 web apps, helping brands like Datadog, Vimeo, Duo, and WeWork keep their customers’ data safe from hackers.</p>
            <p>In 2016, I joined Signal Sciences to lead product design. I’ve hired a team of talented designers, created an environment for them to do their best work, and touched every aspect of the product. I’ve been fortunate to play a part in helping the company scale through several stages of growth.</p>
          </Text>
        </Box>
      </Grid>
    </Box>
    <Box backgroundColor="grays.0" py="6">
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", maxWidth: "1244px" }}>
        <Box
          sx={{
            gridColumn: "3 / 11",
          }}>
          <Heading sx={{ variant: "headings.workH2" }}>The Product</Heading>
        </Box>
        <Box
          sx={{
            mt: -2,
            gridColumn: "3 / 9",
          }}>
          <Text
            sx={{
              mb: 5,
              variant: "texts.workSubheadDark",
            }}>
            Delivering clarity and coherence while scaling a complex technical product
          </Text>
          <Text sx={{ variant: "texts.workBodyDark" }}>
            <p>Signal Sciences inspects and acts on our customers' web traffic, protecting them against attacks and other malicious behavior. Security teams struggle to gain visibility and insight into malicious traffic patterns at scale, and my team and I work hard to reduce that friction.</p>
            <p>We've designed default dashboards that prioritize active attacks and security events, and make it easy for users to drill down and see the story behind an attack or filter requests to quickly detect patterns in attacker behavior. We also recognize that security teams don't need one more tool to log in to, so we push notifications and data to the tools our customers already use like Slack, DataDog, PagerDuty, and Splunk.</p>
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: "2 / 12",
          }}>
          <Text
            sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
            Workspace Dashboard
          </Text>
          <Image 
            src={consoleWorkspace}
            sx={{ borderColor: "grays.1", variant: "images.desktop" }}
          />
        </Box>
      </Grid>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
          Agent Performance Metrics
        </Text>
        <Image 
          src={consoleAgent}
          sx={{ borderColor: "grays.8", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
          Security Events View
        </Text>
        <Image 
          src={consoleEvent}
          sx={{ borderColor: "grays.1", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>In my first two years, I redesigned and simplified Signal Sciences' self-service rule building experience. Rules are composed of complex combinations of conditions and actions (image a Russian nesting doll of if-then statements), and the existing experience was incomplete and incoherent.</p>
          <p>I took a systems thinking approach to simplify the underling elements and interconnections that make up the feature. I also designed the rule builder interface, solving complex interaction design and UI state problems in the process.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          margin: "0 auto",
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
          Custom Rule Builder
        </Text>
        <Image 
          src={consoleRules}
          sx={{
            borderColor: "grays.8",
            height: "75vh",
            variant: "images.desktop" 
          }}/>
      </Container>
    </Box>
    <Box
      backgroundColor="grays.0"
      py="6"
      sx={{ variant: "boxes.wrapper" }}>
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", mb: 6, maxWidth: "1244px" }}>
        <Box
          sx={{
            gridColumn: "3 / 11",
          }}>
          <Heading sx={{ variant: "headings.workH2" }}>Design Leadership</Heading>
        </Box>
        <Box
          sx={{
            mt: -2,
            gridColumn: "3 / 9",
          }}>
          <Text
            sx={{
              mb: 5,
              variant: "texts.workSubheadDark",
            }}>
            Growing and empowering a high-performing team
          </Text>
          <Text sx={{ variant: "texts.workBodyDark" }}>
            <p>As design hire number two at Signal Sciences, I've had the opportunity to recruit and build a high-performing team of seven with roles focused on product design, visual design, content strategy, and UX engineering. I challenged myself to grow as a recruiter and talent scout. I created a transparent interview process that makes candidates feel valued. I led the launch of an "inside Signal Sciences" blog that gets candidates excited about our culture and craft. I was able to lure some crazy-talented designers away from jobs at places like Squarespace and Disney to come work for an obscure security startup.</p>
            <p>To align the team around what great work looks like at Signal Sciences, I created a set of design principles that help guide our decision making and how we assess potential solutions. To set clear expectations about what it means to be a great team members, we collaboratively established a set of team values. We check in annually to iterate on our principles and values as the company grows and evolves</p>
          </Text>
        </Box>
      </Grid>
      <Grid gap={3} columns={[2]} sx={{ mx: "auto", mb: 6, maxWidth: "1244px" }}>
        <Box>
          <Image src={principlePragmatic} />
        </Box>
        <Box>
          <Image src={principleVisibility} />
        </Box>
        <Box>
          <Image src={principleUncertainty} />
        </Box>
        <Box>
          <Image src={principleInsights} />
        </Box>
      </Grid>
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", mb: 6, maxWidth: "1244px" }}>
        <Box
          sx={{
            gridColumn: "3 / 11",
          }}>
          <Heading sx={{
              color: "grays.6",
              fontFamily: "sans",
              fontSize: "24px",
              lineHeight: "tight",
              mb: 3,
            }}>
            Growing careers and culture
          </Heading>
          <Text sx={{ variant: "texts.workBodyDark" }}>
            <p>Having a shared set of values is essential to improving individual and team performance, but so is continuous feedback. I instituted weekly 1:1s and quarterly check-ins with my team to help grow their skills and their careers. We also hold weekly design reviews with the entire team, facilitated by one of our senior product designers. I've spoken and written about how to give great feedback to help designers and others inside the company level up the quality of critique.</p>
            <p>We're a tight-knit team, but that needs nurturing and care if it's going to endure. To create a sense of belonging and psychological safety on the team, we have regular rituals that enrich our work life: "Creative Mondays," where we draw our personalities as sandwiches, try to guess song lyrics we translate into emoji, or just share creative people and things that inspire us. I also organize quarterly field trips where the design team steps away from working on a technical software product and recharges by getting out into the world and getting our hands dirty.</p>
          </Text>
        </Box>
      </Grid>
      <Grid gap={3} columns={[2]} sx={{ mx: "auto", maxWidth: "1244px" }}>
        <Box>
          <Image src={cultureBirdcall} />
        </Box>
        <Box>
          <Image src={cultureThrowing} />
        </Box>
        <Box>
          <Image src={cultureArchery} />
        </Box>
        <Box>
          <Image src={cultureMatching} />
        </Box>
      </Grid>
    </Box>
    <Box backgroundColor="grays.1" py="6" sx={{ variant: "boxes.wrapper"}}>
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", mb: 6, maxWidth: "1244px" }}>
        <Box
          sx={{
            gridColumn: "3 / 11",
          }}>
          <Heading sx={{ variant: "headings.workH2" }}>Design Systems</Heading>
        </Box>
        <Box
          sx={{
            mt: -2,
            mb: 6,
            gridColumn: "3 / 9",
          }}>
          <Text
            sx={{
              mb: 5,
              variant: "texts.workSubheadDark",
            }}>
            Improving product consistency and team velocity
          </Text>
          <Text sx={{ variant: "texts.workBodyDark" }}>
            <p>In my first year at Signal Sciences, I created our design system from the ground up. I established our product's design principles, visual style and copywriting voice. I designed a comprehensive Sketch component library, and worked with a talented UX Engineer to create and document a corresponding library of React components.</p>
            <p>Our design system improved our product's consistency and our engineers' velocity, and was successful enough that Signal Sciences established a permanent cross-functional team to continue investing in our system. With a team of two product designers, a content strategist, and two UX engineers, I've shifted into a product owner role. I establish our roadmap and priorities, set the bar for quality, and balance flexibility and consistency across design and code.</p>
            <p>In 2019, we switched to Figma, completely refreshed the visual design of our entire system, and refactored all our React components using Styled System and Styled Components. We invested heavily in content strategy, creating editorial guidelines that define our voice and tone, product glossary, grammar, mechanics, and preferred terms.</p>
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: "1 / 13",
          }}>
          <Image src={designSystems} />
        </Box>
      </Grid>
    </Box>


    <WorkFooter />
  </Layout>
)

export default APMPage