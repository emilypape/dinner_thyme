import { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import { useRouter } from 'next/router';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
// import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function TextEditor({ cookTime, cookTemperature, prepTime, title, ingredients, selectedImage }) {
  const [cookInstructions, setCookInstructions] = useState('');

  const router = useRouter();

  const theme = 'snow';
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],

      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],

      ['clean'],
    ],
  };
  const placeholder = 'Lets Get Cooking!';
  const formats = [
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'indent',
    'size',
    'header',
    'link',
    'image',
    'video',
    'color',
    'background',
    'clean',
  ];

  const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });

  async function submitQuill() {
    const response = await fetch('/api/postRecipe', {
      method: 'Post',
      body: JSON.stringify({
        title: title,
        image_urls: selectedImage,
        cook_temperature: cookTemperature,
        cook_time: cookTime,
        prep_time: prepTime,
        cook_instructions: cookInstructions,
        ingredient_list: ingredients,
      }),
    });

    if (!response.ok) {
      alert(response.statusText);
    } else {
      router.push('/profile');
    }
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        setCookInstructions(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div className=''>
      <div className='' style={{ border: '1px solid lightgray' }}>
        <div className='min-h-[10em] quill-contents ql-container' ref={quillRef} />
      </div>
      <div className='flex justify-center'>
        <button className='text-xl  bg-green-500 text-white py-2  px-5 rounded-lg mt-5 mb-5 ' onClick={submitQuill}>
          Submit
        </button>
      </div>
    </div>
  );
}
