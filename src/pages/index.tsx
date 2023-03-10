import Button from '@/components/basics/Button'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page - Helpet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="m-0 p-0 bg-center bg-cover h-screen relative">
          <Image
            style={{ objectFit: 'cover'}}
            alt=''
            src="/assets/img/background-puppy.webp"
            fill
            quality={100}
          />
          <div style={{ background: 'rgba(33, 177, 106, .53)' }} className="absolute z-10 w-full h-full">
            <div className="flex items-center justify-center bg-transparent h-full mx-[20px]">
              <ul className="flex lg:w-auto items-center justify-center">
                <div className="text-white md:w-[50%] w-full">
                    <h3 className="md:text-[2.5em] text-[1.4em]">
                      <div className="leading-[1.2]">
                        Encuentra a tu <b>mascota</b>
                        <br />
                        perdida o ayuda a una a encontrar su hogar
                      </div>
                    </h3>
                    <h4 className="mt-[10px]">Porque las mascotas son los mejores amigos</h4>
                    <div className="flex mt-[20px]">
                      <Button href='/posts' title='posts' className="mr-[10px] md:h-[55px] h-[35px] md:text-[14px] text-[10px]" variant='active'>Comienza</Button>
                      <Button title='Learn How to' className='md:h-[55px] h-[35px] md:text-[14px] text-[10px]' variant='active'>Aprende Como</Button>
                      <a className="ml-[10px] text-[#21b16a]"></a>
                    </div>
                </div>
                <div className="lg:w-[50%] w-0">
                </div>
              </ul>
            </div>
          </div>
        </section>
        {/* <section id="help" className="cont--slogan section">
          <h2 className="text-white text-center mt-[100px] mb-[30px]"></h2>
          <div className="flex">
          </div>
        </section> */}
        <footer className="flex fixed bg-[#404040] h-[40px] bottom-0 z-50 w-full">

        </footer>
      </main>
    </>
  )
}
