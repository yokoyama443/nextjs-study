// pages/index.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import LikeButton from './LlikeButton';

interface BlogProps {
  title: string;
  content: string;
}

const BlogPage: React.FC = async() => {
  const data = await getBlog()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl p-8 bg-gray-100 rounded-lg shadow-lg w-full">
        <div className='markdown'>
          <ReactMarkdown className="prose text-gray-700">{data.content}</ReactMarkdown>
          <div className="text-center py-5">
            <LikeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

async function getBlog() {
  const filePath = path.join(process.cwd(), 'data/page.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  console.log(fileContents)

  return {
      content: fileContents,
  };
}

export default BlogPage;
