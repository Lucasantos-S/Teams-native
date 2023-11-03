import React from "react";
import { Container } from "./styles";
import { Header } from "@/components/Header";
import { Highligth } from "@/components/Highligth";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highligth
        title="Nome da turma"
        subTitle="adicione a galera e separe os times"
      />
    </Container>
  );
}