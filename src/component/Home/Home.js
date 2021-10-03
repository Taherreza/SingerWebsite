import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [child, setChild] = useState([])
    useEffect(() => {
        fetch('./homeData.json')
            .then(res => res.json())
            .then(data => setChild(data))
    }, [])
    return (
        <div className="container m-5">
            {/* <h2>Home:{child.length}</h2> */}
            <div className="home">
                <div className="row">
                    {child?.map((childs) => (
                        <div className="col-md-3">
                            <div  >
                                <div >
                                    <img className="w-100" src={childs.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>{childs.name}</h4>
                                    <p>Age: {childs.age}</p>
                                    <p>  {childs.des}</p>
                                    <Link to={`/serve/${childs.idTeam}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;