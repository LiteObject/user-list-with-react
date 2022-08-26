import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import UserCard from "./UserCard";

const API_URL = "https://randomuser.me/api/";

const App = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);

    const getUsers = async (count) => {
        const response = await fetch(`${API_URL}?results=${count}`);
        const data = await response.json();
        setUsers(data.results);
    }

    useEffect(() => {
        getUsers(12);
    }, []);

    return (
        <div className="app">
            <h1>User Name</h1>
            <div className="search">
                <input
                    placeholder="Search for users"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { getUsers(searchTerm) }}
                />
            </div>

            {
                users?.length > 0 ?
                    (
                        <div className="container">
                            {users.map((user) => (
                                <UserCard user={user} />
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No users found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;

