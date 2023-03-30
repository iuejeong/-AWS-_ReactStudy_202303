import { css } from "@emotion/react";

export const ModalFooter = css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
`;

export const ModalButton = css`
    border: none;
    background-color: #ffffff00;
    width: ${(100 / 2) + '%'};
    height: 100%;
    font-weight: 600;
    cursor: pointer;

    &:not(:last-of-type) {
        border-right: 1px solid #dbdbdb;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;