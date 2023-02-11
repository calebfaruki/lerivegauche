import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const buttonClasses = "inline-flex items-center px-4 py-2 leading-6 text-sm shadow transition ease-in-out duration-150 border-1 border-"
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <Head>
        <title>Le Rive Gauche</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="hero" className="h-screen border-x-8 border-t-8 border-[#113537]">
          <div className="bg-[url('/img/hero-background.jpg')] w-full h-full">
            <div className="flex items-center justify-center h-screen">
              <div className="text-center">
                <Image className="mx-auto" src="/img/logo.png" width="150" height="150" alt="Le Rive Gauche Logo" />
                <h1>Le Rive Gauche</h1>
                <h2>6 Pl. Saint-Michel, 75006 Paris</h2>
                <div className="flex space-x-2">
                  <a href="https://goo.gl/maps/FUpaZtgDJfV1WCFx9" target="_blank" rel="noreferrer" className={buttonClasses}>
                    Directions
                  </a>
                  <a href="#carte" className={buttonClasses}>
                    Carte
                  </a>
                  <a href="#reservations" className={buttonClasses}>
                    Reservations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="carte" className="p-8 bg-[#ECE4B7] border-8 border-[#113537]">
          <div className="w-full text-[#113537]">
            <div className="text-center">
              <h2>Carte</h2>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap">
              {arr.map((value) => (
                <div key={value} className="w-full md:w-1/2 p-2">
                  <div className="bg-white p-4">
                    <h3>Drinks</h3>
                    <ul>
                      <li>
                        <span>Grey poupon</span>
                        <span>14 €</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="reservations" className="w-screen h-screen">
          <div className="w-full flex items-center justify-center h-screen">
            <h2 className="text-[#ECE4B7]">Reservations</h2>
          </div>
        </section>
      </main>
    </>
  )
}
