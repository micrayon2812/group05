import React from 'react'

function Record() {
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
        <option selected>Category</option>
         <option > Arts &amp; Music</option>
        <option>Biographies</option>
        <option >Comics</option>
        <option >Computers 	&amp; Tech</option>
        <option >Cooking</option>
        <option >Edu &amp; Reference</option>
        <option >Entertainment</option>
        <option >Gay &amp; Lesbian</option>
        <option >Health &amp;  Fitness</option>
        <option >Horror</option>
        <option >Kids</option>
        <option >Literature &amp; Fiction</option>
        <option >Mysteries</option>
        <option >Religion</option>
        <option >Romance</option>
        <option >Sci-Fi &amp; Fantasy</option>
        <option >Science &amp; Math</option>
        <option >Sports</option>
        <option >Teenfic</option>
        <option >True Crime</option>
        <option>Others</option>
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
