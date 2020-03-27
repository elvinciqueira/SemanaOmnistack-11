import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, TouchableOpacity, Linking } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Header,
  Incident,
  IncidentValue,
  IncidentProperty,
  LinkButton,
  LinkButtonText,
  ContactLink,
  ContactBox,
  Description,
  Title
} from "./styles";

import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Olá ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Héroi: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </Header>

      <Incident>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>Valor:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <ContactBox>
        <Title>Salve o dia!</Title>
        <Title>Seja um héroi desse caso.</Title>
        <Description>Entre em contato</Description>

        <ContactLink>
          <LinkButton onPress={sendWhatsapp}>
            <LinkButtonText>Whatsapp</LinkButtonText>
          </LinkButton>
          <LinkButton onPress={sendMail}>
            <LinkButtonText>E-mail</LinkButtonText>
          </LinkButton>
        </ContactLink>
      </ContactBox>
    </Container>
  );
}
