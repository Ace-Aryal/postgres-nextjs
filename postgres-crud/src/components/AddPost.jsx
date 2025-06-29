import { handleAddPost } from "@/lib/actions";
import React from "react";
function AddPost() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Add New Post</h2>
      <form action={handleAddPost} className="space-y-4 text-gray-700">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter post title"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="content"
            rows="4"
            placeholder="Enter post description"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
