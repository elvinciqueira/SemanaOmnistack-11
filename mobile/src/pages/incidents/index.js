import React from "react";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  HeaderText,
  Title,
  TextBold,
  Description,
  Incident,
  IncidentList,
  IncidentValue,
  IncidentProperty,
  DetailsButton,
  DetailsButtonText
} from "./styles";

import logoImg from "../../assets/logo.png";

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate("Detail");
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <TextBold> 0 casos </TextBold>
        </HeaderText>
      </Header>

      <Title>Bem-Vindo!</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>APAD</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>Cadelinha atropelada</IncidentValue>

            <IncidentProperty>Valor:</IncidentProperty>
            <IncidentValue>R$ 120,00 </IncidentValue>

            <DetailsButton onPress={navigateToDetail}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}
