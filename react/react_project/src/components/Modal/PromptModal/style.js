import { css } from "@emotion/react";

export const ModalContainer = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: #000000aa;    
`;

export const ModalBox = css`
    border-radius: 7px;
    width: 350px;
    height: 200px;
    background-color: #fafafa;
    overflow: hidden;
`;

export const ModalHeader = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 40px;
`;

export const ModalTitle = css`
    font-size: 18px;
    font-weight: 600;
`;