import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import logoBranco from '@/public/logobranco.svg'
import { ModeToggle } from '@/app/_components/mode-toggle'
import { MyDropdownMenu } from '@/app/_components/dropMenu'

import { FaLocationDot } from 'react-icons/fa6'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ActiveLink } from '../active-link'

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Header superior */}

      <section className="grid bg-slate-50 dark:bg-zinc-700">
        <div className="container">
          <div className="h-8 hidden bg-slate-50 lg:flex flex-wrap justify-between dark:bg-zinc-700">
            <ul className="flex opacity-80 items-center space-x-2">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/clickcaresaude"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare
                    className="text-lg transition-all duration-200 hover:scale-125"
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
                    className="text-lg transition-all duration-200 hover:scale-125"
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
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#25D366"
                    alt="Whatsapp"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:clickcaresaude@gmail.com"
                  aria-label="Gmail"
                >
                  <SiGmail
                    className="text-lg transition-all duration-200 hover:scale-125"
                    color="#D44638"
                    alt="Gmail"
                  />
                </a>
              </li>
            </ul>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
              aria-label="Whatsapp"
            >
              <section className="sm:flex  text-xs font-light tracking-widest text-shadow items-center px-2 py-2 space-x-2 hover:scale-105">
                <div className="text-slate-500 dark:text-slate-300">
                  <BsFillTelephoneFill />
                </div>
                <span className="text-slate-700 dark:text-white">
                  Telefone: (21) 97253-0303 ou (21) 3253-0062
                </span>
              </section>
            </a>
            <a
              href="https://www.google.com/maps/dir//Rua+Siqueira+Campos,+93+-+Copacabana,+Rio+de+Janeiro+-+RJ/@-22.967923,-43.2270673,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bd55a5f60ee09:0x25c222bd7ae78cf!2m2!1d-43.1858677!2d-22.9679283?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <section className="hidden lg:flex text-xs font-light tracking-wide text-shadow items-center px-2 py-2 space-x-2 hover:scale-105">
                {' '}
                <div className="text-slate-500 dark:text-slate-300">
                  <FaLocationDot />
                </div>
                <span className="text-slate-700 dark:text-white">
                  R. Siqueira Campos, 93 sala 1004- 10° andar - Copacabana, Rio
                  de Janeiro - RJ, 22031-071
                </span>
              </section>
            </a>
          </div>
        </div>
      </section>

      {/* Header Inferior */}

      <section className="grid text-green2 font-medium tracking-wider bg-primary dark:bg-secondary">
        <div className="container mx-auto h-14 flex items-center justify-between px-2 py-2 lg:px-10 bg-primary dark:bg-secondary">
          <div className="flex w-28 dark:hidden">
            <Link href="/">
              <Image
                src={logo}
                alt="Click Care"
                className="cursor-pointer"
                priority
              />
            </Link>
          </div>
          <div className="hidden w-28 dark:flex">
            {/* Exibir logo no modo dark */}
            <Image
              className="object-cover w-full h-full"
              src={logoBranco}
              alt="Banner para Mobile"
              loading="eager"
            />
          </div>

          <div className="hidden sm:flex justify-between font-heading  tracking-widest">
            <ul className="flex space-x-5">
              <li className="transition ease-in-out duration-1200 hover:text-secondary hover:scale-110">
                <ActiveLink href="/">Home</ActiveLink>
              </li>
              <li className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110">
                <ActiveLink href="/servicos">Serviços</ActiveLink>
              </li>
              <li className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110">
                <ActiveLink href="/blog">Blog</ActiveLink>
              </li>
              <li className=" transition ease-in-out duration-1200 hover:text-secondary hover:scale-110">
                <ActiveLink href="/contatos">Contatos</ActiveLink>
              </li>
            </ul>
          </div>

          <div className="flex text-xs px-2 font-heading">
            <span className="flex items-center dark:text-white">
              <ModeToggle />
            </span>
          </div>

          <div className="sm:hidden py-1 px-1 text-green1 dark:text-white">
            <MyDropdownMenu />
          </div>
        </div>
      </section>
    </header>
  )
}
