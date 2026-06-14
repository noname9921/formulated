import { Link, useLoaderData } from 'react-router-dom'
import SwirlBackground from '../components/SwirlBackground'
import Navbar from '../components/Navbar'
import { RoundedLine } from '../components/WebpageComponents'

interface Topic {
  topicTitle: string,
  topicSlug: string
}

interface CategoryData {
  categoryTitle: string,
  categorySlug: string,
  categoryDesc: string,
  topics: Topic[]
}

export default function Category() {
  const data = useLoaderData() as CategoryData

  return (
    <div className='flex w-screen'>
      <Navbar></Navbar>
      <SwirlBackground/>
      <div className='flex flex-col w-screen h-screen overflow-y-scroll scrollbar-none scroll-smooth snap-y  snap-mandatory'>
        <div className='flex flex-col justify-center shrink-0 items-center w-full h-screen snap-start'>
          <h2 className='dark:text-white text-black text-4xl tracking-[0.2em] font-bold'>{data.categoryTitle.toUpperCase()}</h2>
          <RoundedLine/>
          <p className="dark:text-white text-black text-md text-center max-w-4/5 font-light text-balance">{data.categoryDesc}</p>
        </div>
        <div className='flex flex-col justify-center shrink-0 items-center w-full h-screen snap-start'>
          <p className='dark:text-white text-black'>Let's quickly start with a category</p>
          <div className='flex justify-center'>
            <ul className='flex flex-wrap w-1/2 flex-1'>
              {data.topics.map(sc => 
                <Link key={sc.topicSlug} to={`/${data.categorySlug}/${sc.topicSlug}`} className='w-1/4 dark:text-white text-black'>
                  <li className='truncate m-2 dark:bg-gray-950 bg-white p-2 pr-4 py-4 flex justify-center items-center rounded-xl dark:hover:bg-gray-900 hover:bg-gray-200'>
                    {/* FOR TESTING ONLY */}
                    {sc.topicSlug}
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}