import './Zodiac.css';
export default function Zodiac(props) {
  return (
    <div className="zodiac" style={{ top: props.top, left: props.left }}>
      <img src={`${process.env.PUBLIC_URL}/zodiac-signs/${props.name}.png`} />
      <span>{props.name}</span>
      <span>{props.dates}</span>
    </div>
  );
}
