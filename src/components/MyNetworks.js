import styled from "styled-components"
import LeftN from "./LeftN";
import RightN from "./RightN";
const MyNetworks = () => {
  return (
    <Container>
     <Layout>
        <LeftN/>
        <RightN/>
     </Layout>
    </Container>
  
  )
}
const Container=styled.div`
padding-top:10px;
max-width:100%;
`;
const Layout = styled.div`
display:grid;
grid-template-areas:"leftside rightside";
grid-template-columns: minmax(0, 6fr) minmax(0, 12fr);
column-gap:25px;
row-gap:25px;
grid-template:auto;
margin:25px 0;
padding:0 5px;
@media(max-width:768px){
  display:flex;
  flex-direction:column;
  padding:0 5px;
}
`;
export default MyNetworks