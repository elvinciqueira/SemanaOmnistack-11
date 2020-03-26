import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";
import { FiLogIn } from "react-icons/fi";

import { Container } from "./styles";

import api from "../../services/api";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Login() {
  const history = useHistory();

  async function handleLogin({ id }) {
    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      toast.error("Falha no login, tente novamente");
    }
  }

  return (
    <Container>
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <Input name="id" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
