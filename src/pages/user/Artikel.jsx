import React from 'react';
import Artikel1 from './../../assets/artikel/artikel1.png';
import Artikel2 from './../../assets/artikel/artikel2.png';
import Artikel3 from './../../assets/artikel/artikel3.jpg';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';


const DataArtikel = [
	{
		title: 'Mentan Ingin Bangun Klaster Pertanian Modern', timestamps: '07 Mei 2024 15:52 WIB', description: 'Kementerian Pertanian (Kementan) berencana untuk membangun klaster pertanian modern. Klaster pertanian modern tersebut mengacu sistem pertanian di negara-negara maju. Hal tersebut diungkapkan Mentan Andi Amran Sulaiman saat mendatangi para petani Bojongemas, Kecamatan Solokanjeruk, Kabupaten Bandung, Selasa (7/5/2024). Menurut Amran, demi merealisasikan pertanian modern, pemerintah daerah perlu menyediakan lahan.'
	},
	{
		title: 'PJ Bupati Palas Edy Junaedi Salurkan Bantuan Alsintan ke Petani', timestamps: '07 Mei 2024 14:40 WIB', description: 'Pj Bupati Padang Lawas (Palas) Edy Junaedi menyampaikan sejumlah langkah yang akan dilakukan untuk meningkatkan produksi pangan masyarakat. Satu di antaranya, memaksimalkan bantuan dari kementerian berupa alat dan mesin pertanian (Alsintan)'
	},

]

const SampingArtikel = [
		{judulArtikel: `Optimalisasi Produksi Tanaman: Panduan Praktis untuk Mengatur pH Tanah`, timestamps: '2 Mei 2024'},
		{judulArtikel: `Pemerintah Aceh Gelora Kembali Pasar Tani di 2024`, timestamps: '25 April 2024'},
		{judulArtikel: `Apakah Makanan Organik Benar-benar Sehat?`, timestamps: '25 April 2024'},
		{judulArtikel: `Stok Pupuk Bersubsidi Melimpah, Petani Diminta Menebus Kuota ynag Dimiliki`, timestamps: '25 April 2024'},
		{judulArtikel: `Violet Sun Agro+, Solusi Pertanian Lahan Kering Bertenaga Surya`, timestamps: '25 April 2024'},
		{judulArtikel: `6 Pengaruh Negatif IPTEK di Bidang Pertanian`, timestamps: '25 April 2024'},
]

// const SampingArtikel = [
// 	{
// 		title: `Optimalisasi Produksi Tanaman: Panduan Praktis untuk Mengatur pH Tanah`, timestamps: '2 Mei 2024'
// 	},
// 	{
// 		title: 'Pemerintah Aceh Gelora Kembali Pasar Tani di 2024', timestamps: '25 April 2024'
// 	}
// ]



const Line = () => {
  const lineStyle = {
    height: '850px',
    border: '1px solid #807D7E',
    width: '2px',
  };

  return (
    <div style={lineStyle}></div>
  );
};

const MainArtikel = () =>{
	return(
		<div className='grid grid-rows-2 pt-48 pb-16 gap-y-16'>
				{DataArtikel.map((news, index) => (
				<div className='flex flex-col mx-32 gap-y-2' key={index}>
					<img src={Artikel1} alt="" className='w-[470px]'/>
					<p className='text-[12px] text-[#807D7E]'>{news.timestamps}</p>
					<Link to={'/'} className='text-[32px] font-semibold w-[430px]'>{news.title}</Link>
					<p className='w-[430px] text-sm'>{news.description}</p>
				</div>
				))}
		</div>
	)
}

const ChildArtikel = () =>{
	return(
		<div className='pt-48 pb-16'>
		{SampingArtikel.map((tes, index) => (
			<div className='flex flex-row mx-32 gap-y-2 my-7' key={index}>
					<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
					<div className='ms-3 w-40 flex flex-col justify-between'>
						<p className="text-[12px] font-bold">{tes.judulArtikel}</p>
						<p className='text-xs font-thin text-[#807D7E]'>{tes.timestamps}</p>
					</div>
			</div>
		))}
		`</div>
	)
}


const Artikel = () => {
  return (
    <div>
    	<div className='mt-48 text-center'>
				<p className='text-[64px] text-green-950 font-bold'>Majalah <span className='text-[#FAB737]'>Agro.in</span></p>
				<p className='text-[16px] mt-4'>Menyajikan Wawasan Terbaru dalam Dunia Pertanian </p>
				<input type="text" className='bg-[#D8D8D8] rounded-lg mt-7' style={{height: '35px', width: '320px'}} placeholder='Search'/>
			</div>
			<div className='flex'>
				<MainArtikel />
				<div className='pt-48'>
					<Line />
				</div>
				<ChildArtikel />
					{/* <div className='flex flex-row flex-wrap mx-32 gap-y-2'>
							<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
							<p className="text-[12px] font-bold ms-3">Optimalisasi Produksi<br/> Tanaman: Panduan Praktis<br /> untuk Mengatur pH Tanah<br></br> <span className='text-[#807D7E] font-light'>2 Mei 2024</span></p>
					</div> */}
					{/* {SampingArtikel.map((tes, index) => (

							<div className='flex flex-row mx-32 gap-y-2 my-7' key={index}>
									<img src={Artikel3} alt="" className='w-24 rounded-2xl'/>
									<div className='ms-3 w-40'>
										<p className="text-[12px] font-bold">{tes.judulArtikel}</p>
										<p className='text-xs font-thin text-[#807D7E] mt-6'>{tes.timestamps}</p>
									</div>
							</div>

					))} */}
					{/* <div className='flex flex-row flex-wrap mx-32 gap-y-2'>
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
					</div> */}

			 </div>
		</div>
  )

}

export default Artikel;
