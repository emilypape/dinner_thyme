import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
// import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function TextEditor() {
  const theme = 'snow';
  // const theme = 'bubble';

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

  function submitQuill() {
    //ON SUBMIT SAVE HTML AS A STRING TO DB
    console.log(quill.root.innerHTML); // Get innerHTML using quill
  }

  return (
    <div className=''>
      <div className='' style={{ border: '1px solid lightgray' }}>
        <div className='min-h-[10em]' ref={quillRef} />
      </div>
      <div className='flex justify-center'>
        <button className='text-xl  bg-green-500 text-white py-2  px-5 rounded-lg mt-5 mb-5 ' onClick={submitQuill}>
          Submit
        </button>
      </div>
    </div>
  );
}
