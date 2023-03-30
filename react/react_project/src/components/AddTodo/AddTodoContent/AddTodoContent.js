/** @jsxImportSource @emotion/react */
import React from 'react';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';
import * as S from './style'

const AddTodoContent = ({ todoList, convertDay, openModal, onRemove }) => {
    return (
        <ul css={S.TodoContentList}>
            {todoList.map(
                todo => {
                    return(
                        <li css={S.ContentContainer}>
                            <div css={S.ContentHeader}>
                                <div css={S.ContentTodoDate}>{todo.date.nowYear}-{todo.date.nowMonth}-{todo.date.nowDay}({convertDay(todo.date.nowWeek)})</div>
                                <div css={S.ContentTodoDateTime}>{todo.time.nowHour}:{todo.time.nowMinutes}:{todo.time.nowSeconds}</div>
                            </div>
                            <div css={S.ContentMain}>{todo.content}</div>
                            <div css={S.ContentFooter}>
                                <BiPen css={S.ContentButton} onClick={() => {openModal(todo.id)}}/>
                                <TiTrash css={S.ContentButton} onClick={() => {onRemove(todo.id)}} />
                            </div>
                        </li>
                    )
                }
            )}
         </ul>
    );
};

export default AddTodoContent;