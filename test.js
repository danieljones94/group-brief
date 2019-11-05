import { firestore } from "firebase";

firestore
  .collection("posts")
  .get()
  .then(querySnapshot => {
    const post = querySnapshot.docs.map(doc => {
      console.log({ ...doc.data(), docId: doc.id });
      return 1;
    });
  });
