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
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0px;

    border: none;
    padding: 5px 20px;
    height: 100%;
`;