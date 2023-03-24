import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";


function Td({ children }) {
    return (
        <td css={S.style}>{children}</td>
    );
}

export default Td;