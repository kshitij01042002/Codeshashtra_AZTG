import React, { useEffect, useState } from "react"
import Home from "./components/Home";
import Login from "./Login"
import Shoes from "./components/Shoes.js";
import Men from "./components/Men.js";
import Women from "./components/Women.js";
import Kids from "./components/Kids.js";
import { Admin } from "./components/Admin";
import ProductDescription from "./pages/ProductDescription";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./Signup";
import Footer from "./components/Footer";
import { data } from "./JsonData/data";
import Search from "./components/Search";
import ScrollToTop from "./ScrollToTop";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { login, logout } from './features/userSlice';
import Profile from "./components/Profile";
import Sort from "./components/Sort";
import Sales from "./components/Sales";

function App() {

    const [searchfield, setsearchfield] = useState("");
    const [sortValue, setSortValue] = useState("lowest");

    const onSearchChange = (e) => {
        setsearchfield(e.target.value)
    };


    const [products, setproducts] = useState([]);
    const usersCollectionRef = collection(db, "Products");
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            const data = await getDocs(usersCollectionRef);
            setproducts(data.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            })))
        }
        getProducts()

    }, [])

    const finaldata = data.concat(products);
    const newData = finaldata.map((el) => {
        const oldPrice = el.price.substring(1);
        const newPrice = parseInt(oldPrice.replace(/,/g, ''));
        const newObject = { ...el, price: newPrice };
        return newObject;
    });
    setSortedData(newData);
    // console.log(newData);

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("User logged in");
                dispatch(login({
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName
                }))
            } else {
                // User is signed out
                // ...
                dispatch(logout());
                console.log("User logged out");
            }
        });
        return unsubscribe;
    }, [dispatch]);


    // const sorting = () => {
    //   // console.log(sort_value);

    //   if (sortValue === 'a-z') {
    //     const newSortData = newData.sort((a, b) => {
    //       return a.name.localeCompare(b.name);
    //     })
    //     setSortedData(newSortData);
    //   }
    // };
    // // sorting();

    const filtereditems = sortedData.filter((data) => {
        return (searchfield ? data.title
            .toLowerCase()
            .includes(searchfield.toLowerCase()) :
            {})
    });

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar searchChange={onSearchChange} />
            {/* <Sort data={filtereditems} sorting={sorting} sortValue={sortValue} setSortValue={setSortValue} /> */}
            <Routes>
                {!searchfield ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Search data={filtereditems} />} />}
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/shoes" element={<Shoes data={filtereditems} />} />
                <Route path="/men" element={<Men data={filtereditems} />} />
                <Route path="/women" element={<Women data={filtereditems} />} />
                <Route path="/kids" element={<Kids data={filtereditems} />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/product/:id" element={<ProductDescription />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
