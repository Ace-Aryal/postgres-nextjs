import React from "react";

function Post({ postId, authorName, title, content }) {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4">
      <div className="text-sm text-gray-500">By {authorName}</div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

export default Post;
