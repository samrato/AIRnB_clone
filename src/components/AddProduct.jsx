import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !category || !price || !location || !description || !quantity || !image) {
      setError('Please fill in all fields and upload an image.');
      return;
    }

    try {
      // Upload the image to Firebase Storage
      const imageRef = ref(storage, `products/${uuidv4()}-${image.name}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Add product details to Firestore
      await addDoc(collection(db, 'products'), {
        name,
        category,
        price: parseFloat(price),
        location,
        description,
        quantity: parseInt(quantity),
        imageUrl,
      });

      alert('Product added successfully!');
      navigate('/sells'); // Redirect to Sells page
    } catch (err) {
      console.error(err);
      setError('Failed to add the product. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add a Product</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="foods">Foods</option>
          <option value="utensils">Utensils</option>
        </select>

        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Product Description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input
          type="number"
          className="w-full p-2 border rounded"
          placeholder="Quantity Available"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full p-2 border rounded"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Publish Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
