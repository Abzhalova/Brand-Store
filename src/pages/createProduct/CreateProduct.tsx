import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'

const CreateProduct = () => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);
  const [images, setImages] = useState<string[]>(['']);
 
  const navigate = useNavigate()

  const handleImageUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updateUrls = [...images];
    updateUrls[index] = event.target.value;
    setImages(updateUrls);
  };

  const handleAddImage = () => {
    setImages([...images, ""] as string[]);
  };

 const handleSubmit = async () => {
    if(title && price > 0 && images.every(url => url !== '')) {
        try {
            const product = {
                title,
                price,
                description,
                categoryId,
                images
            }
            
            const response = await axios.post( "https://api.escuelajs.co/api/v1/products/" , product)
            console.log(response.data);
            alert('Продукт успешно создан!')
            navigate('/')
        } catch (error) {
            console.log(error);
             
        }
    }
 }

  return (
    <div className="w-[300px] mx-auto my-20 flex flex-col justify-start">
      <h1 className="text-4xl " style={{ marginLeft: '12px'}}>Создать продукт</h1>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full h-10 border border-black rounded-md pl-2 mt-20"
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-12 h-10 border border-black rounded-md pl-2 mt-3"
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-10 border border-black rounded-md pl-2 mt-3"
      />
      <input
        type="number"
        placeholder="Категория"
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
        className="w-full h-10 border border-black rounded-md pl-2 mt-5"
      />
      <div>
        {images.map((url, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="URL Картинки"
              value={url}
              onChange={(event) => handleImageUrlChange(event, index)}
              className="w-full h-10 border border-black rounded-md pl-2 mt-5"
            />
          </div>
        ))}
        <button className="w-full text-left underline" onClick={handleAddImage}>Добавить картинку</button>
      </div>
      <button className="w-full h-10 border border-black rounded-xl mt-2" onClick={handleSubmit}>Создать продукт</button>

    </div>
  );
};

export default CreateProduct;
