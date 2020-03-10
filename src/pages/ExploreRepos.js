import React, { useState, useEffect } from 'react';

export default function ExploreRepos() {
    const [user, setUser] = useState('');
    const [data, setData] = useState([])

    function searchRepos() {
        fetch(`https://api.github.com/users/${user}/repos`)
            .then(response => response.json())
            .then(
                (data) => {
                    setData(data);
                    console.log(data)
                });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${user}`)
    }

    return (
        <div>
            <p className="title">Explore Repositories</p>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setUser(e.target.value)}
                    type="text" value={user}
                />
            </form>
            {
                data.length > 0 ?
                    data.map((val, idx) => {
                        return <div className="fact-wrap">
                            <p className="fact">{val.name}</p>
                        </div>
                    }) : null
            }


            <div className="btn" onClick={searchRepos}>Explore</div>
        </div>
    )
}