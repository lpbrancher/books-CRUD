import { Link } from "react-router-dom"
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'

function BookSingleCard({book}) {
    return (
        <div key={book._id} className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
            <div className="flex justify-between align-center">
                <h2 className="text-1xl">
                    {book.publishYear}
                </h2>
                <h4 className="text-gray-500">{book._id}</h4>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-red-300 text-2xl" />
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-end items-center gap-x-2 mt-4 p-4">
                <Link className="mx-1" to={`/books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link className="mx-1" to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link className="mx-1" to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
            </div>
        </div>
    )
}

export default BookSingleCard