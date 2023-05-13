import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from './Link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { disableBodyScroll } from 'body-scroll-lock';
import UserSuggestion from './userSuggestions';
import FollowerScroller from './followerScroller';
import FeedPostDropdown from './feedPostDropdown';
import Comments from './comments';
import profilePicPlaceholder from '../public/assets/images/profile_pic_placeholder.jpeg';
import noPhoto from '../public/assets/images/errorImage.jpg';
import AddToCookbook from './AddToCookbookModel';

export default function Feed() {
  const [feedPosts, setFeedPosts] = useState([]);
  const [dropdown, setDropdown] = useState({});
  const [commentOpen, setCommentOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [cookbookModal, setCookbookModal] = useState(false);
  const router = useRouter();

  console.log(cookbookModal);

  async function getFeedPosts() {
    const response = await fetch('/api/followingPosts', {
      method: 'Get',
    });

    const feedData = await response.json();
    console.log(feedData);
    setFeedPosts(feedData);
  }

  async function newPostLike(recipeId) {
    const response = await fetch('/api/newLike', {
      method: 'Post',
      body: JSON.stringify({
        recipe_id: recipeId,
      }),
    });

    if (response.ok) {
      const newState = feedPosts.map((post) => {
        if (post.id === recipeId) {
          if (post?.likes?.length > 0) {
            const newPost = { ...post };
            newPost.likes = [];
            return newPost;
          } else if (post?.likes?.length <= 0 || !post?.likes) {
            const newPost = { ...post };
            newPost.likes = [true];
            return newPost;
          }
        }
        return post;
      });

      setFeedPosts(newState);
    }
  }

  function openComments(recipeId) {
    const body = document.querySelector('body');
    setSelectedRecipe(recipeId);
    setCommentOpen(true);
    disableBodyScroll(body);
  }

  const openDropdown = (recipeId) => {
    const newState = { ...dropdown };

    if (newState[recipeId]) {
      newState[recipeId] = false;
    } else {
      newState[recipeId] = true;
    }
    setDropdown(newState);
    setSelectedRecipe(recipeId);
  };

  useEffect(() => {
    getFeedPosts();
  }, []);

  return (
    <div className='flex'>
      <div className='p-10 lg:ml-48 flex flex-col items-center lg:items-start justify-center xl:justify-start lg:justify-start md:justify-start '>
        {cookbookModal ? <AddToCookbook setCookbookModal={setCookbookModal} selectedRecipe={selectedRecipe} /> : null}
        <FollowerScroller following={feedPosts} />
        {commentOpen && <Comments recipeId={selectedRecipe} setCommentOpen={setCommentOpen} />}

        {feedPosts.length > 0 ? (
          feedPosts.map((posts) => {
            return (
              <div key={posts.id} className='lg:border-b lg:border-gray-200 lg:mb-5'>
                <div className='flex justify-between hover:text-gray-400 mb-2'>
                  <Link href={`/profile/${posts.user.id}`}>
                    <div className='flex'>
                      <Image
                        className='w-10 h-10 rounded-full'
                        src={posts?.user?.profile_picture || profilePicPlaceholder}
                        alt={'Profile Photo'}
                        height={50}
                        width='50'
                      />
                      <div class='hover:text-gray-400 font-medium dark:text-black bg-white px-2 py-3 rounded-lg'>
                        <div className=''>{posts.user.username} </div>
                      </div>
                    </div>
                  </Link>
                  <div onClick={() => openDropdown(posts.id)}>
                    <Icon className='mr-4 mt-3' icon='ph:dots-three-bold' width={30} height={30} />
                    {dropdown[posts.id] && (
                      <FeedPostDropdown setCookbookModal={setCookbookModal} userId={posts.user.id} />
                    )}
                  </div>
                </div>
                <div key={posts.id} className=' lg:mr-4 max-w-xs lg:max-w-lg md:max-w-lg xl:max-w-lg shadow-lg mb-5'>
                  <Link href={`/recipe/${posts.id}`}>
                    <Image src={posts?.image_urls || noPhoto} width={600} height={450} alt={posts?.title} />
                  </Link>
                  <div className='flex '>
                    <div className='flex cursor-pointer'>
                      <Icon
                        onClick={() => newPostLike(posts.id)}
                        className='ml-6 mt-2'
                        icon={posts.likes.length > 0 ? 'mdi:heart' : 'mdi:cards-heart-outline'}
                        color={posts.likes.length > 0 ? 'red' : 'grey'}
                        width={25}
                        height={25}
                      />

                      <Icon
                        onClick={() => openComments(posts.id)}
                        className='ml-4 mt-2'
                        icon='mdi:comment-text-outline'
                        color='gray'
                        width={25}
                        height={25}
                      />
                    </div>
                  </div>
                  <div className='px-6 py-4'>
                    <Link href={`/recipe/${posts.id}`}>
                      <div className='flex'>
                        <div className='font-bold text-xl xl:mb-2 lg:mb-2 md:mb-2'>{posts.title}</div>
                      </div>
                    </Link>
                    <div className='overflow-auto max-h-28'>
                      <p
                        dangerouslySetInnerHTML={{ __html: posts.cook_instructions }}
                        className='hidden lg:block xl:block md:block text-gray-500 text-sm '></p>
                    </div>
                  </div>
                  <div className='px-6 pt-4 pb-2'>
                    <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                      Cook Time: {posts.cook_time}
                    </span>
                    <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                      Temp: {posts.cook_temperature}
                    </span>
                    <span className='inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-bold text-black mr-2 mb-2'>
                      Prep Time: {posts.prep_time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <div className='text-black text-lg font-semi-bold lg:mr-[5em] lg:ml-[5em]'>
              {' '}
              Follow users to get cooking!
            </div>
            <div className='lg:hidden md:hidden xl:hidden block'>
              <UserSuggestion />
            </div>
          </div>
        )}
      </div>
      <div className='hidden lg:block xl:block md:block'>
        <UserSuggestion />
      </div>
    </div>
  );
}
