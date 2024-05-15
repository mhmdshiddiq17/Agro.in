import React from 'react'
import Artikel1 from './../../assets/artikel/artikel1.png'
import Artikel2 from './../../assets/artikel/artikel2.png'
import Line from './../../components/atoms/Line';
import Artikel3 from './../../assets/artikel/artikel3.jpg';
import Artikel4 from './../../assets/artikel/artikel4.png';
import Artikel6 from './../../assets/artikel/artikel6.png';
import Artikel7 from './../../assets/artikel/artikel7.png';
import Artikel8 from './../../assets/artikel/artikel8.png';
import Artikel9 from './../../assets/artikel/artikel9.png';
import Iklan1 from './../../assets/artikel/iklan1.png';
import Iklan2 from './../../assets/artikel/iklan2.png';
import { Link } from 'react-router-dom';
import { MainArtikel } from './Artikel';


const articles = [
    {
      image: Artikel3,
      title: 'Optimalisasi Produksi Tanaman: Panduan Praktis untuk Mengatur pH Tanah',
      date: '2 Mei 2024',
    },
    {
      image: Artikel4,
      title: 'Menciptakan Keseimbangan: Antara Tanggung Jawab di Sawah dan Dunia Digital',
      date: '2 Mei 2024',
    },
    {
      image: Artikel6,
      title: 'Pemerintah Aceh Gelora Kembali Pasar Tani di 2024',
      date: '25 April 2024',
    },
    {
      image: Artikel7,
      title: 'Apakah Makanan Organik Benar-benar Sehat?',
      date: '25 April 2024',
    },
    {
      image: Artikel8, title: `Violet Sun Agro+, Solusi Pertanian Lahan Kering Bertenaga Surya`, date: '25 April 2024',
    },
		{
			image: Artikel9, title: `6 Pengaruh Negatif IPTEK di Bidang Pertanian`, date: '25 April 2024',
		}
  ];

  const ChildArtikel = () =>{
	return(
		<div className='mx-10'>
		{articles.map((tes, index) => (
			<div className='flex flex-row gap-y-2 mb-7' key={index}>
					<img src={tes.image} alt="" className='w-24 rounded-2xl'/>
					<div className='ms-3 w-40 flex flex-col justify-between'>
						<Link className="text-[12px] font-bold" to={'/'}>{tes.title}</Link>
						<p className='text-xs font-thin text-[#807D7E]'>{tes.date}</p>
					</div>
			</div>
		))}
			<div className='w-full h-max bg-gray-300 rounded-md'>
				<p className='text-[20px] font-light text-[#807D7E] text-center py-3'>ADVERTISEMENT</p>
				<div className='w-full'>
					<img src={Iklan1} alt=""/>
					<img src={Iklan2} alt="" />
				</div>
			</div>
		`</div>
	)
}



export const ArtikelDetail = () => {
    const lineStyle = {
        height: '690px',
        border: '1px solid #807D7E',
        width: '2px',

      };
			const horizStyle = {
				height: '2px',
				width: '470px',
				border: '1px solid #807D7E',
				margin: '50px',

			}
  return (
    <div className='py-32 min-h-dvh flex flex-wrap'>
        <div className='flex flex-col gap-y-4 ps-32 pe-20 w-[60%] '>
            <img src={Artikel1} alt="" className='w-full h-72'/>
            <p className='text-[12px] text-[#807D7E]'>07 Mei 2024 15:52 WIB</p>
            <p className='text-sm text-justify leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus nemo modi commodi iste vitae impedit ratione labore quod, excepturi debitis doloribus quibusdam, ex est omnis cum id, laborum velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt, illum commodi sint harum culpa obcaecati ab ea facilis quasi hic ullam voluptatem reiciendis quis cumque. Aspernatur suscipit at illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos eligendi dignissimos amet et incidunt maiores ad magni, ea ducimus quisquam atque molestias ex earum saepe eius assumenda. Accusamus, odit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo enim voluptatum non suscipit similique, voluptate quasi ad cum magni! Est, dolore. Minima aut laboriosam nam dolor, fuga adipisci error tenetur.</p>
						<Line style={horizStyle}/>
						<h2 className='text-[48px] font-bold'>Berita Lainnya</h2>
						{/* <img src={Artikel2} alt="" className='w-2/3'/> */}
            <MainArtikel />

        </div>
        <Line style={lineStyle}/>
        <ChildArtikel />
				{/* <Line style={horizStyle}/> */}
    </div>
  )
}


