import { Sidebar } from 'flowbite-react'
import React from 'react'
import { HiArrowSmRight, HiUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
function DashSidebar({ tab }) {
    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item active={tab === 'profile'} icon={HiUser} labelColor='dark' label={'User'}>
                            Profile
                        </Sidebar.Item>
                    </Link>

                    <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </Sidebar.Item>


                </Sidebar.ItemGroup>
            </Sidebar.Items>

        </Sidebar>
    )
}

export default DashSidebar
