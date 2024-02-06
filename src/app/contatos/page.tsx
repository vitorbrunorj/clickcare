import Image from 'next/image'

// imagens Light correspondentes
import BannerContatoMobile from '../../public/1BannerContatoMobile.webp'
import BannerContatoSm from '../../public/2BannerContatoSm.webp'
import BannerContatoMd from '../../public/3BannerContatoMd.webp'
import BannerContatoLg from '../../public/4BannerContatoLg.webp'
import BannerContatoXl from '../../public/5BannerContatoXl.webp'
import BannerContato2xl from '../../public/6BannerContato2Xl.webp'

// imagens Dark correspondentes
import BannerContatoMobileDark from '../../public/1BannerContatoMobileDark.webp'
import BannerContatoSmDark from '../../public/2BannerContatoSmDark.webp'
import BannerContatoMdDark from '../../public/3BannerContatoMdDark.webp'
import BannerContatoLgDark from '../../public/4BannerContatoLgDark.webp'
import BannerContatoXlDark from '../../public/5BannerContatoXlDark.webp'
import BannerContato2xlDark from '../../public/6BannerContato2XlDark.webp'

import { IoLogoWhatsapp } from 'react-icons/io'
import image7 from '../../public/image6.webp'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { SiGmail, SiGooglemaps } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
export default function Contato(): JSX.Element {
  return (
    <>
      <main>
        <section>
          <div className="w-full h-full">
            <div className="sm:hidden dark:hidden">
              {/* Exibir banner para telas até 640 (mobile) */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoMobile}
                alt="Banner para Mobile"
                loading="eager"
              />
            </div>
            <div className="hidden dark:flex dark:sm:hidden">
              {/* Exibir banner para telas até 640 (mobile) no modo dark */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoMobileDark}
                alt="Banner para Mobile"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block md:hidden dark:hidden">
              {/* Exibir banner para telas sm */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoSm}
                alt="Banner para SM"
                loading="eager"
              />
            </div>
            <div className="hidden dark:sm:flex dark:md:hidden">
              {/* Exibir banner para telas sm MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoSmDark}
                alt="Banner para SM"
                loading="eager"
              />
            </div>
            <div className="hidden md:block lg:hidden dark:hidden">
              {/* Exibir banner para telas md */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoMd}
                alt="Banner para MD"
                loading="eager"
              />
            </div>
            <div className="hidden dark:md:flex dark:lg:hidden">
              {/* Exibir banner para telas md MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoMdDark}
                alt="Banner para MD"
                loading="eager"
              />
            </div>
            <div className="hidden lg:block xl:hidden dark:hidden">
              {/* Exibir banner para telas lg */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoLg}
                alt="Banner para LG"
              />
            </div>
            <div className="hidden dark:lg:flex dark:xl:hidden">
              {/* Exibir banner para telas lg - Dark Mode */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoLgDark}
                alt="Banner para LG"
                loading="eager"
              />
            </div>
            <div className="hidden xl:block 2xl:hidden dark:hidden">
              {/* Exibir banner para telas xl */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoXl}
                alt="Banner para XL"
                loading="eager"
              />
            </div>
            <div className="hidden dark:xl:flex dark:2xl:hidden">
              {/* Exibir banner para telas xl MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContatoXlDark}
                alt="Banner para XL"
                loading="eager"
              />
            </div>
            <div className="hidden 2xl:block dark:hidden">
              {/* Exibir banner para telas 2xl */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContato2xl}
                alt="Banner para 2XL"
                loading="eager"
              />
            </div>
            <div className="hidden dark:2xl:flex">
              {/* Exibir banner para telas 2xl MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerContato2xlDark}
                alt="Banner para 2XL"
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center"></div>
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <div className="items-center text-center">
                <h2 className="font-heading text-center leading-normal text-3xl lg:text-4xl tracking-wider font-semibold mb-7">
                  Estamos a um clique <br /> de distância!
                </h2>
                <a
                  href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="pt-2 tracking-wide text-2xl hover:scale-105 ">
                    Tel: (21) 97253-0303 / (21) 3253-0062
                  </p>
                </a>
                <p className="text-2xl hover:scale-105">
                  <a href="mailto:clickcaresaude@gmail.com">
                    clickcaresaude@gmail.com
                  </a>
                </p>
                <a
                  href="https://www.google.com/maps/dir//Rua+Siqueira+Campos,+93+-+Copacabana,+Rio+de+Janeiro+-+RJ/@-22.967923,-43.2270673,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bd55a5f60ee09:0x25c222bd7ae78cf!2m2!1d-43.1858677!2d-22.9679283?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <address className="text-2xl hover:scale-105">
                    <p>R. Siqueira Campos, 93 sala 1004- 10° andar</p>
                    <p>Copacabana, Rio de Janeiro - RJ</p>
                  </address>
                </a>
                <section className="grid">
                  <div className="flex justify-center items-center ">
                    <ul className="flex items-center text-center space-x-2 mt-7">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/clickcaresaude"
                          aria-label="Facebook"
                        >
                          <FaFacebookSquare
                            className="text-2xl transition-all duration-200 hover:scale-125"
                            color="#3b5998"
                            alt="Facebook"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.instagram.com/clickcaresaude/"
                          aria-label="Instagram"
                        >
                          <FaInstagramSquare
                            className="text-2xl transition-all duration-200 hover:scale-125"
                            color="#E1306C"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                          aria-label="Whatsapp"
                        >
                          <FaWhatsappSquare
                            className="text-2xl transition-all duration-200 hover:scale-125"
                            color="#25D366"
                            alt="Whatsapp"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="mailto:elakeikoyamada@gmail.com"
                          aria-label="Gmail"
                        >
                          <SiGmail
                            className="text-2xl transition-all duration-200 hover:scale-125"
                            color="#D44638"
                            alt="Gmail"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.google.com/maps/dir//Rua+Siqueira+Campos,+93+-+Copacabana,+Rio+de+Janeiro+-+RJ/@-22.967923,-43.2270673,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bd55a5f60ee09:0x25c222bd7ae78cf!2m2!1d-43.1858677!2d-22.9679283?entry=ttu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGooglemaps
                            className="text-xl transition-all duration-200 hover:scale-125"
                            color="#4285F4"
                            alt="Google Maps"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsFillTelephoneFill
                            className="text-xl transition-all duration-200 hover:scale-125"
                            color="#25D366"
                            alt="Telefone"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                <div className="flex justify-center leading-relaxed text-justify mx-auto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                    aria-label="Whatsapp"
                    className="mt-6 bg-primary text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
                  >
                    Agende uma Sessão
                  </a>
                </div>
              </div>
            </div>
            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block dark:hidden"
                src={image7}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '242px', height: '390px' }}
              />
            </div>
          </div>
        </section>

        <div className="fixed right-0 bottom-6 mb-4 mr-4 z-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
            aria-label="Whatsapp"
          >
            <IoLogoWhatsapp className="text-green-500 text-5xl sm:text-6xl hover:scale-110" />
          </a>
        </div>
      </main>
    </>
  )
}
