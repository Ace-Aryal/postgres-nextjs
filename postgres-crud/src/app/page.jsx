import Post from "@/components/Post";
import { getPosts } from "@/lib/actions";
import Image from "next/image";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="w-full text-5xl my-5 text-center">All posts</h1>
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
