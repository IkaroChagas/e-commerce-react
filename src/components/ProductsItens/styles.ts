import styled from "styled-components";

export const Products = styled.div`
    display: flex;
    background-color: gray;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const h1 = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    flex-direction: column;
`;

export const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 13px;
    font-weight: 800;
`;

export const img = styled.img`
    display: flex;
    height: 150px;
    width: 150px;
    cursor: pointer;
    padding: 15px;
`;

export const Price = styled.div`
    flex-direction: column;
    font-size: 12px;
    color: #000;
    font-weight: 700;
`;