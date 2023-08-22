import React, { useEffect, useState } from 'react'
import { auth,storage,db } from '../../firebase';
import { getDownloadURL,ref } from 'firebase/storage';
import { collection, getDocs, query, where } from 'firebase/firestore';

function ChatMessage(props) {

    const { text, uid } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'bg-blue-500 text-white ' : 'bg-gray-300';
    const dir = uid === auth.currentUser.uid ? 'flex justify-end' : 'flex justify-start'; 
    const storageRef = ref(storage, `profileImages/${auth.currentUser.uid}`);
     let [img,setImg]= useState('');
    

     //For user profile pic
     useEffect(()=>{
     const downloadFile = async () => {
        try {
          const imgURL = await getDownloadURL(storageRef);
        //  console.log('File download URL:', imgURL);

          setImg(uid === auth.currentUser.uid ?imgURL:'https://img.freepik.com/free-icon/user_318-583451.jpg?t=st=1692630757~exp=1692631357~hmac=4c4e159547c004ced21358aa699eef0c04d3232b8839e4546b9164d4dfbb2245')
        } catch (error) {
          console.error('Error getting download URL:', error);
        }
      };
      
      downloadFile();
    },[]);


    //for user details

   
    return (
        <>
            <div className={`${dir}`}>
                <img className='w-6 h-6 rounded-full' src={img}></img>
                 <div
                   className={`m-2 max-w-sm p-2 rounded-lg message ${messageClass}`}>
                    {text}
                </div>
            </div>
            <br></br>
        </>
    )
}

export default ChatMessage

