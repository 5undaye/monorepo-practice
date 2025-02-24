import { useNavigate } from "react-router-dom";
import { CourseListItemWrapper } from "./course-list-item.styles";

interface CourseListItemProps {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
}
const CourseListItem = ({ id, thumbnail, title, description }: CourseListItemProps) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`${id}`);
  };

  return (
    <CourseListItemWrapper onClick={onClick}>
      <div className="edu--course-list-item-thumbnail">
        <img src={thumbnail} />
      </div>
      <div className="edu--course-list-item-info">
        <div className="edu--course-list-item-info-title">{title}</div>
        <div className="edu--course-list-item-info-description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </CourseListItemWrapper>
  );
};

export default CourseListItem;
