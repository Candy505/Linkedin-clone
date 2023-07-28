import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";



const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <>
      <Container>
        <Nav>
          <img src="login-logo.svg" alt="" />
          <div>
            <Join id="join">
              <a href="/join">
                Join now
              </a>
            </Join>
            <SignIn>Sign in</SignIn>
          </div>
        </Nav>
        <Section>
          <Community>Welcome to Our Community
            <img src="img.webp" alt="" />
          </Community>
          <Signup>
            <span>Sign in</span>
            <p>Stay updated on your professional world</p>
            <form onSubmit={signIn}>
              <div>

                <input value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="signin" />
              </div>
              <div>
                <input value ={password} type="password" placeholder="Password" className="signin" onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <p>Forgot password?</p>
              <Signin>
              <button type="submit">Sign in</button>
              </Signin>
              <Google>
                <a href="/">
                  <img src="Google__G__Logo.svg.webp" alt="" width="18px" />
                  Sign in with Google
                </a>
              </Google> 
              </form>
          </Signup>
        </Section>
      </Container>
    </>
  )
}

const Container = styled.div`
padding:0px;
background-color:white;
`;

const Nav = styled.nav`
max-width:1128px;
margin:auto;
padding:12px 0 16px;
display:flex;
align-item:center;
position : relative;
justify-content:space-between;
flex-wrap:nowrap;
img{
    width:135px;
    height:34px;

}
`;

const Join = styled.a`
font-size:16px;
padding:10px 15px;
font-weight:bold ;
a{
  text-decoration:none;
  color:black;
  padding:8px;
  border-radius:20px;
}
 a:hover{
    background-color:lightgrey;
}
`;

const SignIn = styled.a`
border-radius:20px;
border:1px outset #24a0ed;
color:#0a66c2;
font-size:16px;
font-weight:bold;
line-height:40px;
padding:10px 24px;
text-decoration:none;
`;

const Section = styled.section`
display:flex;
min-height:700px;
padding:40px;
padding-top:70px;
position:relative;
flex-wrap:wrap;
width:100%;
max-width:1128px;
margin:auto;
padding-botton:90px;
`;

const Community = styled.div`
font-size:70px;
color:#0a66c2;
text-align:center;
width:60%;
font-family:italic;
line-height:90px; 
img{
 padding-top:30px;
 height:300px;
}
`;

const Signup = styled.div`
margin-top:10px;
opacity: 1;
flex-grow: 1;
position: relative;
padding:20px 40px;
padding:40px;
div{
  padding-top:20px;
  max-width:340px;
   input {
      border: 2px outset solid ;
      background-color: #eef3f8;
      border-radius: 2px;
      padding: 0 10px 0 40px;
      width: 100%;
      line-height: 1.75;
      border-color: #dce6f1;
      font-size: 14px;
      height: 45px;
      vertical-align: text-top;
    }
    .signin:hover{
      border: 2px outset black ;
      border-radius: 4px;
    }
}
span{
  font-size:35px;
  padding-top:10px;
  color:#0a66c2;
}
p{
  padding-top:15px;
  font-size:15px;
  padding-bottom:10px;
}
`;
const Signin = styled.div`
button{
border-radius:20px;
display:flex;
justify-content:center;
width:100%;
font-size:16px;
font-weight:bold;
line-height:10px;
padding:14px 24px;
background-color:#24a0ed;
text-decoration:none;
text-align:center;
color:white;

}
  button:hover{
  background-color:#0a66c2;
 }
`;

const Google = styled.div`
a{
display:flex;
justify-content:center;
align-items:center;
height:14px;
width:100%;
border-radius:26px;
border:1px outset black;
padding:14px 24px;
text-decoration:none;
color:black;
vertical-align:middle;
img{
  margin-right:14px;
}
}
`;



export default Login;
