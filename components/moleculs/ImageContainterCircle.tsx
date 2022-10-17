import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Typography } from '@mui/material';

interface IProps {
  width: number;
  height: number;
  src: string;
  placeholder: string;
  color: string;
  name: string;
}

const ImageContainterCircle = (props: IProps) => {
  const { width, height, src, placeholder, color, name } = props;
  const { palette } = useTheme();
  const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
    borderRadius: '50%',
    width: `${width}px`,
    height: `${height}px`,
    border: `10px solid ${color}`,
    color: palette.neutral.dark
  });

  return (
    <Container>
      {src !== '' && <Image src={src} />}
      {src === '' && <Typography variant="text">{placeholder}</Typography>}
    </Container>
  );
};

export default ImageContainterCircle;
