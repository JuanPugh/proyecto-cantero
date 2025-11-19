import { useState, useRef } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Navbar from "../components/navbar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useAuth, User } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

function AddItems() {

    const { user } = useAuth();
    const formRef = useRef<HTMLFormElement>(null);

    if (!user?.isAdmin) {
        return (<Navigate replace={true} to="/products" />)
    }

    const [values, setValues] = useState({

        name: "",
        material: "",
        description: "",
        price: "",
        stock: "",
    })

    const handleChange = (e: any) => {

        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const productsRef = collection(db, "products");
        const productData = {
            ...values,
            image: "a"
        }

        addDoc(productsRef, productData);
        alert("Producto añadido!");
        formRef?.current?.reset();

        //return (<Navigate replace={true} to="/login" />)
    }

    return (


        <>
            <Navbar />

            <form ref={formRef} onSubmit={handleSubmit} className="flex-vertical">

                <h1 className="title">Registre un producto</h1>

                <Input name="Name" onChange={handleChange} type="text" />
                <Input name="Material" onChange={handleChange} type="text" />
                <Input name="Description" onChange={handleChange} type="text" />
                <Input name="Price" onChange={handleChange} type="number" />
                <Input name="Stock" onChange={handleChange} type="number" />

                <Button text="Registrar" type="submit" className="submit rounded white-bg" />


            </form>
        </>
    )

} export default AddItems;