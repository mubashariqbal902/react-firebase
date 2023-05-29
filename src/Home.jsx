import Sidebar from './components/Sidebar'
import Main from './components/Main'
import AllItems from './components/AllItems'

const Home = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/5'>
        <Sidebar />
      </div>
      <div className='w-2/5'>
        <Main />
      </div>
      <div className='w-2/5'>
        <AllItems />
      </div>
    </div>
  )
}

export default Home
