// Formulario.js
import { useState } from "react";
import logo from "./assets/react.svg";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidosChange = (e) => {
    setApellidos(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Las contraseñas no coinciden.");
      alert("Las contraseñas no coinciden.");
      return;
    }

    const nuevoUsuario = {
      nombre,
      apellidos,
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (response.ok) {
        console.log("Usuario registrado con éxito.");
        // alert("Usuario registrado con éxito.");
      } else {
        console.error("Error al registrar el usuario.");
        alert("Error al registrar el usuario.");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    return; // return <Redirect to="/Login.jsx" />;
  };

  return (
    <div className=" grid-rows-16 w-screen h-screen fixed text-center">
      <form
        className=" shadow-md rounded grid-rows-16 mx-auto text-center my-auto bg-sky-100 w-fit p-4 mt-[25vh]"
        onSubmit={handleSubmit}
      >
        <img
          className="py 8 animate-spin mx-auto h-10 w-auto"
          src={logo}
          alt="Your Company"
        />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Name:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          required
        />

        <br />

        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          2n name:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="text"
          value={apellidos}
          onChange={handleApellidosChange}
          required
        />

        <br />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Email:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <br />
        <label className="block  py-5 tracking-tight text-3xl font-medium">
          Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <br />
        <label className="py-5 tracking-tight block text-3xl font-medium leading-6 text-gray-900">
          Confirm Password:
        </label>
        <input
          className="border-inherit border-solid border-2 rounded w-80 text-center"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />

        <br />
        <div className="bg-sky-100 pt-10 pb-5">
          <button
            className="bg-blue-400 text-white rounded w-80 text-3xl font-medium py-1"
            type="submit"
          >
            Register
          </button>

          <p>
            ¿Ya tienes una cuenta? <link rel="stylesheet" href="" />
            Iniciar sesión
          </p>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
