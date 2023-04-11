interface quoteProps {
  quote: {
    text: string;
    author: string;
  };
}
function Quote({ quote }: quoteProps) {
  return (
    <div className='quote'>
      {quote?.text}
      <div className='author'>- {quote?.author}</div>
    </div>
  );
}
export default Quote;
