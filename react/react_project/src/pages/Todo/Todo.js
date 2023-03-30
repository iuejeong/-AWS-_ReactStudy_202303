/** @jsxImportSource @emotion/react */
import * as S from './style'
import { useState } from 'react';
import { useEffect } from 'react';
import AddTodoInput from '../../components/AddTodo/AddTodoInput/AddTodoInput';
import AddTodoContent from '../../components/AddTodo/AddTodoContent/AddTodoContent';
import PromptModal from '../../components/Modal/PromptModal/PromptModal';

const Todo = () => {

    const [inputContents, setInputContents] = useState({
        id: 0,
        content: ''
    });

    const [modifyTodo, setModifyTodo] = useState({
        id: 0,
        content: ''
    });
    
    const [maxId, setMaxId] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [todoList, setTodoList] = useState(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
        return storedTodoList  ? storedTodoList : [];
    });

    useEffect(() => {
        const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
        if(storedTodoList && storedTodoList.length > 0) {
                setTodoList(storedTodoList);
                setMaxId(storedTodoList[storedTodoList.length - 1].id + 1);
            }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

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
            id: maxId,
            date: nowDate,
            time: nowTime
        }

        setTodoList([...todoList, todo]);
        setInputContents({...inputContents, content: ''});
        setMaxId(maxId + 1);
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
        setModifyTodo(todoList.filter(todo => todo.id === id)[0]);
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
    

    return (
        <>
            <main css={S.MainContainer}>
                <header css={S.Header}>
                    <h1 css={S.Title}>ToDo</h1>
                    <AddTodoInput value={inputContents.content} onChange={onChange} onKeyUp={onKeyUp} onAdd={AddContent} />
                </header>
                <AddTodoContent todoList={todoList} convertDay={convertDay} openModal={openModal} onRemove={onRemove} />
            </main>
        {isOpen ? (<PromptModal title={'Todo 수정'} modifyTodo={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo} />) : ''}
        </>
    );
    
};

export default Todo;