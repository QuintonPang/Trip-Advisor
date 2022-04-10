import React from 'react'
import { SiTripadvisor } from 'react-icons/si'
const AppBar = () => {
  return (
    <div className="flex gap-2 w-full bg-red-500">
        <div className="p-5 flex gap-2">
            <div className="text-white text-3xl uppercase">
                Trip Advisor
            </div>
            <div className="ml-2">
                <SiTripadvisor fontSize={35} className="text-white"/>
            </div>
        </div>
    </div>
  )
}

export default AppBar