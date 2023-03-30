import { css } from "@emotion/react";

export const InputContainer = css`
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    margin-left: 40px;
    width: 100%;
    height: 100%;
`;

export const InputFile = css`
    border: none;
    font-size: 20px;
`;

export const InputButton = css`
    border: none;
    cursor: pointer;
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