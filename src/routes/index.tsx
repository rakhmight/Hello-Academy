import Home from '@/views/home/Home'
import DOS from '@/views/dos/DOS'
import BF from '@/views/bf/BF'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dos' element={<DOS />} />
      <Route path='/bf' element={<BF />} />
    </Routes>
)
  
  export default AppRoutes