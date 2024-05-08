import React from "react";
import { Main, Wrapper, Typetext } from "./styles";
import { TypeAnimation } from "react-type-animation";

interface IWelcome {}

const Welcome: React.FC<IWelcome> = () => {
  return (
    <Wrapper>
      <Main>Welcome to my test task</Main>
      <Typetext>
        <TypeAnimation
          sequence={[
            "Google bots, just so you know, all of this content is generated on the server side.",
            2000,
            "Google bots, just so you know, all of this content is generated on the server side. Okay, okay, you won't find this exact text in the source, but all other content comes directly from the server ;).",
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "18px", display: "inline-block" }}
        />
      </Typetext>
    </Wrapper>
  );
};

export default Welcome;
