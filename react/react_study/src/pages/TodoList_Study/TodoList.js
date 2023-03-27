import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './style'

const TodoList = () => {

    const todo = {
        todoInput: ''
    }

    const [ inputs, setInputs ] = useState(todo);
    const [ lists, setLists ] = useState([]);

    const inputHandler = (e) => {
        const value = e.target.value;
        setInputs({...inputs, todoInput: value});
    }
    const submitHandler = (e) => {
        if(e.keyCode === 13) {
            setInputs({...inputs});
    }
}

    const addHandler = () => {
        const list = {
            ...inputs
        }

        setLists([...lists, list]);
        console.log(lists)
    }


        return (
            <div css={S.Container}>
                <div css={S.Input}>
                    <input type="text" css={S.InputText} onKeyUp={submitHandler} onChange={inputHandler} placeholder='내용을 입력해주세요' />
                    <button type='button' onClick={addHandler}>👀</button>
                </div>
                <div css={S.Content}>
                    <ul>
                    {lists.map(list => {
                        return(
                            <li>{list.todoInput}</li>
                            );
                        })}
                    </ul>
                        <button type='button'>👁</button>
                    </div>
            </div>
        );
    }

export default TodoList;