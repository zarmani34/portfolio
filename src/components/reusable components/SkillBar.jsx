import React from 'react'

const SkillBar = ({percentage}) => {
    console.log(percentage)
  return (
    <div className="w-full h-4 pl-1 py-2 rounded-md bg-transparent border-2 border-[var(--main-color)] flex items-center justify-left">
        <div className="h-3 rounded-sm bg-[var(--main-color)]" style={{ width: percentage }}/>
    </div>
      
    
  )
}

export default SkillBar
