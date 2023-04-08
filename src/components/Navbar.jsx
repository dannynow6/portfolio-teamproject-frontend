import React, {useState} from 'react'

const Navbar = () => {
    const [name, setName] = useState("there");
  return (
    <div className="flex flex-row bg-blue-50 items-center text-xl justify-between w-full h-24 m-4 px-5 shadow-2xl shadow-indigo-500/50">
        Logo 
        <h2>Welcome, {name}</h2>
        <input onChange={(e) => setName(e.target.value)} />
        <div className="flex gap-3 mr-2">
            <a>Home</a>
            <a>About</a>
            <a>Portfolio</a>
            <a>Skills</a> 
        </div>
        
    </div>
  )
}

export default Navbar