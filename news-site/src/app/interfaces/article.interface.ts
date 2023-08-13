/*
* {"title":"Андрей Воробьев поручил главе Павловского Посада уделить особое внимание возведению жилья",
 "brief":"Губернатор Подмосковья отметил важность притока жителей в округ.",
 "url":"https://riamo.ru/article/661177/andrej-vorobev-poruchil-glave-pavlovskogo-posada-udelit-osoboe-vnimanie-vozvedeniyu-zhilya?utm_source=gosuslugi&utm_campaign=vsenovosti",
 "date":"04.08.2023 11:57",
 "image":{"big":"https://riamo.ru/files/image/29/90/09/-gallery!0jpr.jpg",
 "medium":"https://riamo.ru/files/image/29/90/09/-card!0jpr.jpg",
 "small":"https://riamo.ru/files/image/29/90/09/-list!0jpr.jpg"}
 },*/
export interface Article {
  title: string,
  brief: string,
  url: string,
  date: string,
  image: {
    big: string,
    medium: string,
    small: string,
  }
}
