'use client'
import PageController from './controller'
import '@/styles/globals.css'
const ParentPage = () => {
  const {
    // STATES
    content
    // HANDLES
    
  } = PageController();
  const { page } = content
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{page?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page?.content }} />
    </div>
  )
}

export default ParentPage;