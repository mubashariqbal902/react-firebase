import React from 'react'

export default function SelectionGroup () {
  return (
    <div className='flex justify-between gap-5'>
      <div className='border-2 flex-grow px-2 flex items-center'>
        <select
          id='countries'
          className='bg-transparent w-full block text-sm focus:outline-none'
        >
          <option value={'Canada'}>Canada</option>
        </select>
      </div>
      <div className='border-2 text-2xl px-2 flex items-center'>
        <select
          id='countries'
          className='bg-transparent w-full block text-sm focus:outline-none'
        >
          <option value={'is'}>IS</option>
          <option value={'not'}>Not</option>
        </select>
      </div>
      <div className='bg-gray-50 border border-gray-300 px-3 py-2.5 flex-grow'>
        <select
          id='countries'
          className='bg-transparent block w-full text-sm focus:outline-none'
        >
          <option value={'African Amercian'}>African Amercian</option>
        </select>
      </div>
    </div>
  )
}
