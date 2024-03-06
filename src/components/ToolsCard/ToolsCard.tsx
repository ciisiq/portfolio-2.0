import { ToolsLogoProps } from '../../util/dataTools';
import './ToolsCard.css';

export default function ToolsCard({ id, logo, alt }: ToolsLogoProps) {
  return (
    <div key={id} className="toolcard">
      <img className="logo-image" src={logo} alt={alt} />
    </div>
  );
}
