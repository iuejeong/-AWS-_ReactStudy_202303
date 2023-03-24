import PropsTest from "./comonents/PropsTest";
import UserInfo from "./comonents/UserInfo";

function App() {
  const userList = [
    {username: "aaa", name: "AAA", email: "aaa@gmail.com"},
    {username: "bbb", name: "BBB", email: "bbb@gmail.com"},
    {username: "ccc", name: "CCC", email: "ccc@gmail.com"},
    {username: "ddd", name: "DDD"}
  ];

  return (
    <>
      <PropsTest 
      username="aaa"
      name="김준일"
      email="aaa@gamil.com" 
      handlerClick={() => console.log("클릭함!!!")}
      />
      {['김준일', '김준이', '김준삼']}
      {userList.map(user => (
        <UserInfo
        username={user.username}
        name={user.name}
        email={user.email}/>
       )
      )}
    </>

  );
}

export default App;
