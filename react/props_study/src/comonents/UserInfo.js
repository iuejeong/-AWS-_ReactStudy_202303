import React from "react";

function UserInfo({ username = "", name = "", email = "" }) {
    const style = {
        marginBottom: "15px",
        border: "1px solid #dbdbdb",
        padding: "20px"
    }

    return (
        <div style={style}>
            <input type="text" defaultValue={username} />
            <input type="text" defaultValue={name} />
            <input type="text" defaultValue={email} />
        </div>
    );
}

UserInfo.defaultProps = {
    username: "빈 값",
    name: "빈 값",
    email: "빈 값"
}

export default UserInfo