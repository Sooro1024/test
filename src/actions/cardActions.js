export const addCardtoList = (listKey, cardName) => async (
  dispatch,
  getState,
  { firestore }
) => {
  await firestore.collection(`Cards`).add({
    childeOf: listKey,
    name: cardName,
    date: new Date().toDateString()
  });
  dispatch({ type: "NEW_CARD_ADDED" });
};

export const getCardsByListKey = listKey => async (
  dispatch,
  getState,
  { firestore }
) => {
  const snapshot = await firestore
    .collection(`Cards`)
    .where("childeOf", "==", listKey)
    .get();
  const cards = snapshot.docs.map(el => ({ key: el.id, values: el.data() }));
  dispatch({
    type: "CARDS_ARE_GATED",
    payload: { [listKey]: cards }
  });
};

export const deleteCardByKey = cardKey => async (
  dispatch,
  getState,
  { firestore }
) => {
  await firestore.doc(`Cards/${cardKey}`).delete();
  dispatch({
    type: "CARD_WAS_DELETED"
  });
};
