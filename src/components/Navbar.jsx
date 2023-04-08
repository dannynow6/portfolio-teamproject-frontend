import React, {useState} from 'react'

const Navbar = () => {
    const [name, setName] = useState("there");
  return (
    <div className="flex flex-row bg-rose-50 items-center text-xl justify-between w-full h-24 px-5">
        Logo 
        <h2>Welcome, {name}</h2>
        <input onChange={(e) => setName(e.target.value)} />
        <div className="flex gap-3">
            <a>Home</a>
            <a>About</a>
            <a>Portfolio</a>
            <a>Skills</a> 
        </div>
        
    </div>
  )
}

export default Navbar