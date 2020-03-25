import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />

          <input placeholder="Valor em reais" />

          <button className="button">Cadastrar</button>
        </form>
      </Content>
    </Container>
  );
}
