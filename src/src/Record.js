import React from 'react'
import { useState } from "react";
import { database, storage } from "./Database/Firebase";
function Record() {
   const [name, SetName] = useState("");
   const [author, SetAuthor] = useState("");
   const [des, SetDes] = useState("");
   const [ebook, SetEbook] = useState("");
   const [buy, SetBuy] = useState("");
   const [category, SetCategory] = useState("");
   const [cover, setCover] = useState("");
   const sub = (e) => {
      e.preventDefault();
      storage.ref(`bookcover/${cover.name}`).put(cover);
      storage
          .ref("bookcover")
          .child(cover.name)
          .getDownloadURL()
          .then((URL) => {
            database
              .collection("book")
              .add({
               Name: name,
               Author: author,
               Des: des,
               Ebook: ebook,
               Buy: buy,
               Category:category,
               Cover:URL
              })
  
              .then((docRef) => {
                alert("Book Successfully Published");
              })
              .catch((error) => {
                console.error("Error Published Book: ", error);
              });
          });
    
    };
    return (
        <section class="get-in-touch">
   <h1 class="title">Publish A Book</h1>
   <form class="contact-form row">
      <div class="form-field col-lg-6">
         <input id="name" class="input-text js-input" type="text" required />
         <label class="label" for="name">Book's Name</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="author" class="input-text js-input" type="text" required /> 
         <label class="label" for="author">Book's Author</label>
      </div>
      <div class="form-field col-lg-12">
         <input id="Description" class="input-text js-input" type="text" required />
         <label class="label" for="Description">Description</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="ebook" class="input-text js-input" type="url"  />
         <label class="label" for="ebook">Ebook</label>
      </div>
      <div class="form-field col-lg-6 ">
         <input id="buy" class="input-text js-input" type="url"  />
         <label class="label" for="buy">Buy</label>
      </div>
      <select class="form-field col-lg-6 " aria-label="Default select example" required>
         <option selected id="1"> Arts &amp; Music</option>
        <option  id="2">Biographies</option>
        <option  id="3">Comics</option>
        <option  id="4">Computers 	&amp; Tech</option>
        <option  id="5">Cooking</option>
        <option  id="6">Edu &amp; Reference</option>
        <option  id="7">Entertainment</option>
        <option  id="8">Gay &amp; Lesbian</option>
        <option  id="9">Health &amp;  Fitness</option>
        <option  id="10">Horror</option>
        <option  id="11">Kids</option>
        <option  id="12">Literature &amp; Fiction</option>
        <option  id="13">Mysteries</option>
        <option  id="14">Religion</option>
        <option  id="15">Romance</option>
        <option  id="16">Sci-Fi &amp; Fantasy</option>
        <option  id="17">Science &amp; Math</option>
        <option id="18" >Sports</option>
        <option  id="19">Teenfic</option>
        <option  id="20">True Crime</option>
        <option  id="21">Others</option>
</select>

    <div class="form-field col-lg-6 ">
        <input type="file" name="file" required/>
         <label class="labelcover" for="cover">Cover</label>
      </div>

      <div class="form-field col-lg-12">
         <input class="submit-btn" type="submit" value="Submit" />
      </div>
   </form>
</section>
    )
}

export default Record
