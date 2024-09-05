export default function Post({ text, author, date, title }) {
  console.log(text);

  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <p>{text}</p>
      <p>{date}</p>
      <p>hello</p>
    </div>
  );
}
