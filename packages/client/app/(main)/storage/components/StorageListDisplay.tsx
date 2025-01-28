import React from 'react'
import { changeToLocaleTime, changeToTime } from '@/app/utils'
import { TodolistsBySortedDates } from '@/app/types'
import { D2CodingLight } from '@/public/fonts'

interface Props {
  list: TodolistsBySortedDates
}

export function StorageListDisplay({ list }: Props) {
  return (
    <div className="flex flex-col overflow-y-scroll custom-scrollbar">
      {list.map((item) => (
        <div className="p-[1rem] border-b border-gray-200" key={item.date}>
          <div className={`mb-[1.125rem] text-xl ${D2CodingLight.className}`}>{item.date}</div>
          <ul className="flex flex-col gap-[1.5rem] py-0 px-[1.5rem]">
            {item.todolists.map((todolist) => (
              <div key={todolist.id}>
                <div className={`mb-[0.25rem] text-xs text-gray-500 ${D2CodingLight.className}`}>
                  {changeToLocaleTime(todolist.updatedAt, changeToTime)}
                </div>
                <div className="text-md text-black">{todolist.title}</div>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
