import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20 '>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
         {/* left side */}
         <div className="flex-1">
         <Link to='/' className='text-4xl  font-bold dark:text-white '>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Query</span>
                Blog
            </Link>
            <p className="text-sm mt-5">
              This is a demo project.You can sign up with your email and password or with Google.
            </p>
         </div>
         {/* right side */}
         <div className="flex-1">
            <form className='flex flex-col gap-4 '>
              <div className="">
                <Label className='' value='Your username' />
                <TextInput  
                  type='text'
                  placeholder='Your Username'
                  id='username'

                />
              </div>
              <div className="">
                <Label className='' value='Your email' />
                <TextInput  
                  type='text'
                  placeholder='name@email.com'
                  id='email'
                  
                />
              </div>
              <div className="">
                <Label className='' value='Your password' />
                <TextInput  
                  type='text'
                  placeholder='Your Password'
                  id='password'
                  
                />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit'>
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span className="">Have an account ?</span>
              <Link to='/sign-in' className='text-blue-600'>sign in</Link>
            </div>
         </div>
      </div>

    </div>
  )
}
