import { useState } from "react";

export default function Faq({ faq }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <li>
      <h2 onClick={() => setOpen(!isOpen)}>{faq.title}</h2>
      <div className={isOpen ? "open" : "closed"}>{faq.info}</div>
    </li>
  );
}
