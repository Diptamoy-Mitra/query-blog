import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook,BsInstagram, BsGithub,BsDribbble } from 'react-icons/bs'
//2:22:12
function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className="w-full max-w-7xl mx-auto">
                {/* total logo and sections content div */}
                <div className="grid w-full justify-between sm:flex  md:grid-cols-1 ">

                    {/* for logo */}
                    <div className="">
                        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white '>
                            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Query</span>
                            Blog
                        </Link>
                    </div>

                    {/* for sections */}
                    <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                        <div className="">
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    100 JS Project
                                </Footer.Link>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className="">
                            <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Github
                                </Footer.Link>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className="">
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href='/' target='_blank' rel='noopener noreferrer'>
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>

                {/* under footer  */}
                <Footer.Divider />
                <div className=" w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href='#' by='Query blog' year={new Date().getFullYear()} />
                    <div className="flex gap-6 mt-4 sm:mt-1 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterCom
