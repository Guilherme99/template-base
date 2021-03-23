import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index:9999;

  span {
    width: 160px;
    flex-wrap: wrap;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      position: absolute;
      content: '';

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &&:hover span {
    opacity: 100%;
    visibility: visible;
  }

  @media (max-width:700px){
    span {
      width: 80px;
      flex-wrap: wrap;
      background: #ff9000;
      padding: 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;

      opacity: 0;
      transition: opacity 0.4s;
      visibility: hidden;

      position: absolute;
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);

      color: #312e38;

    &::before {
      position: absolute;
      content: '';

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  }

  @media (max-width:1100px){
    width: 10%;
    
    span {
      width: 100%;
      flex-wrap: wrap;
      background: #ff9000;
      padding: 5px ;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;

      opacity: 0;
      transition: opacity 0.4s;
      visibility: hidden;

      position: absolute;
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);

      color: #312e38;

    &::before {
      
      position: absolute;
      content: '';

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
 } 
 @media (min-width:1100px) and (max-height:800px){
   
  width: 15%;
    
    span {
      width: 100%;
      flex-wrap: wrap;
      background: #ff9000;
      padding: 5px ;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;

      opacity: 0;
      transition: opacity 0.4s;
      visibility: hidden;

      position: absolute;
      bottom: calc(100% + 12px);
      left: 50%;
      transform: translateX(-50%);

      color: #312e38;

    &::before {
      
      position: absolute;
      content: '';

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;

      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  }
`;
