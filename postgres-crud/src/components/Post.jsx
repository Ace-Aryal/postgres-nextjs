"use client";
import React, { useState } from "react";

function Post({ postId, authorName, title, content }) {
  const [updatedData, setUpdatedData] = useState({
    title,
    content,
  });
  const [editable, setEditable] = useState(false);
  return (
    <div className="w-xl mx-auto p-3 bg-white rounded-2xl shadow-md space-y-4">
      <div>
        <div className="text-sm text-gray-500">By {authorName}</div>
        <h2
          contentEditable={editable}
          className="text-2xl font-bold text-gray-800"
        >
          {title}
        </h2>
        <p contentEditable={editable} className="text-gray-700">
          {content}
        </p>
      </div>
      <div>
        <button
          className="text-red-600 bg-red-100 rounded-lg px-2"
          onClick={async () => {
            try {
              const response = await fetch(`/api/delete-post/${postId}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id: postId,
                }),
              });
            } catch (error) {
              console.error(error);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
