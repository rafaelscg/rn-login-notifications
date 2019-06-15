import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #962d3e;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

export const Image = styled.Image`
  margin-bottom: 60px;
`;

export const Error = styled.View`
  width: 100%;
  align-items: center;
  background: #fff;
  padding: 10px 0;
  margin-bottom: 20px;
`;

export const ErrorText = styled.Text`
  color: #962d3e;
`;

export const Input = styled.TextInput`
  padding: 5px 10px;
  margin-bottom: 20px;
  background: #fbfbfb;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
  width: 100%;
`;

export const Text = styled.Text`
  color: #fff;
  margin-left: ${props => (props.direction === 'right' ? 'auto' : '0px')};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => (props.action === 'signup' ? '#962d3e' : '#d82e49')};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  padding: 10px 0;
  margin: 20px 0;
  align-items: center;
  width: 100%;
  border: ${props => (props.action === 'signup' ? '1px solid #fff' : 'none')};
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;
