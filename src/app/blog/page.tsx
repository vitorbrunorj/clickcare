import Image from 'next/image'

// imagens Light correspondentes
import BannerBlogMobile from '../../public/1BannerBlogMobile.webp'
import BannerBlogSm from '../../public/2BannerBlogSm.webp'
import BannerBlogMd from '../../public/3BannerBlogMd.webp'
import BannerBlogLg from '../../public/4BannerBlogLg.webp'
import BannerBlogXl from '../../public/5BannerBlogXl.webp'
import BannerBlog2xl from '../../public/6BannerBlog2Xl.webp'

// imagens Dark correspondentes
import BannerBlogMobileDark from '../../public/1BannerBlogMobileDark.webp'
import BannerBlogSmDark from '../../public/2BannerBlogSmDark.webp'
import BannerBlogMdDark from '../../public/3BannerBlogMdDark.webp'
import BannerBlogLgDark from '../../public/4BannerBlogLgDark.webp'
import BannerBlogXlDark from '../../public/5BannerBlogXlDark.webp'
import BannerBlog2xlDark from '../../public/6BannerBlog2XlDark.webp'

import blog1 from '../../public/blog1.webp'
import blog2 from '../../public/blog2.webp'
import blog3 from '../../public/blog3.webp'
import blog4 from '../../public/blog4.webp'
import blog5 from '../../public/blog5.webp'
import image4 from '../../public/image4.webp'

import { IoLogoWhatsapp } from 'react-icons/io'
import { PaginationDemo } from '@/app/_components/pagination'

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
              <a href="/blog/desvendando-os-misterios-do-thetahealing">
                <Image
                  className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                  src={blog1}
                  alt="Keyko Terapias pessoas na roda"
                  loading="lazy"
                  style={{
                    width: '780px',
                    height: '482px'
                  }}
                />
                <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                  Desvendando os Mistérios do Thetahealing
                </h2>

                <p
                  className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base"
                  style={{ textIndent: '30px' }}
                >
                  Imagine se você pudesse acessar um lugar dentro de si repleto
                  de possibilidades, onde as crenças limitantes são desfeitas
                  como se fossem fios de uma teia. Isso é exatamente o que o
                  Thetahealing proporciona - uma jornada mágica para desvendar
                  os mistérios do seu próprio ser.
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
                <a href="/blog/contelacao-familiar">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog2}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Uma Jornada com a Constelação Familiar
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Imagina poder enxergar além das aparências, compreender os
                    laços familiares que moldam nossa jornada. É isso que a
                    Constelação Familiar proporciona - uma viagem às raízes,
                    onde o invisível se torna visível.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/a-visao-holistica-na-terapia-integrativa">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog3}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />

                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    A Visão Holística na Terapia Integrativa
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Na Terapia Integrativa, não tratamos apenas sintomas
                    isolados; buscamos entender a complexidade da sua história,
                    conectando cada peça do quebra-cabeça da sua saúde. É como
                    uma dança harmoniosa entre os aspectos físicos, emocionais e
                    espirituais.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/leitura-de-aura-explorando-as-cores-da-alma">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog4}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Explorando as Cores da Alma
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Entrar no fascinante mundo da Leitura de Aura é como abrir
                    um livro cheio de mistérios e descobrir a linguagem única da
                    sua alma. Cada cor revela uma história, uma emoção, uma
                    parte da sua jornada.
                  </p>
                </a>
              </div>
              <div className="col-span-1 rounded-xl shadow-md bg-white p-4">
                <a href="/blog/libertacao-de-crencas-limitantes">
                  <Image
                    className="object-cover border-4 p-1 border-white rounded-lg shadow-2xl z-10 w-full h-auto mx-auto justify-center"
                    src={blog5}
                    alt="Keyko Terapias pessoas na roda"
                    loading="lazy"
                    style={{
                      width: '360px',
                      height: '223px'
                    }}
                  />
                  <h2 className="font-heading text-center leading-normal text-2xl md:text-2xl tracking-wider font-semibold mt-5 text-slate-600 hover:text-primary transition-all hover:scale-105">
                    Libertação de Crenças Limitantes
                  </h2>
                  <p
                    className="leading-relaxed text-justify max-w-[550px] mx-auto tracking-wide text-base text-slate-500"
                    style={{ textIndent: '30px' }}
                  >
                    Imagine que dentro de nós existem muros invisíveis, crenças
                    que nos limitam e nos impedem de alcançar nosso potencial
                    pleno. Romper essas barreiras é a essência das Terapias
                    Integrativas.
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
