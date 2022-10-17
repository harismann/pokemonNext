import styled from "@emotion/styled";
import Image from "next/image";
import poke from "../../../public/Assets/poke2.png";
import { Paper, Box, Chip, Stack } from "@mui/material";
import ChipButton from "../../atoms/chip/ChipButton";

const Container = styled.div``;

const PaperContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const ContainerImg = styled.div`
  flex-grow: 1;
  /* height: 400px; */
  align-items: center;
  justify-content: center;
  display: flex;
  order: 1;
  /* background-color: yellow; */
  padding-left: 25.7px;
  padding-right: 25.7px;
  padding-top: 45.5px;
`;

const Text = styled.span`
  padding: 10px 25px 5px 25px;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
`;

const PokeName = styled.span`
  padding: 0 25px 10px 25px;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;

// const Box = styled.div``;

function PokemonDetail() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 325.33,
            height: 550,
            borderRadius: "25px",
          },
        }}
      >
        <Paper elevation={0}>
          <PaperContainer>
            <ContainerImg>
              <Image src={poke} alt="pokemon" />
            </ContainerImg>
            <PokeName>Poke Name</PokeName>
            <Text>#001</Text>
          </PaperContainer>
          <Stack spacing={2} alignItems="center">
            <Stack direction="row" spacing={3}>
              <ChipButton label="Type 1" chipColor="warning" />
              <ChipButton label="Type 2" chipColor="error" />
            </Stack>
            <Stack direction="row" spacing={3}>
              <ChipButton label="Type 3" chipColor="success" />
              <ChipButton label="Type 4" chipColor="secondary" />
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default PokemonDetail;
