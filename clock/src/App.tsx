import useTime from "./useTime";
import * as S from "./styles";

export default function Clock() {
  const time = useTime();

  return (
    <S.Wrapper>
      <S.Clock>
        <S.SecondHand rotation={time.seconds}></S.SecondHand>
        <S.MinuteHand rotation={time.minutes}></S.MinuteHand>
        <S.HourHand rotation={time.hours}></S.HourHand>
      </S.Clock>
    </S.Wrapper>
  );
}
