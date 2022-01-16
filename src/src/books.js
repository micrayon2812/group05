import React, { useEffect, useState } from "react";
import "./books.css"
import { useParams } from "react-router-dom";
import { database } from "./Database/Firebase";


const Books = () => {
    const [data, setData] = useState(null);
    const [comments, setComments] = useState(null);
    const [comment, setComment] = useState("");
    const { id } = useParams();
    // const { comments } = commentFirestore('Arts&Music');

    useEffect(() => {
        const documents = [];
        const doc = database
            .collection("Books")
            .doc(id);
        doc
            .onSnapshot(snap => {
                setData(snap.data())
            })
        doc
            .collection("comments")
            .onSnapshot((snapshot) => {
                setComments(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        cmt: doc.data(),
                    }))
                );
            });

    }, [id])

    useEffect(() => console.log("data", data), [data])
    useEffect(() => console.log("comments", comments), [comments])


    return (
        < div >
            <div className="body">
                <div className="flex-1-row">
                    <img src={data?.Cover} className="Cover" />
                    <div className="info">
                        <div className="title">
                            <p>{data?.Name}</p>
                        </div>
                        <div className="author">
                            <p>by {data?.Author}</p>
                        </div>
                        <div className="genre">
                            <p>Genre: {data?.Category}</p>
                        </div>
                        <div className="summary">
                            <p>{data?.Des}</p>
                        </div>
                        <div className="wherebuy">
                            <p>WHERE TO READ</p>
                        </div>
                        <div className="flew-2-row">
                            <a className="button" href={data?.Buy}>Buy</a>
                            <a className="button" href={data?.Ebook}>E-book</a>
                        </div>
                    </div>
                </div >


                <div className="topreview">
                    <div className="padd">
                        <b>COMMUNITY REVIEWS</b>
                    </div>
                    <div className="post__comment">
                        <form>
                            <span>
                                <i className="bx bx-smile"></i>
                            </span>
                            <input
                                className="summary"
                                value={comment}
                                type="text"
                                placeholder="Write your review..."
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <div className="flex1">
                                <button
                                    type="submit"
                                    disabled={!comment}
                                    className="button1"
                                >
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1-row">
                        <div className="post__comment--list">
                            {comments?.map(({ id, cmt }) => (
                                <p key={id} className="post__comment--item">
                                    <b>{cmt.userName}</b> {cmt.comment}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Books