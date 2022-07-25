import Category from "./components/Category";
import Pages from "./pages/Pages";
import {BrowserRouter, Link} from "react-router-dom"
import Search from "./components/Search";
import Nav from "./components/Nav";
import {GlobalProvider} from './context/GlobalState'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <GlobalProvider>
                <Nav/>
                <Search/>
                <Category/>
                <Pages/>
                </GlobalProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
