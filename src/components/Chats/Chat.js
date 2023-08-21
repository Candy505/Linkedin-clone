import React, { useState } from 'react'
import ChatMessage from './ChatMessage';
import { db } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query } from 'firebase/firestore';
import { orderBy, limit } from 'firebase/firestore';
import { auth } from '../../firebase';
import { serverTimestamp } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
function Chat() {


    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy("createdAt"), limit(25));

    const [messages] = useCollectionData(q, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid } = auth.currentUser;

        await addDoc(messagesRef, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
        })

        setFormValue('')
    }

    return (
        <div>
            <div className="p-8 h-96 space-y-4 flex flex-col border-solid border-8 border-gray-500 rounded-lg ">
                <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 flex flex-col ">
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                </div>
            
                 <div>
                <form className="form-container"onSubmit={sendMessage}>
                    <div className="bg-slate-100 flex rounded-lg items-center p-2 ">
                        <input className="bg-gray-100 rounded-lg px-2 py-2 flex-grow" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                        <button className="bg-blue-500 text-white rounded-lg px-2 py-2" type="submit">Submit</button>
                    </div>

                </form>
                </div>
            </div>


        </div>
    )
}

export default Chat

/*<div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs self-start">
            Hey there! How can I help you today?
          </div>
          
          
          <div className='flex justify-end'>
          <div className="bg-gray-300 p-2 rounded-lg max-w-xs self-end">
            Hi! I have a question about your products.
          </div> 
           </div>
          */