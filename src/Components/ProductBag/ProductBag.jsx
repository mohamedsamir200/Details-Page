import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import db from './../../Config/firebase';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function ProductBag() {
  const navigate = useNavigate()
  const [bags, setBags] = useState([])
  const [openModal, setOpenModal] = useState(true);


  useEffect(() => {
    let arr;
    onSnapshot(collection(db, "Bag"), (snapshot) => {
      arr = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      // console.log(arr)
      setBags([...arr]);
    });
  }, []);

  function handleDelete(id) {
    let docref = doc(db, "Bag", id);
    deleteDoc(docref);

  }

  function backToDetails () {
    setOpenModal(false) ; 
    navigate("/")
  }


  return (
    <>
      <div>
        {bags.map((item) =>
          <div key={item.id} className='grid grid-cols-2 gap-x-11  my-6 shadow-2xl p-9 rounded-xl '>
            <img src={item.mainImage} alt="" className='w-[100%] rounded-xl md:col-span-2' />
            <div className='md:col-span-2'>
              <p className='leading-9	'> <strong>Desc :</strong>   {item.description}</p>
              <h3 className='my-5'> <strong> Quantity :</strong> {item.quantity}</h3>
              <h2> <strong>Total price :</strong>   {item.priceTotal} $</h2>
              <button className='btn bg-red-600 my-10' onClick={() => handleDelete(item.id)}>Remove From Bag</button>
            </div>
          </div>)}
      </div>

     {bags.length == 0 ?  <Modal show={openModal} size="md" onClose={() => backToDetails ()} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
             Your Bag Is Empty Please Back to Details Page
            </h3>
            <div className="flex justify-center gap-4">
              <Button className='bg-slate-800' onClick={() => backToDetails ()}>
                {"Back To details"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal> : ""}
    </>
  )
}

export default ProductBag