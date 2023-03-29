import { css } from '@emotion/react';

export const style = (isMenuOpen) => css`
    position: fixed;
    top: 0;
    left: ${isMenuOpen ? '0' : '-300px'};
    z-index: 99;
    width: 300px;
    height: 100%;
    transition: left 1s ease;
`;

export const MenuButton = (isMenuOpen, isRight) => css`
    border: none;
    position: absolute;
    transform: translateY(-200%);
    top: 50%;
    right: ${isRight ? '-14px' : 'auto'};
    left: ${isRight ? 'auto' : '-14px'};
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;
    width: 13px;
    height: 60px;
    cursor: pointer;
`;