import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer'

export default function App() {
    return (
        <div>
            <Navbar />
            <Main 
            cardTitle="Lorem, ipsum."
            cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, distinctio! Repellat facere maiores, repudiandae minus modi id mollitia perferendis harum, voluptatum excepturi ipsum voluptas hic."
            />
            <Footer />
        </div>
    )
}
