import { Entry, Button } from './ModulesForm';

export const LogIn = () => {
  return (
    <div className="ali">
      <div className='form-cont'>
        <form>
          <div className="form-title">Iniciar sesión</div>
            <Entry Name={"Email"} Type={'Email'}></Entry>
            <Entry Name={"Contraseña"} Type={'Password'}></Entry>
            <Button value={"Entrar"} dest={'../Home'} btnclass={"prime-btn"}/>
        </form>
      </div>
    </div>
    
  )
}
