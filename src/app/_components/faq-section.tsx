'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

function FaqSection() {
  return (
    <section
      id="faq"
      className="bg-slate-50 dark:bg-transparent container space-y-6 mx-auto p-4"
    >
      <div className="container2 mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="py-10 font-heading text-center leading-normal text-3xl md:text-4xl tracking-wider font-semibold text-green1">
          FAQ
        </h2>
      </div>
      <div className="max-w-[550px] mx-auto text-center p-4 tracking-wide text-slate-600 dark:text-slate-100">
        <Accordion type="single" collapsible className="w-full leading-relaxed">
          <AccordionItem value="item-1 justify-start">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              1. Como funciona o atendimento da Click Care?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                A Click Care oferece atendimento domiciliar personalizado, com
                uma equipe especializada em cuidados de saúde. Nossos
                profissionais estão disponíveis 24 horas por dia, e você pode
                entrar em contato pelo nosso canal de WhatsApp.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              2. Quais serviços de saúde são oferecidos pela Click Care?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Oferecemos uma variedade de serviços, incluindo cuidadores e
                acompanhantes de idosos, enfermagem domiciliar, atendimento 24
                horas, serviços de fisioterapia, fonoaudiologia, nutricionista,
                psicólogo, terapia ocupacional, massoterapia, podólogo, entre
                outros.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3 justify-start">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              3. Como funciona a locação de equipamentos hospitalares?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                A Click Care oferece a locação de equipamentos hospitalares como
                camas elétricas, cadeiras de rodas, suporte de soro, cadeira
                higiênica, oxigênio, balas e concentradores de O2. Esses
                equipamentos proporcionam conforto e segurança em casa.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              4. Quem são os profissionais da Click Care?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Nossa equipe é composta por profissionais qualificados,
                dedicados e confiáveis. Desde cuidadores de idosos até
                especialistas em diversas áreas da saúde, garantimos um
                atendimento de excelência.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              5. Como posso agendar uma avaliação gratuita?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Agendar uma avaliação domiciliar gratuita em todo o Rio de
                Janeiro é simples. Basta entrar em contato conosco pelo telefone
                ou pelo formulário disponível em nosso site.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              6. Quais são os benefícios de ter um cuidador em casa?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Ter um cuidador em casa proporciona conforto, segurança e
                atendimento personalizado. Nossos profissionais garantem um
                ambiente acolhedor e cuidam de todas as necessidades do
                paciente.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              7. Quais são as especialidades da equipe multidisciplinar da Click
              Care?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Nossa equipe multidisciplinar abrange diversas especialidades,
                como enfermagem, fisioterapia, fonoaudiologia, nutrição,
                psicologia e terapia ocupacional, garantindo um cuidado completo
                e adaptado a cada paciente.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              8. Como a Click Care garante a qualidade do atendimento?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Garantimos a qualidade do atendimento por meio de profissionais
                capacitados, supervisão mensal, atendimento individualizado e
                uma comunicação integrada entre a equipe, pacientes e
                familiares.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              9. A Click Care atende em outras cidades além do Rio de Janeiro?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Sim, atendemos em diversas cidades. Para saber se atendemos na
                sua localidade, consulte-nos.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              10. Como posso saber se a Click Care é a opção certa para minha
              situação?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Oferecemos uma avaliação inicial para entender suas necessidades
                específicas. Nossa equipe está pronta para fornecer orientações
                e esclarecer dúvidas, ajudando você a tomar a melhor decisão.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              11. A Click Care atende pacientes de todas as idades?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Sim, atendemos pacientes de todas as idades. Nossos serviços são
                adaptados para proporcionar cuidados específicos,
                independentemente da faixa etária.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className="tracking-wide text-left font-normal text-xl">
              12. Como faço para entrar em contato com a Click Care?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed tracking-wide text-justify font-light text-base">
              <p style={{ textIndent: '30px', marginRight: '30px' }}>
                Para entrar em contato conosco, você pode ligar para o número
                disponível em nosso site ou enviar uma mensagem pelo formulário
                de contato. Além disso, estamos disponíveis 24 horas pelo nosso
                canal de WhatsApp. Estamos prontos para ajudar!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection
