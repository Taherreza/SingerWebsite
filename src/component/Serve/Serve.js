import React, { useEffect, useState } from 'react';

const Serve = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('./aboutData.json')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    return (
        <div className="container m-5">
            {/* <h2>Home:{child.length}</h2> */}
            <div className="home">
                <div className="row">
                    {service?.map((childsSingle) => (
                        <div className="col-md-4">
                            <div >
                                <div  >
                                    <img className="w-100" src={childsSingle.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>{childsSingle.name}</h4>
                                    <p>Age: {childsSingle.age}</p>
                                    <p> {childsSingle.des}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Serve;