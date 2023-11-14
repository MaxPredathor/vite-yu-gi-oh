import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  endPoint: {
    num: 12000,
    offset: 0,
  },
  cardList: [],
  loaded: true,
  error: false,
});
