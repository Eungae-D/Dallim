import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  border: 1px solid red;
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  border: 1px solid red;
  color: white;
  width: 100vw;
  height: 10%;
  display: flex;
  justify-content: flex-end;
`;

export const qrBox = styled.div`
  border: 1px solid green;
  color: white;
  width: 20%;
  height: 100%;
  margin-right: 2%;
`;

export const Body = styled.div`
  border: 1px solid blue;
  flex-direction: row;
  width: 75%;
  height: 75%;
  display: flex;
  flex-direction: column;
`;

export const BodyTop = styled.div`
  border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const BodyMiddle = styled.div`
  border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const BodyBottom = styled.div`
  border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MainText = styled.div`
  border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 300%;
  color: #554bab;
`;

export const SubText = styled.div`
  border: 1px solid blue;
  flex-direction: row;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 150%;
  color: black;
`;

export const HighlightedText = styled.span`
  color: #a59bf6; /* 특정 단어에 적용할 색상 */
`;

export const AddText = styled.div`
  border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: #8c8c8c;
`;

export const MainText2 = styled.div`
  border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 300%;
  color: #554bab;
`;

export const SubText2 = styled.div`
  border: 1px solid blue;
  flex-direction: row;
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 150%;
  color: black;
`;

export const AddText2 = styled.div`
  border: 1px solid red;
  flex-direction: row;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: #8c8c8c;
`;

export const Footer = styled.div`
  border: 1px solid red;
  width: 100vw;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterLeft = styled.div`
  border: 1px solid red;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PhoneBox = styled.div`
  border: 1px solid red;
  width: 80%;
  height: 80%;
`;

export const PhoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const FooterRight = styled.div`
  border: 1px solid red;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WatchBox = styled.div`
  border: 1px solid red;
  height: 40%;
`;

export const WatchImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BackBar = styled.div`
  width: 100vw;
  height: 20%;
  position: absolute;
  top: 55%;
  z-index: -1;
  object-fit: contain;
  background-color: #c2c3cf;
`;

export const WidgetImage1 = styled.img`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 40%;
  left: 20%;
  z-index: -1;
  object-fit: contain;
`;

export const WidgetImage2 = styled.img`
  width: 50%;
  height: 50%;
  position: absolute;
  top: 20%;
  left: 40%;
  z-index: -1;
  object-fit: contain;
`;

export const TempBox = styled.div`
  border: 1px solid #000;
  border-radius: 5px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  @media (max-width: 700px) {
    width: 25vw;
  }
`;

export const TempImage = styled.img`
  width: 100%;
  transform: rotate(30deg);
`;

export const TempText = styled.div`
  color: white;
  font-size: 200%;
  font-weight: 700;
`;

