import React, { useState,useEffect } from 'react'
import { collection,query,where,getDocs } from 'firebase/firestore'
import { db,auth } from '../firebase';
import Post from './Post';
function Posts() {
  const [posts,setPosts] = useState([])
  const userCollectionRef = collection(db, "posts");
  const getPosts = async() => {
  
    try {
      const q = query(userCollectionRef, where('userId', '==', auth?.currentUser?.uid));
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data()
        , id: doc.id,

        
      }))
      setPosts(filteredData)
       console.log(filteredData)
    } catch (err) {
      console.error(err)
    }

  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        getPosts();
      }
    });

    return () => unsubscribe(); 
  },[]);

  return (
    <div  >
   
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
  )
}

export default Posts