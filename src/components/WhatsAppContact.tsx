
import React from 'react';
import { Button } from "@/components/ui/button";

interface WhatsAppContactProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
  text?: string;
  phoneNumber?: string;
}

const WhatsAppContact: React.FC<WhatsAppContactProps> = ({
  className = "",
  variant = "outline",
  size = "default",
  fullWidth = false,
  text = "Contact Us",
  phoneNumber = "918555974274"
}) => {
  const handleWhatsAppContact = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleWhatsAppContact}
      className={`${fullWidth ? 'w-full' : ''} border-2 border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors ${className}`}
    >
      <img 
        src="/images/whatsapp-icon.svg" 
        alt="WhatsApp" 
        className="mr-2 h-4 w-4" 
        onError={(e) => {
          // If WhatsApp icon fails, use GradeChamp logo as fallback
          e.currentTarget.src = "/lovable-uploads/af53a0ef-4355-40ef-ab74-781f6fa9f1e3.png";
        }}
      />
      {text}
    </Button>
  );
};

export default React.memo(WhatsAppContact);
