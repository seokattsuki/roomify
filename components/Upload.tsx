import React from 'react'
import { useState } from 'react';
import { useOutletContext } from 'react-router';
import {CheckCircle2, ImageIcon, UploadIcon} from "lucide-react";


const Upload = () => {
    const [file, setFile] =useState<File | null>(null);
    const [isDragging, setDragging] = useState(false);
    const [progress, setProgress] = useState(0);



    type AuthContext = {
  isSignedIn: boolean;
}

    const { isSignedIn } = useOutletContext<AuthContext>();


  return (
    <div className='upload'>
        {!file ? (
            <div className={`dropzone ${isDragging ? 'is-dragging' : '' }`}>
                <input type='file' 
                className='drop-input' 
                accept=".jpg,.jpeg,.png" 
                disabled={!isSignedIn} />

                <div className='drop-content'>
                    <div className="drop-icon">

                        <UploadIcon size={20}/>
                    </div>
                    <p>
                        {isSignedIn ? (
                            "Click or drag and drop your floor plan here"
                        ): ("Sign in or sign up to upload yyour floor plan")}
                    </p>
                    <p className='help'>Maximum file size 50 MB</p>

                </div>
            </div>
        ) : (
            <div className='upload-status'>
                <div className='status-content'>
                    <div className='status-icon'>
                        {progress === 100 ? (
                            <CheckCircle2 className="check" />
                        ) : (
                            <ImageIcon className='image' />
                        )}

                    </div>

                    <h3>{file?.name}</h3>
                    <div className='progress'> 
                        <div className='bar' style={{width: `${progress}%`}}/>

                        <p className='status-text'>
                            {progress <100 ? 'Analyzing Floor plan...' : 'Redirecting...'}
                        </p>
                    </div>
                </div>
            </div>
        )}
      
    </div>
  )
}

export default Upload
