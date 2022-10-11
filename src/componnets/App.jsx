import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Index } from './Index'
import { LogIn } from './LogIn'
import { SignIn } from './SignIn'

export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='LogIn' element={<LogIn/>}/>
        <Route path='Signin' element={<SignIn/>}/>
        <Route path='Home' element={<Home/>}/>
    </Routes>
  )
}

export default App;
