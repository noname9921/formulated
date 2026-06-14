import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Prerequisite from './pages/Prerequisite'
import Category from './pages/Category'
import Topic from './pages/Topic'

const categoriesModules = import.meta.glob('./pageData/categories/*.json', { eager: true })
const mdModules = import.meta.glob('./pageData/categories/**/*.md', { query: '?raw', import: 'default', eager: true })

const router = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/prerequisite', element: <Prerequisite/> },
  {
    path: '/:categorySlug',
    element: <Category/>,
    loader: ({ params }) => {
      const mod = categoriesModules[`./pageData/categories/${params.categorySlug}.json`] as any
      return mod.default ?? mod
    }
  },
  {
    path: '/:categorySlug/:topicSlug',
    element: <Topic/>,
    loader: ({ params }) => {
      const { categorySlug, topicSlug } = params
      const md = mdModules[`./pageData/categories/${categorySlug}/${topicSlug}.md`] as any

      return md
    }
  }
], {
  future: {
    unstable_viewTransition: true
  }
})

export default function App() {
  return <RouterProvider router={router}/>
}