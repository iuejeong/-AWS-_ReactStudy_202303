import React from 'react';
import * as S from './style';
import { Navigation } from "react-minimal-side-navigation/lib";
import { HiHome } from 'react-icons/hi';
import { BsCardChecklist } from 'react-icons/bs';
import { BiLeftArrow, BiListCheck } from 'react-icons/bi';
import { GrTest } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { BiRightArrow } from 'react-icons/bi';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */

const MainAside = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <aside css={S.style(isMenuOpen)}>
            <button css={S.MenuButton(isMenuOpen, true)} onClick={toggleMenu}>
                {isMenuOpen ? <BiLeftArrow /> : <BiRightArrow />}
            </button>

            <Navigation
            activeItemId="/"
            onSelect={({itemId}) => {
                navigate(itemId);
                setIsMenuOpen(false)
            }}
            items={[
                {
                    title: 'Home',
                    itemId: '/home',
                    elemBefore: () => <HiHome />
                },
                {
                    title: 'T1',
                    itemId: '/t1',
                    elemBefore: () => <GrTest />
                },
                {
                    title: 'T2',
                    itemId: '/t2',
                    elemBefore: () => <GrTest />
                },
                {
                    title: 'Sample',
                    itemId: '/sample/input/1',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: 'input1',
                            itemId: '/sample/input/1',
                            elemBefore: () => <BiListCheck />
                        }
                    ]
                },
                {
                    title: 'List',
                    itemId: '/users',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: '사용자 전체 조회',
                            itemId: '/users',
                            elemBefore: () => <FaUsers />
                        }
                    ]
                },
                {
                    title: 'TodoList',
                    itemId: '/todo',
                    elemBefore: () => <BsCardChecklist />
                },
                {
                    title: 'NumberCounter',
                    itemId: '/number/counter',
                    elemBefore: () => <BsCardChecklist />
                },
                {
                    title: 'Todo',
                    itemId: '/todo/project',
                    elemBefore: () => <BsCardChecklist />
                },
                
            ]}
          />
        </aside>
    );
};

export default MainAside;