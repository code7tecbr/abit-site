"use client";

import { useState, type FormEvent } from "react";
import { Button, Input } from "@/shared/ui";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validação básica
    if (!email || !email.includes("@")) {
      setMessage({
        type: "error",
        text: "Por favor, insira um e-mail válido",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulação de envio (substituir por integração real)
    setTimeout(() => {
      setMessage({
        type: "success",
        text: "E-mail cadastrado com sucesso!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        <Input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="md:w-auto w-full"
        >
          {isSubmitting ? "ENVIANDO..." : "INSCREVER"}
        </Button>
      </div>
      {message && (
        <p
          className={`mt-3 text-sm text-center ${
            message.type === "success" ? "text-[#FFD700]" : "text-red-500"
          }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
