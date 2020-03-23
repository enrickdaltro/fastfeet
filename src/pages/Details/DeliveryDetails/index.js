import React from 'react';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  BackgroundPurple,
  Content,
  Container,
  Card,
  CardSituation,
  CardHeader,
  HeaderText,
  CardContent,
  ContentLabel,
  ContentText,
  Dates,
  Box,
  DateStart,
  ButtonBoxLeft,
  ButtonBoxCenter,
  ButtonBoxRight,
  Button,
  ButtonLabel,
  ButtonText,
} from './styles';

export default function DeliveryDetails({ route, navigation }) {
  const { data } = route.params;

  function handleAddProblem(data) {
    navigation.navigate('Problems', { data });
  }

  return (
    <Container>
      <BackgroundPurple>
        <Content>
          <Card>
            <CardHeader>
              <Icon name="local-shipping" size={24} color="#7d40e7" />
              <HeaderText>Informações da entrega</HeaderText>
            </CardHeader>

            <CardContent>
              <ContentLabel>DESTINATÁRIO</ContentLabel>
              <ContentText>{data.recipient.name}</ContentText>

              <ContentLabel>ENDEREÇO DE ENTREGA</ContentLabel>
              <ContentText>
                {data.recipient.street}, {data.recipient.number},{' '}
                {data.recipient.city} - {data.recipient.state},{' '}
                {data.recipient.zipcode}
              </ContentText>

              <ContentLabel>PRODUTO</ContentLabel>
              <ContentText>{data.product}</ContentText>
            </CardContent>
          </Card>

          <CardSituation>
            <CardHeader>
              <Icon name="date-range" size={24} color="#7d40e7" />
              <HeaderText>Situação da entrega</HeaderText>
            </CardHeader>

            <CardContent>
              <ContentLabel>STATUS</ContentLabel>
              <ContentText>
                {data.start_date && !data.end_date
                  ? 'A caminho do destinatário'
                  : !data.start_date && !data.end_date && !data.canceled_at
                  ? 'Pendente'
                  : 'Entregue'}
              </ContentText>

              <Dates>
                <DateStart>
                  <ContentLabel>DATA DE RETIRADA</ContentLabel>
                  <ContentText>
                    {data.start_date
                      ? format(parseISO(data.start_date), 'dd/MM/yyyy', {
                          locale: pt,
                        })
                      : '--/--/----'}
                  </ContentText>
                </DateStart>
                <DateStart>
                  <ContentLabel>DATA DE ENTREGA</ContentLabel>
                  <ContentText>
                    {data.end_date
                      ? format(parseISO(data.end_date), 'dd/MM/yyyy', {
                          locale: pt,
                        })
                      : '--/--/----'}
                  </ContentText>
                </DateStart>
              </Dates>
            </CardContent>
          </CardSituation>

          <Box>
            <ButtonBoxLeft>
              <Button onPress={() => handleAddProblem(data)}>
                <Icon name="report-problem" size={26} color="#E74040" />
                <ButtonLabel>
                  <ButtonText>Informar Problema</ButtonText>
                </ButtonLabel>
              </Button>
            </ButtonBoxLeft>

            <ButtonBoxCenter>
              <Button>
                <Icon name="info-outline" size={26} color="#e7ba40" />
                <ButtonLabel>
                  <ButtonText>Visualizar Problemas</ButtonText>
                </ButtonLabel>
              </Button>
            </ButtonBoxCenter>

            <ButtonBoxRight>
              <Button>
                <Icon name="check" size={26} color="#7d40e7" />
                <ButtonLabel>
                  <ButtonText>Confirmar Entrega</ButtonText>
                </ButtonLabel>
              </Button>
            </ButtonBoxRight>
          </Box>
        </Content>
      </BackgroundPurple>
    </Container>
  );
}
