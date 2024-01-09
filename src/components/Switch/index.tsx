import { Container, Input, Thumb } from './styles';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
}

export function Switch({ onChange, checked }: SwitchProps) {
  return (
    <Container>
      <Input onChange={onChange} checked={checked} />
      <Thumb />
    </Container>
  );
}
