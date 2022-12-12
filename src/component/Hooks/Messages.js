import React, { useState, useEffect, Component, useMemo, useCallback, useRef, useLayoutEffect } from "react";
import { MessagesContext, useDetails } from "./Chat";
import useCustomhook from "./useCustomhook";



export default function Messages() {

//Hooks are isolated

    const [user, setUser] = useState({ username: "N/A", age: 0 });
    
  /*   const [data, setData] = useState([]);
    const [todo, setTodo] = useState([]); */

    const data=useCustomhook("https://jsonplaceholder.typicode.com/users");
    const todo=useCustomhook("https://jsonplaceholder.typicode.com/todos");

   /*  useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setData(data))
        }, []); // only one time ,if not infinte callings.... */



        /* useEffect(
            //subscribe on/before component attach
                 () => { fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {setData(data)});
                //unsubscribe on component detach
                return () => { 
                        //do something
                        console.log("will unmount");
                    };
            }, [user]
            ); // dependecy on particular set,recall on change of state

        useEffect(
                     () => { fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((todo) => {setTodo(todo)});
                    return () => { 
                            console.log("will unmount");
                        };
                }, []
                ); 
          */


    return (
        <div>

            <hr />
            <h1>Context</h1>
            <MessagesContext.Consumer>

                  { (value) => <div>{value.username}</div>}

            </MessagesContext.Consumer>
            <br />
            {/* <hr />
            <h1>Grand Child</h1>
            <GrandChild /> */}
            <br />
            <hr />
            <h1>{user.username}</h1>
            <br />
            <button onClick={() => setUser({ username: "Abhiram", age: 27 })}>Click</button>
            <hr />
            <h1>Users</h1>
            <div>{data.map((user) => <p key={user.name}>{user.name}</p>)}</div>
            <hr />
            <h1>TODOS</h1>
            <div>{todo.map((todo) => <p key={todo.title}>{todo.title}</p>)}</div>
           
            

        </div>
    )
}
