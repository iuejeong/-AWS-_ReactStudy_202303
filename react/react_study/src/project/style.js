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
    border: none;
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

export const ModalMain = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid #dbdbdb;
    height: 120px;
`;

export const ModalInput = css`
    outline: none;
    border: none;
    border-bottom: 2px solid green;
    width: 90%;
    height: 30px;
    background-color: #fafafa;
`;

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