
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
        src="images/whatsapp-icon.svg" 
        alt="WhatsApp" 
        className="mr-2 h-4 w-4" 
        onError={(e) => {
          // Fallback to a data URI if the image fails to load
          e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lc3NhZ2Utc3F1YXJlIj48cGF0aCBkPSJNMTQgOWE0IDQgMCAwIDEtOCAwTTUgMTVoMTRNMyA1LjVBLjUuNSAwIDAgMSAzLjUgNWgxN2EuNS41IDAgMCAxIC41LjV2MTNhLjUuNSAwIDAgMS0uNS41aC0xN2EuNS41IDAgMCAxLS41LS41di0xM1oiLz48L3N2Zz4=";
        }}
      />
      {text}
    </Button>
  );
};

export default React.memo(WhatsAppContact);
