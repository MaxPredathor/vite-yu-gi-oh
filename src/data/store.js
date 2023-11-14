import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  card: "cardinfo.php",
  archetypeUrl: "archetypes.php",
  random: "randomcard.php",
  endPoint: {
    num: 120,
    offset: 0,
  },
  archetype: "",
  cardList: [],
  archetypeList: [],
  loaded: true,
  error: "",
});
