import { Helmet } from "react-helmet";
import { HiddenTitle, Link, Text, Title, Wrapper } from "./HomePage.styled";

function HomePage() {
  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HiddenTitle>Home Page</HiddenTitle>
      <Wrapper>
        <Title>Welcome to our website!</Title>
        <Text>
          Here, you'll find cards displaying tweets from various users, along
          with information about the number of tweets and followers. <br />
          Feel free to explore the cards by clicking on the provided{" "}
          <Link to="/tweets"> link.</Link>
        </Text>
      </Wrapper>
    </section>
  );
}

export default HomePage;

//awdj