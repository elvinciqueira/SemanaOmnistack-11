import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Form, Input, Textarea } from "@rocketseat/unform";
import { toast } from "react-toastify";

import { Container, Content } from "./styles";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleNewIncident(data) {
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (error) {
      toast.error("Erro ao cadastrar caso, tente novamente.");
    }
  }

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

        <Form onSubmit={handleNewIncident}>
          <Input name="title" placeholder="Titulo do caso" />
          <Textarea name="description" placeholder="Descrição" />

          <Input name="value" placeholder="Valor em reais" />

          <button className="button">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
