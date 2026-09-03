import { Phone } from "lucide-react";

export function FloatingTalkWidget() {
  return (
    <a href="tel:+13467085688" className="floating-talk-widget" id="talkWidget">
      <span className="talk-text">Talk with us!</span>
      <span className="talk-btn">
        <Phone className="h-4 w-4" />
      </span>
    </a>
  );
}
