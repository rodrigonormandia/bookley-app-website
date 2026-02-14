"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] px-8 py-16 lg:px-16 lg:py-20 text-center"
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/20 blur-3xl translate-y-1/2 -translate-x-1/2" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Pronto para simplificar sua prática?
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">
                            Comece seu teste grátis de 14 dias hoje. Sem cartão de crédito.
                        </p>

                        <a
                            href="/register"
                            className="inline-flex items-center justify-center text-base font-semibold text-[var(--color-primary)] bg-white hover:bg-gray-50 transition-all px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Comece Grátis Agora
                        </a>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
                            {[
                                "Sem cartão de crédito",
                                "Cancele quando quiser",
                                "Suporte dedicado",
                            ].map((badge) => (
                                <span
                                    key={badge}
                                    className="inline-flex items-center gap-1.5 text-sm text-white/80"
                                >
                                    <CheckCircle size={14} className="text-white/60" />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
