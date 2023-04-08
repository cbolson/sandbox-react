import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Clock = styled.div`
  height: 400px;
  width: 400px;
  border: 2px solid green;
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: inherit;
    background: salmon;
    z-index: 1;
  }
`;

export const HourHand = styled.div<{ rotation: number }>`
  --hand-clr: blue;
  --hand-h: 125px;
  --hand-w: 5px;
  --degrees: ${(p) => p.rotation}deg;

  height: 1px;
  width: 1px;
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
    border-radius: 50% 50% 5px 5px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const MinuteHand = styled(HourHand)`
  --hand-clr: gold;
  --hand-h: 150px;
  --hand-w: 3px;
`;
export const SecondHand = styled(HourHand)`
  --hand-clr: red;
  --hand-h: 165px;
  --hand-w: 1px;
`;
