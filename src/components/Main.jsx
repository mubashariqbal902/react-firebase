import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import SelectionGroup from './SelectionGroup'

export default function Main () {
  return (
    <div className='my-10'>
      <div className='flex justify-between items-center my-5'>
        <div className='font-bold'>Target Traits</div>
        <div className='bg-gray-50 border border-gray-300 px-3 py-2.5'>
          <select
            id='countries'
            className='bg-transparent block text-sm focus:outline-none'
          >
            <option value={'AND'}>AND</option>
            <option value={'OR'}>OR</option>
          </select>
        </div>
      </div>

      <SelectionGroup />
      <div className='flex-justif'>
        <div className='bg-gray-50 border border-gray-300 px-3 py-2.5 wfull flex justify-center items-center cursor-pointer my-3'>
          +
        </div>
      </div>
      <div>
        <button className='bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 border border-blue-700 rounded flex items-center gap-2'>
          <FaPlusCircle />
          Run & Save
        </button>
      </div>
    </div>
  )
}
