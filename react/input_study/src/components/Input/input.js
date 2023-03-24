import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";


function Input({ type, placeholder, inputRef }) {

    return (
        <input
            css={S.style}
            type={type}
            placeholder={placeholder}
            ref={inputRef}
        />  
    );
}

export default Input;