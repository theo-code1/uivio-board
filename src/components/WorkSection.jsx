import React from 'react'
import MacImg from '../assets/code-mac.webp'
import JobsArticles from './JobsArticles'
import CodeIcon from './icons/Code'
import MarkMenu from './icons/MarkMenu'
import PhotosIcon from './icons/Photos'
import MessageIcon from './icons/Message'

const WorkSection = () => {

    const ArticleInfo = [
        {
            Header: 'Developers',
            Paragraph: 'Copy something from Stack Overflow and then copy something else without overwriting the first thing. With Paste, all your code snippets are saved and neatly organized.',
            Icon: <CodeIcon />
        },
        {
            Header: 'Designers',
            Paragraph: 'Any great artist keeps their palette nearby. Paste lets you quickly and consistently retrieve colors, icons, styles, and other assets whenever you need them.',
            Icon: <PhotosIcon />
        },
        {
            Header: 'Content and marketing',
            Paragraph: 'Never lose a chunk of text that you forgot to paste back. Save creative taglines, SEO keywords, and anything else that helps your process. Say more with Paste.',
            Icon: <MarkMenu />
        },
        {
            Header: 'Sales and support',
            Paragraph: `Do more with what you've already done. Store email templates and canned replies, quickly accessing your most-used messages with a keyboard shortcut.`,
            Icon: <MessageIcon />
        },
    ]

  return (
    <section className='bg-[#101010] max-w-screen font-inter-regular py-32 flex flex-col gap-16'>
        <div className="headers flex flex-col gap-4 md:gap-8">
            <h1 className="header font-inter-bold font-bold text-white text-4xl md:text-[60px] leading-12 md:leading-16 text-center">A better clipboard<br />for everyone</h1>
            <p className='text-white font-inter-medium font-medium text-xl md:text-2xl text-center px-4 md:px-0'>Whether you do it for work or just for fun,<br className='hidden md:flex'/> do it faster with Paste.</p>
        </div>
        <img src={MacImg} alt="Copied Code in Mac" className='w-[85%] md:w-[75%] lg:w-2/3 mx-auto select-none' draggable='false'/>
        <div className="Jobs-articles flex flex-col gap-16 mt-16 md:[75%] lg:w-2/3 mx-auto ">
            <div className="st-row flex flex-row gap-0 ">
                <JobsArticles 
                    ClassName={`text-white w-[40%] flex flex-col `}
                    Header={ArticleInfo[0].Header}
                    Paragraph={ArticleInfo[0].Paragraph}
                    JobIcon={ArticleInfo[0].Icon}
                />
                <JobsArticles 
                    ClassName={`text-white w-[40%] flex flex-col `}
                    Header={ArticleInfo[1].Header}
                    Paragraph={ArticleInfo[1].Paragraph}
                    JobIcon={ArticleInfo[1].Icon}
                />
            </div>
            <div className="sd-row flex flex-row gap-0 ">
                <JobsArticles 
                    ClassName={`text-white w-[40%] flex flex-col `}
                    Header={ArticleInfo[2].Header}
                    Paragraph={ArticleInfo[2].Paragraph}
                    JobIcon={ArticleInfo[2].Icon}
                />
                <JobsArticles 
                    ClassName={`text-white w-[40%] flex flex-col `}
                    Header={ArticleInfo[3].Header}
                    Paragraph={ArticleInfo[3].Paragraph}
                    JobIcon={ArticleInfo[3].Icon}
                />
            </div>
        </div>
    </section>
  )
}

export default WorkSection