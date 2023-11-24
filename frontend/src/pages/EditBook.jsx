import { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function EditBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(()=>{
    setLoading(true)
    console.log(`${id}`)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      console.log(response.data)
      setAuthor(response.data.author)
      setTitle(response.data.title)
      setPublishYear(response.data.publishYear)
      setLoading(false)
    })
    .catch((error)=>{
      setLoading(false)
      alert('An error happened, check the console!')
      console.log(error)
    })
  }, [])
  const handleEditBook = ()=>{
   const data = {
    title,
    author,
    publishYear
   };
   setLoading(true)
   axios.put(`http://localhost:5555/books/${id}`, data)
   .then(()=>{
    setLoading(false)
    navigate('/')
   })
   .catch((error)=>{
    setLoading(false)
    alert('Oops! An error happened. Please, check the console')
    console.log(error)
   })
  }
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit book</h1>
      {loading ? <Spinner /> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Title</label>
          <input className='border-2 border-gray-500 px-4 py-2 w-full'
          type='text'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Author</label>
          <input className='border-2 border-gray-500 px-4 py-2 w-full'
          type='text'
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input className='border-2 border-gray-500 px-4 py-2 w-full'
          type='number'
          value={publishYear}
          onChange={(e)=>setPublishYear(e.target.value)}
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook