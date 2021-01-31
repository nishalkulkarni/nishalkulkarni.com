import styled from "styled-components"

const DefaultButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem 0.5rem 0;
  vertical-align: middle;
  text-align: center;
  text-transform: none;
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1;
  border-radius: 0.25rem;

  :hover,
  :focus,
  :active {
    text-decoration: none;
  }
`

const BlueButton = styled(DefaultButton)`
  border: 0.125rem solid ${props => props.theme.blueColor};
  background: ${props => props.theme.primaryBgColor};
  color: ${props => props.theme.blueColor};

  :hover,
  :active,
  :focus {
    border: 0.125rem solid ${props => props.theme.altBlueColor};
    background: ${props => props.theme.altBlueColor};
    color: ${props => props.theme.primaryBgColor};
  }
`

const GreyButton = styled(DefaultButton)`
  border: 0.125rem solid ${props => props.theme.textWeight3};
  background: ${props => props.theme.primaryBgColor};
  color: ${props => props.theme.textWeight3};

  :hover,
  :active,
  :focus {
    border: 0.125rem solid ${props => props.theme.textWeight5};
    background: ${props => props.theme.textWeight5};
    color: ${props => props.theme.primaryBgColor};
  }
`

const YellowButton = styled(DefaultButton)`
  border: 0.125rem solid ${props => props.theme.yellowColor};
  background: ${props => props.theme.lightYellowColor};
  color: ${props => props.theme.textWeight2};

  :hover,
  :active,
  :focus {
    border: 0.125rem solid ${props => props.theme.altYellowColor};
    background: ${props => props.theme.altLightYellowColor};
    color: ${props => props.theme.textWeight1};
  }
`
const RedButton = styled(DefaultButton)`
  border: 0.125rem solid ${props => props.theme.redColor};
  background: ${props => props.theme.redColor};
  color: ${props => props.theme.primaryBgColor};

  :hover,
  :active,
  :focus {
    border: 0.125rem solid ${props => props.theme.altRedColor};
    background: ${props => props.theme.altRedColor};
    color: ${props => props.theme.primaryBgColor};
  }
`

export {
    DefaultButton,
    BlueButton,
    GreyButton,
    YellowButton,
    RedButton,
}
