import { useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { cn } from "@/ui_components/utils";

// LanguageSelector.tsx
interface LanguageSelectorProps {
  className?: string;  // Optional prop für zusätzliche Styles
}

const LanguageSelector = ({ className }: LanguageSelectorProps) => {
    const { i18n } = useTranslation();
    
    const changeLanguage = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
    }, [i18n]);

    return (
        <div className={cn("flex gap-2", className)}>
            <span
                className={cn(
                    "cursor-pointer font-inter",
                    i18n.language === 'de' ? 'font-normal' : 'font-thin'
                )}
                onClick={() => changeLanguage('de')}
            >
                DE
            </span>
            <span
                className={cn(
                    "cursor-pointer font-inter",
                    i18n.language === 'en' ? 'font-normal' : 'font-thin'
                )}
                onClick={() => changeLanguage('en')}
            >
                EN
            </span>
        </div>
    );
}

export default LanguageSelector;