import {Section} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return (
        <Section>
     {title && <h2 className="title">{title}</h2>}
  <ul className="stat-list">
    {stats.map(element => {
        return (
            <li key={element.id} className="item" style={{backgroundColor: getRandomHexColor()}}>
      <span className="label">{element.label}</span>
      <span className="percentage">{element.percentage}</span>
    </li>
        )
    })}
  </ul>
</Section>
    )


}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }