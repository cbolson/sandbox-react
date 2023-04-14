import styled from "styled-components";

interface NumProps {
  pos: number;
}

export const Wrapper = styled.div`
  --clock-clr: #121212;
  --clock-rad: 20vw;
  --center-border: ${(p) => p.theme};
  --hand-clr: ${(p) => p.theme};
  --num-clr: ${(p) => p.theme};

  
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 300px;
  margin: 10vh auto 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #121212;
  border-radius:999px;
`;
export const Button = styled.button`
  font-size: 0.8rem;
  background-color: ${(p) => p.value};
  color: #fff;
  width: 2rem;
`;

export const Clock = styled.div`
  width: calc(var(--clock-rad) * 2);
  background: var(--clock-clr);

  aspect-ratio: 1;
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: inherit;
    background: var(--clock-clr);
    border: 2px solid var(--center-border);
    z-index: 1;
  }
`;

export const Hand = styled.div<{ rotation: number }>`
  --hand-h: 100px;
  --hand-w: 5px;
  --degrees: ${(p) => p.rotation}deg;
  top: 50%;
  left: 50%;
  position: absolute;
  rotate: var(--degrees);
  &:after {
    content: "";
    height: var(--hand-h);
    width: var(--hand-w);
    background-color: var(--hand-clr);
    position: absolute;
    border-radius: 999px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const HourHand = styled(Hand)`
  --hand-clr: ${(p) => p.theme};
  --hand-h: calc(var(--clock-rad) - 12vw);
  --hand-w: 6px;
`;
export const MinuteHand = styled(Hand)`
  --hand-clr: ${(p) => p.theme};
  --hand-h: calc(var(--clock-rad) - 8vw);
  --hand-w: 3px;
`;
export const SecondHand = styled(Hand)`
  --hand-clr: red;
  --hand-h: calc(var(--clock-rad) - 5vw);
  --hand-w: 1px;
`;

export const Num = styled.div<NumProps>`
  --angle: calc(${(p) => p.pos} * 360deg / 12);
  --offset: calc(var(--clock-rad) - 4vw);
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--num-clr);
  font-size: 0.8rem;
  translate: -50% -50%; /* center numbers */
  transform: translate(
    calc(cos(var(--angle)) * var(--offset)),
    calc(sin(var(--angle)) * var(--offset))
  );
`;
