import styled from "styled-components";
const Header = (props) => {
  return (
    <Container>
      <Navbar className="active">
        <Logo><a href="/home">
          <img src="linkedin.png" alt=""  width="35px"/>
        </a></Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <Icon>
            <img src="search-icon.svg" alt="" />
          </Icon>
        </Search>
        <Nav>
          <Navlist>
            <List>
              <a href="/home">
                <img src="nav-home.svg" alt="" />
                <span>
                  <b>Home</b>
                </span>
              </a>
            </List>
            <List>
              <a>
                <img src="nav-network.svg" alt="" />
                <span>
                  <b>My Network</b>
                </span>
              </a>
            </List>
            <List>
              <a>
                <img src="nav-jobs.svg" alt="" />
                <span>
                  <b>Jobs</b>
                </span>
              </a>
            </List>
            <List>
              <a>
                <img src="nav-messaging.svg" alt="" />
                <span>
                  <b>Messaging</b>
                </span>
              </a>
            </List>
            <List>
              <a>
                <img src="nav-notifications.svg" alt="" />
                <span>
                  <b>Notifications</b>
                </span>
              </a>
            </List>
            <User>
              <a>
                <img src="user.svg" alt="" />
                <span>
                  <b>Me</b>
                </span>
                <img src="down-icon.svg" alt=""/>
              </a>
              <Signout>
                <a>Sign out</a>
              </Signout>
            </User>
            <Work>
              <a>
                <img src="nav-work.svg" alt="" />
                <span>
                  <b>For Business</b>
                </span>
              </a>
            </Work>
          </Navlist>
        </Nav>
      </Navbar>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  height:70px;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`;
const Navbar = styled.div`
  padding: 10px;
  display: flex;
  align-item: center;
  max-width: 1128px;
  margin: 0 auto;
  min-height: 100;
`;
const Logo = styled.span` 
 margin-top:10px;
  margin-right: 8px;
  font-size: 0px;
 
`;

const Search = styled.div`
margin-top:10px;
  opacity: 1;
  flex-grow: 1;
  position: relative;
  div {
    max-width: 280px;
    input {
      border: none;
      background-color: #eef3f8;
      border-radius: 2px;
      padding: 0 10px 0 40px;
      width: 100%;
      line-height: 1.75;
      border-color: #dce6f1;
      font-size: 14px;
      height: 34px;
      vertical-align: text-top;
    }
  }
`;
const Icon = styled.div`
  width: 30px;
  position: absolute;
  z-index: 1;
  top: 6px;
  left: 2px;
  margin: 0;
  justify-content: center;
  border-radius: 0 2px 2px 0;
  display: flex;
  align-items: center;
`;
const Nav = styled.ul`
  margin-left: auto;
  display: block;
`;
const Navlist = styled.li`
  display: flex;
  flex-wrap: nowrap;
  .active{

  }
`;
const List = styled.div`
  display: flex;
  align-items: center;
  a {
    width: 80px;
    align-items: center;
    display: flex;
    background: transparent;
    font-size: 10px;
    justify-content: center;
    line-height: 1.5;
    position: relative;
    text-decoration: none;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 400px;

    span {
      align-items: center;
      display: flex;
    }
  }
  a:hover {
    color: rgb(0, 0, 0, 0.9);
  }
`;
const Signout = styled.div`
  position: absolute;
  top: 70px;
  background: white;
  border-radius: 2px;
  width: 75px;
  height: 25px;
  text-align: center;
  //display: none;
  a {
    padding-top: 6px;
  }
`;
const User = styled(List)`
  a > img {
    width: 24px;
    border-radius: 50%;
  }
//   img:hover {
//     $(Signout) {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }
`;
const Work=styled(User)`
border-left:1px solid rgb(0,0,0,0.08);
`;

export default Header;
