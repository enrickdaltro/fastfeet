import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;
export const Content = styled.SafeAreaView`
  flex: 1;
`;
export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Image = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.View`
  margin-left: -120px;
`;
export const Label = styled.Text`
  color: #666;
`;
export const Name = styled.Text`
  margin-top: 3px;
  font-weight: bold;
  color: #333;
  font-size: 24px;
`;
