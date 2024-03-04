import User from "../componentes/users";
import React from "react";

async function fechtUser() {
  const resultado = await fetch("https://reqres.in/api/users");
  const datos = await resultado.json();
  return datos.data;
}

async function IndexPage() {
  const user = await fechtUser();

  return <User users={user} />;
}

export default IndexPage;
