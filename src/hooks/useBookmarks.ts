import React from 'react';
import * as firebase from 'firebase/app';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import firebaseApp from '../util/firebaseApp';
import useAlert from './useAlert';

export default function useBookmarks(
  user: firebase.User | undefined
): [[string] | undefined, boolean, Error | undefined, (slug: string) => void] {
  const [userDoc, loading, error] = useDocumentData<{ bookmarks: [string] }>(
    user
      ? firebaseApp
          .firestore()
          .collection('users')
          .doc(user.uid)
      : undefined
  );

  const { enqueueAlert } = useAlert();

  const handleBookmark = (slug: string) => {
    if (user) {
      const isBookmarked = userDoc?.bookmarks.includes(slug);
      if (isBookmarked) {
        firebaseApp
          .firestore()
          .collection('users')
          .doc(user.uid)
          .update({
            bookmarks: firebase.firestore.FieldValue.arrayRemove(slug),
          })
          .then(() => enqueueAlert('Bookmark Removed!', { variant: 'success' }))
          .catch(reason => enqueueAlert(reason.message, { variant: 'error' }));
      } else if (userDoc === undefined) {
        firebaseApp
          .firestore()
          .collection('users')
          .doc(user.uid)
          .set({ bookmarks: [slug] })
          .then(() => enqueueAlert('Bookmark Added!', { variant: 'success' }))
          .catch(reason => enqueueAlert(reason.message, { variant: 'error' }));
      } else {
        firebaseApp
          .firestore()
          .collection('users')
          .doc(user.uid)
          .update({ bookmarks: firebase.firestore.FieldValue.arrayUnion(slug) })
          .then(() => enqueueAlert('Bookmark Added!', { variant: 'success' }))
          .catch(reason => enqueueAlert(reason.message, { variant: 'error' }));
      }
    } else {
      enqueueAlert('You must be logged in to bookmark', { variant: 'error' });
    }
  };

  return [userDoc?.bookmarks, loading, error, handleBookmark];
}
