import styled from "styled-components";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";
import styl from "./Styl.css";
const HomeLinkedin = () => {
  return (
    <Container className="scrollable">
     
      <Layout>
        <Left />
        <Main />
        <Right />
      </Layout>
    </Container>
  );
};
const Container = styled.div`
overflow-y:auto;
  padding-top: 80px;
  max-width: 100%;
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 7.5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template: auto;
  margin: 25px 0;
  padding: 0 5px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default HomeLinkedin;
