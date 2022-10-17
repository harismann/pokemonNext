import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Typography } from '@mui/material';

interface IProps {
  width: number;
  height: number;
  src: string;
  placeholder: string;
}

const ImageContainter = (props: IProps) => {
  const { width, height, src, placeholder } = props;
  const { palette } = useTheme();
  const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: palette.neutral.light,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: palette.neutral.main
  });

  return (
    <Container>
      {src !== '' && <Image src={src} />}
      {src === '' && <Typography variant="text">{placeholder}</Typography>}
    </Container>
  );
};

export default ImageContainter;
