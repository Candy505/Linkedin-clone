import styled from "styled-components"
import LeftJ from "./LeftJ"
import MainJ from "./MainJ"
import RightJ from "./RightJ";

const Jobs = () => {
  return (
    <Container>
      <Layout>
        <LeftJ />
        <MainJ />
        <RightJ />
      </Layout>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 80px;
  max-width: 100%;
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 7.5fr) minmax(0, 12fr) minmax(100px, 5fr);
  column-gap: 20px;
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
export default Jobs