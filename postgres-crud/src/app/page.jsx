import AddPost from "@/components/AddPost";
import Post from "@/components/Post";
import { getPosts } from "@/lib/actions";
import Image from "next/image";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="flex flex-col gap-3 w-full">
      <AddPost />

      <h2 className="w-full text-5xl my-5 text-center">All posts</h2>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          authorName={post.author.name}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
}
