
import police from '/police.png'
import fire from '/fire.png'
import ems from '/ems.png'
import { Link } from 'react-router-dom'

const Home = () => {
  
  
  
return (
    <>
    <div className='flex justify-center font-bold text-8xl mt-10 text-red-700'>Southern RP Emergency Services</div>
    <div>
        <h1 className='flex justify-center text-7xl text-blue-700'>Police</h1>
    </div>
    <div style={{backgroundImage: `url(${police})`,
    backgroundSize: "cover",
    height: "60vh",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }}>
        <h3 className='flex justify-end text-3xl pr-10 text-blue-200'>Are you ready to step into a career that's not just a job, but a calling?
        <br></br> Look no further than our Police, Sheriff, and State Police divisions</h3>
    </div>
    <p className='flex justify-center text-4xl m-5'>As a member of our dynamic team, you'll find more than just a paycheck-You'll discover a sense of purpose, camaraderie,
         and the opportunity to make a real difference in the community every single day</p>
        <div className='flex justify-center'>
            <Link to="/Apply">
            <button className='bg-blue-700 hover:bg-blue-900 font-bold py-2 px-8 rounded text-3xl m-5'>Apply</button>
            </Link>
        </div>
    <h1 className='flex justify-center text-9xl text-red-600 mt-10 border-t-4 border-gray-800'>Fire</h1>
    <div style={{backgroundImage: `url(${fire})`,
    backgroundSize: "cover",
    height: "60vh",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }}> 
    <h3 className='flex justify-center text-3xl p-10 text-red-300'>Embrace the Heat: Ignite Your Career in Fire Services Today!</h3>
    </div>
    <p className='flex justify-center text-4xl m-5'>Are you ready to answer the call of duty and become a guardian against the flames?
         Join our dedicated team in Fire Services and embark on a journey filled with purpose and bravery</p>
         <div className='flex justify-center'>
             <Link to="/Apply">
            <button className='bg-blue-700 hover:bg-blue-900 font-bold py-2 px-8 rounded text-3xl m-5'>Apply</button>
            </Link>
        </div>
        <h1 className='flex justify-center text-8xl font-bold border-t-4 border-gray-800'>EMS</h1>
        <div style={{backgroundImage: `url(${ems})`,
    backgroundSize: "cover",
    height: "60vh",
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    }}> 
    <h3 className='flex justify-start text-3xl p-10 text-gray-100'>Embark on a life-saving journey: join EMS services today!</h3>
    </div>
    <p className='flex justify-center text-4xl m-5'>Are you passionate about making a difference in people's lives during their most critical moments? Join our EMS (Emergency Medical 
    Services) team and become a frontline hero in your community</p>
    <div className='flex justify-center'>
             <Link to="/Apply">
            <button className='bg-blue-700 hover:bg-blue-900 font-bold py-2 px-8 rounded text-3xl m-5'>Apply</button>
            </Link>
        </div>
    </>
  )
}

export default Home
