import React, { useState, useEffect }  from 'react';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import Loading from './Loading';

const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const [loading, setLoading] = useState(true)
  const {id} = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items")
    const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(q).then((snapShot) => {
      setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
      setLoading(false)
    })
}, [id])
  return (
    <div className="container py-5 text-center">
      <div className="row">
        {loading ?  <Loading /> : <ItemList items={items} />}
        </div>
    </div>
  );
}

export default ItemListContainer;