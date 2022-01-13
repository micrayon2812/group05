import React from "react";
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
        // switch (category) {
        //   case "1":
        //     database
        //       .collection("Arts&Music")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "2":
        //     database
        //       .collection("Biographies")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "3":
        //     database
        //       .collection("Comics")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "4":
        //     database
        //       .collection("Computers&Tech")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "5":
        //     database
        //       .collection("Cooking")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "6":
        //     database
        //       .collection("Edu&Reference")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "7":
        //     database
        //       .collection("Entertainment")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "8":
        //     database
        //       .collection("Gay&Lesbian")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "9":
        //     database
        //       .collection("Health&Fitness")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "10":
        //     database
        //       .collection("Horror")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "11":
        //     database
        //       .collection("Kids")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "12":
        //     database
        //       .collection("Literature&Fiction")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "13":
        //     database
        //       .collection("Mysteries")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
         
        //   case "14":
        //     database
        //       .collection("Religion")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "15":
        //     database
        //       .collection("Romance")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "16":
        //     database
        //       .collection("Sci-Fi&Fantasy")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "17":
        //     database
        //       .collection("Science&Math")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "18":
        //     database
        //       .collection("Sports")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "19":
        //     database
        //       .collection("Teenfic")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
          
        //   case "20":
        //     database
        //       .collection("TrueCrime")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //   case "21":
        //     database
        //       .collection("Others")
        //       .add({
        //         Name: name,
        //         Author: author,
        //         Des: des,
        //         Ebook: ebook,
        //         Buy: buy,
        //         Cover: URL,
        //       })
        //       .then((docRef) => {
        //         alert("Book Successfully Published");
        //       })
        //       .catch((error) => {
        //         console.error("Error Published Book: ", error);
        //       });
        //     break;
        //     default:
        //        database
        //        .collection("Others")
        //        .add({
        //          Name: name,
        //          Author: author,
        //          Des: des,
        //          Ebook: ebook,
        //          Buy: buy,
        //          Cover: URL,
        //          Category: category
        //        })
        //        .then((docRef) => {
        //          alert("Book Successfully Published");
        //        })
        //        .catch((error) => {
        //          console.error("Error Published Book: ", error);
        //        });
        //}
                 database
               .collection("Books")
               .add({
                 Name: name,
                 Author: author,
                 Des: des,
                 Ebook: ebook,
                 Buy: buy,
                 Cover: URL,
                 Category: category
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
      <form
        class="contact-form row"
        onSubmit={(event) => {
          sub(event);
        }}
      >
        <div class="form-field col-lg-6">
          <input
            id="name"
            class="input-text js-input"
            type="text"
            required
            onChange={(e) => {
              SetName(e.target.value);
            }}
          />
          <label class="label" for="name">
            Book's Name
          </label>
        </div>
        <div class="form-field col-lg-6 ">
          <input
            id="author"
            class="input-text js-input"
            type="text"
            required
            onChange={(e) => {
              SetAuthor(e.target.value);
            }}
          />
          <label class="label" for="author">
            Book's Author
          </label>
        </div>
        <div class="form-field col-lg-12">
          <input
            id="Description"
            class="input-text js-input"
            type="text"
            required
            onChange={(e) => {
              SetDes(e.target.value);
            }}
          />
          <label class="label" for="Description">
            Description
          </label>
        </div>
        <div class="form-field col-lg-6 ">
          <input
            id="ebook"
            class="input-text js-input"
            type="url"
            onChange={(e) => {
              SetEbook(e.target.value);
            }}
          />
          <label class="label" for="ebook">
            Ebook
          </label>
        </div>
        <div class="form-field col-lg-6 ">
          <input
            id="buy"
            class="input-text js-input"
            type="url"
            onChange={(e) => {
              SetBuy(e.target.value);
            }}
          />
          <label class="label" for="buy">
            Buy
          </label>
        </div>
        <select
          class="form-field col-lg-6 "
          aria-label="Default select example"
          required
          onChange={(e) => {
            SetCategory(e.target.value);
          }}
        >
          <option selected value="Others">Category</option>
          <option value="Arts Music" > Arts &amp; Music</option>
          <option value="Biographies">Biographies</option>
          <option value="Comics">Comics</option>
          <option value="Computers">Computers &amp; Tech</option>
          <option value="Cooking">Cooking</option>
          <option value="Edu Reference">Edu &amp; Reference</option>
          <option value="Entertainment">Entertainment</option>
          <option value="GayLesbian">Gay &amp; Lesbian</option>
          <option value="Health Fitness">Health &amp; Fitness</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Literature Fiction">Literature &amp; Fiction</option>
          <option value="Mysteries">Mysteries</option>
          <option value="Religion">Religion</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi Fantasy">Sci-Fi &amp; Fantasy</option>
          <option value="Science Math">Science &amp; Math</option>
          <option value="Sports">Sports</option>
          <option value="Teenfic">Teenfic</option>
          <option value="True Crime">True Crime</option>
          <option value="Others">Others</option>
        </select>

        <div class="form-field col-lg-6 ">
          <input
            type="file"
            name="file"
            required
            onChange={(e) => {
              setCover(e.target.files[0]);
            }}
          />
          <label class="labelcover" for="cover">
            Cover
          </label>
        </div>

        <div class="form-field col-lg-12">
          <input class="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
    </section>
  );
}

export default Record;
