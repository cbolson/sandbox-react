import { useState } from "react";
type FaqProps = {
  title: string;
  info: string;
  id?: number; // we don't have an id - just testing
};

export default function Faq({ title, info, id }: FaqProps) {
  const [isOpen, setOpen] = useState<Boolean>(false);
  return (
    <li className={isOpen ? "open" : "closed"}>
      <h2 className='faq__question' onClick={() => setOpen(!isOpen)}>
        {id != null && <span className='faq__id'>{id}</span>}
        {title}
      </h2>
      <div className='faq__info'>{info}</div>
    </li>
  );
}
