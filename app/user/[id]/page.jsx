//import { useParams } from "next/navigationuse";

async function darUsuarios(id) {
  const respuesta = await fetch(`https://reqres.in/api/users/${id}`);
  const datos = await respuesta.json();
  //console.log("datos:", datos);
  return datos.data;
}

async function PageUser({ params }) {
  //console.log("params", params);
  const usuarioMostrar = await darUsuarios(params.id);
  console.log("usuarioMostrar", usuarioMostrar);
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={usuarioMostrar.avatar} alt="avartar" />
          </div>
          <div className="card-body text-center">
            <h3>
              Nombre: {usuarioMostrar.first_name} {usuarioMostrar.last_name}{" "}
            </h3>
            <p> Gmail: {usuarioMostrar.email} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageUser;
