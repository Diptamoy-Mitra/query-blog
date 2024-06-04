import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashboard() {

  const location = useLocation() //fetch location object from url
  //console.log(location)
  //state store for tab
  const [tab, setTab] = useState();

  //when open the dashboard page then run automatically
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    console.log(urlParams)
    const tabFromUrl = urlParams.get('tab');
    // console.log(tabFromUrl,"***tabFromUrl")
    setTab(tabFromUrl) //set tab 
  }, [location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        {/* sidebar */}

        <DashSidebar 
          tab={tab}
        />


      </div>

      {/* profile */}

      {
        tab === 'profile' && <DashProfile />
      }

    </div>
  )
}
