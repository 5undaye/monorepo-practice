import { useEffect, useState } from "react";

import useAuth0Client from "../hooks/use-auth0-client";

import Profile from "../components/profile";
import Post from "../components/post";
import WritePost from "../components/write-post";

import { createPost, getPosts, removePost } from "../apis";

import { PostType } from "../types";

import "./page-home.css";

const Page = () => {
  const auth0Client = useAuth0Client();
  const [posts, setPosts] = useState<PostType[]>([]);

  const deletePostById = async (id: string) => {
    try {
      const token = await auth0Client.getTokenSilently();

      await removePost(token, id);

      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  const writePost = async (message: string) => {
    try {
      const token = await auth0Client.getTokenSilently();
      await createPost(token, { message });

      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const posts = await getPosts(token);
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [auth0Client]);

  return (
    <div className="posting--page-home">
      <div className="posting--page-home-left">
        <Profile />
      </div>
      <div className="posting--page-home-center">
        <WritePost writePost={writePost} />
        {posts.map((post) => (
          <Post key={post.id} {...post} deletePostById={deletePostById} />
        ))}
      </div>
      <div className="posting--page-home-right"></div>
    </div>
  );
};

export default Page;
