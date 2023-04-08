import { useEffect, useState } from "react";

import useTime from "./useTime";
import * as S from "./styles";

export default function Clock() {
  const time = useTime();
  const [theme, setTheme] = useState("white");

  // change clock hand (hour and min) colors
  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <>
      <S.ButtonWrapper>
        <S.Button onClick={changeTheme} value='blue'></S.Button>
        <S.Button onClick={changeTheme} value='green'></S.Button>
        <S.Button onClick={changeTheme} value='red'></S.Button>
        <S.Button onClick={changeTheme} value='orange'></S.Button>
        <S.Button onClick={changeTheme} value='white'></S.Button>
        <S.Button onClick={changeTheme} value='hotpink'></S.Button>
        <S.Button onClick={changeTheme} value='aqua'></S.Button>
      </S.ButtonWrapper>

      <S.Wrapper theme={theme}>
        <S.Clock>
          <S.SecondHand rotation={time.seconds}></S.SecondHand>
          <S.MinuteHand rotation={time.minutes}></S.MinuteHand>
          <S.HourHand rotation={time.hours}></S.HourHand>
        </S.Clock>
      </S.Wrapper>
    </>
  );
}
