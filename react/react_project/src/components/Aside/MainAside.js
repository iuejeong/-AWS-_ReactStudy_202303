/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Navigation } from "react-minimal-side-navigation/lib";
import { useNavigate } from "react-router-dom";
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import * as S from './style';

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
                        title: 'Todo',
                        itemId: '/todo',
                        elemBefore: () => <BsCardChecklist css={S.MenuClick} />
                    },
                ]}
            />
        </aside>
    );
};

export default MainAside;