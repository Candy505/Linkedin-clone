import React from 'react';
import Chat from './Chat';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from '../Header';

function Messages() {
    const [user] = useAuthState(auth)

    return (
        <>
        <Header/>
        <div className="flex items-center justify-center h-screen mt-8">
            <div className="w-4/5 md:w-2/3 lg:w-3/4 h-4/7 border border-solid border-gray-300 rounded-lg bg-white flex flex-col">
                  
                <div className="p-8 space-y-2">
                    {user ?                  
                            <Chat />                       
                        :
                         <div className="flex flex-col items-center mt-40 ">
                            <h1 className="text-lg font-bold mb-4">
                                PLEASE LOGIN TO CONNECT WITH OTHER USERS.
                            </h1>
                            <a href="/join" className="text-blue-500 hover:underline">
                                Login
                            </a>
                        </div>
                    } 
                  
                 </div>
            </div>
        </div>
       </>
    );
}

export default Messages;
