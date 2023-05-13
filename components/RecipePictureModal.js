import { useState } from 'react';
import Image from 'next/image';
import appetizers from '../public/assets/images/appetizers.jpeg';
import asianNoodles from '../public/assets/images/asianNoodles.jpeg';
import beef from '../public/assets/images/beef.jpeg';
import breakfast from '../public/assets/images/breakfast.jpeg';
import breakfastEggs from '../public/assets/images/breakfastEggs.jpeg';
import burger from '../public/assets/images/burger.jpg';
import cake from '../public/assets/images/cake.jpeg';
import casserole from '../public/assets/images/casserole.jpeg';
import chicken from '../public/assets/images/chicken.webp';
import chickenSoup from '../public/assets/images/chickenSoup.jpeg';
import chickenWings from '../public/assets/images/chickenWings.jpeg';
import christmasDessert from '../public/assets/images/christmasDessert.jpeg';
import cookedCarrot from '../public/assets/images/cookedCarrot.webp';
import cookies from '../public/assets/images/cookies.jpeg';
import cupcakes from '../public/assets/images/cupcakes.jpeg';
import drink from '../public/assets/images/drink.webp';
import filet from '../public/assets/images/filet.jpeg';
import freshBread from '../public/assets/images/freshBread.jpeg';
import friedChicken from '../public/assets/images/friedChicken.jpeg';
import friedFish from '../public/assets/images/friedFish.jpeg';
import friedRice from '../public/assets/images/friedRice.jpeg';
import greekFood from '../public/assets/images/greekFood.webp';
import healthSnack from '../public/assets/images/healthSnack.jpeg';
import heartyFood from '../public/assets/images/heartyFood.jpeg';
import iceCream from '../public/assets/images/iceCream.jpeg';
import indianFood from '../public/assets/images/indianFood.jpeg';
import italianFood from '../public/assets/images/italianFood.jpeg';
import macaroni from '../public/assets/images/macaroni.jpeg';
import mashedPotato from '../public/assets/images/mashedPotato.jpeg';
import muffins from '../public/assets/images/muffins.jpeg';
import pasta from '../public/assets/images/pasta.jpeg';
import pastry from '../public/assets/images/pastry.jpeg';
import pie from '../public/assets/images/pie.jpeg';
import pizza from '../public/assets/images/pizza.jpeg';
import potatoes from '../public/assets/images/potatoes.jpeg';
import ramen from '../public/assets/images/ramen.png';
import potRoast from '../public/assets/images/potRoast.jpeg';
import roast from '../public/assets/images/roast.jpeg';
import salad from '../public/assets/images/salad.jpeg';
import salmon from '../public/assets/images/salmon.png';
import salsa from '../public/assets/images/salsa.jpeg';
import sandwich from '../public/assets/images/sandwich.png';
import smoothie from '../public/assets/images/smoothie.jpeg';
import snacks from '../public/assets/images/snacks.jpeg';
import soup from '../public/assets/images/soup.jpeg';
import strawberryCake from '../public/assets/images/StrawberryCake.jpeg';
import stuffedChicken from '../public/assets/images/stuffedChicken.jpeg';
import sushi from '../public/assets/images/sushi.jpeg';
import taco from '../public/assets/images/taco.jpeg';
import thanksgiving from '../public/assets/images/thanksgiving.jpeg';
import toast from '../public/assets/images/toast.jpeg';

export default function RecipePictureModal({ setRecipePictureModal, isSelected, selectedImage, handleImageSelection }) {
  return (
    <>
      <div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-sm lg:max-w-xl md:max-w-xl xl:max-w-xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-xl font-semibold'>Select a recipe photo</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setRecipePictureModal(false)}>
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto overflow-y-scroll max-h-[25em]'>
              <div className='flex-wrap flex justify-evenly'>
                <div
                  onClick={(e) => handleImageSelection('appetizers', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'appetizers' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={appetizers} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('asianNoodles', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'asianNoodles' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={asianNoodles} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('beef', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'beef' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={beef} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('breakfast', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'breakfast' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={breakfast} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('breakfastEggs', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'breakfastEggs' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={breakfastEggs} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('burger', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'burger' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={burger} height={150} width={150} />
                </div>{' '}
                <div
                  onClick={(e) => handleImageSelection('cake', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'cake' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={cake} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('casserole', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'casserole' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={casserole} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('chicken', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'chicken' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={chicken} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('chickenSoup', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'chickenSoup' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={chickenSoup} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('chickenWings', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'chickenWings' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={chickenWings} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('christmasDessert', e)}
                  className={`max-h-[9.9em] mb-2 ${
                    isSelected === 'christmasDessert' ? 'border-4 border-green-500' : ''
                  }`}>
                  <Image src={christmasDessert} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('cookedCarrot', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'cookedCarrot' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={cookedCarrot} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('cookies', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'cookies' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={cookies} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('cupcakes', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'cupcakes' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={cupcakes} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('drink', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'drink' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={drink} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('filet', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'filet' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={filet} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('freshBread', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'freshBread' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={freshBread} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('friedChicken', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'friedChicken' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={friedChicken} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('friedFish', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'friedFish' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={friedFish} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('friedRice', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'friedRice' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={friedRice} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('greekFood', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'greekFood' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={greekFood} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('healthSnack', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'healthSnack' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={healthSnack} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('heartyFood', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'heartyFood' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={heartyFood} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('iceCream', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'iceCream' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={iceCream} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('indianFood', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'indianFood' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={indianFood} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('italianFood', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'italianFood' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={italianFood} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('macaroni', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'macaroni' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={macaroni} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('mashedPotato', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'mashedPotato' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={mashedPotato} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('muffins', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'muffins' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={muffins} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('pasta', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'pasta' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={pasta} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('pastry', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'pastry' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={pastry} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('pie', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'pie' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={pie} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('pizza', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'pizza' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={pizza} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('potRoast', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'potRoast' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={potRoast} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('potatoes', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'potatoes' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={potatoes} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('ramen', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'ramen' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={ramen} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('roast', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'roast' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={roast} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('salad', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'salad' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={salad} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('salmon', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'salmon' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={salmon} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('salsa', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'salsa' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={salsa} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('sandwich', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'sandwich' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={sandwich} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('smoothie', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'smoothie' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={smoothie} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('snacks', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'snacks' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={snacks} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('soup', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'soup' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={soup} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('strawberryCake', e)}
                  className={`max-h-[9.9em] mb-2 ${
                    isSelected === 'strawberryCake' ? 'border-4 border-green-500' : ''
                  }`}>
                  <Image src={strawberryCake} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('stuffedChicken', e)}
                  className={`max-h-[9.9em] mb-2 ${
                    isSelected === 'stuffedChicken' ? 'border-4 border-green-500' : ''
                  }`}>
                  <Image src={stuffedChicken} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('tacos', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'tacos' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={taco} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('sushi', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'sushi' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={sushi} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('thanksgiving', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'thanksgiving' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={thanksgiving} height={150} width={150} />
                </div>
                <div
                  onClick={(e) => handleImageSelection('toast', e)}
                  className={`max-h-[9.9em] mb-2 ${isSelected === 'toast' ? 'border-4 border-green-500' : ''}`}>
                  <Image src={toast} height={150} width={150} />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                onClick={() => setRecipePictureModal(false)}
                className='bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
