/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style'

const ModalButton = ({ onSubmit, closeModal }) => {
    return (
        <footer css={S.ModalFooter}>
            <button css={S.ModalButton} onClick={onSubmit}>확인</button>
            <button css={S.ModalButton} onClick={closeModal}>취소</button>
        </footer>
    );
};

export default ModalButton;