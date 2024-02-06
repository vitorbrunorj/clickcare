import Image from 'next/image'

import image5 from '../../public/image5.webp'

import image8 from '../../public/image8.webp'

import image9 from '../../public/image9.webp'

import image10 from '../../public/image10.webp'

// imagens Light correspondentes
import BannerServicosMobile from '../../public/1BannerServicosMobile.webp'
import BannerServicosSm from '../../public/2BannerServicosSm.webp'
import BannerServicosMd from '../../public/3BannerServicosMd.webp'
import BannerServicosLg from '../../public/4BannerServicosLg.webp'
import BannerServicosXl from '../../public/5BannerServicosXl.webp'
import BannerServicos2xl from '../../public/6BannerServicos2Xl.webp'

// imagens Dark correspondentes
import BannerServicosMobileDark from '../../public/1BannerServicosMobileDark.webp'
import BannerServicosSmDark from '../../public/2BannerServicosSmDark.webp'
import BannerServicosMdDark from '../../public/3BannerServicosMdDark.webp'
import BannerServicosLgDark from '../../public/4BannerServicosLgDark.webp'
import BannerServicosXlDark from '../../public/5BannerServicosXlDark.webp'
import BannerServicos2xlDark from '../../public/6BannerServicos2XlDark.webp'

import { IoLogoWhatsapp } from 'react-icons/io'

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
                src={BannerServicosMobile}
                alt="Banner para Mobile"
                loading="eager"
              />
            </div>
            <div className="hidden dark:flex dark:sm:hidden">
              {/* Exibir banner para telas até 640 (mobile) no modo dark */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosMobileDark}
                alt="Banner para Mobile"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block md:hidden dark:hidden">
              {/* Exibir banner para telas sm */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosSm}
                alt="Banner para SM"
                loading="eager"
              />
            </div>
            <div className="hidden dark:sm:flex dark:md:hidden">
              {/* Exibir banner para telas sm MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosSmDark}
                alt="Banner para SM"
                loading="eager"
              />
            </div>
            <div className="hidden md:block lg:hidden dark:hidden">
              {/* Exibir banner para telas md */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosMd}
                alt="Banner para MD"
                loading="eager"
              />
            </div>
            <div className="hidden dark:md:flex dark:lg:hidden">
              {/* Exibir banner para telas md MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosMdDark}
                alt="Banner para MD"
                loading="eager"
              />
            </div>
            <div className="hidden lg:block xl:hidden dark:hidden">
              {/* Exibir banner para telas lg */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosLg}
                alt="Banner para LG"
              />
            </div>
            <div className="hidden dark:lg:flex dark:xl:hidden">
              {/* Exibir banner para telas lg - Dark Mode */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosLgDark}
                alt="Banner para LG"
                loading="eager"
              />
            </div>
            <div className="hidden xl:block 2xl:hidden dark:hidden">
              {/* Exibir banner para telas xl */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosXl}
                alt="Banner para XL"
                loading="eager"
              />
            </div>
            <div className="hidden dark:xl:flex dark:2xl:hidden">
              {/* Exibir banner para telas xl MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicosXlDark}
                alt="Banner para XL"
                loading="eager"
              />
            </div>
            <div className="hidden 2xl:block dark:hidden">
              {/* Exibir banner para telas 2xl */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicos2xl}
                alt="Banner para 2XL"
                loading="eager"
              />
            </div>
            <div className="hidden dark:2xl:flex">
              {/* Exibir banner para telas 2xl MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerServicos2xlDark}
                alt="Banner para 2XL"
                loading="eager"
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
        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
            <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold text-green1">
              Serviços Exclusivos da Click Care à Sua Disposição
            </h2>
          </div>
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold text-green2">
                Garanta o Conforto e a Qualidade
                <br />
                com Nosso Serviço de Home Care
              </h2>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Experimente o melhor em cuidado domiciliar com os serviços
                abrangentes da Click Care. Nossa abordagem de Home Care visa
                proporcionar conforto e segurança, permitindo que você receba
                assistência especializada no ambiente familiar. Contamos com uma
                equipe altamente qualificada e oferecemos uma ampla variedade de
                serviços adaptados às suas necessidades. Ao escolher o Home Care
                da Click Care, tenha acesso a:
              </p>

              <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px] text-sm text-slate-600 font-medium dark:text-slate-300">
                <li>Cuidado Personalizado</li>
                <li>Profissionais Qualificados</li>
                <li>Comunicação Integrada</li>
                <li>Conveniência 24 Horas</li>
                <li>Ampla Gama de Serviços</li>
                <li>Segurança e Conforto</li>
              </ul>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Escolha a Click Care Saúde e proporcione a você ou a seus entes
                queridos uma experiência de Home Care focada no bem-estar e na
                qualidade de vida.
              </p>
            </div>

            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image8}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '390px', height: '390px' }}
              />
            </div>
          </div>

          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              href="/servicos/home-care"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-green1 text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>
        </section>
        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center"></div>
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold text-green2">
                Garanta a Conveniência e a Eficiência
                <br />
                com Nossos Procedimentos Domiciliares
              </h2>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Desfrute de procedimentos domiciliares otimizados com os
                serviços exclusivos da Click Care. Proporcionamos praticidade e
                segurança, oferecendo uma ampla gama de procedimentos adaptados
                às suas necessidades. Com acesso a uma equipe altamente
                qualificada e equipamentos especializados, nossa abordagem visa
                garantir o conforto e a eficácia do cuidado domiciliar. Ao optar
                pelos nossos procedimentos domiciliares, você terá acesso a:
              </p>

              <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px] text-sm text-slate-600 font-medium dark:text-slate-300">
                <li>Assistência Personalizada</li>
                <li>Profissionais Especializado</li>
                <li>Comunicação Integrada</li>
                <li>Conveniência 24 Horas</li>
                <li>Ampla Variedade de Serviços</li>
                <li>Segurança e Conforto</li>
              </ul>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Escolha a Click Care Saúde e tenha uma experiência domiciliar
                adaptada às suas necessidades, proporcionando conforto e
                eficiência em cada procedimento.
              </p>
            </div>

            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image9}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '390px', height: '390px' }}
              />
            </div>
          </div>

          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              href="/servicos/procedimento-domiciliar"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-green1 text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>
        </section>
        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center"></div>
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold text-green2">
                Garanta o Bem-Estar e a Recuperação
                <br />
                com Nossos Serviços de Terapia Domiciliar
              </h2>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Proporcione conforto e segurança durante a terapia domiciliar
                com os serviços especializados da Click Care. Nossa abordagem
                visa otimizar o processo de recuperação, oferecendo uma ampla
                variedade de terapias adaptadas às suas necessidades. Com acesso
                a uma equipe altamente qualificada e equipamentos
                especializados, garantimos uma experiência personalizada e
                eficaz. Ao escolher nossos serviços de terapia domiciliar, você
                terá acesso a:
              </p>

              <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px] text-sm text-slate-600 font-medium dark:text-slate-300">
                <li>Terapia Personalizada</li>
                <li>Profissionais Especializados</li>
                <li>Comunicação Integrada</li>
                <li>Conveniência 24 Horas</li>
                <li>Diversidade de Serviços</li>
                <li>Segurança e Conforto</li>
              </ul>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Escolha a Click Care Saúde e proporcione a você ou a seus entes
                queridos uma experiência de Home Care focada no bem-estar e na
                qualidade de vida.
              </p>
            </div>

            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image10}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '390px', height: '390px' }}
              />
            </div>
          </div>

          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              href="/servicos/terapia-domiciliar"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-green1 text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>
        </section>
        <section className="container mx-auto p-4">
          <div className="container2 mx-auto p-4 flex flex-col items-center justify-center"></div>
          <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
            <div className="p-4">
              <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold text-green2">
                Garanta o Conforto e a Segurança
                <br />
                com Nossos Equipamentos de Cuidado Domiciliar
              </h2>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Desfrute de procedimentos domiciliares otimizados Otimize o
                cuidado domiciliar com nossa locação de equipamentos
                hospitalares. Proporcionamos flexibilidade e conveniência,
                garantindo acesso a camas elétricas, cadeiras de rodas, suportes
                de soro, cadeiras higiênicas, oxigênio e concentradores de O2.
                Além disso, disponibilizamos desfibriladores/cardioversores para
                emergências e tratamentos paliativos personalizados. Escolha a
                Click Care Saúde para uma experiência adaptada às suas
                necessidades.
              </p>

              <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px] text-sm text-slate-600 font-medium dark:text-slate-300">
                <li>Camas Elétricas</li>
                <li>Cadeiras de Rodas</li>
                <li>Suporte de Soro</li>
                <li>Cadeira Higiênica</li>
                <li>Oxigênio, Balas e Concentradores de O2</li>
                <li>Desfibriladores/Cardioversores</li>
              </ul>
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Escolha a Click Care Saúde para um cuidado domiciliar completo e
                de qualidade. Com uma ampla gama de equipamentos hospitalares e
                uma equipe dedicada, garantimos uma experiência adaptada às suas
                necessidades, proporcionando conforto e segurança. Confie em nós
                para cuidar de você e de seus entes queridos, promovendo o
                bem-estar e a tranquilidade.
              </p>
            </div>

            <div className="container mx-auto p-4 flex justify-center items-center">
              <Image
                className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
                src={image5}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{ width: '390px', height: '390px' }}
              />
            </div>
          </div>

          <div className="flex justify-center leading-relaxed text-justify mx-auto">
            <a
              href="/servicos/locacao-de-equipamentos-hospitalares"
              aria-label="Whatsapp"
              className="mt-4 mb-14 bg-green1 text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
