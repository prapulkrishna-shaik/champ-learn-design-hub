
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
          // Use an inline SVG as fallback if the image fails to load
          e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNy40NzIgMTQuMzgyYy0uMjk3LS4xNDktMS43NTgtLjg2OC0yLjAzLS45NjctLjI3My0uMDk5LS40NzItLjE0OS0uNjcxLjE0OS0uMTk4LjI5Ny0uNzY5Ljk2Ny0uOTQyIDEuMTY1LS4xNzMuMTk4LS4zNDcuMjIzLS42NDQuMDc0LS4yOTctLjE0OS0xLjI1NS0uNDYyLTIuMzktMS40NzUtLjg4My0uNzg4LTEuNDgtMS43NjEtMS42NTMtMi4wNTktLjE3My0uMjk3LS4wMTgtLjQ1OC4xMy0uNjA2LjEzNC0uMTMzLjI5Ny0uMzQ3LjQ0Ni0uNTIuMTQ5LS4xNzQuMTk4LS4yOTguMjk3LS40OTYuMDk5LS4xOTguMDUtLjM3Mi0uMDI1LS41Mi0uMDc0LS4xNDktLjY3MS0xLjYxNi0uOTItMi4yMTMtLjI0Mi0uNTgtLjQ4Ny0uNS0uNjctLjUxLS4xNzMtLjAxLS4zNzEtLjAxLS41Ny0uMDEtLjE5OCAwLS41Mi4wNzQtLjc5Mi4zNzItLjI3My4yOTctMS4wNC45NjctMS4wNCAxLjYxNiAwIC42NDkuNjcgMS4yNzcuNzY0IDEuNDc1LjA5OS4xOTggMS4zOTIgMi4xMjQgMy4zNzMgMi45OC40NzEuMjA1Ljg0LjMyNiAxLjEyOS40MTguNDcyLjE1Ljk5NC4xMjggMS4yNjcuMDc3LjM4Ni0uMDU4IDEuMTktLjQ4NiAxLjM1Ni0uOTU2LjE2Ny0uNDcuMTY3LS44NjguMTE3LS45NTYtLjA0OS0uMDg4LS4xOTgtLjE0LS40OTUtLjI0MXpNMTEuOTkxIDIyYzEuMjE3IDAgMi40MDMtLjI5NSAzLjQ2LS44NTVsLjI0OC0uMTQ0LTEuMDgxLTMuMTM0LS4yMzguMTM0Yy0uNjgxLjM4My0xLjQ1Ni41ODctMi4yNDEuNTg3LTIuNTkyIDAtNC43MDEtMi4x-LTQuNzAxLTQuNzAxIDAtMi41OTIgMi4xMS00LjcwMSA0LjcwMS00LjcwMSAyLjU5MiAwIDQuNzAxIDIuMTEgNC43MDEgNC43MDEgMCAuNzg1LS4yMDQgMS41Ni0uNTg3IDIuMjQxbC0uMTM0LjIzOCAzLjEzNCAxLjA4MS4xNDQtLjI0OGMuNTYtMS4wNTcuODU0LTIuMjQzLjg1NC0zLjQ2QzE5Ljk5NyA2LjkwNiAxNi4wODYgMyAxMS45OTEgM1MzLjk4NiA2LjkxIDMuOTg2IDExLjAwNUM0IDIxIDExLjk5MSAyMiAxMS45OTEgMjJ6Ii8+PC9zdmc+";
        }}
      />
      {text}
    </Button>
  );
};

export default React.memo(WhatsAppContact);
