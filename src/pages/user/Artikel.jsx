import React from 'react';
import Artikel1 from './../../assets/artikel/artikel1.png';
import Artikel2 from './../../assets/artikel/artikel2.png';
import Artikel3 from './../../assets/artikel/artikel3.jpg';
import { IoIosSearch } from "react-icons/io";


const Line = () => {
  const lineStyle = {
    position: 'absolute',
    width: '1204px',
    height: '0px',
    left: '825px',
    top: '599px',
    border: '1px solid #807D7E',
    transform: 'rotate(90deg)',
  };

  return (
    <div style={lineStyle}></div>
  );
};



const Artikel = () => {
  return (
    <div>
    	<div className='mt-48 text-center'>
				<p className='text-[64px] text-green-950 font-bold'>Majalah <span className='text-[#FAB737]'>Agro.in</span></p>
				<p className='text-[16px] mt-4'>Menyajikan Wawasan Terbaru dalam Dunia Pertanian </p>
				<input type="text" className='bg-[#D8D8D8] rounded-lg mt-7' style={{height: '35px', width: '320px'}} placeholder='Search'/>
			</div>
			<div className='flex'>
			<div className='grid grid-rows-2 pt-48 pb-16 gap-y-16'>
				<div className='flex flex-col mx-32 gap-y-2 '>
					<img src={Artikel1} alt="" className='w-[470px]'/>
					<p className='text-[12px] text-[#807D7E]'>07 mei 2024 15:52 WIB</p>
					<p className='text-[32px] font-semibold w-[430px]'>Mentan Ingin Bangun Klaster Pertanian Modern</p>
					<p className='w-[430px] text-sm'>Kementerian Pertanian (Kementan) berencana untuk membangun klaster pertanian modern. Klaster pertanian modern tersebut mengacu sistem pertanian di negara-negara maju. Hal tersebut diungkapkan Mentan Andi Amran Sulaiman saat mendatangi para petani Bojongemas, Kecamatan Solokanjeruk, Kabupaten Bandung, Selasa (7/5/2024). Menurut Amran, demi merealisasikan pertanian modern, pemerintah daerah perlu menyediakan lahan.</p>
				</div>
				<div className='flex flex-col mx-32 gap-y-2'>
					<img src={Artikel2} alt="" className='w-[470px]'/>
					<p className='text-[12px] text-[#807D7E]'>07 mei 2024 15:52 WIB</p>
					<p className='text-[32px] font-semibold w-[430px]'>PJ Bupati Palas Edy Junaedi Salurkan Bantuan Alsintan ke Petani</p>
					<p className='w-[430px] text-sm'>Kementerian Pertanian (Kementan) berencana untuk membangun klaster pertanian modern. Klaster pertanian modern tersebut mengacu sistem pertanian di negara-negara maju. Hal tersebut diungkapkan Mentan Andi Amran Sulaiman saat mendatangi para petani Bojongemas, Kecamatan Solokanjeruk, Kabupaten Bandung, Selasa (7/5/2024). Menurut Amran, demi merealisasikan pertanian modern, pemerintah daerah perlu menyediakan lahan.</p>
				</div>
				</div>
				<Line />
				<div className='pt-48 pb-16'>
					<div className='flex flex-row flex-wrap mx-32 gap-y-2'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<p className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></p>
					</div>
					<div className='flex flex-row flex-wrap mx-32 gap-y-2 my-7'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<p className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></p>
					</div>
					<div className='flex flex-row flex-wrap mx-32 gap-y-2'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<a className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></a>
					</div>
					<div className='flex flex-row flex-wrap mx-32 gap-y-2 my-7'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<a className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></a>
					</div>
					<div className='flex flex-row flex-wrap mx-32 gap-y-2'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<a className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></a>
					</div>
					<div className='flex flex-row flex-wrap mx-32 gap-y-2 my-7'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<a className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></a>
					</div>
					<div className='flex flex-row flex-wrap mx-32 gap-y-2'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<a className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></a>
					</div>
				</div>
			 </div>
		</div>
  )

}

export default Artikel;
