import React from 'react'
import HeaderLink from './link'
import { cn } from '@/lib/utils'


interface OptionsInterface {
    schools: School[]
    active: boolean
    handleClick: () => void
}
function Options({schools, active, handleClick}:OptionsInterface) {
  return (
    <div
                className={cn(
                    "absolute -top-80 z-10 flex w-full flex-wrap gap-8 bg-primary/60 px-16 py-4 backdrop-blur-sm transition-all duration-500",
                    active ? "" : "translate-y-[26rem]",
                )}
            >
                {schools.map(school  => (
                    <HeaderLink onClick={handleClick} key={school.id} school={school} />
                ))}
            </div>
  )
}

export default Options