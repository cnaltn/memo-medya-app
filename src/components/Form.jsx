import React from "react";

const Form = () => {
  return (
    <div>
      <h1 className="text-4xl pb-10 text-stone-700 tags underline underline-offset-4 decoration-amber-600 text-left font-semibold ">
        İletişim
      </h1>
      <form className="tags">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Ad
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" class="form-text">
            Bilgilerinizi kimseyle paylaşmıyoruz
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            E-mail
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
          <div id="emailHelp" class="form-text">
            Bilgilerinizi kimseyle paylaşmıyoruz
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Mesaj
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          class="text-white px-3 py-2 rounded bg-amber-600 border-0 hover:bg-amber-700 transition-colors"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Form;
