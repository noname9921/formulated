import categoryMetadata from '../pageData/index.json'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { dark, toggle } = useTheme()
  return (
    <div className="w-3xs h-screen dark:bg-gray-950 bg-white sticky top-0 flex flex-col">
      <div>
        <h2 className="dark:text-white text-black text-3xl font-extrabold mx-4 mt-4 md-0">Formulated</h2>
      </div>
      <p className="dark:text-white text-black text-xl font-medium mx-4 md-4 mt-0">Remastered</p>
      <ul className='flex flex-col'>
        {
          categoryMetadata.map(md => 
            <Link key={md.categorySlug} to={`/${md.categorySlug}`} prefetch='intent'>
              <li className="dark:text-white text-black block text-base p-4 py-2 caret-transparent transition-colors duration-100 cursor-pointer ease-in-out dark:bg-gray-950 bg-white dark:hover:bg-gray-900 hover:bg-gray-300 w-full" key={md.categorySlug}>{md.categoryTitle}</li>
            </Link>
          )
        }
      </ul>
      <button onClick={toggle} className='mt-auto mx-auto dark:bg-gray-900 rounded-xl bg-gray-200 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 w-1/4 h-8 mb-4'>        
        {dark ? '🌙' : '☀️'}
      </button>
    </div>
  )
}