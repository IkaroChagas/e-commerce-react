import styled from "styled-components";

export const Products = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 15px;
`;


export const List = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 60px;
`;

export const Title = styled.div`
    display: grid;
    font-weight: 800;
    font-size: 20px;
    margin: auto;
`;

export const img = styled.img`
    display: inline-block;
    height: 200px;
    width: 200px;
    cursor: pointer;
    padding: 20px;
`;

export const Price = styled.div`
    display: grid;
    font-size: 25px;
    color: #000;
    font-weight: 700;
    margin: auto;
`;
