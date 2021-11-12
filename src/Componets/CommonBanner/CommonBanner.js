import React from 'react';
import blogteam from "../../img/blogteam.jpg";
const CommonBanner=()=>{
    return(
        <>
        <section>
            <div className="container">
                <div className="row">

                </div>
            </div>
        </section>
        </>
    )
}
export default CommonBanner;
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Card = () => {
    const [post, setpost] = useState([]);
    const [isReadMore, setIsReadMore] = useState(true);

    const fetechData = () => {
        axios.get('http://13.127.142.123:5000/post/public').then(res => {
            setpost(res.data);
            console.log(post);
        })
    }
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
    useEffect(() => {
        fetechData()
    }, [])

    return (
        <div className="row px-4">
            {post.map((home, index) => {
                return (
                    <div className="col-md-4" key={index}>
                        <div className="card">

                            <div className="card-body">
                                <div className="image">
                                    <img src={home.imgURL} className="imgURL" ></img>
                                </div>
                                <div className=" card-data">
                                    <h4 className="createdAt">Create:{home.createdAt}</h4>
                                    <h5 className="title">{home.title}</h5>
                                    <h6 className="category">{home.categoery}</h6>

                                    <p className="description">
                                        {isReadMore ? home.description.slice(0, 150) : home.description}
                                        <span onClick={toggleReadMore} className="read-or-hide">
                                            {isReadMore ? "...read more" : " show less"}
                                        </span>
                                    </p>
                                    <h4 className="updatedAt">Update:{home.updatedAt}</h4>
                                </div>

                            </div>
                        </div>
                    </div>

                )


            })
            }

        </div>
    )

}
export default Card;