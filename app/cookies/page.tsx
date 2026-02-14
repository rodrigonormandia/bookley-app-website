import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies - Bookley",
  description:
    "Saiba como o Bookley utiliza cookies para melhorar sua experiência de navegação.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">
            Política de Cookies
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] mb-10">
            Última atualização: 14 de fevereiro de 2026
          </p>

          <div className="space-y-10 text-[var(--color-text-secondary)] leading-relaxed">
            {/* O que são cookies */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                1. O que são cookies?
              </h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu
                dispositivo (computador, tablet ou celular) quando você visita um
                site. Eles são amplamente utilizados para fazer os sites
                funcionarem de forma mais eficiente, bem como para fornecer
                informações aos proprietários do site.
              </p>
            </section>

            {/* Como utilizamos */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                2. Como utilizamos cookies
              </h2>
              <p>
                O Bookley utiliza cookies para melhorar sua experiência de
                navegação, entender como você interage com nosso site e, em
                alguns casos, exibir conteúdo personalizado. Abaixo, detalhamos
                os tipos de cookies que utilizamos.
              </p>
            </section>

            {/* Tipos de cookies */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                3. Tipos de cookies utilizados
              </h2>

              <div className="space-y-6 mt-4">
                <div className="border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-card)]">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    Cookies Essenciais
                  </h3>
                  <p>
                    Esses cookies são necessários para o funcionamento básico do
                    site. Eles permitem que você navegue pelo site e utilize
                    recursos essenciais, como áreas seguras e autenticação. Sem
                    esses cookies, os serviços que você solicitou não podem ser
                    fornecidos.
                  </p>
                </div>

                <div className="border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-card)]">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    Cookies Analíticos
                  </h3>
                  <p>
                    Utilizamos cookies analíticos para entender como os
                    visitantes interagem com nosso site. Essas informações são
                    usadas para melhorar o conteúdo, a navegação e a experiência
                    geral do usuário. Os dados coletados são agregados e
                    anônimos.
                  </p>
                </div>

                <div className="border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-card)]">
                  <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                    Cookies Funcionais
                  </h3>
                  <p>
                    Esses cookies permitem que o site lembre de escolhas que você
                    faz (como seu idioma preferido ou região) e forneça recursos
                    aprimorados e mais personalizados. Eles também podem ser
                    usados para lembrar alterações feitas no tamanho do texto e
                    outras preferências de exibição.
                  </p>
                </div>
              </div>
            </section>

            {/* Como gerenciar */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                4. Como gerenciar cookies
              </h2>
              <p className="mb-3">
                Você pode controlar e/ou excluir cookies conforme desejar. A
                maioria dos navegadores permite que você gerencie suas
                preferências de cookies nas configurações. Veja como acessar as
                configurações de cookies nos navegadores mais populares:
              </p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>
                  <strong>Google Chrome:</strong> Configurações → Privacidade e
                  segurança → Cookies
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Configurações → Privacidade
                  e Segurança → Cookies e dados de sites
                </li>
                <li>
                  <strong>Safari:</strong> Preferências → Privacidade →
                  Gerenciar dados do site
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Configurações → Cookies e
                  permissões de site
                </li>
              </ul>
              <p className="mt-3">
                Observe que a desativação de cookies pode afetar a
                funcionalidade deste e de outros sites que você visita.
              </p>
            </section>

            {/* Alterações */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                5. Alterações nesta política
              </h2>
              <p>
                Podemos atualizar esta Política de Cookies periodicamente para
                refletir mudanças nas práticas de cookies ou por outros motivos
                operacionais, legais ou regulatórios. Recomendamos que você
                revise esta página regularmente para se manter informado sobre o
                uso de cookies.
              </p>
            </section>

            {/* Contato */}
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                6. Contato
              </h2>
              <p>
                Se você tiver dúvidas sobre o uso de cookies no Bookley, entre em
                contato conosco pelo e-mail{" "}
                <a
                  href="mailto:contato@bookleyapp.com"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] underline transition-colors"
                >
                  contato@bookleyapp.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
