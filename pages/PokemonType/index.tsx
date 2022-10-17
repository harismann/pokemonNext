import styled from "@emotion/styled";
import HeaderLang from "../../components/moleculs/HeaderLang/HeaderLang";
import HeaderNav from "../../components/moleculs/HeaderNav/HeaderNav";
import { Link, Box, Paper, Stack, Pagination } from "@mui/material";
import Image from "next/image";
import Poke from "../../public/Assets/poke2.png";
import ChipButton from "../../components/atoms/chip/ChipButton";
import { makeStyles } from "@mui/styles";

const ContainerPokType = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 142px;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextLink = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const WrapMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
`;

const BigText = styled.span`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  padding: 15px;
  /* border-bottom: 0.5px solid black; */
  box-shadow: 0px 24px 3px -24px black;
`;

const WrapImage = styled.div`
  display: flex;
  width: 210px;
  height: 100%;
  border-right: 0.5px solid black;
`;

const WrapperTImage = styled.div`
  border-radius: 10;
  border-right: 0.5px solid black;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
`;

const TextImage = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 270px;
  height: 100%;
`;

const TextTotal = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: red;
`;

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      "&.MuiPagination-outlined": {
        "&.Mui-selected": {
          background: "red",
          color: "#E6AB09",
          // borderRadius: '50%',
        },
      },
    },
  },
  root: {
    "& > *": {
      marginTop: 10,
    },
    "& .MuiPaginationItem-icon": {
      // backgroundColor: "yellow",
      color: "red",
      borderColor: "red",
    },
    "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)":
      {
        backgroundColor: "transparent",
        color: "red",
        borderColor: "red",
      },
  },
}));

const PokemonType = () => {
  const classes = useStyles();

  return (
    <div>
      <HeaderLang />
      <HeaderNav />
      <ContainerPokType>
        <ContainerMenu>
          <TextLink>Pokemon Type</TextLink>
          <ul>
            <li>
              <Link href="#" underline="hover" color="inherit">
                Pokemon Type 1
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" color="inherit">
                Pokemon Type 2
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" color="inherit">
                Pokemon Type 3
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" color="inherit">
                Pokemon Type 4
              </Link>
            </li>
          </ul>
        </ContainerMenu>

        <WrapMenu>
          <BigText>Pokemon Type 1</BigText>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 866,
                boxShadow: 20,
              },
            }}
          >
            <Paper elevation={0}>
              <ImageContainer>
                <TableContainer>
                  <WrapImage>
                    <Image src={Poke} alt="pokemon" width={100} height={100} />
                  </WrapImage>
                  <WrapperTImage style={{ width: "120px" }}>
                    <TextImage>#001</TextImage>
                  </WrapperTImage>
                  <WrapperTImage>
                    <TextImage>Pokemon Name</TextImage>
                  </WrapperTImage>
                  <WrapperButton>
                    <ChipButton label="Type 1" chipColor="success" />
                    <ChipButton label="Type 2" chipColor="error" />
                  </WrapperButton>
                </TableContainer>
                <TableContainer>
                  <WrapImage>
                    <Image src={Poke} alt="pokemon" width={100} height={100} />
                  </WrapImage>
                  <WrapperTImage style={{ width: "120px" }}>
                    <TextImage>#001</TextImage>
                  </WrapperTImage>
                  <WrapperTImage>
                    <TextImage>Pokemon Name</TextImage>
                  </WrapperTImage>
                  <WrapperButton>
                    <ChipButton label="Type 1" chipColor="success" />
                    <ChipButton label="Type 2" chipColor="error" />
                  </WrapperButton>
                </TableContainer>
                <TableContainer>
                  <WrapImage>
                    <Image src={Poke} alt="pokemon" width={100} height={100} />
                  </WrapImage>
                  <WrapperTImage style={{ width: "120px" }}>
                    <TextImage>#001</TextImage>
                  </WrapperTImage>
                  <WrapperTImage>
                    <TextImage>Pokemon Name</TextImage>
                  </WrapperTImage>
                  <WrapperButton>
                    <ChipButton label="Type 1" chipColor="success" />
                    <ChipButton label="Type 2" chipColor="error" />
                  </WrapperButton>
                </TableContainer>
                <TableContainer>
                  <WrapImage>
                    <Image src={Poke} alt="pokemon" width={100} height={100} />
                  </WrapImage>
                  <WrapperTImage style={{ width: "120px" }}>
                    <TextImage>#001</TextImage>
                  </WrapperTImage>
                  <WrapperTImage>
                    <TextImage>Pokemon Name</TextImage>
                  </WrapperTImage>
                  <WrapperButton>
                    <ChipButton label="Type 1" chipColor="success" />
                    <ChipButton label="Type 2" chipColor="error" />
                  </WrapperButton>
                </TableContainer>
                <TableContainer>
                  <WrapImage>
                    <Image src={Poke} alt="pokemon" width={100} height={100} />
                  </WrapImage>
                  <WrapperTImage style={{ width: "120px" }}>
                    <TextImage>#001</TextImage>
                  </WrapperTImage>
                  <WrapperTImage>
                    <TextImage>Pokemon Name</TextImage>
                  </WrapperTImage>
                  <WrapperButton>
                    <ChipButton label="Type 1" chipColor="success" />
                    <ChipButton label="Type 2" chipColor="error" />
                  </WrapperButton>
                </TableContainer>
                <TableContainer>
                  <WrapImage>
                    <Image src={Poke} alt="pokemon" width={100} height={100} />
                  </WrapImage>
                  <WrapperTImage style={{ width: "120px" }}>
                    <TextImage>#001</TextImage>
                  </WrapperTImage>
                  <WrapperTImage>
                    <TextImage>Pokemon Name</TextImage>
                  </WrapperTImage>
                  <WrapperButton>
                    <ChipButton label="Type 1" chipColor="success" />
                    <ChipButton label="Type 2" chipColor="error" />
                  </WrapperButton>
                </TableContainer>
              </ImageContainer>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="space-around"
                alignItems="center"
                style={{ padding: "30px" }}
              >
                <TextTotal>PerPage</TextTotal>
                <Pagination
                  style={{ color: "white" }}
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                  className={classes.root}
                  classes={{ ul: classes.ul }}
                />
                <TextTotal>Total Data : 9999</TextTotal>
              </Stack>
            </Paper>
          </Box>
        </WrapMenu>
      </ContainerPokType>
    </div>
  );
};

export default PokemonType;
