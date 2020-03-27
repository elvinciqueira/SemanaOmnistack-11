import React from "react";
import { useNavigation } from "@react-navigation/native";
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
  const message =
    'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Héroi: cadelinha atropelada",
      recipients: ["elvinciqueira@gmail.com"],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=(+11)1111111&text=${message}`);
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
        <IncidentValue>APAD</IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>Cadelinha atropelada</IncidentValue>

        <IncidentProperty>Valor:</IncidentProperty>
        <IncidentValue>R$ 120,00 </IncidentValue>
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
