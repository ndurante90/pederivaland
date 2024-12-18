import './App.css'
import { User } from './model/user';
import {ChangeEvent, FormEvent, useState} from "react";
import {getUserByUsername} from "./services/users.service.ts";

function App() {
    const [users, setUsers] = useState<User | undefined>(undefined);
    const [currentUser, setUser] = useState<User | undefined>(undefined);
    const [response, setResponse] = useState<boolean>(true);


  function changeData(e: ChangeEvent<HTMLInputElement>) {
      const field: HTMLInputElement = e.target;
      setUser(prev => ({...prev, [field.name]: field.value  }));
  }

  return (
    <>
    {!response && <div><span>Data are not correct!</span></div>}
        { JSON.stringify(users)}
        <div className="w-96">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setUsers(currentUser);
                if(currentUser){
                    const { username, password } = currentUser;
                    console.log(username);
                    console.log(password);
                    const user = getUserByUsername(username, password);
                    console.log(user);
                    setResponse(!!user);
                }


            }}>
                <div className="mb-4 text-center">
                    <img src="../src/assets/logo.png" alt="logo pederiva" className="mx-auto"/>
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="username"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => changeData(e)}/>
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="text"
                        placeholder="password"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => changeData(e)}/>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        name="sendData">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default App
