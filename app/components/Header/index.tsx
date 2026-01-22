'use client'

import {useState, useEffect} from "react";
import {X, Menu} from 'lucide-react'
import Image from "next/image";
import NavButton from "@/app/components/Header/navbutton";
import Logo from '../../../public/assets/logo.svg';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 50);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({behavior: "smooth"});
        setIsMobileMenuOpen(false);
    }

    const navLinks = [
        {label: 'Sobre', id: 'about'},
        {label: 'Projects', id: 'projects'},
        {label: 'Conhecimentos', id: 'skills'},
        {label: 'Experiências', id: 'experience'},
        {label: 'Contato', id: 'contact'},
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-black/10 border-b border-slate-800' : 'bg-transparent'}
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        className="hover:cursor-pointer"
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    >
                        <Image src={Logo} alt="logo" className="rounded-md w-14"/>
                    </button>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavButton onScroll={scrollToSection}  key={link.id} buttonRefID={link.id} buttonLabel={link.label} isMobileMenu={false} />
                        ))}
                    </nav>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 py-4 border-t border-slate-800">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <NavButton onScroll={scrollToSection}  key={link.id} buttonRefID={link.id} buttonLabel={link.label} isMobileMenu={true} />
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}