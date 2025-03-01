import { Button } from "@career-up/ui-kit";
import "./connection.css";

interface ConnectionProps {
  name: string;
}

const Connection = ({ name }: ConnectionProps) => {
  return (
    <div className="fragment-recommend-connections--connection">
      <div className="fragment-recommend-connections--connection-name">{name}</div>
      <div>
        <Button>1촌 맺기</Button>
      </div>
    </div>
  );
};

export default Connection;
