
import React from 'react';
import { Button } from "@/components/ui/button";
import { WhatsApp } from "lucide-react";

interface WhatsAppContactProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
  text?: string;
}

const WhatsAppContact: React.FC<WhatsAppContactProps> = ({
  className = "",
  variant = "outline",
  size = "default",
  fullWidth = false,
  text = "Contact Us"
}) => {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/918555974274', '_blank');
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleWhatsAppContact}
      className={`${fullWidth ? 'w-full' : ''} border-2 border-gradechamp-blue text-gradechamp-blue hover:bg-gradechamp-blue hover:text-white rounded-full transition-colors ${className}`}
    >
      <WhatsApp className="mr-2 h-4 w-4" />
      {text}
    </Button>
  );
};

export default React.memo(WhatsAppContact);
