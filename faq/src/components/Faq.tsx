import { useState } from "react";

export default function Faq({ faq }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <li className={isOpen ? "open" : "closed"}>
      <h2 className='faq__question' onClick={() => setOpen(!isOpen)}>
        {faq.title}
      </h2>
      <div className='faq__info'>{faq.info}</div>
    </li>
  );
}
