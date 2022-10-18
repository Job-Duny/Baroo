import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Index } from './Index'
import { LogIn } from './LogIn'
import { SignIn } from './SignIn'
import { Perfiles} from './Perfiles'

export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='login' element={<LogIn/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='perfiles' element={<Perfiles/>}/>
    </Routes>
  )
}

export default App;
