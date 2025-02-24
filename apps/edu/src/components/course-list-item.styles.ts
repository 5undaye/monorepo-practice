import styled from "@emotion/styled";

export const CourseListItemWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: white;
  padding: 16px;
  gap: 16px;
  border: 1px solid rgb(0 0 0 / 0.1);

  .edu--course-list-item-thumbnail {
    flex: 1;
    min-width: 308px;
    width: 308px;
    height: 168px;

    img {
      border-radius: 8px;
    }
  }

  .edu--course-list-item-info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .edu--course-list-item-info-title {
      font-size: 19px;
      font-weight: 600;
    }

    .edu--course-list-item-info-description {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
    }
  }

  &:hover {
    border: 1px solid rgb(0 0 0 / 0.6);
    cursor: pointer;
  }
`;
