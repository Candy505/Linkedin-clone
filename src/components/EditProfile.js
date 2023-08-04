import React, { useState } from 'react'
import { collection,addDoc} from 'firebase/firestore';
import { db,auth,storage } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ref } from 'firebase/storage';
import { uploadBytes } from 'firebase/storage';
import HomeLinkedin from './HomeLinkedin';

function EditProfile() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [image,setImage] = useState(null);
   
    const userCollectionRef = collection(db, "userinfo");
    const navigate = useNavigate()

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setImage(file); // Save the selected image in state
      };

    const handleChange = async (e) => {
        e.preventDefault();

        try {

            if (image) {
                const storageRef = ref(storage, `profileImages/${image.name}`);
                await uploadBytes(storageRef, image);
              }


            await addDoc(userCollectionRef, {
                name: username,
                status: status,
                email: email,
                userId: auth?.currentUser?.uid,
            });
             
            navigate('/home')
        } catch (err) {
            console.log(err)
        }

        console.log("Username:", username);
        console.log("Role Type:", status);
        console.log("Age:", email);

    }


    return (
        <div>
            <form onSubmit={handleChange}>
                <div className="flex items-center justify-center h-screen">
                    <div className="bg-white rounded-lg p-6 shadow-md space-y-6 w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 text-center">
                        <div className="space-y-2">
                            <label htmlFor="name" className="font-semibold text-gray-600">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="John Doe"
                                className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-blue-500 text-center bg-blue-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="tags" className="font-semibold text-gray-600 text-center">
                                Tags/Job Position
                            </label>
                            <input
                                type="text"
                                id="status"
                                name="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="e.g. Software Engineer"
                                className="border border-gray-300 px-4 py-2 rounded-lg text-center w-full focus:outline-none focus:border-blue-500 bg-blue-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="tags" className="font-semibold text-gray-600 text-center">
                                Personal Email Account
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="e.g. Software Engineer"
                                className="border border-gray-300 px-4 py-2 rounded-lg text-center w-full focus:outline-none focus:border-blue-500 bg-blue-50"
                            />
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <input
                                type="file"
                                className="hidden"
                                id="fileInput"
                                onChange={handleImageUpload}
                            />
                            <label
                                htmlFor="fileInput"
                                className="text-center bg-gray-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors ease-in-out duration-200"
                            >
                                Upload Profile Picture
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition-colors ease-in-out duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default EditProfile

/*
  

                        */