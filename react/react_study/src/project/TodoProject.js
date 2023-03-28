/** @jsxImportSource @emotion/react */
import React from 'react';
import { FiFile } from 'react-icons/fi';
import { BiPlus } from 'react-icons/bi';
import * as S from './style'

const TodoProject = () => {
    return (
        <div css={S.Container}>
            <header css={S.Header}>
                <h1 css={S.Title}>ToDo</h1>
                <div css={S.InputContainer}>
                    <FiFile css={S.InputFile} />
                    <input css={S.InputText} type="text" placeholder='Please enter todo...' />
                    <BiPlus css={S.InputButton}/>
                </div>
            </header>
            <ul css={S.TodoContentList}>
                <li css={S.ContentContainer}>ds</li>
            </ul>
        </div>
    );
};

export default TodoProject;