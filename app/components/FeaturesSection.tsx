"use client";

import { motion } from "framer-motion";
import {
    Users,
    Calendar,
    ClipboardList,
    Bell,
    Globe,
    CalendarSync,
} from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Gestão de Pacientes",
        description:
            "Cadastre e organize todos os seus pacientes com histórico completo e anotações privadas.",
    },
    {
        icon: Calendar,
        title: "Agendamento Inteligente",
        description:
            "Calendário interativo com confirmação automática e lembretes por email e WhatsApp.",
    },
    {
        icon: ClipboardList,
        title: "Prontuário Digital",
        description:
            "Documentação clínica completa com 27 estados de humor e escala de progresso.",
    },
    {
        icon: Bell,
        title: "Notificações Automáticas",
        description:
            "Envie confirmações, lembretes e cancelamentos por email e WhatsApp automaticamente.",
    },
    {
        icon: Globe,
        title: "Sua Página Profissional",
        description:
            "Tenha seu site próprio com agendamento online. Compartilhe um link e receba marcações.",
    },
    {
        icon: CalendarSync,
        title: "Google Calendar",
        description:
            "Sincronize automaticamente com seu Google Calendar e crie links do Google Meet.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
    return (
        <section id="funcionalidades" className="py-20 lg:py-28 bg-white">
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
                        Funcionalidades
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                        Tudo que você precisa em um só lugar
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Ferramentas poderosas para gerenciar sua prática clínica de forma
                        simples e eficiente.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className="group relative bg-white border border-[var(--color-border)] rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                                    <Icon
                                        size={24}
                                        className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
