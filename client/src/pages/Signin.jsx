import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { set } from 'mongoose';
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function Signin() {

  //state for formData
  const [formData, setFormData] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  //handle change function for input fields
  const handleChange = (e) => {
    // console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim()
    })
    // console.log(formData, "formdata")
  }

  //useNavigate hook
  const navigate=useNavigate();

  //handle submit function for form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData, "formdata")
    if ( !formData.email || !formData.password) {
      return setErrorMessage('All fields are required, please fill all fields')

    }
    try {
      setLoading(true);
      setErrorMessage(null)

      //sign up new account
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      })
      const data = await res.json();
      // console.log(data, '*** data')
      if (data.success === false) {
        setErrorMessage(data.message)
      }
      setLoading(false);


      //if res ok then navigate to sign in page
      if(res.ok){
        navigate('/')
      }



    } catch (error) {
      setErrorMessage('Something went wrong, please try again')
      setLoading(false);
    }
  }


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
            This is a demo project.You can sign in with your email and password or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
           
            <div className="">
              <Label className='' value='Your email' />
              <TextInput
                type='email'
                placeholder='name@email.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label className='' value='Your password' />
              <TextInput
                type='password'
                placeholder='***********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm' className='text-white' />
                    <span className='pl-3'>Loading...</span>
                  </>

                ) : 'Sign In'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span className="">Don't have an account ?</span>
            <Link to='/sign-up' className='text-blue-600'>sign up</Link>
          </div>
          {
            errorMessage && <Alert className="text-red-500 text-sm mt-3" color='failure'>{errorMessage}</Alert>
          }
        </div>
      </div>

    </div>
  )
}
