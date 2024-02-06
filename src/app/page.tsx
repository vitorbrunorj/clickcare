/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

// imagens Light correspondentes
import BannerPrincipalMobile from '../public/1BannerPrincipalMobile.webp'
import BannerPrincipalSm from '../public/2BannerPrincipalSm.webp'
import BannerPrincipalMd from '../public/3BannerPrincipalMd.webp'
import BannerPrincipalLg from '../public/4BannerPrincipalLg.webp'
import BannerPrincipalXl from '../public/5BannerPrincipalXl.webp'
import BannerPrincipal2xl from '../public/6BannerPrincipal2Xl.webp'

// imagens Dark correspondentes
import BannerPrincipalMobileDark from '../public/1BannerPrincipalMobileDark.webp'
import BannerPrincipalSmDark from '../public/2BannerPrincipalSmDark.webp'
import BannerPrincipalMdDark from '../public/3BannerPrincipalMdDark.webp'
import BannerPrincipalLgDark from '../public/4BannerPrincipalLgDark.webp'
import BannerPrincipalXlDark from '../public/5BannerPrincipalXlDark.webp'
import BannerPrincipal2xlDark from '../public/6BannerPrincipal2XlDark.webp'

import image1 from '../public/image1.webp'
import image2 from '../public/image2.webp'
import image3 from '../public/image3.webp'
import image4 from '../public/image4.webp'
import image5 from '../public/image5.webp'
import image6 from '../public/image6.webp'
import image7 from '../public/image7.webp'
import FaqSection from '@/app/_components/faq-section'
import {
  FaUserMd,
  FaHandHoldingMedical,
  FaFileMedical,
  FaCommentMedical,
  FaBandAid,
  FaDumbbell,
  FaAppleAlt,
  FaBrain,
  FaRegClock,
  FaHandHoldingHeart,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'
import { FaHouseChimneyMedical } from 'react-icons/fa6'
import { SiGmail, SiGooglemaps } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiUserHeartFill } from 'react-icons/ri'
import { GiMedicines } from 'react-icons/gi'
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
              src={BannerPrincipalMobile}
              alt="Banner para Mobile"
              loading="eager"
            />
          </div>
          <div className="hidden dark:flex dark:sm:hidden">
            {/* Exibir banner para telas até 640 (mobile) no modo dark */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalMobileDark}
              alt="Banner para Mobile"
              loading="eager"
            />
          </div>
          <div className="hidden sm:block md:hidden dark:hidden">
            {/* Exibir banner para telas sm */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalSm}
              alt="Banner para SM"
              loading="eager"
            />
          </div>
          <div className="hidden dark:sm:flex dark:md:hidden">
            {/* Exibir banner para telas sm MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalSmDark}
              alt="Banner para SM"
              loading="eager"
            />
          </div>
          <div className="hidden md:block lg:hidden dark:hidden">
            {/* Exibir banner para telas md */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalMd}
              alt="Banner para MD"
              loading="eager"
            />
          </div>
          <div className="hidden dark:md:flex dark:lg:hidden">
            {/* Exibir banner para telas md MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalMdDark}
              alt="Banner para MD"
              loading="eager"
            />
          </div>
          <div className="hidden lg:block xl:hidden dark:hidden">
            {/* Exibir banner para telas lg */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalLg}
              alt="Banner para LG"
            />
          </div>
          <div className="hidden dark:lg:flex dark:xl:hidden">
            {/* Exibir banner para telas lg - Dark Mode */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalLgDark}
              alt="Banner para LG"
              loading="eager"
            />
          </div>
          <div className="hidden xl:block 2xl:hidden dark:hidden">
            {/* Exibir banner para telas xl */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalXl}
              alt="Banner para XL"
              loading="eager"
            />
          </div>
          <div className="hidden dark:xl:flex dark:2xl:hidden">
            {/* Exibir banner para telas xl MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipalXlDark}
              alt="Banner para XL"
              loading="eager"
            />
          </div>
          <div className="hidden 2xl:block dark:hidden">
            {/* Exibir banner para telas 2xl */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipal2xl}
              alt="Banner para 2XL"
              loading="eager"
            />
          </div>
          <div className="hidden dark:2xl:flex">
            {/* Exibir banner para telas 2xl MODO DARK */}
            <Image
              className="object-cover w-full h-full"
              src={BannerPrincipal2xlDark}
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
              Conheça à Click Care Saúde, o seu destino para uma vida tranquila
              e cuidadosa. Aqui, dedicamo-nos a criar um ambiente que cuida de
              todos os aspectos da sua saúde, proporcionando uma experiência
              única e totalmente adaptada ao seu caso. Oferecemos um atendimento
              verdadeiramente individualizado, onde você encontra todos os
              profissionais de saúde de que precisa, reunidos em uma solução
              projetada exclusivamente para você.
            </p>
            <br />
          </h2>
        </div>
      </section>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
          <span className="text-green1"> ASSISTÊNCIA DOMICILIAR</span>{' '}
          <span className="text-green2"> & PERSONALIZADA</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container2 justify-items-center p-4 ">
        <div className="max-w-lg rounded overflow-hidden shadow-lg dark:bg-zinc-800">
          <Image
            className="object-cover w-full p-2"
            src={image1}
            alt="Missão"
            width={500}
            height={300}
          />
          <div className="px-6 py-4">
            <div className="text-2xl mb-2 text-green1 font-heading">
              Cuidado Humanizado
            </div>
            <p className="text-slate-500  text-base text-justify justify-center tracking-wider leading-relaxed dark:text-slate-200">
              Em nossa missão, buscamos oferecer um cuidado verdadeiramente
              humanizado, compreendendo as necessidades únicas de cada paciente.
              Proporcionamos atendimento individualizado, onde nossos
              profissionais estão prontos para acolher com amor, garantindo a
              atenção que cada pessoa merece.
            </p>
          </div>
        </div>
        <div className="max-w-lg rounded overflow-hidden shadow-lg dark:bg-zinc-800">
          <Image
            className="object-cover w-full  p-2 "
            src={image2}
            alt="Visão"
            width={500}
            height={300}
          />
          <div className="px-6 py-4">
            <div className="text-2xl mb-2 text-green1 font-heading">
              Equipe Qualificada
            </div>
            <p className="text-slate-500 text-base text-justify justify-center tracking-wider leading-relaxed dark:text-slate-200">
              Na Click Care Saúde, nossa visão é sustentada por uma equipe
              altamente qualificada, formada internamente pela Click Cursos.
              Acreditamos que a capacitação interna faz toda a diferença,
              resultando em atendimentos humanizados e adaptados à singularidade
              de cada paciente.
            </p>
          </div>
        </div>

        <div className="max-w-lg rounded overflow-hidden shadow-lg dark:bg-zinc-800">
          <Image
            className="object-cover w-full p-2"
            src={image3}
            alt="Valores"
            width={500}
            height={300}
          />
          <div className="px-6 py-4">
            <div className="text-2xl mb-2 text-green1 font-heading">
              Comunicação Integrada
            </div>
            <p className="text-slate-500 text-base text-justify justify-center tracking-wider leading-relaxed dark:text-slate-200">
              A base do nosso cuidado é uma comunicação integrada, estabelecendo
              laços fortes entre equipe, paciente e familiares. Essa interação é
              essencial para compreender e adaptar cada tratamento às
              necessidades específicas de cada pessoa. Valorizamos a eficiência
              na comunicação, garantindo a troca de informações nos momentos
              certos.
            </p>
          </div>
        </div>
      </div>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1"> Onde tudo começou</span>{' '}
        </h2>
      </div>

      <div className="container p-4 max-w-[550px]">
        <div className="rounded-xl shadow-md bg-green-50 dark:bg-green-50 p-4 text-justify">
          <div className="container mx-auto p-4 flex justify-center items-center">
            <Image
              className="object-cover border-8 border-green2 dark:border-stone-200 rounded-full shadow-2xl z-10 hidden md:block"
              src={image4}
              alt="Senhora abraçando homem"
              loading="lazy"
              style={{ width: '250px', height: '250px' }}
            />
          </div>

          <div className="text-center mt-2 text-slate-500 tracking-wide text-base space max-w-[550px]">
            <h2 className="font-heading text-xl mb-2 text-slate-500 text-center 2xl:text-center">
              Carol Braz
            </h2>
            <p
              className="text-sm text-justify justify-center tracking-wider leading-relaxed"
              style={{ textIndent: '30px' }}
            >
              Carol, fundadora da Click Care e enfermeira especializada em
              cuidados paliativos, foi impulsionada pela experiência pessoal de
              sua avó, que necessitou de assistência domiciliar em meio a
              serviços desqualificados. Inconformada, Carol decidiu fazer a
              diferença e deu vida à Click Care, cuja essência é moldada por seu
              compromisso com o cuidado humanizado e qualificado. Sua missão é
              criar um ambiente acolhedor, proporcionando atenção personalizada
              e digna, distante dos estigmas de tratamento impessoal. A Click
              Care reflete a paixão de Carol por um cuidado de saúde que
              verdadeiramente faz a diferença.
            </p>

            <div className="mt-4">
              <a
                href="https://www.instagram.com/carol.bbraz/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver perfil
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1"> Serviços Especializados</span> <br />
          <span className="text-green2"> para sua Tranquilidade</span>
        </h2>
      </div>

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
                <FaHouseChimneyMedical size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Home Care Particular
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Serviços especializados de enfermagem e cuidados médicos
                    para uma assistência completa no conforto do lar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <RiUserHeartFill size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Cuidadores e acompanhantes de Idosos
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Cuidadores experientes e atenciosos para oferecer
                    assistência personalizada aos idosos.
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
                    Curativos, acompanhamento para exames, medicação em casa
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Oferecemos cuidados dedicados e profissionais para garantir
                    uma recuperação rápida e eficaz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <GiMedicines size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Click Farma e Enfermagem Domiciliar
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Além dos serviços farmacêuticos, oferecemos enfermagem
                    domiciliar, proporcionando uma abordagem completa e
                    personalizada para suas necessidades de saúde.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <FaDumbbell size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Fonoaudiologia e Fisioterapia Domiciliar{' '}
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Oferecemos serviços de fonoaudiologia e fisioterapia
                    domiciliar para garantir que os cuidados de saúde atendam às
                    suas necessidades individuais, promovendo uma reabilitação
                    completa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <FaAppleAlt size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Nutricionista e Terapia Ocupacional
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Cuide da sua saúde alimentar e recupere habilidades com a
                    terapia ocupacional, melhorando sua qualidade de vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <FaBrain size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Psicólogo{' '}
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Cuide da sua saúde mental e emocional com o apoio
                    profissional de um psicólogo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <FaRegClock size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Acompanhamento de medicações{' '}
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Não perca nenhuma dose! Mantenha o controle com o
                    acompanhamento preciso.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <div className="p-4 text-slate-700">
              <span className="flex items-center justify-center p-4 text-green1">
                <FaHandHoldingHeart size={40} />
              </span>
              <div className="flex flex-col justify-center leading-normal tracking-wider text-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wider font-semibold text-green2">
                    Massoterapia e Podólogo
                  </h3>
                </div>
                <div className="max-w-[350px] self-center">
                  <p className="items-center tracking-wider leading-relaxed mb-2 text-center text-slate-500">
                    Relaxe e revitalize seu corpo com sessões de massoterapia e
                    podologia proporcionando bem-estar físico e mental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1"> locação de equipamento</span>
        </h2>

        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:max-w-none gap-8">
          <div className="p-4">
            <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold text-green2">
              Garanta o Conforto e a Segurança <br />
              com Nossos Equipamentos de Cuidado Domiciliar
            </h2>
            <p
              className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
              style={{ textIndent: '30px' }}
            >
              Otimize o cuidado domiciliar com nossa locação de equipamentos
              hospitalares. Proporcionamos flexibilidade e conveniência,
              garantindo acesso a camas elétricas, cadeiras de rodas, suportes
              de soro, cadeiras higiênicas, oxigênio e concentradores de O2.
              Além disso, disponibilizamos desfibriladores/cardioversores para
              emergências e tratamentos paliativos personalizados. Escolha a
              Click Care Saúde para uma experiência adaptada às suas
              necessidades.
            </p>

            <ul className="list-disc p-4 ml-auto leading-relaxed text-justify mx-auto max-w-[550px] text-slate-600 dark:text-slate-100">
              <li>Camas Elétricas</li>
              <li>Cadeiras de Rodas</li>
              <li>Suporte de Soro</li>
              <li>Cadeira Higiênica</li>
              <li>Oxigênio, Balas e Concentradores de O2</li>
              <li>Desfibriladores/Cardioversores</li>
            </ul>
          </div>
          <div className="container mx-auto p-4 flex justify-center items-center">
            <Image
              className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block"
              src={image5}
              alt="Equipamento hospitalares"
              loading="lazy"
              style={{ width: '390px', height: '390px' }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center leading-relaxed text-justify mx-auto">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send/?phone=5521972530303&text=Heey%2C+tudo+bem%3F+Eu+estava+navegando+no+site+da+Click+Care+em+Home+%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
          aria-label="Whatsapp"
          className="mt-4 mb-14 bg-green1 text-white font-bold py-2 px-4 tracking-wider rounded inline-block transition-all duration-200 hover:scale-105"
        >
          Agende a Locação
        </a>
      </div>

      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold uppercase">
          <span className="text-green1"> Por que a Click Care ?</span>
        </h2>
      </div>

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
        <div className="p-4">
          <h2 className="py-10 font-heading text-center leading-normal text-xl md:text-2xl tracking-wider font-semibold text-green2">
            Escolha a Excelência em Cuidados Domiciliares
          </h2>
          <p
            className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500 dark:text-slate-100"
            style={{ textIndent: '30px' }}
          >
            Por que Escolher a Click Care? Excelência em Assistência Domiciliar:
            Buscamos ser referência nacional em cuidados de saúde com
            atendimento humanizado e individualizado. Cuidadores de Idosos
            Confiáveis: Nossa equipe é dedicada, qualificada e confiável, pronta
            para cuidar de quem você ama. Equipe Multidisciplinar: Contamos com
            diversos profissionais qualificados para atender às suas
            necessidades específicas.
          </p>
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
            <h3 className="font-bold mb-4 text-slate-600 ">Fernanda H.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "O atendimento 24 horas da Click Care foi um alívio para nossa
              família. Saber que podemos contar com eles a qualquer momento,
              inclusive pelo canal de WhatsApp, nos trouxe tranquilidade.
              Profissionais especializados e uma abordagem humanizada fazem da
              Click Care a escolha certa para cuidados domiciliares."
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <h3 className="font-bold mb-4 text-slate-600 ">Rafael G.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "Receber o atendimento da Click Care foi uma experiência incrível.
              A equipe é dedicada, atenciosa e realmente se importa com o
              bem-estar do paciente. Encontrar profissionais tão qualificados e
              comprometidos fez toda a diferença para nossa família. Recomendo
              de olhos fechados!"
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow transform hover:scale-105 transition duration-200 hover:bg-green-100 hover:opacity-90">
            <h3 className="font-bold mb-4 text-slate-600 ">Bruna F.</h3>
            <p className="text-slate-500 text-justify justify-center tracking-wider leading-relaxed ">
              "A Click Care superou todas as nossas expectativas. Desde o
              atendimento personalizado até a equipe multidisciplinar, cada
              detalhe é cuidadosamente planejado para proporcionar um cuidado
              excepcional. Estamos extremamente satisfeitos com a qualidade do
              serviço prestado."
            </p>
          </div>
        </div>
      </section>
      <FaqSection />
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
              className="object-cover border-4 border-white dark:border-stone-200 rounded-lg shadow-2xl z-10 hidden md:block dark:hidden"
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
