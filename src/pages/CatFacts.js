import React, {useState,useEffect} from 'react';
import cat from '../cat.png'

export default function CatFacts() {
    const [counter, setCounter] = useState(Math.floor(Math.random() * 100));
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts")
            .then(response => response.json())
            .then(
                (data) => {
                    setData(data.all);
                    console.log(data.all)
                });
    }, []);

    function createRandomFact() {
        setCounter(Math.floor(Math.random() * data.length))
    }

    return (
        <div>
            <img id="logo" alt="cat-image" src={cat} />
            <p className="title">CAT FACTS</p>

            {
                data.length > 0 ?
                    <div className="fact-wrap">
                        <p className="fact">{data[counter].text}</p>
                    </div> : null
            }

            <div className="btn" onClick={createRandomFact}>Another fact</div>
        </div>
    )
}