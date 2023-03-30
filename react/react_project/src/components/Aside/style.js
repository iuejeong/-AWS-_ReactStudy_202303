import { css } from '@emotion/react';

export const style = (isMenuOpen) => css`
    position: absolute;
    top: 0;
    left: ${isMenuOpen ? '0' : '-300px'};
    z-index: 99;
    width: 300px;
    height: 100%;
    box-shadow: 1px 0px 5px 1px black;
    background-color: white;
    transition: left 1s ease;
`;

export const MenuButton = (isMenuOpen, isRight) => css`
    border: none;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: ${isRight ? '-14px' : 'auto'};
    left: ${isRight ? 'auto' : '-14px'};
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0;
    width: 13px;
    height: 60px;
    background-color: #454545;
    color: #dfd5d5;
    cursor: pointer;

`;

export const MenuItems = () => css`
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 2px solid #21367a44;
    padding: 0px 20px;
    height: 40px;

    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

export const MenuClick = () => css`
    margin-right: 8px;
`;