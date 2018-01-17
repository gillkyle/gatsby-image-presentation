// Import React
import React from "react";

// Import Images
import LoadingGif from "../src/loading_example.gif";
import Logo from "../src/logo.svg";

// Import Code Samples
import CodeSample1 from "../src/code_sample1.js";
import CodeSample2 from "../src/code_sample2.js";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
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
import CodeSlide from "spectacle-code-slide";

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
          <Image src={Logo} height="30%" width="30%" />
          <Link
            textColor="quartenary"
            textSize="1rem"
            href="https://twitter.com/gill_kyle"
          >
            @gill_kyle
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            The Problem
          </Heading>
          <List ordered>
            <ListItem textSize="2.5rem" margin="10">
              Crop and adjust images{" "}
            </ListItem>
            <ListItem textSize="2.5rem" margin="10">
              Optimize file size, bit depth
            </ListItem>
            <ListItem textSize="2.5rem" margin="10">
              Implement lazy loading
            </ListItem>
            <ListItem textSize="2.5rem" margin="10">
              Mark page position, avoid "jumpiness"
            </ListItem>
            <ListItem textSize="2.5rem" margin="10">
              ...
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="secondary">
            Actual Footage of the Hawaiian Missile System
          </Heading>
          <Image src={LoadingGif} height="100%" width="100%" />
          <Link
            textColor="tertiary"
            textSize="1rem"
            href="https://twitter.com/tlakomy/status/953254934278963201"
          >
            tweet by @tlakomy
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="3rem">
              …optimizing images can often yield some of the largest byte
              savings and performance improvements
            </Quote>
            <Cite>Google PageSpeed docs</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <CodePane editable source={CodeSample2} />
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <CodeSlide
          bgColor="quartenary"
          transition={["slide"]}
          lang="js"
          code={CodeSample1}
          ranges={[
            { loc: [0, 270], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [4, 7] },
            { loc: [8, 10] }
            // ...
          ]}
        />
      </Deck>
    );
  }
}
