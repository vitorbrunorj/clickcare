import Image from 'next/image'

// imagens Light correspondentes
import BannerBlogMobile from '../../../public/1BannerBlogMobile.webp'
import BannerBlogSm from '../../../public/2BannerBlogSm.webp'
import BannerBlogMd from '../../../public/3BannerBlogMd.webp'
import BannerBlogLg from '../../../public/4BannerBlogLg.webp'
import BannerBlogXl from '../../../public/5BannerBlogXl.webp'
import BannerBlog2xl from '../../../public/6BannerBlog2Xl.webp'

// imagens Dark correspondentes
import BannerBlogMobileDark from '../../../public/1BannerBlogMobileDark.webp'
import BannerBlogSmDark from '../../../public/2BannerBlogSmDark.webp'
import BannerBlogMdDark from '../../../public/3BannerBlogMdDark.webp'
import BannerBlogLgDark from '../../../public/4BannerBlogLgDark.webp'
import BannerBlogXlDark from '../../../public/5BannerBlogXlDark.webp'
import BannerBlog2xlDark from '../../../public/6BannerBlog2XlDark.webp'

import blog7 from '../../../public/blog7.webp'
import blog8 from '../../../public/blog8.webp'
import blog9 from '../../../public/blog9.webp'
import blog10 from '../../../public/blog10.webp'
import image4 from '../../../public/image4.webp'

import { IoLogoWhatsapp } from 'react-icons/io'
import { PaginationDemo } from '@/app/_components/pagination2'

export default function Blog(): JSX.Element {
  return (
    <>
      <main>
        <section>
          <div className="w-full h-full">
            <div className="sm:hidden dark:hidden">
              {/* Exibir banner para telas até 640 (mobile) */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogMobile}
                alt="Banner para Mobile"
                loading="eager"
              />
            </div>
            <div className="hidden dark:flex dark:sm:hidden">
              {/* Exibir banner para telas até 640 (mobile) no modo dark */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogMobileDark}
                alt="Banner para Mobile"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block md:hidden dark:hidden">
              {/* Exibir banner para telas sm */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogSm}
                alt="Banner para SM"
                loading="eager"
              />
            </div>
            <div className="hidden dark:sm:flex dark:md:hidden">
              {/* Exibir banner para telas sm MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogSmDark}
                alt="Banner para SM"
                loading="eager"
              />
            </div>
            <div className="hidden md:block lg:hidden dark:hidden">
              {/* Exibir banner para telas md */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogMd}
                alt="Banner para MD"
                loading="eager"
              />
            </div>
            <div className="hidden dark:md:flex dark:lg:hidden">
              {/* Exibir banner para telas md MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogMdDark}
                alt="Banner para MD"
                loading="eager"
              />
            </div>
            <div className="hidden lg:block xl:hidden dark:hidden">
              {/* Exibir banner para telas lg */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogLg}
                alt="Banner para LG"
              />
            </div>
            <div className="hidden dark:lg:flex dark:xl:hidden">
              {/* Exibir banner para telas lg - Dark Mode */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogLgDark}
                alt="Banner para LG"
                loading="eager"
              />
            </div>
            <div className="hidden xl:block 2xl:hidden dark:hidden">
              {/* Exibir banner para telas xl */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogXl}
                alt="Banner para XL"
                loading="eager"
              />
            </div>
            <div className="hidden dark:xl:flex dark:2xl:hidden">
              {/* Exibir banner para telas xl MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlogXlDark}
                alt="Banner para XL"
                loading="eager"
              />
            </div>
            <div className="hidden 2xl:block dark:hidden">
              {/* Exibir banner para telas 2xl */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlog2xl}
                alt="Banner para 2XL"
                loading="eager"
              />
            </div>
            <div className="hidden dark:2xl:flex">
              {/* Exibir banner para telas 2xl MODO DARK */}
              <Image
                className="object-cover w-full h-full"
                src={BannerBlog2xlDark}
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
        <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
          <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold">
            Seu refúgio diário para dicas <br />e transformações.
          </h2>
        </div>

        <section className="container2 p-4 flex lg:space-x-8 mx-auto justify-center">
          <section className="lg:w-3/12 flex-col space-y-8 hidden lg:block">
            <div className="w-full rounded-xl shadow-md bg-white p-4 text-justify">
              <Image
                className="object-cover z-10 w-full h-auto mx-auto justify-center border-4 border-green2 rounded-full"
                src={image4}
                alt="Keyko Terapias pessoas na roda"
                loading="lazy"
                style={{
                  maxWidth: '100px',
                  maxHeight: '420px'
                }}
              />
              <div className="p-4 text-center mt-2 text-slate-500 tracking-wide text-base space ">
                <h2 className="font-heading text-xl mb-2 text-slate-600">
                  Carol Braz
                </h2>
                <p className="text-sm text-justify">
                  Fundadora da Click Care, uma renomada empresa de cuidados
                  domiciliares focada em proporcionar assistência de saúde de
                  alta qualidade no conforto do lar.
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.instagram.com/carol.bbraz/"
                    className="text-blue-500 hover:underline"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl shadow-md bg-white p-4 text-slate-500 tracking-wide text-base">
              <h2 className="text-2xl font-bold mb-2 text-slate-700">
                Últimas Postagens
              </h2>
              <div className="mb-4 hover:text-primary hover:scale-105">
                <a href="/blog/constelacao-familiar-como-essa-terapia-pode-promover-relacionamentos-saudaveis">
                  <h3 className="font-bold text-slate-600">
                    Constelação Familiar
                  </h3>
                  <p className="text-justify">
                    A Constelação Familiar é uma abordagem terapêutica
                  </p>
                </a>
              </div>
              <div className="mb-4 hover:text-primary hover:scale-105">
                <a href="/blog/libertacao-de-crencas-limitantes-o-processo-de-libertacao">
                  <h3 className="font-bold text-slate-600">
                    Libertação de Crenças Limitantes
                  </h3>
                  <p className="text-justify">
                    A libertação de crenças limitantes envolve um mergulho
                    profundo em nossa psique
                  </p>
                </a>
              </div>
              <div className="mb-4 hover:text-primary hover:scale-105">
                <a href="/blog/thetahealing-na-pratica-experiencias-e-beneficios-na-jornada-do-autoconhecimento">
                  <h3 className="font-bold text-slate-600">
                    Thetahealing na Prática
                  </h3>
                  <p className="text-justify">
                    O Thetahealing é mais do que uma terapia
                  </p>
                </a>
              </div>
            </div>
          </section>
          <div className="lg:w-7/12 rounded-xl shadow-md bg-white grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 tracking-wide text-base">
            <div className="md:col-span-2 p-4">
              <a href="/blog/leitura-de-aura-e-intuicao">
                <Image
                  className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                  src={blog7}
                  alt="Keyko Terapias pessoas na roda"
                  loading="lazy"
                  style={{
                    width: '780px',
                    height: '482px'
                  }}
                />
                <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                  Leitura de Aura e Intuição{' '}
                </h2>

                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                  style={{ textIndent: '30px' }}
                >
                  A Leitura de Aura é como desvendar um livro sagrado escrito
                  nas cores da sua energia. Cada tonalidade conta uma história
                  única sobre suas emoções, saúde e potencial de vida.
                  Prepare-se para uma jornada fascinante rumo ao
                  autoconhecimento.
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="container2 p-4 flex lg:space-x-8 mx-auto justify-center">
          <section className=" lg:w-3/12 flex-col space-y-4 hidden lg:block">
            <div className="w-full rounded-xl shadow-md bg-white"></div>
          </section>
          <div className="lg:w-7/12 rounded-xl grid grid-cols-2 lg:p-0 md:grid-cols-2 gap-4 tracking-wide text-base">
            <div className="col-span-4 grid md:grid-cols-2 gap-6 mb-16">
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/constelacao-familiar-e-as-dinamicas-inconscientes">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog7}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Constelação Familiar e as Dinâmicas Inconscientes
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    A Constelação Familiar é como uma viagem no tempo e espaço
                    do seu sistema familiar. Vamos explorar como as dinâmicas
                    inconscientes se manifestam, impactando nossas vidas no
                    presente. Prepare-se para uma jornada profunda e reveladora!
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/thetahealing-e-autoconhecimento">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog8}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Thetahealing e Autoconhecimento
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    O Thetahealing é uma técnica terapêutica que utiliza a
                    frequência cerebral theta para acessar o subconsciente e
                    promover curas profundas. Vamos desvendar os mistérios por
                    trás dessa abordagem única e entender como ela pode abrir
                    portas para a sua evolução pessoal.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/traumas-cicatrizes-invisiveis-que-afetam-profundamente">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog9}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Traumas: Cicatrizes Invisíveis que Afetam Profundamente
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Traumas podem deixar cicatrizes invisíveis, impactando nossa
                    vida de maneiras que nem sempre percebemos. Vamos mergulhar
                    fundo nesse tema sensível, compreendendo como os traumas se
                    manifestam e por que é crucial liberá-los para viver com
                    plenitude.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/a-magia-da-leitura-de-aura">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog10}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    A Magia da Leitura de Aura
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    A aura, essa energia que nos envolve, reflete os aspectos
                    mais profundos da nossa alma. Vamos desvendar os segredos
                    por trás das cores, formas e padrões, entendendo como a
                    leitura de aura pode revelar insights incríveis sobre nossa
                    saúde, emoções e potencial de crescimento.
                  </p>
                </a>
              </div>
              <div className="justify-center items-center">
                <PaginationDemo />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
