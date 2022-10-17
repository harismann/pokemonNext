import styled from "@emotion/styled";
import Image from "next/image";
import pokeGroup from "../../../public/Assets/poke-group.png";
import { Button } from "@mui/material";

const Container = styled.div`
  margin-left: 142px;
  margin-right: 140px;
  margin-bottom: 124.5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  /* background-color: green; */
  flex-grow: 1;
  order: 0;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 534px;
  height: 368px;
  /* flex-wrap: initial; */
  /* background-color: green; */
`;
const BigText = styled.span`
  font-size: 52px;
  font-weight: 700;
  line-height: 78px;
  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
  }
`;

const ContainerImg = styled.div`
  flex-grow: 1;
  /* height: 400px; */
  align-items: center;
  justify-content: center;
  display: flex;
  order: 1;
  /* background-color: yellow; */
`;

const SpanText = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

function ImageBody() {
  return (
    <Container>
      <ContainerText>
        <BigText>
          All the Pokemon data you&apos;ll ever need in one place
        </BigText>
        <SpanText>Thousands of data compiled into one place</SpanText>
        <Button variant="contained" style={{ backgroundColor: "#E6AB09" }}>
          Check PokeDex
        </Button>
      </ContainerText>
      <ContainerImg>
        <Image src={pokeGroup} alt="Vercel Logo" width={534} height={631.5} />
      </ContainerImg>
    </Container>
  );
}

export default ImageBody;
