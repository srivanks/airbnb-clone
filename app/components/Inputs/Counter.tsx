import React, { useCallback } from 'react'
import {
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai'

interface CounterProps {
  title: string
  subTitle: string
  value: number
  onChange: (value: number) => void
}

function Counter({
  onChange,
  subTitle,
  title,
  value,
}: CounterProps) {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [value, onChange])
  const onReduce = useCallback(() => {
    onChange(value - 1)
  }, [value, onChange])
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">
          {subTitle}
        </div>
        <div className="flex flex-row items-center gap-4">
          <div
            onClick={onReduce}
            className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover-opacity-80 transition"
          >
            <AiOutlineMinus />
          </div>
          <div className="font-light text-xl text-neutral-600"></div>
          <div
            onClick={onAdd}
            className="w-10 h-10 rounded-full border-[1px] flex items-center justify-center text-neutral-600 cursor-pointer hover-opacity-80 transition"
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
