import styled from "styled-components";

export const Wrapper = styled.div`
  --clock-clr: #121212;
  --center-border: ${(p) => p.theme};
  --hand-clr: ${(p) => p.theme};

  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: #121212;
`;
export const Button = styled.button`
  font-size: 0.8rem;
  background-color: ${(p) => p.value};
  color: #fff;
  width: 20px;
`;

export const Clock = styled.div`
  height: 400px;
  width: 400px;
  background: var(--clock-clr);
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

export const HourHand = styled.div<{ rotation: number }>`
  --hand-h: 100px;
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
    border-radius: 999px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const MinuteHand = styled(HourHand)`
  --hand-clr: ${(p) => p.theme};
  --hand-h: 150px;
  --hand-w: 3px;
`;
export const SecondHand = styled(HourHand)`
  --hand-clr: red;
  --hand-h: 165px;
  --hand-w: 1px;
`;
