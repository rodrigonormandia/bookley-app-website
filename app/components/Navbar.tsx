"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Preços", href: "#precos" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                            <span className="text-xl font-bold text-[var(--color-text-primary)]">
                                Bookley
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href="https://app.bookleyapp.com/"
                                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors px-4 py-2"
                            >
                                Entrar
                            </a>
                            <a
                                href="https://app.bookleyapp.com/"
                                className="text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors px-5 py-2.5 rounded-lg"
                            >
                                Comece Grátis
                            </a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-[var(--color-text-secondary)]"
                            aria-label="Menu"
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-white md:hidden"
                    >
                        <div className="flex items-center justify-between px-4 h-16">
                            <span className="text-xl font-bold text-[var(--color-text-primary)]">
                                Bookley
                            </span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-2 text-[var(--color-text-secondary)]"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col px-6 pt-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <hr className="border-[var(--color-border)]" />
                            <a
                                href="https://app.bookleyapp.com/"
                                className="text-lg font-medium text-[var(--color-text-secondary)]"
                            >
                                Entrar
                            </a>
                            <a
                                href="https://app.bookleyapp.com/"
                                className="text-center text-lg font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors px-6 py-3 rounded-lg"
                            >
                                Comece Grátis
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
