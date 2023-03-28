import { css } from "@emotion/react";

export const Container = css`
    margin: 50px auto;
    width: 700px;
    height: 100%;
`;

export const Header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 50px;
`;

export const Title = css`
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
`;

export const InputContainer = css`
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    margin-left: 40px;
    width: 100%;
    height: 100%;
`;

export const InputFile = css`
    font-size: 20px;
`;

export const InputText = css`
    outline: none;
    border: none;
    padding: 0px 70px;
    width: 100%;
    height: 100%;
    transition: padding 0.5s ease;
    font-size: 16px;
    &:focus {
        padding: 0px 10px;
    }
`;

export const InputButton = css`
    cursor: pointer;
`;

export const TodoContentList = css`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    width: 100%;
    height: 88%;
    overflow-y: auto;
`;

export const ContentContainer = css`
    margin: 10px;
    width: 230px;
    height: 230px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow: 0px 0px 10px 1px #121212;
    }
`;

