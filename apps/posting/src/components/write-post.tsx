import { useRef } from "react";
import { Button } from "@career-up/ui-kit";

interface WritePostProps {
  writePost: (message: string) => Promise<void>;
}

import "./write-post.css";

const WritePost = ({ writePost }: WritePostProps) => {
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onWriteClick = async () => {
    if (messageRef.current === null) {
      return;
    }

    await writePost(messageRef.current.value.replace(/(?:\r\n|\r|\n)/g, "<br />"));

    messageRef.current.value = "";
  };

  return (
    <div className="posting--write-post">
      <textarea className="posting--write-post-textarea" ref={messageRef} />
      <div className="posting--write-post-actions">
        <Button onClick={onWriteClick}>Post</Button>
      </div>
    </div>
  );
};

export default WritePost;
