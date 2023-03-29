/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { FiFile } from 'react-icons/fi';
import { BiPlus } from 'react-icons/bi';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';
import * as S from './style'
import { useState } from 'react';
import { useEffect } from 'react';

const TodoProject = () => {

    const [inputContents, setInputContents] = useState({
        id: 0,
        content: ''
    });
    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    });

    const [maxId, setMaxId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [todoList, setTodoList] = useState(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
        return storedTodoList ? storedTodoList : [];
    });

    const [modalContent, setModalContent] = useState('');
    

    const convertDay = (day) => {
        return day === 0 ? "일" 
            : day === 1? "월"
            : day === 2? "화"
            : day === 3? "수"
            : day === 4? "목"
            : day === 5? "금" : "토";
    }

    const AddContent = () => {
        const date = new Date();
        const nowYear = date.getFullYear();
        const nowMonth = date.getMonth() + 1;
        const nowDay = date.getDate();
        const nowWeek = date.getDay();
        const nowHour = date.getHours();
        const nowMinutes = date.getMinutes();
        const nowSeconds = date.getSeconds();

        const nowDate = {
            nowYear,
            nowMonth,
            nowDay,
            nowWeek
        };

        const nowTime = {
            nowHour,
            nowMinutes,
            nowSeconds
        }

        const todo = {
            ...inputContents,
            id: maxId + 1,
            date: nowDate,
            time: nowTime
        }

        setTodoList([...todoList, todo])
        setInputContents({...inputContents, content: ''})
        setMaxId(maxId + 1);

    }

    useEffect(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
        if(storedTodoList) {
            setTodoList(todoList);
            setMaxId(storedTodoList[storedTodoList.length - 1].id)
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);


    const contentChange = (e) => {
        setModalContent(e.target.value)
    }
    
    const onChange = (e) => {
        setInputContents({...inputContents, content: e.target.value})
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            AddContent();
        }
    }

    const openModal = (id) => {
        setModifyTodo(todoList.filter(
            todo => todo.id === id
            )[0]);

            setIsOpen(true);
    }

    const onRemove = (id) => {
        setTodoList(todoList.filter(todo => {
            return (
                todo.id !== id
            )
        }))
    }

    const updateTodo = (modifyTodo) => {
        setTodoList(
            todoList.map(
                todo => {
                    if(todo.id === modifyTodo.id) {
                        todo.content = modifyTodo.content;
                        todo.date = modifyTodo.date;
                        todo.time = modifyTodo.time;
                    }
                    return todo;
                }
            )
        )
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    const onSubmit = () => {
        const date = new Date();
        const nowYear = date.getFullYear();
        const nowMonth = date.getMonth() + 1;
        const nowDay = date.getDate();
        const nowWeek = date.getDay();
        const nowHour = date.getHours();
        const nowMinutes = date.getMinutes();
        const nowSeconds = date.getSeconds();

        const nowDate = {
            nowYear,
            nowMonth,
            nowDay,
            nowWeek
        };

        const nowTime = {
            nowHour,
            nowMinutes,
            nowSeconds
        }

        updateTodo({
            id: modifyTodo.id,
            content: modalContent,
            date: nowDate,
            time: nowTime
        });
        closeModal();
    }

    

    return (
        <>
            <div css={S.Container}>
                <main css={S.MainContainer}>
                    <header css={S.Header}>
                        <h1 css={S.Title}>ToDo</h1>
                        <div css={S.InputContainer}>
                            <button css={S.InputFile}><FiFile /></button>
                            <input css={S.InputText} type="text" placeholder='Please enter todo...' value={inputContents.content} onChange={onChange} onKeyUp={onKeyUp}/>
                            <button css={S.InputButton} onClick={AddContent}><BiPlus /></button>
                        </div>
                    </header>
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
                </main>
            </div>
            {isOpen ? (<div css={S.ModalContainer}>
                <div css={S.ModalBox}>
                    <header css={S.ModalHeader}>
                        <h1 css={S.ModalTitle}>Edit Todo</h1>
                    </header>
                    <main css={S.ModalMain}>
                        <input type="text" css={S.ModalInput} onChange={contentChange} defaultValue={modifyTodo.content}/>
                    </main>
                    <footer css={S.ModalFooter}>
                        <button css={S.ModalButton} onClick={onSubmit}>확인</button>
                        <button css={S.ModalButton} onClick={closeModal}>취소</button>
                    </footer>
                </div>
            </div>) : ''}
        </>
    );
    
};

export default TodoProject;