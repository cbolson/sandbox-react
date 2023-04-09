//import styled from "styled-components";

interface Props {
  result: string[];
}
export default function BreakingLogo({ result }: Props) {
  return (
    <div className='breaking-logo'>
      <div>{result[0]}</div>
      <div className='symbol'>{result[1]}</div>
      <div>{result[2]}</div>
    </div>
  );
}

// const S = {
//   Wrapper: styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     & > div {
//       font-size: 6rem;
//       height: 100px;
//       display: flex;
//       align-items: center;
//       margin-bottom: 1rem;
//     }
//   `,
//   Element: styled.div`
//     background: #0f5135;
//     color: #fff;
//   `,
// };
