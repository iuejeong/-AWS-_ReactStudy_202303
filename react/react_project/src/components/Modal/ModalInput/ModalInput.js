/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from './style'

const ModalInput = ({ contentChange, modifyContent }) => {
    return (
        <main css={S.ModalMain}>
            <input type="text" css={S.ModalInput} onChange={contentChange} defaultValue={modifyContent}/>
        </main>
    );
};

export default ModalInput;