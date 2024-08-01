import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import mainImage from "../../assets/slider images/1.png";
import slideImage1 from "../../assets/slider images/2.png";
import slideImage2 from "../../assets/slider images/3.png";
import slideImage3 from "../../assets/slider images/4.png";
import slideImage4 from "../../assets/slider images/5.png";

function Details() {

  const [selectedImage, setSelectedImage] = useState(mainImage);

  const [ count , setCount] = useState (1)
  const [price, setPrice] = useState(100)

  const handleImage = (image) => {
    if (selectedImage !== image) {
      setSelectedImage(image);
    }
  };


  return (
    <>
      <div className="details  flex justify-between md:flex-col">
        <div className="detail-images w-[45%] md:w-[100%]">
          <img src={selectedImage} alt="detailsImage" className="rounded-lg" />
          <div className="slide-images grid grid-cols-4 gap-2 mt-5 w-100">
            <img
              src={slideImage1}
              alt="image1"
              className="  rounded-lg cursor-pointer"

              onClick={()=>handleImage (slideImage1)}
            />
            <img
              src={slideImage2}
              alt="image2"
              className="  rounded-lg cursor-pointer "

              onClick={()=>handleImage (slideImage2)}

            />
            <img
              src={slideImage3}
              alt="image3"
              className="  rounded-lg cursor-pointer"
              onClick={()=>handleImage (slideImage3)}

            />
            <img
              src={slideImage4}
              alt="image4"
              className="  rounded-lg cursor-pointer"
              onClick={()=>handleImage (slideImage4)}
            />
          </div>
        </div>

        <div className="details-content w-[50%] mt-20 text-center md:w-[100%]">
          <div className="stars">
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-solid fa-star text-yellow-400"></i>
            <i class="fa-regular fa-star text-yellow-400"></i>
          </div>
          <div className="details-text">
            <h1 className="text-3xl">Handmade Sabai Grass</h1>
            <h2 className="text-3xl">Roti Box</h2>
            <p className="my-4">
              A Master piece indeed. The convex wall mirror with rosewood frame
              is intricately hand carved, over days by our expert artisan, who
              has honed the skill for generations. The dark lustre of rosewood
              carved with floral motifs revives the royalty that once was in the
              princely town of ‘Mysore’, the birthplace of the craft.
            </p>
          </div>

            <div className="quantity flex justify-evenly items-center mt-10">
                <div className="box-counter ">
                    <p className="text-start my-1">Quantity</p>
                    <div className="bg-white w-[150px] flex justify-between items-center p-3 border border-gray-500 rounded-lg">
                        <i className="fa fa-minus" onClick={()=>{
                          if (count > 1 ){
                            setCount (count-1)
                          }
                        }}></i>
                        <span>{count}</span>
                        <i className="fa fa-plus text-end" onClick={()=>setCount (count+1)}></i>
                    </div>
                </div>

                <div className="box-price">
                    <p>Price Total</p>
                    <p className="font-bold"> {count * price} $</p>
                </div>
            </div>

            <div className="btns my-8  flex flex-col justify-evenly">
                <button className="bg-slate-900 text-white py-3 px-10 rounded-lg">Add To Bag</button>
                <button className="outline outline-slate-900 text-slate-900 py-3 px-10 mt-4 rounded-lg">Save</button>
            </div>
        </div>
      </div>

      
    </>
  );
}

export default Details;
