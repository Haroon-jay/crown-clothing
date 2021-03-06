import styled,{css} from "styled-components"
import { Link } from "react-router-dom"
const OptionContainerStyles=css`
padding: 10px 15px;
cursor: pointer;
`
export const HeaderContainer=styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width:800px){
    height:60px;
    padding:5px;
    margin-bottom:20px;
    }
`;
export const LogoContainer=styled(Link)`
height: 100%;
width: 70px;
padding: 11px 10px;
@media screen and (max-width:800px){
    width:50px;
    padding:4px;
}
`;
export const Options=styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
@media screen and (max-width:800px){
    width:80%
}
`
export const OptionsLink=styled(Link)`
${OptionContainerStyles}
`
export const OptionsDiv=styled.div`
${OptionContainerStyles}
`