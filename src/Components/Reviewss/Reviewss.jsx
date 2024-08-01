import React from "react";
import { Rating, Button, Label } from "flowbite-react";
function Reviewss() {
  return (
    <>
      <div className="reviews ">
        <div className="review   mx-auto space-y-4">
          <h1 className="text-[#344054] font-bold">Customer Feedback</h1>
          <div className="rate grid  zeroToTo768:grid-cols-1 from768:grid-cols-3 gap-5  m-auto">
            <div className="product-rate bg-white p-5 rounded-lg flex justify-center items-center flex-col">
              <h1 className="text-bold text-7xl text-[#164C96]">48</h1>
              <div className="rate-icon">
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
                <i class="fa-solid fa-star text-yellow-400"></i>
              </div>
              <p>Product Rating</p>
            </div>
            <div className="progress bg-white p-7 rounded-lg col-span-2">
              <div>
                <Rating.Advanced
                  percentFilled={70}
                  className={`mb-2 flex justify-center test`}
                ></Rating.Advanced>
                <Rating.Advanced
                  percentFilled={17}
                  className="mb-2 flex justify-center"
                ></Rating.Advanced>
                <Rating.Advanced
                  percentFilled={8}
                  className="mb-2 flex justify-center"
                ></Rating.Advanced>
                <Rating.Advanced
                  percentFilled={4}
                  className="mb-2 flex justify-center"
                ></Rating.Advanced>
                <Rating.Advanced
                  percentFilled={1}
                  className=" flex justify-center"
                ></Rating.Advanced>
              </div>
            </div>
          </div>

          <h1 className="text-[#344054] font-bold">Reviews</h1>
          <div className="testimonial border-b border-gray-400 pb-5 px-5">
         
         

            <h3 className="mt-4 text-gray-700 font-bold">Great Product</h3>
            <div className="testi-icon mb-2">
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
            </div>

            <p className="text-gray-500">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered
            </p>
          </div>

          <div className="testimonial  pb-3 px-5">
        
            <h3 className="mt-4 text-gray-700 font-bold">
              The best product In Market
            </h3>
            <div className="testi-icon mb-2">
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
            </div>
            <p className="text-gray-500 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered
            </p>
          </div>

          <div className="writeReview ">
            <h3 className="text-gray-700 font-bold">
              What Is IT LIke To Product ?
            </h3>
            <div className="testi-icon">
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
              <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
            </div>
            <div className="form">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Review Title" />
              </div>
              <input type="text" className="w-full bg-transparent rounded-lg mb-5 "/>
              </div>

              <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Review Content" />
              </div>
              <textarea name="" id="" className=" w-full h-[200px] bg-transparent rounded-xl resize-none"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviewss;
