"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
    {
        name: "Básico",
        monthlyPrice: 49,
        yearlyPrice: 470,
        description: "Para quem está começando",
        popular: false,
        features: [
            "Até 50 pacientes",
            "100 agendamentos/mês",
            "Notificações por email",
            "Página pública",
            "Prontuário digital",
        ],
        cta: "Começar",
    },
    {
        name: "Essencial",
        monthlyPrice: 99,
        yearlyPrice: 950,
        description: "Para profissionais estabelecidos",
        popular: true,
        features: [
            "Até 200 pacientes",
            "500 agendamentos/mês",
            "Email + WhatsApp",
            "Google Calendar",
            "Página pública personalizada",
            "Prontuário digital",
            "Relatórios básicos",
        ],
        cta: "Teste Grátis",
    },
    {
        name: "Profissional",
        monthlyPrice: 149,
        yearlyPrice: 1430,
        description: "Para clínicas e consultórios",
        popular: false,
        features: [
            "Pacientes ilimitados",
            "Agendamentos ilimitados",
            "Email + WhatsApp",
            "Google Calendar + Meet",
            "Domínio personalizado",
            "Suporte prioritário",
            "Relatórios avançados",
            "API de integração",
        ],
        cta: "Começar",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="precos" className="py-20 lg:py-28 bg-[var(--color-bg)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <span className="inline-block text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-3">
                        Planos e Preços
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                        Escolha o plano ideal para sua prática
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Todos os planos incluem 14 dias de teste gratuito. Sem cartão de crédito.
                    </p>
                </motion.div>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span
                        className={`text-sm font-medium transition-colors ${!isYearly
                                ? "text-[var(--color-text-primary)]"
                                : "text-[var(--color-text-secondary)]"
                            }`}
                    >
                        Mensal
                    </span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isYearly ? "bg-[var(--color-primary)]" : "bg-gray-300"
                            }`}
                        aria-label="Alternar entre mensal e anual"
                    >
                        <span
                            className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform duration-300 ${isYearly ? "translate-x-7.5" : "translate-x-0.5"
                                }`}
                        />
                    </button>
                    <span
                        className={`text-sm font-medium transition-colors ${isYearly
                                ? "text-[var(--color-text-primary)]"
                                : "text-[var(--color-text-secondary)]"
                            }`}
                    >
                        Anual
                    </span>
                    {isYearly && (
                        <span className="inline-flex items-center bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            Economize 20%
                        </span>
                    )}
                </div>

                {/* Plans Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={itemVariants}
                            className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${plan.popular
                                    ? "border-2 border-[var(--color-primary)] shadow-xl shadow-[var(--color-primary)]/10 scale-[1.02] lg:scale-105"
                                    : "border border-[var(--color-border)] hover:shadow-lg"
                                }`}
                        >
                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center gap-1.5 bg-[var(--color-primary)] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                                        <Star size={12} fill="currentColor" />
                                        Mais Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan name */}
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                                {plan.name}
                            </h3>
                            <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                                {plan.description}
                            </p>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-[var(--color-text-primary)]">
                                        R${" "}
                                        {isYearly
                                            ? Math.round(plan.yearlyPrice / 12)
                                            : plan.monthlyPrice}
                                    </span>
                                    <span className="text-[var(--color-text-secondary)] text-sm">
                                        /mês
                                    </span>
                                </div>
                                {isYearly && (
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                        R$ {plan.yearlyPrice}/ano (cobrado anualmente)
                                    </p>
                                )}
                            </div>

                            {/* CTA Button */}
                            <a
                                href="https://app.bookleyapp.com/"
                                className={`block text-center font-medium py-3 px-6 rounded-xl transition-all duration-300 mb-8 ${plan.popular
                                        ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/25"
                                        : "bg-[var(--color-bg)] hover:bg-[var(--color-primary-light)] text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
                                    }`}
                            >
                                {plan.cta}
                            </a>

                            {/* Features */}
                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]"
                                    >
                                        <Check
                                            size={16}
                                            className="text-[var(--color-success)] shrink-0"
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom note */}
                <p className="text-center text-sm text-[var(--color-text-secondary)] mt-10">
                    14 dias grátis em qualquer plano • Sem compromisso • Cancele quando quiser
                </p>
            </div>
        </section>
    );
}
