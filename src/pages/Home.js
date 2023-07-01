import Navbar from '../components/Navbar';
import Caeousels from "../components/Carousels"
import Navbar2 from '../components/Navbar2';
import Cards from '../components/Cards'
import Avatar from '../components/livebot/Avatar';
import Chat from './Chat';

function Home(){
    return(
        <div>
            <div><Navbar/></div>
            <div><Navbar2/></div>
            <div className=" ms-me-1">
                <Caeousels />
            </div>
            <div className="row">
                <div className="col-11"><Cards/></div>
                <div><Chat/></div>
            </div>
            
           
        </div>
        
    )
}

export default Home;