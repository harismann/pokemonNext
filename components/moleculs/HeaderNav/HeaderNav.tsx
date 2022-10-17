import Image from "next/image";
import styled from "@emotion/styled";
import logoImg from "../../../public/Assets/logo.png";
import NextLink from "next/link";
import { useRouter } from "next/router";

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const SpanImage = styled.div`
  height: 70px;
  margin-left: 142px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 10px;
  padding: 20px;
`;

const TextLink = styled.a`
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: "none";
  margin: 20px;
`;

const Img = styled.img``;

const HeaderNav = () => {
  const router = useRouter();

  return (
    <ContainerHeader>
      <SpanImage>
        <Image src={logoImg} alt="Vercel Logo" width={167} height={59} />
      </SpanImage>

      <NextLink href="/">
        <TextLink className={router.pathname == "/" ? "activeLink" : ""}>
          Home
        </TextLink>
      </NextLink>
      <NextLink href="/PokemonType">
        <TextLink
          className={router.pathname == "/PokemonType" ? "activeLink" : ""}
        >
          Pokemon Type
        </TextLink>
      </NextLink>
    </ContainerHeader>
  );
};

export default HeaderNav;
