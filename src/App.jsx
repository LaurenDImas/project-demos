import React, {useState} from 'react'
import Counter from "./components/basic_projects/Counter.jsx";
import Todo from "./components/basic_projects/Todo.jsx";
import Meals from "./components/basic_projects/Meals.jsx";
import Calculator from "./components/basic_projects/Calculator.jsx";
import ToggleBackgroundColor from "./components/basic_projects/ToggleBackgroundColor.jsx";
import HiddenSearchBar from "./components/basic_projects/HiddenSearchBar.jsx";
import Testimonials from "./components/basic_projects/Testimonials.jsx";
import Accordion from "./components/basic_projects/Accordion.jsx";
import {accordionData} from "./utils/content.js"
import Form from "./components/basic_projects/Form.tsx";
import Navigation from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recomended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

// Database
import products from "./db/data.js";
import Card from "./components/Card.jsx";

const App = () => {
    const [ selectedCategory, setSelectedCategory ] = useState(null);
    const [query, setQuery] = useState("");

    // TODO: Input Filter
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const filteredItems = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));

    // TODO: Radio Filter
    const handleChange = event =>{
        setSelectedCategory(event.target.value);
    }

    // TODO: Buttons filter
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    }

    const filteredData = (products, selected, query) => {
        let filteredProducts = products;

        // TODO: Filtering input items
        if (query){
            filteredProducts = filteredItems;
        }

        // TODO: Selected filter
        if (selected){
            filteredProducts = filteredProducts
                .filter(({category, color, company, newPrice, title}) => {
                    return category === selected ||
                        color === selected ||
                        company === selected ||
                        newPrice === selected ||
                        title === selected;
                })
        }

        return filteredProducts
            .map(({img, title, reviews, prevPrice, newPrice}) => {
                return <Card key={Math.random()}
                    img={img}
                    title={title}
                    reviews={reviews}
                    prevPrice={prevPrice}
                    newPrice={newPrice}
                />
            })
    }

    const result = filteredData(products, selectedCategory, query);

    return (
        <div>
            <Sidebar handleChange={handleChange}/>
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result}/>
            {/*// <div><Counter /></div>*/}
            {/*<Todo />*/}
            {/*<Meals/>*/}
            {/*<Calculator />*/}
            {/*<ToggleBackgroundColor/>*/}
            {/*<HiddenSearchBar />*/}
            {/*<Testimonials/>*/}
            {/*<div className="accordion">*/}
            {/*    {accordionData.map(({title, content}) => (*/}
            {/*      <Accordion key={Math.random()} title={title} content={content} />*/}
            {/*    ))}*/}
            {/*</div>*/}
            {/*<Form />*/}
        </div>
    )
}
export default App
