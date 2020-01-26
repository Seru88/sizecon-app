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
  }

  if (error) console.error(error);

  return (
    <div className="mt-10 mb-4">
      {!loading && (
        <Button fullwidth onClick={onClick}>
          <div className="w-8 inline-block">
            <FontAwesomeIcon icon="plus" />
          </div>
          {bookmarks && bookmarks.find(bm => bm === slug) === undefined
            ? 'Add to bookmarks'
            : 'Remove from bookmarks'}
        </Button>
      )}
    </div>
  );
};

export default BookmarkButton;
