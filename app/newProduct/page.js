'use client'
import { useRef, useState, useEffect } from "react";
import axios from 'axios'
import Headder from "../headder";








export default function Page() {
  
  const [v, setV] = useState(0)
  const [collectionNumber, setCollectionNumber] = useState('')
  const form = useRef()
  const number = useRef()
  const price = useRef()
  const description = useRef()
  const name = useRef()

  
  const setNumber = () => {
    setCollectionNumber(number.current.value)
  }

  const submit = async (e)=> {
    e.preventDefault()
    if(name.current.value == '' || description.current.value == '' || price.current.value == ''){
      return
    }
    let formData = new FormData(form.current)
        const returnData = await axios.post("/upload", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(returnData)
        if(!returnData) alert('An error occured')
        if (returnData.data.fileName.length != 0){
            alert('Product Uploaded')
            document.getElementById("form").reset();
        }else{
            alert('An error occured')
        }
  }
  
  

  return (
    <main>
      <Headder/>
      <div className="h-full flex flex-col justify-center items-center p-12 mt-5 mb-24">
          <h1 className="mb-7 text-2xl font-bold">New Product</h1>
          <form className="flex flex-col space-y-5 text-md md:w-1/3 w-full" ref={form} id='form'>
              <label>
                  <p>Product Name</p>
                  <input ref={name} required type="text" placeholder="Name" className="border border-black rounded-full mt-2 p-2 w-full" name="name"/>
              </label>
              <label>
                <p>Product type</p>
                <select required className="border border-black rounded-full mt-2 p-2 w-full" name='type'>
                    <option value="">-- Type --</option>
                    <option value="Custom">Custom</option>
                    <option value="Regular">Regular</option>
                </select>
              </label>
              <label>
                  <p>Product Description</p>
                  <textarea ref={description} required rows='5' type="text" placeholder="Description" className="border border-black rounded mt-2 p-2 w-full" name="description"></textarea>
              </label>
              <label>
                  <p>Price</p>
                  <input ref={price} required type="number" placeholder="Price" className="border border-black rounded-full mt-2 p-2 w-full" name="price"/>
              </label>
              <label>
                <p>Product Category</p>
                <select required className="border border-black rounded-full mt-2 p-2 w-full" name='category'>
                    <option value="">-- Category --</option>
                    <option value="Bracelets">Bracelets</option>
                    <option value="Necklaces">Necklaces</option>
                    <option value="Watches">Wrist Watches</option>
                    <option value="Rings">Rings</option>
                    <option value="Chains">Chains</option>
                </select>
              </label>
              <label>
                <p>Product Images</p>
                <select required className="border border-black rounded-full mt-2 p-2 w-full" name="number" onChange={setNumber} ref={number}>
                  <option value='zero'>0</option>
                  <option value='one'>1</option>
                  <option value='two'>2</option>
                  <option value='three'>3</option>
                  <option value='four'>4</option>
                  <option value='five'>5</option>
                </select>
              </label>
              <div>
                {collectionNumber == 'one' ? <label className="flex flex-col space-y-2"><input required type="file" className="border border-black rounded-full mt-2 p-2 w-full" name="file1"/></label> : null}
                {collectionNumber == 'two' ? <label className="flex flex-col space-y-2"><input required type="file" className="border border-black rounded-full mt-2 p-2 w-full" name="file1"/> <input required name="file2" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /></label> : null}
                {collectionNumber == 'three' ? <label className="flex flex-col space-y-2"><input required type="file" className="border border-black rounded-full mt-2 p-2 w-full" name="file1"/> <input required name="file2" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /><input required name="file3" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /></label> : null}
                {collectionNumber == 'four' ? <label className="flex flex-col space-y-2"><input required type="file" className="border border-black rounded-full mt-2 p-2 w-full" name="file1"/> <input required name="file2" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /><input required name="file3" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /><input required name="file4" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /></label> : null}
                {collectionNumber == 'five' ? <label className="flex flex-col space-y-2"><input required type="file" className="border border-black rounded-full mt-2 p-2 w-full" name="file1"/> <input required name="file2" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /><input required name="file3" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /><input required name="file4" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /><input required name="file5" type="file" className="border border-black rounded-full mt-2 p-2 w-full" /></label> : null}
              </div>
              <div className='w-50 text-black'>
              </div>
              <button onClick={submit} className="w-full p-2 bg-black text-white text-sm rounded-md"><i class="fa-solid fa-upload"></i> Upload</button>
          </form>
      </div>

    </main>
  )
}
