import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";

const BoxCars = styled.div`
  border: solid 1px;
  border-radius: 4%;
  width: 200px;
  height: 95px;
  margin: 7px;
`;
const ContainerCars = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;
const TitleCars = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(190, 190, 190, 0.5);
  border-bottom: solid 1px;
`;
const ListCars = styled.li`
  text-decoration: none;
  list-style: none;
`;
const ButtonCars = styled.button`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: white;
  background-color: black;
`;
const Ul = styled.ul`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContainerList = styled.div`
  width: 100%;
`;
const BoxList = styled.div`
  border: solid 2px black;
  overflow-y: scroll;
  height: 500px;
  width: 80%;
`;
const GlobalContainer = styled.section`
  display: flex;
`;
const BoxCarsList = styled.div`
  border: solid 1px;
  border-radius: 4%;
  width: 200px;
  margin: 7px;
`;

class App extends Component {
  state = {
    modelos: [
      {
        nome: "Jetta",
        montadora: "Volkswagen",
        preço: 144,
        tipo: "Sedan",
        id: 1
      },
      {
        nome: "Polo",
        montadora: "Volkswagen",
        preço: 70,
        tipo: "Hatch",
        id: 2
      },
      {
        nome: "T-Cross",
        montadora: "Volkswagen",
        preço: 123,
        tipo: "SUV",
        id: 3
      },
      {
        nome: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146,
        tipo: "SUV",
        id: 4
      },
      {
        nome: "Civic",
        montadora: "Honda",
        preço: 115,
        tipo: "Sedan",
        id: 5
      },
      {
        nome: "Corolla",
        montadora: "Toyota",
        preço: 110,
        tipo: "Sedan",
        id: 6
      },
      {
        nome: "Corolla Cross",
        montadora: "Toyota",
        preço: 184,
        tipo: "SUV",
        id: 7
      },
      {
        nome: "Compass",
        montadora: "Jeep",
        preço: 132,
        tipo: "SUV",
        id: 8
      },
      {
        nome: "Golf GTI",
        montadora: "Volkswagen",
        preço: 138,
        tipo: "Hatch",
        id: 9
      }
    ],
    carrosList: []
  };

  add = (event, id) => {
    event.preventDefault();
    this.setState({
      carrosList: this.state.carrosList.concat(
        this.state.modelos.filter((item) => {
          return item.id == id;
        })
      )
    });
  };

  remove = (event, id) => {
    event.preventDefault();
    this.setState({
      carrosList: this.state.carrosList.filter((item) => {
        return item.id != id;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Loja de Carros!</h1>
        <GlobalContainer>
          <ContainerCars>
            {this.state.modelos.map((item, index) => (
              <BoxCars key={index}>
                <TitleCars>
                  <p>{item.nome}</p>
                  <ButtonCars
                    onClick={(event) => {
                      this.add(event, item.id);
                    }}
                  >
                    +
                  </ButtonCars>
                </TitleCars>
                <Ul>
                  <ListCars>Montadora: {item.montadora}</ListCars>
                  <ListCars>Preço: {item.preço}.000</ListCars>
                  <ListCars>Tipo: {item.tipo}</ListCars>
                </Ul>
              </BoxCars>
            ))}
          </ContainerCars>
          <ContainerList>
            <BoxList>
              {this.state.carrosList.map((item, listening) => (
                <BoxCarsList Key={listening}>
                  <div>
                    <p>{item.nome}</p>
                    <button
                      onClick={(event) => {
                        this.remove(event, item.id);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <p>Tipo: {item.tipo}</p>
                  <p>Preço: {item.preço}.000</p>
                </BoxCarsList>
              ))}
            </BoxList>
            <h2>
              Total: R${this.state.carrosList.reduce((a, b) => a + b.preço, 0)}
              .000
            </h2>
          </ContainerList>
        </GlobalContainer>
      </div>
    );
  }
}
export default App;
