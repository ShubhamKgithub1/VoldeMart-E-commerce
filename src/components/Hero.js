import { Link } from "react-router-dom";

const Hero=()=>{
    const gradientStyle = {
        backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.9) 100%)',
        // backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '90vh'
      };

    return (
        <div className="bg-cover bg-center w-full h-[90vh]"  style={{ backgroundImage: `url("https://images.unsplash.com/photo-1478803431644-b832801eefa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
        <div className="flex items-center justify-center" style={gradientStyle}>
            <div className="text-white font-bold flex flex-col gap-5 text-6xl">
             <div>
             <span>If You Look </span><span className="text-teal-500"> Good</span>
             </div>
             <div>
             <span>Then We Look </span><span className="text-teal-500"> Good</span>
             </div>
             <div className="font-bold text-xl flex justify-center mt-12">
                <button className="bg-slate-300 text-black border rounded-2xl py-2 px-6 hover:bg-slate-200" ><Link to="/shopnow">Shop Now</Link></button>
             </div>
            
            </div>
        </div>
    </div>
    );
};

export default Hero;