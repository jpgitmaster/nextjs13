'use client'
import PageController from './controller'
import '@/styles/global.css'
const ParentPage = () => {
  const {
    // STATES
    content
    // HANDLES
    
  } = PageController();
  const { page } = content
  return (
    <div>
      <h1>{page?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page?.content }} />
    </div>
  )
}

export default ParentPage;