import { defaultConfig } from 'next/dist/server/config-shared';
import React from 'react';

export default function FollowerScroller({ following }) {
  return (
    <div>
      {following.map((followers) => {
        <div>{followers.user.first_name}</div>;
      })}
    </div>
  );
}
