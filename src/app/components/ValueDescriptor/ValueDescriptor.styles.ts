import styled from "styled-components";


export const Wrapper = styled.div<{
  color: string
}>`
  display: flex;
  flex-direction: column;
  color: #274060;


  span.Currency{
    color: ${p => p.color};
  }

  .Description{
    font-size: 12px;
    text-transform: lowercase;
   
  }

  span.Value {
    font-size: 18px;
    font-weight: 800;
    color: ${p => p.color};
  }
`