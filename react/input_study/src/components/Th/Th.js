import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";


function Th({ children }) {
    return (
        <th css={S.style}>{children}</th>
    );
}

export default Th;