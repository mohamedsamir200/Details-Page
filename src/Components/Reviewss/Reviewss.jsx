import React, { useEffect, useState } from "react";
import { Rating, Button, Label } from "flowbite-react";
import db from "../../Config/firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

function Reviewss() {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [reviewList, setReviewList] = useState([])
  useEffect(() => {
    showReviews()
  }, [])

  // ============ Add Reviews To Database =================//
  async function addToDb() {
    if (titleInput == "" || descInput == "") {
      alert("Please Fill All Inputs")
    } else {
      const collectionRef = collection(db, "reviews");
      const doc = await addDoc(collectionRef, { title: titleInput, desc: descInput });
      setTitleInput("");
      setDescInput("");
    }

  }


  // ============ Show Reviews From Database  =================//

  function showReviews() {
    onSnapshot(collection(db, "reviews"), (snapshot) => {
      let rev = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
      setReviewList(rev)
    })
  }

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
                  className={`mb-2 flex justify-center test `}
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

            {reviewList.map((item) =>

              <div key={item.id}>
                <h3 className="mt-4 text-gray-700 font-bold">{item.title}</h3>
                <div className="testi-icon mb-2">
                  <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>
                </div>

                <p className="text-gray-500">
                  {item.desc}
                </p>

              </div>)}


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
                <input value={titleInput} type="text" className="w-full bg-transparent rounded-lg mb-5 " onChange={(e) => setTitleInput(e.target.value)} />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="text" value="Review Content" />
                </div>
                <textarea value={descInput} name="" id="" className=" w-full h-[200px] bg-transparent rounded-xl resize-none" onChange={(e) => setDescInput(e.target.value)}></textarea>
                <button onClick={addToDb} className="bg-slate-900 text-white py-3 px-10 rounded-lg">Add Reviews</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviewss;
