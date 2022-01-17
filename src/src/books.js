import React, { useEffect, useState } from "react";
import "./books.css"
import { useParams } from "react-router-dom";
import { database } from "./Database/Firebase";
import { auth } from "./firebase";


const Books = () => {
    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);
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
    const CheckBuy = (e, buylink) => {

        e.preventDefault();

        if (buylink != "") {
            window.location.href = buylink
        }
        else {
            alert("There is no Ebook Link")
        }

    }
    const CheckEbook = (e, ebooklink) => {
        e.preventDefault();

        if (ebooklink != "") {
            window.location.href = ebooklink
        }
        else {
            alert("There is no Buy Link")
        }

    }
    useEffect(() => console.log("data", data), [data])
    useEffect(() => console.log("comments", comments), [comments])

    const upComment = (e) => {
        e.preventDefault();

        const user = auth.currentUser;


        database.collection("Books").doc(id).collection("comments").add({
            comment: comment,
            userName: user.email
        });
        setComment("");
    };
    return (
        < div >
            <div className="body1"  >
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
                        <hr width="100%" align="center" color="black" />
                        <div className="wherebuy">
                            <p>WHERE TO READ</p>
                        </div>
                        <div className="flew-2-row">
                            <a className="button" onClick={(e) => {
                                CheckBuy(e, data?.Buy);
                            }}>Buy</a>
                            <a className="button" onClick={(e) => {
                                CheckEbook(e, data?.Ebook);
                            }}>E-book</a>
                        </div>
                    </div>
                </div >

                <div className="topreview"  >
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
                                    onClick={upComment}
                                >
                                    Post
                                </button>

                            </div>
                        </form>
                    </div>
                    <div>
                        <b>COMMUNITY REVIEWS</b>
                    </div>
                    <hr width="100%" align="center" color="black" />
                    <div className="flex-1-row">
                        <div>
                            {comments?.map(({ id, cmt }) => (
                                <div key={id} className="post__comment--item">
                                    <div className="username">{cmt.userName}</div>
                                    <div className="comment">{cmt.comment}</div>
                                    <div className="flew-2-row num">
                                        <button className="button2">like</button>
                                        <button className="button2">comment</button>
                                        &ensp; 50 likes &nbsp; 10 comments
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Books