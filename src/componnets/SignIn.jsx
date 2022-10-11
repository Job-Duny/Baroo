import { Entry, Button } from './ModulesForm';

export const SignIn = () => {
    return (
        <div className="ali">
            <div className='form-cont'>
                <form method='post'>
                    <div className="form-title">Crear cuenta</div>
                    <Entry Name={"Nombre"} Type={'Text'}></Entry>
                    <Entry Name={"Email"} Type={'Email'}></Entry>
                    <Entry Name={"Contraseña"} Type={'Password'}></Entry>
                    <Entry Name={"Confirmar contraseña"} Type={'Password'}></Entry>
                    <Button value={"Continuar"} dest={'../Home'} btnclass={"prime-btn"}/>
                </form>
            </div>
        </div>
            
    )
}
