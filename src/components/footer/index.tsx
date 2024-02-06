import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import logoBranco from '@/public/logobranco.svg'

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { ActiveLinkFooter } from '../active-link-footer'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-primary dark:bg-green1">
          <div className="container px-2 py-3 item-center">
            <nav className="flex justify-between text-black h-40">
              <section className="flex flex-col justify-center text-justify tracking-wider mx-a p-5 dark:text-white">
                <div className="dark:hidden">
                  <Link href="/">
                    <Image
                      src={logo}
                      alt="Keyko Terapias logo"
                      width={166}
                      height={50}
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="hidden dark:flex">
                  {/* Exibir logo no modo dark */}
                  <Image
                    src={logoBranco}
                    alt="Banner para Mobile"
                    width={166}
                    height={50}
                    loading="eager"
                  />
                </div>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  aria-label="Whatsapp"
                >
                  <p className="pt-2 tracking-wide text-xs sm:text-sm hover:scale-105 text-slate-600 dark:text-slate-100 ">
                    Telefone: (21) 97253-0303 / (21) 3253-0062
                  </p>
                </a>
                <p className="text-xs sm:text-sm hover:scale-105 text-slate-600 dark:text-slate-100  ">
                  <a href="mailto:clickcaresaude@gmail.com">
                    clickcaresaude@gmail.com
                  </a>
                </p>
                <a
                  href="https://www.google.com/maps/dir//Rua+Siqueira+Campos,+93+-+Copacabana,+Rio+de+Janeiro+-+RJ/@-22.967923,-43.2270673,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bd55a5f60ee09:0x25c222bd7ae78cf!2m2!1d-43.1858677!2d-22.9679283?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <address className="text-xs sm:text-sm hover:scale-105 text-slate-600 dark:text-slate-100  ">
                    <p>R. Siqueira Campos, 93 sala 1004- 10° andar</p>
                    <p>Copacabana, Rio de Janeiro - RJ</p>
                  </address>
                </a>
              </section>
              <SiteLinks />
              <SocialLinks />
            </nav>
          </div>
        </div>
      </footer>

      <div className=" ">
        <div className="container flex items-center justify-center px-2 py-2 h-12 sm:text-xs">
          <hr />
          <p>
            <span className="text-sm sm:text-base ">
              © 2024 Click Care Saúde -{' '}
            </span>
            <a
              href="https://www.vitorbruno.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="p-2 font-semibold text-sm sm:text-base  text-slate-600 hover:font-semibold hover:text-sky-600">
                Created by Vitor Bruno
              </span>
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

function SiteLinks() {
  return (
    <div className="hidden sm:flex flex-col overflow-hidden dark:text-white">
      <h2 className="font-heading tracking-widest text-slate-600 dark:text-slate-100 ">
        Site
      </h2>
      <ul className="px-1 py-1 text-xs sm:text-sm font-light tracking-wide flex-col items-center flex-grow space-y-1">
        <li className="transform transition-transform duration-200 hover:scale-110">
          <ActiveLinkFooter href="/">Home</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200 hover:scale-110">
          <ActiveLinkFooter href="/servicos">Serviços</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200 hover:scale-110">
          <ActiveLinkFooter href="/blog">Blog</ActiveLinkFooter>
        </li>
        <li className="transform transition-transform duration-200 hover:scale-110">
          <ActiveLinkFooter href="/contatos">Contatos</ActiveLinkFooter>
        </li>
      </ul>
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="mr-5  dark:text-white">
      <h2 className="font-heading tracking-widest text-center text-sm sm:text-base text-slate-600 dark:text-slate-100 ">
        Siga-nos
      </h2>
      <ul className="flex flex-col sm:flex-row py-2 bg-slate-50 p-3 space-y-2 sm:space-x-2 sm:space-y-0 rounded-full justify-center items-center">
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
    </div>
  )
}
