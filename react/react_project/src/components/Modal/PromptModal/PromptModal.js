/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import ModalButton from '../ModalButton/ModalButton';
import ModalInput from '../ModalInput/ModalInput';
import * as S from './style'

const PromptModal = (props) => {

    const [modalContent, setModalContent] = useState('');
    
    const contentChange = (e) => {
        setModalContent(e.target.value)
    }

    
    const closeModal = () => {
        props.setIsOpen(false);
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

        props.updateTodo({
            id: props.modifyTodo.id,
            content: modalContent,
            date: nowDate,
            time: nowTime
        });
        closeModal();
    }

    return (
        <div css={S.ModalContainer}>
            <div css={S.ModalBox}>
                <header css={S.ModalHeader}>
                    <h1 css={S.ModalTitle}>{props.title}</h1>
                </header>
                <ModalInput contentChange={contentChange} modifyContent={props.modifyTodo.content} />
                <ModalButton onSubmit={onSubmit} closeModal={closeModal}/>
            </div>
        </div>
    );
};

export default PromptModal;