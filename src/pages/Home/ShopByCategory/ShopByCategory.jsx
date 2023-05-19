import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';



const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState('teddyBear')

    // console.log(toys)

    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const filterByCategory = toys.filter(toy => toy.category == activeTab) || "Not data";


    const handleSubCategory = (data) => {
        setActiveTab(data)
    }
    return (
        <div className="container mx-auto mt-5">
            <h4 className="text-center fw-bold">Shop By Category</h4>
            <div>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleSubCategory("teddyBear")}>Teddy Bear</Tab>
                        <Tab onClick={() => handleSubCategory("horse")}>Horse</Tab>
                        <Tab onClick={() => handleSubCategory("cat")}>Cats</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='row'>
                            {
                                filterByCategory.map(item => <div key={item._id} className='col-lg-6'>
                                    <div className="card mb-3 p-3">
                                        <div className="row g-0 d-flex align-items-center">
                                            <div className="col-lg-7">
                                                <img src={item.photo} className=" rounded-start category-image" alt="..." />
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="card-body">
                                                    <h4>{item.name}</h4>
                                                    <div><span className='fs-2 fw-bold text-danger'>${item.price}</span></div>
                                                    <div className='d-flex align-items-center my-3'>
                                                        <span className='p-2 rounded-circle bg-warning fw-bold text-white'>{item.rating}</span>
                                                        <span className='ms-3'>
                                                            <Rating style={{ maxWidth: 100 }} value={item.rating} readOnly />
                                                        </span>
                                                    </div>
                                                    <Link to={`/view-details/${item._id}`} className="btn-all">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='row'>
                            {
                                filterByCategory.map(item => <div key={item._id} className='col-lg-6'>
                                    <div className="card mb-3 p-3">
                                        <div className="row g-0 d-flex align-items-center">
                                            <div className="col-lg-7">
                                                <img src={item.photo} className=" rounded-start category-image" alt="..." />
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="card-body">
                                                    <h4>{item.name}</h4>
                                                    <div><span className='fs-2 fw-bold text-danger'>${item.price}</span></div>
                                                    <div className='d-flex align-items-center my-3'>
                                                        <span className='p-2 rounded-circle bg-warning fw-bold text-white'>{item.rating}</span>
                                                        <span className='ms-3'>
                                                            <Rating style={{ maxWidth: 100 }} value={item.rating} readOnly />
                                                        </span>
                                                    </div>
                                                    <Link to={`/view-details/${item._id}`} className="btn-all">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='row'>
                            {
                                filterByCategory.map(item => <div key={item._id} className='col-lg-6'>
                                    <div className="card mb-3 p-3">
                                        <div className="row g-0 d-flex align-items-center">
                                            <div className="col-lg-7">
                                                <img src={item.photo} className=" rounded-start category-image" alt="..." />
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="card-body">
                                                    <h4>{item.name}</h4>
                                                    <div><span className='fs-2 fw-bold text-danger'>${item.price}</span></div>
                                                    <div className='d-flex align-items-center my-3'>
                                                        <span className='p-2 rounded-circle bg-warning fw-bold text-white'>{item.rating}</span>
                                                        <span className='ms-3'>
                                                            <Rating style={{ maxWidth: 100 }} value={item.rating} readOnly />
                                                        </span>
                                                    </div>
                                                    <Link to={`/view-details/${item._id}`} className="btn-all">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;