import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth,db } from "../firebase";
import styl from "./Styl.css";
import { provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDocs,doc,collection,addDoc } from 'firebase/firestore';

const JoinNow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "users");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        handleAuth(e);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });

  };


  const handleAuth = async (e) => {


    try {

      // Create a new collection with the username as the collection name

      await addDoc(userCollectionRef, {
        username:"user",
        email: email,
        userId: auth?.currentUser?.uid,
      });

    } catch (err) {
      console.log(err)
    }

    //console.log("Username:", username);
    //console.log("Role Type:", role);
    //console.log("Age:", age);

  }


  const handleClick = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // User is now signed in with their Google account.
      const user = result.user;
      
      console.log("User:", user);
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
    });
  }


  return (
    <Container>
      <Nav>
        <img src="login-logo.svg" alt="" />
      </Nav>
      <Section>
        <Signup>
          <span>Sign Up</span>
          <p>New to Linkedin? Join Now</p>
          <form onSubmit={signUp}>
            <div>
              <input
                value={email}
                type="email"
                placeholder="Email"
                className="signin"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                value={password}
                type="password"
                placeholder="Password"
                className="signin"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button type="submit" className="btn">
                Sign Up
              </button>
            </div>

            <Google onClick={handleClick}>
              
              <img src="Google__G__Logo.svg.webp" alt="" width="18px" />
              Sign in with Google
         
            </Google>

          </form>
          <p className="ml-16">
            Already on Linkedin?
            <a href="/">Sign in</a>
          </p>
        </Signup>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
  background-color: white;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-item: center;
  position: relative;
  flex-wrap: nowrap;
  img {
    width: 135px;
    height: 34px;
  }
  @media (max-width: 768px) {
    padding-left: 80px;
    padding-top: 20px;
  }
`;
const Section = styled.div`
  display: flex;
  min-height: 700px;
  padding-top: 50px;
  position: relative;
  flex-wrap: wrap;
  padding-botton: 90px;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
//signup page
const Signup = styled.div`
  width: 50%;
  line-height: 40px;
  align-items: center;
  margin-top: 10px;
  opacity: 1;
  flex-grow: 1;
  position: relative;
  padding: 20px 40px;
  padding: 40px;
  margin-left: 500px;
  div {
    padding-top: 20px;
    max-width: 340px;
    justify-content: center;
    input {
      border: 2px outset solid;
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
    .signin:hover {
      border: 2px outset black;
      border-radius: 4px;
    }
  }
  span {
    font-size: 35px;
    padding-top: 10px;
    color: #0a66c2;
  }
  p {
    padding-top: 15px;
    font-size: 15px;
    padding-bottom: 10px;
  }
  a {
    text-decoration: none;
    color: blue;
  }
  @media (max-width: 768px) {
    width: initial;
    postion: initial;
    height: initial;
    align-items: center;
    margin-left: 10px;
    text-align: left;
  }
`;
//sign up button

// button {
//   border-radius: 20px;
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   font-size: 16px;
//   font-weight: bold;
//   line-height: 10px;
//   padding: 14px 22px;
//   background-color: #24a0ed;
//   text-decoration: none;
//   text-align: center;
//   color: white;
// }
// button:hover {
//   background-color: #0a66c2;
// }

//google sign in
const Google = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14px;
    width: 100%;
    border-radius: 26px;
    border: 1px outset black;
    padding: 14px 24px;
    text-decoration: none;
    color: black;
    vertical-align: middle;
    img {
      margin-right: 14px;
    }
  }
`;

export default JoinNow;