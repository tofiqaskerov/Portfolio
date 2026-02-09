import { useState, useEffect } from "react";
import { typingTexts } from "@/data/portfolio";

export function useTypingEffect() {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === currentText.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentText.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex <= 1) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return text;
}
