"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Como funciona o período de teste?",
        answer:
            "Você tem 14 dias para testar todas as funcionalidades premium gratuitamente. Não é necessário cartão de crédito para começar. Ao final do período, você pode escolher o plano que melhor se adequa às suas necessidades.",
    },
    {
        question: "Posso cancelar a qualquer momento?",
        answer:
            "Sim, você pode cancelar sua assinatura a qualquer momento. Não há multas ou compromissos de longo prazo. Seus dados serão mantidos por 30 dias após o cancelamento.",
    },
    {
        question: "Meus dados estão seguros?",
        answer:
            "Sim, utilizamos criptografia de nível bancário (AES-256) para proteger todos os seus dados. Somos compatíveis com a LGPD e seguimos as melhores práticas de segurança.",
    },
    {
        question: "Integra com Google Calendar?",
        answer:
            "Sim! Todos os seus agendamentos são sincronizados automaticamente com o Google Calendar. Para consultas online, links do Google Meet são gerados automaticamente.",
    },
    {
        question: "Meus pacientes podem agendar online?",
        answer:
            "Sim, você recebe uma página pública personalizada onde seus pacientes podem ver seus serviços e agendar diretamente, sem precisar criar conta.",
    },
    {
        question: "Como funcionam as notificações por WhatsApp?",
        answer:
            "Utilizamos a API oficial do WhatsApp Business para enviar confirmações, lembretes e notificações. As mensagens são enviadas automaticamente conforme suas configurações.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 lg:py-28 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-3">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Dúvidas comuns sobre o Bookley
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-3"
                >
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[var(--color-border)] rounded-xl overflow-hidden transition-colors hover:border-[var(--color-primary)]/30"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="text-base font-medium text-[var(--color-text-primary)] pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`text-[var(--color-text-secondary)] shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-5 text-[var(--color-text-secondary)] leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
