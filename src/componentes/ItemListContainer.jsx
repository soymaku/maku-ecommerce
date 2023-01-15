import React, { useState, useEffect }  from 'react';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const {id} = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items")
    const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(q).then((snapShot) => {
      setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
    })
}, [id])
  return (
    <div className="container py-5">
      <div className="row">
        <ItemList items={items} />
      </div>
    </div>
  );
}

export default ItemListContainer;