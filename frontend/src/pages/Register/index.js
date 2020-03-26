import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Form, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";

import api from "../../services/api";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const history = useHistory();

  async function handleSubmit(data) {
    try {
      const response = await api.post("ongs", data);

      toast.success(`Seu ID de acesso: ${response.data.id}`);

      history.push("/");
    } catch (error) {
      toast.error("Erro no cadastro, tente novamente");
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar</h1>
          <p>
            Faça seu Cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o login
          </Link>
        </section>

        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="WhatsApp" />

          <div>
            <Input name="city" placeholder="Cidade" />
            <Input name="uf" placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button">Cadastrar</button>
        </Form>
      </Content>
    </Container>
  );
}
