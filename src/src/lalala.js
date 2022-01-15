import React from "react";
import "./lalala.css"

import useFirestore from "./hooks/useFirestore";

const Lalala = ({ id }) => {
    /* const { docs } = useFirestore('Arts&Music');
     console.log(id)*/

    return (
        <div className="body">
            <div className="flex-1-row">
                <div className="Cover">
                    image
                </div>
                <div>
                    <div className="title">
                        <p>Title</p>
                    </div>
                    <div className="author">
                        <p>by Author</p>
                    </div>
                    <div className="genre">
                        <p>Genre:</p>
                    </div>
                    <div className="summary">
                        <p>Summary</p>
                    </div>
                    <div className="wherebuy">
                        <p>Where to read</p>
                    </div>
                </div>
            </div >

            <div className="topreview">
                TOP REVIEW
            </div>
            <div className="flex-1-row">
                <div className="avatar">image</div>
                <div>
                    <div className="namerate">Name rated it 5</div>
                    <div className="comment">Comment</div>
                </div>
            </div>

            <div className="topreview">
                COMMUNITY REVIEWS
            </div>
            <div className="flex-1-row">
                <div className="avatar">image</div>
                <div>
                    <div className="namerate">Name rated it 5</div>
                    <input className="comment" type="text" placeholder="Write your review" />
                </div>
            </div>
        </div >
    )
}

export default Lalala