import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const ShopByCategory = () => {
    const [category, setCategory] = useState('')
    console.log(category)
    const handleTeddy = (data) => {
        setCategory(data)
    }
    return (
        <div className="container mx-auto mt-5">
            <h4 className="text-center fw-bold">Shop By Category</h4>
            <div>
                <Tabs>
                    <TabList>
                        <Tab onClick={()=>handleTeddy("Teddy")}>Teddy Bear</Tab>
                        <Tab onClick={()=>handleTeddy("Horse")}>Horse</Tab>
                        <Tab onClick={()=>handleTeddy("Cats")}>Cats</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>{category} Bear category Toys</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>{category} category Toys</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>{category} category Toys</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;