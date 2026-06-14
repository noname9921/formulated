import SwirlBackground from '../components/SwirlBackground'
import categories from '../pageData/index.json'
import { RoundedLine } from '../components/WebpageComponents'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div className='overflow-y-scroll scrollbar-none overflow-x-hidden w-screen h-screen snap-y snap-mandatory scroll-smooth'>
      <SwirlBackground/>
      <div className='w-screen h-screen flex snap-start'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <h2 className='text-6xl dark:text-white text-black font-extrabold'>Formulated</h2>
          <p className='text-3xl dark:text-white text-black font-medium'>Remastered</p>
          <RoundedLine/>
          <p className='dark:text-white text-black font-light text-xl'>Learn math the way it should be learnt</p>
        </div>
      </div>
      <div className='w-screen h-screen flex  flex-col snap-start p-4 justify-center items-center'>
        <p className='text-2xl dark:text-white text-black font-bold'>Choose from a variety of fields to study:</p><br />
        <ul className='grid grid-cols-3 grid-rows-3 gap-4 flex-1 p-5 max-h-[80vh] max-w-[80vw]'>
          {categories.filter(category => category.categoryTitle != 'Prerequisite').map(category => 
            <Link key={category.categorySlug} className='flex font-semibold justify-center items-center dark:text-white text-black dark:hover:bg-gray-800 hover:bg-gray-200 cursor-pointer caret-transparent dark:bg-gray-900 bg-white p-5 rounded-xl text-xl text-center h-2xl' to={`/${category.categorySlug}`}><li className="flex font-semibold justify-center items-center dark:text-white text-black cursor-pointer transition-colors ease-in duration-75 caret-transparent p-5 rounded-xl text-xl text-center h-2xl" key={category.categorySlug}>{category.categoryTitle}</li></Link>
          )}
        </ul>
      </div>
      <div className='w-screen h-screen flex flex-col snap-start p-4 justify-center items-center'>
          <p className='dark:text-white text-black text-xl'>Introducing</p>
          <h2 className='text-6xl dark:text-white text-black font-extrabold'>Formulated</h2>
          <p className='dark:text-white text-black text-xl'>Mathematics at its <strong>purest form</strong></p>
      </div>
      <div className='w-screen h-screen flex flex-col snap-start p-4 justify-center items-center'>
          <p className='dark:text-white text-black text-xl'>Billing</p>
          <h2 className='dark:text-white text-black text-3xl font-bold'>We are absolutely free</h2>
          <RoundedLine></RoundedLine>
          <p className="dark:text-white text-black text-xl">However, we have some prerequisites that you should be aware of</p>
          <h2 className='dark:text-white text-black text-2xl font-bold'>Read our <Link to='/prerequisite' className='underline'>prerequisite & term of service</Link> now</h2>
      </div>
    </div>
  )
}