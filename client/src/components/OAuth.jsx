import { Button } from 'flowbite-react'
import React from 'react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
function OAuth() {

    const auth=getAuth(app)

    //dispatch to store
    const dispatch=useDispatch()
    const navigate=useNavigate();

    //handle google click
    const handleGoogleClick= async ()=>{
        const provider= new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'}) 
        try {
            
            const resultsFromGoogle= await signInWithPopup(auth, provider)
            // console.log(resultsFromGoogle)

            //sent information to backend
            const res= await fetch('/api/auth/google',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    googlePhotoUrl: resultsFromGoogle.user.photoURL,
                }),
            })

            //convert into json
            const data=await res.json();
            if(res.ok){
                //dispatch auth  user data to store and signin success
                dispatch(signInSuccess(data));
                navigate('/')
            }
        } catch (error) {
            console.log("Error in google auth", error)
        }

    }
  return (
    <Button type='button' gradientDuoTone='pinkToOrange'outline className='' onClick={handleGoogleClick}>
      <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
      Continue with Google
    </Button>
  )
}

export default OAuth

