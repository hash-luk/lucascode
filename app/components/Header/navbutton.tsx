'use client'

interface NavButtonProps {
    buttonRefID: string;
    buttonLabel: string;
    isMobileMenu: boolean;
    onScroll: (sectionID: string) => void;
}


export default function NavButton({onScroll, buttonRefID, buttonLabel, isMobileMenu }: NavButtonProps) {
    return (
        <button
            onClick={() => onScroll(buttonRefID)}
        className={`text-slate-300 hover:cursor-pointer hover:text-blue-400 transition-colors font-medium ${isMobileMenu ? 'text-left py-2' : ''}`}
        >{buttonLabel}</button>
    )
}