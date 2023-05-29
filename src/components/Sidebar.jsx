import { FiFilter, FiLink, FiCreditCard } from 'react-icons/fi'
import { FaUserCircle } from 'react-icons/fa'

export default function sidebar () {
  const links = [
    {
      icon: <FiFilter />,
      title: 'Segmenter'
    },
    {
      icon: <FiLink />,
      title: 'Data Links'
    },
    {
      icon: <FaUserCircle />,
      title: 'Account'
    },
    {
      icon: <FiCreditCard />,
      title: 'Logout'
    }
  ]
  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      ></button>

      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            {links.map(item => {
              return (
                <li key={item.title}>
                  <div className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'>
                    {item.icon}
                    <span className='ml-3'>{item.title}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}
