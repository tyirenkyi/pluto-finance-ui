/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const assets = [
  {
    title: "US Stocks",
    icon: "us.svg",
    available: true
  },
  {
    title: "Indian Stocks",
    icon: "india.svg",
    available: true
  },
  {
    title: "Crypto tokens",
    icon: "crypto.svg",
    available: false
  },
  {
    title: "Gold",
    icon: "gold.svg",
    available: false,
  },
  {
    title: "Commodity",
    icon: "commodity.svg",
    available: false
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pluto Finance</title>
        <meta name="description" content="Invest in any asset in the world on one platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-appBlack min-h-screen flex flex-col items-center justify-center overflow-y-hidden">
        <h1 className='text-white font-bold text-[40px] tracking-wider mb-10 text-center'>
          Invest in any asset in the world, on one platform
        </h1>
        <img 
          src='/pluto.svg'
          alt=''
        />
        <div className='flex flex-row items-center xl:space-x-[140px] lg:space-x-[100px] md:space-x-[60px] mt-20 mb-20'>
          {assets.map((item, index) => (
            <AssetColumn 
              key={index}
              title={item.title}
              icon={item.icon}
              available={item.available}
            />
          ))}
        </div>
        <button className='text-white bg-appAmber rounded-md text-[24px] w-[221px] h-[52px]'>
          Go to App
        </button>
      </main>
    </div>
  )
}

const AssetColumn = ({title, available, icon}) => (
  <div className='flex flex-col items-center justify-center'>
    <img 
      src={icon}
      alt=''
      className={`${available ? "mb-4 h-[75px]" : "mb-2 h-[100px]"} object-cover`}
    />
    <p className='text-white text-[22px]'>{title}</p>
    {!available && (
      <p className='text-appGray text-[12px]'>Coming soon</p>
    )}
  </div>
)
