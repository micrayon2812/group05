import React, { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import "./lalala.css"
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import { useParams } from "react-router-dom";
import { projectFirestore } from "./Dataset/Firebase";

const Lalala = () => {
    const [data, setData] = useState(null);
    const [comments, setComments] = useState(null);
    const [comment, setComment] = useState("");
    const { id } = useParams();
    // const { comments } = commentFirestore('Arts&Music');

    useEffect(() => {
        const documents = [];
        const doc = projectFirestore
            .collection("Arts&Music")
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

    const submitComment = (e) => {
        e.preventDefault();
        db.collection("Arts&Music").doc(id).collection("comments").add({
            comment: comment,
            userName: props.user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setComment("");
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className="body">
                <div className="flex-1-row">
                    <img src={data?.Cover} className="Cover" />
                    <div>
                        <div className="title">
                            <p>{data?.Name}</p>
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
                <div>
                    <div className="post__comment">
                        <form>
                            <span>
                                <i className="bx bx-smile"></i>
                            </span>
                            <input
                                value={comment}
                                type="text"
                                placeholder="Thêm bình luận..."
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={!comment}
                                className="btn btn-post-comment"
                                onClick={submitComment}
                            >
                                Đăng
                            </button>
                        </form>
                    </div>
                    <div className="flex-1-row">
                        <div className="avatar">image</div>
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
        </div>
    )
}

export default Lalala