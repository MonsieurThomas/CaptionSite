'use client'
import React from 'react'
import UploadIcon from './UploadIcon'
import axios from 'axios';


async function upload(ev){
    ev.preventDefault();
    const files = ev.target.files
    if (files.length > 0) {
        const file = files[0];
        const res = await axios.postForm('/api/upload', {
            file,
        })
        console.log(res.data);
    }
  }

function UploadForm() {
  return (
    <label className=" cursor-pointer bg-green-600 py-2 px-4 rounded-full inline-flex gap-2 border-2 border-purple-700/50">
            <UploadIcon/>
            
            <span>Choose file</span>
            <input onChange={upload} type="file" className="hidden" />
          </label>
  )
}

export default UploadForm
