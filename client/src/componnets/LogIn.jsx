import { Entry, Button } from "./ModulesForm";
import * as Yup from "yup";
import { Form, Formik, useFormik } from "formik";

export const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .max(100, "El maximo número de caracteres es 100")
        .required("El correo es requerido"),
      contraseña: Yup.string().max(32).required("La contraseña es requerida"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="ali">
      <div className="form-cont">
        <form>
          <div className="form-title">Iniciar sesión</div>
          <Entry Name={"Email"} Type={"Email"}></Entry>
          <Entry Name={"Contraseña"} Type={"Password"}></Entry>
          <Button value={"Entrar"} dest={"../home"} btnclass={"prime-btn"} />
        </form>
      </div>
    </div>
  );
};
