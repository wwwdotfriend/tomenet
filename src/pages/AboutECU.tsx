import Sidebar from '../components/Sidebar';
import HeaderImage from '/AboutImage.jpg'

export default function AboutECU() {
    return <div className="flex flex-col align-middle justify-center bg-[#FBF5F1] h-screen">
        <div>
        <Sidebar />
        </div>
        
        <header>
            <div className='w-screen bg-center bg-cover'>
                <img src={HeaderImage} alt='Campus Proper art'/>
            </div>
        </header>

        <div>
            <div className='text-center m-auto max-w-[750px]'>
                <h1>Our Mission</h1>
                <p>To inspire generations of scholars, adventurers, artisans, and leaders who will shape the future with wisdom, integrity, and creativity. We aim to balance the arcane with the ordinary, the innovative with the practical, and the pursuit of balancing personal growth with the greater good.</p>       
            </div>
        </div>
    </div>
}