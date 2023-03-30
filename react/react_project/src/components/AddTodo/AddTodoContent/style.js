import { css } from "@emotion/react";

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

export const ContentHeader = css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f1e3e3;
    padding: 10px;
    padding-bottom: 5px;
    height: 15%;
`;

export const ContentTodoDate = css`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 20px;
    line-height: 15px;
`;

export const ContentTodoDateTime = css`
    display: flex;
    align-items: flex-end;
    font-size: 11px;
`;

export const ContentMain = css`
    padding: 10px;
    height: 60%;
    word-break: break-all;
    line-height: 25px;
`;

export const ContentFooter = css`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-top: 0;
    height: 15%;
`;

export const ContentButton = css`
    font-size: 19px;
    padding: 0px 3px;
`;