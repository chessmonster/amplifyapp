import React from "react";

// ############################
// TODO

// create fields for the items below
// get the input
// write up the url and supply the input
// submit the custom URL

// https://www.google.com.ph/search
// ?as_q=aaa+aaa				                  all these words
// &as_epq=bbb+bbb				                exact word or phrase
// &as_oq=ccc+ccc				                  any of these words
// &as_eq=ddd+ddd				                  none of these words
// &as_nlo=111				                    number range from
// &as_nhi=222				                    number range to
// &as_sitesearch=www.specificsite.com	  specific site
// &as_occt=any				                    dunno
// &safe=images				                    dunno
// &as_qdr=all				                    dunno

// ############################

// https://www.google.com.ph/search?as_q=aaa+aaa&as_epq=bbb+bbb&as_oq=ccc+ccc&as_eq=ddd+ddd&as_nlo=111&as_nhi=222&as_qdr=all&as_sitesearch=www.specificsite.com&as_occt=any&safe=images

function Googlepro() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          {/* <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div> */}
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Googlepro;