"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, Award, Target } from "lucide-react";

const benefits = [
    {
        icon: Clock,
        title: "Economize Tempo",
        description:
            "Automatize tarefas repetitivas e foque no que mais importa: seus pacientes.",
        highlight: null,
        gradient: "from-blue-500 to-blue-600",
        bgLight: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        icon: TrendingDown,
        title: "Reduza Faltas",
        description:
            "Lembretes automáticos por WhatsApp e email reduzem faltas em até 70%.",
        highlight: "até 70%",
        gradient: "from-green-500 to-green-600",
        bgLight: "bg-green-50",
        iconColor: "text-green-500",
    },
    {
        icon: Award,
        title: "Profissionalize seu Atendimento",
        description:
            "Sua própria página profissional com agendamento online e aparência moderna.",
        highlight: null,
        gradient: "from-purple-500 to-purple-600",
        bgLight: "bg-purple-50",
        iconColor: "text-purple-500",
    },
    {
        icon: Target,
        title: "Tudo em Um Só Lugar",
        description:
            "Pacientes, agendamentos, prontuários e finanças integrados em uma única plataforma.",
        highlight: null,
        gradient: "from-orange-500 to-orange-600",
        bgLight: "bg-orange-50",
        iconColor: "text-orange-500",
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
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BenefitsSection() {
    return (
        <section className="py-20 lg:py-28 bg-white">
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
                        Benefícios
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                        Por que escolher o Bookley?
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Benefícios que fazem diferença no seu dia a dia
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid sm:grid-cols-2 gap-6 lg:gap-8"
                >
                    {benefits.map((benefit) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                variants={itemVariants}
                                className="group relative bg-[var(--color-bg)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                {/* Subtle gradient accent */}
                                <div
                                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                />

                                <div className="flex items-start gap-5">
                                    <div
                                        className={`${benefit.bgLight} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}
                                    >
                                        <Icon size={26} className={benefit.iconColor} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                            {benefit.highlight ? (
                                                <>
                                                    {benefit.description.split(benefit.highlight)[0]}
                                                    <span className="font-bold text-[var(--color-primary)]">
                                                        {benefit.highlight}
                                                    </span>
                                                    {benefit.description.split(benefit.highlight)[1]}
                                                </>
                                            ) : (
                                                benefit.description
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
