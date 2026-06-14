import ReactMarkdown from 'react-markdown'
import prerequisite from '../pageData/prerequisite.md?raw'
import tos from '../pageData/tos.md?raw'
import SwirlBackground from '../components/SwirlBackground'
import { Link } from 'react-router-dom'

export default function Prerequisite() {
  return (
    <div className='snap-y snap-mandatory overflow-y-scroll scrollbar-none scroll-smooth h-screen w-full'>
      <SwirlBackground></SwirlBackground>
      <div className='dark:text-white text-black p-8 prose dark:prose-invert prose-xl min-h-screen snap-start w-full max-w-none'>
        <ReactMarkdown>{prerequisite}</ReactMarkdown>
      </div>
      <div className='dark:text-white text-black p-8 prose dark:prose-invert prose-xl min-h-screen snap-start w-full max-w-none'>
        <ReactMarkdown>{tos}</ReactMarkdown>
        <div className='flex flex-col justify-center items-center'>
          <Link to='/'><button className='dark:text-white text-black dark:bg-gray-900 bg-gray-100 dark:hover:bg-gray-800 hover:bg-gray-200 cursor-pointer rounded-xl p-4'>
            Back to homepage
          </button></Link>
        </div>
      </div>
      
    </div>
  )
}