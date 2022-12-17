
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useArrayObjectInput, useObjectInput } from "./hoooks/useInput";

export default function TestUseArrayObjectInput() {
    
    const initialUser = [
        {id: 1, name: "shin", email:"shin@gmail.com"},
        {id: 2, name: "dong", email:"dong@gmail.com"},
        {id: 3, name: "hyeok", email:"hyeok@gmail.com"}

    ];
    const [users, setUsers, resetUsers, onCreateUsers, onRemoveUsers, onUpdateUsers] = useArrayObjectInput(initialUser);
    const [user, setUser, onChangeUser, resetUser] = useObjectInput({name: "", email: ""});
    const nextID = useRef(4);
    
    const [text, setText] = useState("");
    const [textType, setTextType] = useState("");

    const handleCreate = () => {
        if(!user.name) {
            alert("이름 입력 바람");
            return;

        }else if(!user.email) {
            alert("메일 입력 바람");
            return;
        }
        //console.log("user : ", user)
        onCreateUsers({id:nextID.current, name: user.name, email: user.email});
        resetUser();
        nextID.current++;
        console.log("users : ", users)
    }

    const handleRemoveUsers = (id) => {

        console.log("before users : ", users)
        onRemoveUsers("id", id);
        console.log("after users : ", users)
    }

    const handleExchange = (keyName, KeyValue) => {
        if(!textType) {
            alert("TextType 선택 바람");
            return;
        }
        if(!text) {
            alert("Text 입력 바람");
            return;
        }
        console.log("before users : ", users)
        onUpdateUsers(keyName, KeyValue, textType, text);
        setTextType("");
        setText("");
        console.log("after users : ", users)
    }
    return (
        <>
            <h1>Use Object Input Test</h1>
            <b>Name : </b><input type="text" name="name" value={user.name} onChange={onChangeUser} />
            <br/>
            <b>Email : </b><input type="email" name="email" value={user.email} onChange={onChangeUser} />
            <button onClick={handleCreate}>등록</button>
            <p style={{color: "red"}}><b>Name : </b>{user.name}</p>
            <p style={{color: "red"}}><b>Email : </b>{user.email}</p>   
            <hr/>
            <ul>
                {
                users.map( (oldUser) => <li key={oldUser.id}>{oldUser.id} - {oldUser.name} ({oldUser.email}) &nbsp;
                <button onClick={() => handleRemoveUsers(oldUser.id)}>삭제</button> &nbsp;
                {/*<button onClick={() => onRemoveUsers("id", oldUser.id)}>삭제</button>*/} 
                <button onClick={() => handleExchange("id", oldUser.id)}>변경</button> 
                </li>)
                }
 
            </ul>
            <hr/>
            <b>Text : </b> <select name="textType" value={textType} onChange={(e) => setTextType(e.target.value)}  >
                <option value="">-- choose --</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
            </select>
            <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
            
            
        </>
    );

}