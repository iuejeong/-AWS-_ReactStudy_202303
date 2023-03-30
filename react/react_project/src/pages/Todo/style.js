import { css } from "@emotion/react";

export const Container = css`
    position: relative;
    margin: 50px auto;
    border: 2px solid #dbdbdb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;

`;

export const MainContainer = css`
    margin: 10px auto;
    width: 550px;
    height: 100%;
`;

export const Header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50px;
`;

export const Title = css`
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
`;