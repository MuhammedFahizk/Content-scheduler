
import { useState } from 'react'
import './App.css'
import FormCom from './FormCom'

function App() {
 const  [posts, setPosts] = useState([
  
 ])
 const [ open, setOpen] = useState(false)
 const upcomingPosts = posts.filter(post => new Date(post.time) <= Date.now())
 const sheduledPost = posts.filter(post => new Date(post.time) >= Date.now())

 console.log(posts);
  return (
    <>
    <div className='flex justify-end pt-20 pe-20'>
    <button className='text-green-400 bg-red-600 p-2 rounded-xl  ' onClick={() => setOpen(true)}>
          Add Post
        </button>
    </div>
    { open  ? null : <>
      <h1 className='text-center text-3xl'>All Posts</h1>

    <div className=' grid grid-cols-4 gap-4 mx-10'>
        {sheduledPost && sheduledPost.map((post, index) => {
          return <div className='p-5 rounded-lg shadow-lg ' key={index}>
            <h1>{post.name}</h1>
            <img src={post.ImgLink} alt="no image" className=' h-fit rounded-lg ' />
            <p className='text-black'>{post.description}</p>
            <p className='text-black'>{post.time}</p>

            

          </div>
        })}
      </div>
        <h1 className='text-center text-3xl'>Posts</h1>
      <div className='grid grid-cols-4 px-10'>
      {upcomingPosts && upcomingPosts.map((post, index) => {
          return <div className='p-5 rounded-lg shadow-lg ' key={index}>
            <h1>{post.name}</h1>
            <img src={post.ImgLink} alt="no image" className=' h-fit rounded-lg ' />
            <p className='text-black'>{post.description}</p>
            <p className='text-black'>{post.time}</p>

            

          </div>
        })}
      </div>
      </>}
   

        {open&& <FormCom posts={posts} setOpen={setOpen} setPosts={setPosts}/>
      }
    </>
  )
}

export default App
