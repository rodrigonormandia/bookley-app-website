"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, Share2, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        step: 1,
        title: "Crie sua conta",
        description:
            "Cadastre-se gratuitamente e configure seu perfil profissional em minutos.",
    },
    {
        icon: Settings,
        step: 2,
        title: "Configure seus serviços",
        description:
            "Adicione seus serviços com preços, duração e disponibilidade.",
    },
    {
        icon: Share2,
        step: 3,
        title: "Compartilhe seu link",
        description:
            "Receba sua página personalizada e compartilhe com seus pacientes.",
    },
    {
        icon: CheckCircle,
        step: 4,
        title: "Receba agendamentos",
        description:
            "Pacientes agendam online e você recebe notificações automáticas.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorksSection() {
    return (
        <section id="como-funciona" className="py-20 lg:py-28 bg-[var(--color-bg)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block text-[var(--color-primary)] text-sm font-semibold uppercase tracking-wider mb-3">
                        Como Funciona
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                        Comece em apenas 4 passos simples
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Configure sua conta e comece a receber agendamentos em minutos.
                    </p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    {/* Connector line (desktop only) */}
                    <div className="hidden lg:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[var(--color-primary)]/20 via-[var(--color-primary)]/40 to-[var(--color-primary)]/20" />

                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.step}
                                variants={itemVariants}
                                className="relative text-center"
                            >
                                {/* Step number */}
                                <div className="relative inline-flex items-center justify-center mb-6">
                                    <div className="w-14 h-14 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/25 relative z-10">
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-primary)] z-20">
                                        {step.step}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
