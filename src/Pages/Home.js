import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Comments from './Comments';
import FormComment from './FormComments';
import Post from './Post';
import Todo from './Todo';

export default function Home() {
    return (
        <div className='grid grid-cols-12 h-screen'>
            {/* Sidebar */}
            <div className='bg-[#2d3748] col-span-3 h-full'>
                <div className='h-[79px] bg-[#1E2D3B] border-r-2'>
                    <h1 className='text-3xl pt-4 text-[#FFFFFF]'>Dashboard</h1>
                </div>
                <div className='bg-[#4A5568] m-3 p-2 rounded-lg text-2xl hover:bg-[#718096]'>
                    <Link className='text-[#F7FAFC]' to="users">USER</Link>
                </div>
                <div className='bg-[#4A5568] m-3 p-2 rounded-lg text-2xl hover:bg-[#718096]'>
                    <Link className='text-[#F7FAFC]' to="post">POST</Link>
                </div>
                <div className='bg-[#4A5568] m-3 p-2 rounded-lg text-2xl hover:bg-[#718096]'>
                    <Link className='text-[#F7FAFC]' to="todo">TODOS</Link>
                </div>
                <div className='bg-[#4A5568] m-3 p-2 rounded-lg text-2xl hover:bg-[#718096]'>
                    <Link className='text-[#F7FAFC]' to="comments">COMMENT</Link>
                </div>
            </div>

            {/* Main Content Area */}
            <div className='col-span-9 h-full'>
                <Routes>
                    <Route path="users" element={<Users />} />
                    <Route path="comments" element={<Comments />} />
                    <Route path="formcomments" element={<FormComment />} />
                    <Route path="post" element={<Post/>} />
                    <Route path="todo" element={<Todo/>} />
                </Routes>
            </div>
        </div>
    );
}
