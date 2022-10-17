import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

interface IProps {
  width: number;
  height: number;
  color: string;
  value: string;
  label: string;
}

const CircleContainer = (props: IProps) => {
  const { width, height, color, value, label } = props;
  const { palette } = useTheme();
  const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
    borderRadius: '50%',
    width: `${width}px`,
    height: `${height}px`,
    border: `25px solid ${color}`,
    '.value': {
      color: color,
    },
    color: palette.neutral.dark
  });

  return (
    <Container>
      <Typography variant="titleLarge" className="value">{value}</Typography>
      <Typography variant="text">{label}</Typography>
    </Container>
  );
};

export default CircleContainer;
