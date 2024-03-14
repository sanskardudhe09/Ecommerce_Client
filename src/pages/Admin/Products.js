import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminPanel from '../../components/Layout/AdminPanel'
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import "../../index.css";
const Products = () => {
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`https://upset-jade-bream.cyclic.app/api/getall-products`);
            if (data?.products) {
                setProducts(data?.products);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Something went wrong!!")
        }
    }
    useEffect(() => {
        getAllProducts();
    }, [])
    return (
        <Layout>
            <div className='container-fluid m-3 p-3'>
                <div className='row'>
                    <div className='col-md-3 admindashleft'>
                        <AdminPanel />
                    </div>
                    <div className='col-md-9 prod-nonresponsive'>
                        <h2 className='text-center'>All Products</h2>
                        <div className='d-flex flex-wrap'>
                         {products.map((p) => (
                            <Link key={p._id} to= {`/dashboard/admin/product/${p.slug}`} style={{textDecoration:"none"}}>
                            <div className="card m-3" style={{ width: '25rem' }}>
                                <img src={ `https://upset-jade-bream.cyclic.app/api/product-photo/${p._id}`} className="card-img-top" 
                                style={{height: "300px"}}alt="product image" />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.desc}</p>
                                </div>
                            </div>
                            </Link>
                          ))}
                        </div>
                    </div>
                    <div className='col-md-9 prod-responsive'>
                        <h2 className='text-center'>All Products</h2>
                        <div className='d-flex flex-wrap'>
                         {products.map((p) => (
                            <Link key={p._id} to= {`/dashboard/admin/product/${p.slug}`} style={{textDecoration:"none"}}>
                            <div className="card m-3 w-75">
                                <img src={ `https://upset-jade-bream.cyclic.app/api/product-photo/${p._id}`} className="card-img-top" 
                                style={{height: "300px"}}alt="product image" />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.desc}</p>
                                </div>
                            </div>
                            </Link>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products