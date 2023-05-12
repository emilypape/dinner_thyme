import { useState } from 'react';
import { Icon } from '@iconify/react';
import TextEditor from './TextEditor';
import RecipePictureModal from './RecipePictureModal';

export default function NewRecipe() {
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [title, setTitle] = useState('');
  const [cookTemperature, setCookTemperature] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [recipePictureModal, setRecipePictureModal] = useState(false);
  const [isSelected, setIsSelected] = useState('');
  const [selectedImage, setSelectedImage] = useState();

  function handleImageSelection(value, e) {
    setIsSelected(value);
    setSelectedImage(`/${e.target.src.match(/_next.+/)[0]}`);
    console.log(e);
  }

  function newIngredient(event) {
    let ingredient = event.target.value;
    setCurrentIngredient(ingredient);
  }

  function addIngredient() {
    const ingredientArray = [...ingredients];

    ingredientArray.push(currentIngredient);

    setIngredients(ingredientArray);
    setCurrentIngredient('');
  }

  function removeIngredient(indexToRemove) {
    let ingredientArray = [...ingredients];

    ingredientArray.splice(indexToRemove, 1);

    setIngredients(ingredientArray);
  }

  function handleChange(e, setter) {
    setter(e.target.value);
  }
  console.log(selectedImage);

  return (
    <div className=''>
      <div onClick={() => setRecipePictureModal(true)} className='flex flex-col items-center justify-center'>
        <div class=' w-full max-w-[50em] mt-10'>
          <label
            for='dropzone-file'
            class='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer '>
            <div class='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                aria-hidden='true'
                class='w-10 h-10 mb-3 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
              </svg>
              <p class='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span class='font-semibold'>Click to upload</span>
              </p>
            </div>
          </label>
        </div>
      </div>
      <div className='flex justify-center mt-5 '>
        <form className='w-full container'>
          <div className=' border-b border-green-500 py-2 lg:mr-[7em] md:mr-[7em] lg:ml-[7em] md:ml-[7em]'>
            <input
              onChange={(e) => handleChange(e, setTitle)}
              className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
              type='text'
              placeholder='Title'
              aria-label='Full name'
            />
          </div>
          <div className='flex justify-between mt-10 lg:mr-[7em] md:mr-[7em] lg:ml-[7em] md:ml-[7em]'>
            <div className=' border-b border-green-500 py-2 mr-1 '>
              <input
                onChange={(e) => handleChange(e, setCookTemperature)}
                className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                type='text'
                placeholder='Cook Temp'
                aria-label='Full name'
              />
            </div>
            <div className=' border-b border-green-500 py-2 mr-1'>
              <input
                onChange={(e) => handleChange(e, setPrepTime)}
                className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                type='text'
                placeholder='Prep Time'
                aria-label='Full name'
              />
            </div>
            <div className=' border-b border-green-500 py-2 '>
              <input
                onChange={(e) => handleChange(e, setCookTime)}
                className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                type='text'
                placeholder='Cook Time'
                aria-label='Full name'
              />
            </div>
          </div>
        </form>
      </div>
      <div className='flex justify-center mt-5 '>
        <div className='w-full container'>
          <div class='relative'>
            <div className=' border-b border-green-500 mt-8 py-2 lg:mr-[7em] md:mr-[7em] lg:ml-[7em] md:ml-[7em]'>
              <input
                onChange={newIngredient}
                value={currentIngredient}
                className='appearance-none bg-transparent border-none w-full text-gray-700  leading-tight focus:outline-none'
                type='text'
                placeholder='Ingredients'
              />
            </div>
            <button
              onClick={addIngredient}
              class='text-white absolute lg:mr-28 md:mr-28  right-1.5 bottom-2.5 bg-green-500  font-medium rounded-lg text-sm px-4 py-2'>
              Add
            </button>
          </div>
          <div className=' min-h-[10em] bg-gray-200  rounded-lg lg:mr-[7em] md:mr-[7em] lg:ml-[7em] md:ml-[7em] mt-5'>
            <div className='flex flex-wrap ml-3'>
              {ingredients.map((ingredient, i) => {
                return (
                  <div className='ingredientContainer flex max-w-[12em] mt-2 mr-3 bg-green-500 px-2 py-2 text-white rounded-lg'>
                    <div className='ingredient'>{ingredient}</div>
                    <div onClick={() => removeIngredient(i)} className='ml-1 mt-1 cursor-pointer'>
                      <Icon icon='ph:x-bold' color='white' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex-col mt-10'>
          <div className='mb-2 text-2xl text-green-500 font-semibold'>Cooking Instructions</div>
          <TextEditor
            ingredients={ingredients}
            cookTime={cookTime}
            cookTemperature={cookTemperature}
            prepTime={prepTime}
            title={title}
            selectedImage={selectedImage}
          />
          {recipePictureModal ? (
            <RecipePictureModal
              setRecipePictureModal={setRecipePictureModal}
              handleImageSelection={handleImageSelection}
              isSelected={isSelected}
              selectedImage={selectedImage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
