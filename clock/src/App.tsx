import { useEffect, useState } from "react";

import useTime from "./useTime";
import * as S from "./styles";

export default function Clock() {
  const time = useTime();
  const [theme, setTheme] = useState("white");
  //console.log(time);
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
          <S.Num pos='1'>4</S.Num>
          <S.Num pos='2'>5</S.Num>
          <S.Num pos='3'>6</S.Num>
          <S.Num pos='4'>7</S.Num>
          <S.Num pos='5'>8</S.Num>
          <S.Num pos='6'>9</S.Num>
          <S.Num pos='7'>10</S.Num>
          <S.Num pos='8'>11</S.Num>
          <S.Num pos='9'>12</S.Num>
          <S.Num pos='10'>1</S.Num>
          <S.Num pos='11'>2</S.Num>
          <S.Num pos='12'>3</S.Num>
        </S.Clock>
      </S.Wrapper>
    </>
  );
}
