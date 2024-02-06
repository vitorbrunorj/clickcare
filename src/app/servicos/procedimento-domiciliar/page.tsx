/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

// imagens Light correspondentes
import BannerProcedMobile from '../../../public/1BannerProcedMobile.webp'
import BannerProcedSm from '../../../public/2BannerProcedSm.webp'
import BannerProcedMd from '../../../public/3BannerProcedMd.webp'
import BannerProcedLg from '../../../public/4BannerProcedLg.webp'
import BannerProcedXl from '../../../public/5BannerProcedXl.webp'
import BannerProced2xl from '../../../public/6BannerProced2Xl.webp'

// imagens Dark correspondentes
import BannerProcedMobileDark from '../../../public/1BannerProcedMobileDark.webp'
import BannerProcedSmDark from '../../../public/2BannerProcedSmDark.webp'
import BannerProcedMdDark from '../../../public/3BannerProcedMdDark.webp'
import BannerProcedLgDark from '../../../public/4BannerProcedLgDark.webp'
import BannerProcedXlDark from '../../../public/5BannerProcedXlDark.webp'
import BannerProced2xlDark from '../../../public/6BannerProced2XlDark.webp'

import image6 from '../../../public/image6.webp'
import image7 from '../../../public/image7.webp'

import {
  FaUserMd,
  FaHandHoldingMedical,
  FaFileMedical,
  FaCommentMedical,
  FaBandAid,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { BiInjection, BiHomeSmile } from 'react-icons/bi'

import { FaHouseChimneyMedical } from 'react-icons/fa6'
import { SiGmail, SiGooglemaps } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiUserHeartFill } from 'react-icons/ri'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Home() {
  return (
    <main>
      <section>
        <div className="w-full h-full">
          <div className="sm:hidden dark:hidden">
            {/* Exibir banner para telas até 640 (mobile) */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedMobile}
              alt="Banner para Mobile"
              loading="eager"
            />
          </div>
          <div className="hidden dark:flex dark:sm:hidden">
            {/* Exibir banner para telas até 640 (mobile) no modo dark */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedMobileDark}
              alt="Banner para Mobile"
              loading="eager"
            />
          </div>
          <div className="hidden sm:block md:hidden dark:hidden">
            {/* Exibir banner para telas sm */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedSm}
              alt="Banner para SM"
              loading="eager"
            />
          </div>
          <div className="hidden dark:sm:flex dark:md:hidden">
            {/* Exibir banner para telas sm MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedSmDark}
              alt="Banner para SM"
              loading="eager"
            />
          </div>
          <div className="hidden md:block lg:hidden dark:hidden">
            {/* Exibir banner para telas md */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedMd}
              alt="Banner para MD"
              loading="eager"
            />
          </div>
          <div className="hidden dark:md:flex dark:lg:hidden">
            {/* Exibir banner para telas md MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedMdDark}
              alt="Banner para MD"
              loading="eager"
            />
          </div>
          <div className="hidden lg:block xl:hidden dark:hidden">
            {/* Exibir banner para telas lg */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedLg}
              alt="Banner para LG"
            />
          </div>
          <div className="hidden dark:lg:flex dark:xl:hidden">
            {/* Exibir banner para telas lg - Dark Mode */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedLgDark}
              alt="Banner para LG"
              loading="eager"
            />
          </div>
          <div className="hidden xl:block 2xl:hidden dark:hidden">
            {/* Exibir banner para telas xl */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedXl}
              alt="Banner para XL"
              loading="eager"
            />
          </div>
          <div className="hidden dark:xl:flex dark:2xl:hidden">
            {/* Exibir banner para telas xl MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProcedXlDark}
              alt="Banner para XL"
              loading="eager"
            />
          </div>
          <div className="hidden 2xl:block dark:hidden">
            {/* Exibir banner para telas 2xl */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProced2xl}
              alt="Banner para 2XL"
              loading="eager"
            />
          </div>
          <div className="hidden dark:2xl:flex">
            {/* Exibir banner para telas 2xl MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerProced2xlDark}
              alt="Banner para 2XL"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="container2 p-4 text-center">
        <div className="flex items-center justify-center">
          <h2 className="leading-relaxed p-2 text-lg text-justify font-light tracking-wider max-w-[650px] text-slate-500 dark:text-slate-100">
            <p style={{ textIndent: '30px' }}>
              {' '}
              Bem-vindo à Click Care Saúde, onde o cuidado domiciliar se torna
              uma experiência de excelência. Aqui, oferecemos procedimentos de
              saúde diretamente no conforto do seu lar, proporcionando
              praticidade e tranquilidade. Com uma equipe altamente capacitada e
              serviços personalizados, estamos preparados para realizar
              curativos, administração de medicação injetável e cuidados com
              sondas de alívio, vesicais e gastrotomias. Priorizamos sua
              comodidade e bem-estar, garantindo cuidados de qualidade sem sair
              de casa. Permita-nos cuidar de você com o máximo de atenção e
              profissionalismo, mantendo-o seguro e confortável em seu ambiente
              familiar.
            </p>
            <br />
          </h2>
        </div>
      </section>

      <section className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4">
            <span className="flex items-center justify-center p-4 text-green1">
              <FaUserMd size={60} />
            </span>
            <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
              <div>
                <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                  Especialista{' '}
                </h3>
              </div>
              <div className="max-w-[350px] self-center">
                <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500 dark:text-slate-100">
                  {' '}
                  Tenha em sua casa um profissional especializado e capacitado.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 text-slate-700">
            <span className="flex items-center justify-center p-4 text-green1">
              <FaHandHoldingMedical size={60} />
            </span>
            <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
              <div>
                <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                  Personalizado
                </h3>
              </div>
              <div className="max-w-[350px] self-center">
                <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500 dark:text-slate-100">
                  {' '}
                  Desfrute de um atendimento exclusivo e personalizado para
                  aqueles que são mais especiais em sua vida.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 text-slate-700">
            <span className="flex items-center justify-center p-4 text-green1">
              <FaFileMedical size={60} />
            </span>
            <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
              <div>
                <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2 ">
                  Avaliação gratuita
                </h3>
              </div>
              <div className="max-w-[350px] self-center">
                <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500 dark:text-slate-100">
                  Oferecemos uma avaliação domiciliar gratuita em toda a cidade
                  do Rio de Janeiro. <br />
                  <span className="text-xs text-red-400 font-semibold">
                    {' '}
                    *Consulte disponibilidade para a sua região.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 text-slate-700">
            <span className="flex items-center justify-center p-4 text-green1">
              <FaCommentMedical size={60} />
            </span>
            <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
              <div>
                <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                  Atendimento 24 horas
                </h3>
              </div>
              <div className="max-w-[350px] self-center">
                <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500 dark:text-slate-100">
                  Estamos à sua disposição 24 horas por dia através do nosso
                  canal no WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1"> Nossos Serviços</span> <br />
        </h2>
      </div>

      <section className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <BiInjection size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Medicação injetáveis
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Facilitamos o acesso à medicação injetável no conforto do
                    seu lar, garantindo conveniência e segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <FaBandAid size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Curativos
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Oferecemos cuidados especializados em curativos para
                    promover sua recuperação no conforto do seu lar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <BiHomeSmile size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Sondas de alívio, visical e gastrotomias
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Cuidados especializados em sondas de alívio, vesicais e
                    gastrotomias para conforto e bem-estar em casa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1"> Por que a Click Care ?</span>
        </h2>

        <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
          <div className="container mx-auto p-4 flex justify-center items-center">
            <Image
              className="object-cover border-4 border-white dark:border-stone-200 rounded-full shadow-2xl z-10 hidden md:block"
              src={image6}
              alt="Senhora abraçando homem"
              loading="lazy"
              style={{ width: '350px', height: '350px' }}
            />
          </div>
          <div className="">
            <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold text-green2">
              Escolha a Excelência em Procedimentos Domiciliares
            </h2>
            <p
              className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
              style={{ textIndent: '30px' }}
            >
              Na Click Care Saúde, priorizamos a comodidade e a qualidade dos
              cuidados de saúde domiciliar. Nossos serviços abrangem uma
              variedade de procedimentos especializados, como curativos,
              administração de medicação injetável em casa e o manejo de sondas
              de alívio, vesicais e gastrotomias. Com uma equipe dedicada e
              altamente treinada, garantimos que cada procedimento seja
              realizado com o mais alto padrão de cuidado, proporcionando
              conforto e tranquilidade aos nossos pacientes. Escolha a Click
              Care Saúde para uma experiência de cuidado domiciliar
              personalizada e confiável, focada no seu bem-estar e na sua
              recuperação completa.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4">
            <span className="flex items-center justify-center p-4 text-green1">
              <RiUserHeartFill size={60} />
            </span>
            <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
              <div>
                <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                  Cuidadores de Idosos
                </h3>
              </div>
              <div className="max-w-[350px] self-center">
                <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500 dark:text-slate-100">
                  Nossos cuidadores são símbolos de apoio constante, dedicados a
                  oferecer um cuidado repleto de empatia e relações afetuosas.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 text-slate-700">
            <span className="flex items-center justify-center p-4 text-green1">
              <FaHouseChimneyMedical size={60} />
            </span>
            <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
              <div>
                <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                  Enfermagem Domiciliar
                </h3>
              </div>
              <div className="max-w-[350px] self-center">
                <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500 dark:text-slate-100">
                  Nossa equipe de enfermagem é composta por profissionais
                  especializados, prontos para oferecer assistência médica de
                  qualidade no conforto do seu lar.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 text-slate-700">
            <span className="flex items-center justify-center p-4 text-green1">
              <FaUserMd size={60} />
            </span>
            <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
              <div>
                <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2 ">
                  Equipe Multidisciplinar{' '}
                </h3>
              </div>
              <div className="max-w-[350px] self-center">
                <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500 dark:text-slate-100">
                  Nossos profissionais qualificados e especializados trabalham
                  em conjunto para oferecer um cuidado personalizado e
                  abrangente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4">
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
          <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
            <span className="text-green1">depoimentos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 max-w-[650px] mx-auto lg:grid-cols-3 lg:max-w-none gap-8">
          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <h3 className="font-bold mb-4 text-slate-600 ">Flávia T.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "Minha experiência com os serviços da Click Care foi excelente,
              especialmente no que diz respeito aos curativos que precisei
              realizar em casa. A equipe foi extremamente cuidadosa,
              profissional e atenciosa em cada visita, garantindo que meus
              curativos fossem feitos de forma adequada e higiênica. Estou muito
              satisfeita com o nível de cuidado que recebi."
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <h3 className="font-bold mb-4 text-slate-600 ">Maria R.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "Receber medicação injetável em casa era uma preocupação para mim,
              mas a Click Care tornou todo o processo muito mais simples e
              conveniente. Os profissionais de saúde foram pontuais, gentis e
              habilidosos, garantindo que eu me sentisse confortável e seguro
              durante o procedimento. Recomendo seus serviços a todos que
              precisam de cuidados médicos em casa."
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <h3 className="font-bold mb-4 text-slate-600 ">Ana L.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "A Click Care foi fundamental no meu processo de recuperação após
              a colocação de sondas de alívio e gastrotomias. Sua equipe
              especializada demonstrou um alto nível de competência e empatia,
              fornecendo cuidados excepcionais e tranquilizando-me durante todo
              o tratamento. Estou extremamente grata pelo suporte e pela
              qualidade do serviço prestado."
            </p>
          </div>
        </div>
      </section>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1"></span>
        </h2>
      </div>

      <section className="container p-4 mx-auto bg-white dark:bg-neutral-50 shadow-md rounded-lg">
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
          <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold text-green1">
            Compromisso Click Care para o Seu Bem-Estar:
          </h2>
        </div>
        <div className="text-center p-4">
          <h3 className="tracking-widest font-heading text-xl py-6 text-green2 ">
            1. Atendimento Humanizado:
          </h3>

          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Na Click Care, nosso compromisso primordial é oferecer atendimento
            humanizado, reconhecendo e respeitando suas necessidades emocionais,
            físicas e sociais. Cada interação é pautada pelo calor humano,
            acolhimento e compreensão.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-green2 py-6 ">
            2. Profissionais Qualificados e Dedicados:
          </h3>

          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Contamos com uma equipe dedicada e altamente qualificada, pronta
            para proporcionar cuidados que vão além do convencional. Nosso
            compromisso é assegurar que você receba assistência de profissionais
            de confiança e comprometidos com seu bem-estar.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-green2 py-6 ">
            3. Abordagem Personalizada:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Entendemos que cada pessoa é única. Nossa abordagem é personalizada,
            adaptando-se às suas necessidades específicas. Nada de soluções
            genéricas; nosso compromisso é proporcionar cuidados
            individualizados que respeitem sua singularidade.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-green2 py-6 ">
            4. Suporte Contínuo:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Nosso compromisso transcende o momento presente, oferecendo suporte
            contínuo e empowerment. Queremos ser não apenas provedores de
            cuidados, mas parceiros em sua jornada de crescimento e bem-estar.
          </p>

          <h3 className="tracking-widest font-heading text-xl text-green2 py-6 ">
            5. Excelência e Inovação em Saúde:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base"
            style={{ textIndent: '30px' }}
          >
            Comprometemo-nos com a excelência e a inovação em serviços de saúde.
            Estamos sempre em busca de abordagens atualizadas e eficazes para
            garantir que você receba o melhor em termos de cuidados e resultados
          </p>

          <h3 className="tracking-widest font-heading text-xl text-green1 py-6 ">
            Click Care: Mais do que Cuidados, um Compromisso com Seu Bem-Estar:
          </h3>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto text-slate-500 tracking-wide text-base mb-14"
            style={{ textIndent: '30px' }}
          >
            Seu bem-estar é nossa prioridade na Click Care. Comprometemo-nos a
            ir além das expectativas, oferecendo uma experiência de cuidado que
            não apenas trata, mas também enriquece e transforma. Sua saúde e
            felicidade são a razão pela qual estamos aqui, prontos para fazer a
            diferença em sua vida.
          </p>
        </div>
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
      </section>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1">
            {' '}
            Entre em Contato com a Click Care:
          </span>{' '}
          <br />
          <span className="text-green2"> Sua Saúde em Boas Mãos!</span>
        </h2>
      </div>

      <section className="container mx-auto p-4">
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center"></div>
        <div className="p-4 grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
          <div className="p-4">
            <div className="items-center text-center">
              <p
                className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base mb-4 text-slate-500 dark:text-slate-100"
                style={{ textIndent: '30px' }}
              >
                Na Click Care, estamos aqui para oferecer a você o melhor em
                cuidados de saúde. Se você tiver dúvidas, precisar de
                informações adicionais ou estiver pronta para iniciar sua
                jornada para uma vida mais saudável e equilibrada, estamos
                prontos para ouvir.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pt-2 tracking-wide text-lg hover:scale-105 text-slate-600 dark:text-slate-100 ">
                  Tel: (21) 97253-0303 / (21) 3253-0062
                </p>
              </a>
              <p className="text-lg hover:scale-105 text-slate-600 dark:text-slate-100  ">
                <a href="mailto:clickcaresaude@gmail.com">
                  clickcaresaude@gmail.com
                </a>
              </p>
              <a
                href="https://www.google.com/maps/dir//Rua+Siqueira+Campos,+93+-+Copacabana,+Rio+de+Janeiro+-+RJ/@-22.967923,-43.2270673,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9bd55a5f60ee09:0x25c222bd7ae78cf!2m2!1d-43.1858677!2d-22.9679283?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <address className="text-lg hover:scale-105 text-slate-600 dark:text-slate-100 ">
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
                          className="text-xl transition-all duration-200 hover:scale-125"
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
                          className="text-xl transition-all duration-200 hover:scale-125"
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
                          className="text-xl transition-all duration-200 hover:scale-125"
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
                          className="text-xl transition-all duration-200 hover:scale-125"
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
                          className="text-lg transition-all duration-200 hover:scale-125"
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
                          className="text-lg transition-all duration-200 hover:scale-125"
                          color="#25D366"
                          alt="Telefone"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div className="container mx-auto p-4 flex justify-center items-center">
            <Image
              className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
              src={image7}
              alt="Keyko Terapias pessoas na roda"
              loading="lazy"
              style={{ width: '300px', height: '300px' }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
