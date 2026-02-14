"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[var(--color-primary-light)] to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
                            Plataforma para Saúde Mental
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[var(--color-text-primary)] leading-tight mb-6">
                            Simplifique sua{" "}
                            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
                                prática clínica
                            </span>{" "}
                            com Bookley
                        </h1>

                        <p className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
                            Gerencie pacientes, agendamentos e prontuários em uma plataforma
                            completa para profissionais de saúde mental.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href="https://app.bookleyapp.com/"
                                className="inline-flex items-center justify-center text-base font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all px-8 py-4 rounded-xl shadow-lg shadow-[var(--color-primary)]/25 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 hover:-translate-y-0.5"
                            >
                                Comece Grátis
                            </a>
                            <a
                                href="#funcionalidades"
                                className="inline-flex items-center justify-center text-base font-medium text-[var(--color-text-primary)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all px-8 py-4 rounded-xl"
                            >
                                Ver Demonstração
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {[
                                "14 dias grátis",
                                "Sem cartão de crédito",
                                "Cancele quando quiser",
                            ].map((badge) => (
                                <span
                                    key={badge}
                                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]"
                                >
                                    <CheckCircle
                                        size={16}
                                        className="text-[var(--color-success)]"
                                    />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
                            {/* Mock Dashboard */}
                            <div className="bg-white p-6">
                                {/* Top bar */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[var(--color-primary-light)] rounded-full flex items-center justify-center">
                                            <span className="text-[var(--color-primary)] font-semibold text-sm">
                                                DR
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                                                Dra. Maria Silva
                                            </p>
                                            <p className="text-xs text-[var(--color-text-secondary)]">
                                                Psicóloga Clínica
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {[
                                        { label: "Pacientes", value: "128", color: "bg-blue-50 text-blue-600" },
                                        { label: "Consultas Hoje", value: "7", color: "bg-green-50 text-green-600" },
                                        { label: "Este Mês", value: "45", color: "bg-purple-50 text-purple-600" },
                                    ].map((stat) => (
                                        <div
                                            key={stat.label}
                                            className={`${stat.color} rounded-xl p-3 text-center`}
                                        >
                                            <p className="text-xl font-bold">{stat.value}</p>
                                            <p className="text-xs opacity-80">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Agenda preview */}
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
                                        Agenda de Hoje
                                    </p>
                                    {[
                                        { time: "09:00", name: "Ana Costa", type: "Sessão Individual", status: "confirmed" },
                                        { time: "10:30", name: "Carlos Souza", type: "Avaliação Inicial", status: "confirmed" },
                                        { time: "14:00", name: "Julia Mendes", type: "Sessão Individual", status: "pending" },
                                    ].map((apt) => (
                                        <div
                                            key={apt.time}
                                            className="flex items-center gap-3 p-3 bg-[var(--color-bg)] rounded-lg"
                                        >
                                            <span className="text-xs font-mono font-medium text-[var(--color-primary)] w-12">
                                                {apt.time}
                                            </span>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
                                                    {apt.name}
                                                </p>
                                                <p className="text-xs text-[var(--color-text-secondary)]">
                                                    {apt.type}
                                                </p>
                                            </div>
                                            <span
                                                className={`w-2 h-2 rounded-full ${apt.status === "confirmed"
                                                        ? "bg-[var(--color-success)]"
                                                        : "bg-[var(--color-warning)]"
                                                    }`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating notification */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border border-[var(--color-border)] p-3 flex items-center gap-3"
                        >
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle size={16} className="text-[var(--color-success)]" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                                    Novo agendamento!
                                </p>
                                <p className="text-[11px] text-[var(--color-text-secondary)]">
                                    Ana Costa • Amanhã, 09:00
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
