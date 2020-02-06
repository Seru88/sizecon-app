import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as firebase from 'firebase/app';
import React from 'react';

import Button from '../components/Button';
import useBookmarks from '../hooks/useBookmarks';

const BookmarkButton: React.FC<{
  user: firebase.User;
  slug: string;
}> = props => {
  const { user, slug } = props;
  const [bookmarks, loading, error, handleBookmark] = useBookmarks(user);

  const onClick = () => {
    handleBookmark(slug);
  };

  if (error) console.error(error);

  const isBookmarked = bookmarks?.includes(slug);

  return (
    <div className="mt-10 mb-4">
      {!loading && (
        <Button className="text-2xl text-left" fullwidth onClick={onClick}>
          <div className="w-8 inline-block">
            {isBookmarked ? (
              <FontAwesomeIcon icon="minus" />
            ) : (
              <FontAwesomeIcon icon="plus" />
            )}
          </div>
          {isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
        </Button>
      )}
    </div>
  );
};

export default BookmarkButton;
