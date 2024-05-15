import React from 'react'
import Card from './../../components/atoms/CardForm';
import bgHero from './../../assets/bgHeroLogin.png';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Login = () => {
	const navigate = useNavigate;
  return (
  	<div className='min-h-screen relative' style={{backgroundImage: `URL(${bgHero})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
				<button
          onClick={navigate('/artikel')}
          className='relative top-[90px] left-24 py-2 px-4 bg-[#FAB737] hover:bg-primary hover:text-white rounded-full w-max flex flex-row justify-center items-center gap-3'
        >
          <IoIosArrowBack />Kembali
        </button>
        <Card />
		</div>
  )
}

export default Login;
