// Import React
import React from "react";
import LoadingGif from "../src/loading_example.gif";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#3d3347",
    tertiary: "#9D7CBF",
    quartenary: "#CECECE"
  },
  {
    primary: "Futura",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Image Optimization for Modern UX
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            with Gatsby.js
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary">
            Actual Footage of the Hawaiian Missile System
          </Heading>
          <Image src={LoadingGif} />
          <Text size={6} textColor="secondary">
            Avoid situations like this.
          </Text>
          <Link
            textColor="tertiary"
            textSize="1rem"
            href="https://twitter.com/tlakomy/status/953254934278963201"
          >
            tweet by @tlakomy
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="3rem">
              …optimizing images can often yield some of the largest byte
              savings and performance improvements
            </Quote>
            <Cite>Google PageSpeed docs</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
