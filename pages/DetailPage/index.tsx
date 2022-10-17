import type { NextPage } from "next";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import ImageContainter from "../../components/moleculs/ImageContainter";
import { Typography } from "@mui/material";
import CircleContainer from "../../components/moleculs/CircleContainter";
import ImageContainterCircle from "../../components/moleculs/ImageContainterCircle";
import { IconArrowRight } from "../../components/atoms/icons/icons";

const Home: NextPage = () => {
  const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    padding: "80px 140px",
  });
  const SectionMain = styled.div({
    display: "flex",
    flexDirection: "row",
    gap: "26px",
    marginBottom: "60px",
  });
  const SectionOther = styled.div({
    display: "flex",
    flexDirection: "column",
    marginBottom: "45px",
    gap: "20px",
  });
  const SectionMainContent = styled.div({
    marginTop: "46px",
  });
  const ContainerRowMain = styled.div({
    display: "flex",
    flexDirection: "row",
    marginBottom: "20.4px",
    ".label": {
      width: "125px",
    },
    ".value": {
      width: "222px",
    },
    ul: {
      margin: 0,
    },
  });
  const ContainerRowOther = styled.div({
    display: "flex",
    flexDirection: "row",
    gap: 25,
  });
  const ContainerRowOtherEvolution = styled.div({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    paddingLeft: "10px",
  });
  const ContainerContent = styled.div({
    width: "217px",
    textAlign: "center",
  });
  const ContainerIcon = styled.div({
    width: "47px",
  });
  const { palette } = useTheme();
  return (
    <Container>
      <SectionMain>
        <ImageContainter
          src=""
          width={400}
          height={400}
          placeholder="Pokemon Picture Placeholder"
        />
        <div>
          <Typography variant="titleMedium">Pokemon Name</Typography>
          <SectionMainContent>
            <ContainerRowMain>
              <ContainerRowMain>
                <Typography
                  variant="textBold"
                  className="label"
                  component="div"
                >
                  Weight:
                </Typography>
                <Typography className="value" variant="text" component="div">
                  9999
                </Typography>
              </ContainerRowMain>
              <ContainerRowMain>
                <Typography
                  className="label"
                  variant="textBold"
                  component="div"
                >
                  Height:
                </Typography>
                <Typography className="value" variant="text" component="div">
                  9999
                </Typography>
              </ContainerRowMain>
            </ContainerRowMain>
            <ContainerRowMain>
              <Typography variant="textBold" className="label" component="div">
                Abilities:
              </Typography>
              <ul>
                <li>
                  <Typography className="value" variant="text">
                    Abilities 1
                  </Typography>
                </li>
                <li>
                  <Typography className="value" variant="text">
                    Abilities 2
                  </Typography>
                </li>
              </ul>
            </ContainerRowMain>
            <ContainerRowMain>
              <Typography variant="textBold" className="label" component="div">
                Type:
              </Typography>
            </ContainerRowMain>
          </SectionMainContent>
        </div>
      </SectionMain>
      <SectionOther>
        <Typography variant="textBold">Other Images:</Typography>
        <ContainerRowOther>
          <ImageContainter
            src=""
            width={169}
            height={169}
            placeholder="Other Pokemon Spirits"
          />
          <ImageContainter
            src=""
            width={169}
            height={169}
            placeholder="Other Pokemon Spirits"
          />
          <ImageContainter
            src=""
            width={169}
            height={169}
            placeholder="Other Pokemon Spirits"
          />
          <ImageContainter
            src=""
            width={169}
            height={169}
            placeholder="Other Pokemon Spirits"
          />
          <ImageContainter
            src=""
            width={169}
            height={169}
            placeholder="Other Pokemon Spirits"
          />
          <ImageContainter
            src=""
            width={169}
            height={169}
            placeholder="Other Pokemon Spirits"
          />
        </ContainerRowOther>
      </SectionOther>
      <SectionOther>
        <Typography variant="textBold">Stats:</Typography>
        <ContainerRowOther>
          <CircleContainer
            width={169}
            height={169}
            label="stat 1"
            value="60"
            color={palette.blue.main}
          />
          <CircleContainer
            width={169}
            height={169}
            label="stat 1"
            value="60"
            color={palette.orange.main}
          />
          <CircleContainer
            width={169}
            height={169}
            label="stat 1"
            value="60"
            color={palette.yellow.main}
          />
          <CircleContainer
            width={169}
            height={169}
            label="stat 1"
            value="60"
            color={palette.green.main}
          />
          <CircleContainer
            width={169}
            height={169}
            label="stat 1"
            value="60"
            color={palette.purple.main}
          />
          <CircleContainer
            width={169}
            height={169}
            label="stat 1"
            value="60"
            color={palette.red.main}
          />
        </ContainerRowOther>
      </SectionOther>
      <SectionOther>
        <Typography variant="textBold">Evolution</Typography>
        <ContainerRowOtherEvolution>
          <ContainerContent>
            <ImageContainterCircle
              name="Pokemon evalution state 1"
              src=""
              placeholder="Pokemon evolution state 1 image"
              width={197}
              height={197}
              color={palette.green.main}
            />
          </ContainerContent>
          <ContainerIcon>
            <IconArrowRight />
          </ContainerIcon>
          <ContainerContent>
            <ImageContainterCircle
              name="Pokemon evalution state 1"
              src=""
              placeholder="Pokemon evolution state 1 image"
              width={197}
              height={197}
              color={palette.yellow.main}
            />
          </ContainerContent>
          <ContainerIcon>
            <IconArrowRight />
          </ContainerIcon>
          <ContainerContent>
            <ImageContainterCircle
              name="Pokemon evalution state 1"
              src=""
              placeholder="Pokemon evolution state 1 image"
              width={197}
              height={197}
              color={palette.orange.main}
            />
          </ContainerContent>
          <ContainerIcon>
            <IconArrowRight />
          </ContainerIcon>
          <ContainerContent>
            <ImageContainterCircle
              name="Pokemon evalution state 1"
              src=""
              placeholder="Pokemon evolution state 1 image"
              width={197}
              height={197}
              color={palette.red.main}
            />
          </ContainerContent>
        </ContainerRowOtherEvolution>
        <ContainerRowOtherEvolution>
          <ContainerContent>
            <Typography variant="textBold">
              Pokemon evolution state 1 name
            </Typography>
          </ContainerContent>
          <ContainerIcon />
          <ContainerContent>
            <Typography variant="textBold">
              Pokemon evolution state 1 name
            </Typography>
          </ContainerContent>
          <ContainerIcon />
          <ContainerContent>
            <Typography variant="textBold">
              Pokemon evolution state 1 name
            </Typography>
          </ContainerContent>
          <ContainerIcon />
          <ContainerContent>
            <Typography variant="textBold">
              Pokemon evolution state 1 name
            </Typography>
          </ContainerContent>
          <ContainerIcon />
        </ContainerRowOtherEvolution>
      </SectionOther>
    </Container>
  );
};

export default Home;
