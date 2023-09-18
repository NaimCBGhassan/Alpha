import styled from "styled-components";

const Home = () => {
  return <StyledHome id="home">Home</StyledHome>;
};

export default Home;

const StyledHome = styled.section`
  background-image: url("/src/assets/heroImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
`;
