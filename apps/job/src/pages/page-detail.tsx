import { useParams } from "react-router-dom";

const PageDetail = () => {
  const { id } = useParams();
  return <div>id: {id}</div>;
};

export default PageDetail;
