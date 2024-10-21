import { NextSeo } from "next-seo"

import SocialLinks from "@components/SocialLinks"
import { MainContent } from "@styles/base"

const AboutPage = () => (
  <>
    <NextSeo
      title="Sobre mim | Lucas Kaíque"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      openGraph={{
        type: "website",
        locale: "en_US",
        url: "https://lucaskaique.com.br",
        site_name: "Lucas Kaíque",
        title: "Lucas Kaíque",
        images: [
          {
            url: "https://res.cloudinary.com/lucaos/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1687836847/lucaoskaique/pysales_Carnaval_PLANO_2020_-_7_fhn3rb.jpg",
            width: 1200,
            height: 630,
            alt: "Lucas Kaíque Blog"
          }
        ]
      }}
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Olá, sou Engenheiro de Software Sênior na Dev em Dobro e freelancer no
        Duo Studio, onde minha paixão por resolver problemas e projetar soluções
        elegantes ganha vida. Especializado em tecnologias Back-end como NodeJS,
        C#, e Go, também sou capaz de criar experiências front-end belas e
        envolventes com React e Next.js.
      </p>

      <p>
        Meu foco é criar aplicações robustas, eficientes e amigáveis ao usuário,
        que aprimoram a interação do usuário e proporcionam valor. Além do
        universo da programação, tenho uma carreira vibrante como DJ e produtor
        de eventos. Estes papéis realçam minha veia criativa, dando-me a
        oportunidade de orquestrar experiências memoráveis através da música e
        de eventos. Essa combinação de habilidades de programação analítica e
        produção artística molda minha abordagem única para o trabalho,
        permitindo-me trazer ideias inovadoras e frescas para a mesa.
      </p>

      <p>
        Seja você está procurando uma solução de software sofisticada ou um
        evento inesquecível, eu sou seu profissional de referência. Estou
        ansioso para usar minhas habilidades distintas para entregar resultados
        excepcionais.
      </p>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks />
    </MainContent>
  </>
)

export default AboutPage
