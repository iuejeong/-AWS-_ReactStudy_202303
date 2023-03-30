/** @jsxImportSource @emotion/react */
import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { FiFile } from 'react-icons/fi';
import * as S from './style'

const AddTodoInput = ({ value, onChange, onKeyUp, onAdd }) => {
    return (
        <div css={S.InputContainer}>
            <div css={S.InputFile}><FiFile /></div>
            <input css={S.InputText} type="text" placeholder='Please enter todo...' value={value} onChange={onChange} onKeyUp={onKeyUp}/>
            <button css={S.InputButton} onClick={onAdd}><BiPlus /></button>
        </div>
    );
};

export default AddTodoInput;