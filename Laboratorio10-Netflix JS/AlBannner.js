const contenedor_recommended = document.getElementById("moviescontainer");
const contenedor_trending = document.getElementById("moviescontainer2");
const bannerTittle = document.getElementById("bannerTittle");
const bannerRatings = document.getElementById("bannerRatings");
const bannerImage2 = document.getElementById("header");

const movie1 = new Movie(
  "https://es.web.img2.acsta.net/pictures/18/11/06/15/15/5211161.jpg",
  "https://www.syfy.es/sites/default/files/los_100_t1.jpg",
  "Los 100",
  4.8,
  "Un apocalipsis nuclear destruye la vida humana en la Tierra. Los únicos supervivientes son los habitantes de las estaciones espaciales internacionales. Tres generaciones después, la escasez de recursos los obliga a tomar medidas desesperadas.",
  "16+",4
);
const movie2 = new Movie(
  "https://img.wattpad.com/cover/299743925-256-k330248.jpg",
  "https://los40.com/los40/imagenes/2020/09/17/cinetv/1600356308_124491_1600356844_gigante_normal.jpg",
  " Pretty Little Liars",
  5.0,
  "Han pasado tres años desde que Alison quien era la reina del grupo se desapareció. Spencer, Aria, Hanna y Emily continúan sus vidas aunque se han apartado. Ahora en la secundaria, cada chica está enfrentando diferentes retos cuando mensajes de texto anónimos de A amenazan con exponer todos sus secretos. ¿Quién es A y cómo sabe tanto?",
  "18+",5
);
const movie3 = new Movie(
  "https://m.media-amazon.com/images/I/81qK29qgLxL._SL1500_.jpg",
  "https://www.exploregeorgia.org/sites/default/files/legacy_images/the-originals-contest-photo-1379948983.jpg",
  "The Originals",
  4.7,
  "Klaus, un híbrido de vampiro y hombre lobo, regresa a Nueva Orleans para investigar los rumores de un complot en su contra y lucha por recuperar la ciudad.",
  "16+",5
);
const movie4 = new Movie(
  "https://www.abc.es/media/capitulos/000/207/950/mala-suerte-1.jpg",
  "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/01/04133413/911-series-fox.jpg",
  "9-1-1",
  5.0,
  "Un programa que muestra las vidas de policías, bomberos y paramédicos de Los Ángeles, quienes son los que acuden en primera instancia cuando ocurre una tragedia, situaciones que a menudo pueden ser impredecibles y que ponen en riesgo sus vidas.",
  "13+",4
);
const movie5 = new Movie(
  "https://fondosmil.com/fondo/18245.jpg",
  "https://occ-0-2568-590.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608",
  "Stranger Things",
  3.8,
  "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.",
  "16+",3
);
const movie6 = new Movie(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptnYwn9vzztr02c5kj2mKS2GgIoEUZXncOKITV0hP6uY_I1QI1U9NAXwknOW41kFuOoE&usqp=CAU",
  "https://occ-0-1555-784.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeOVzKnhOs14cmNTdQWaVSJput5HrY8sVs_T65WNDuNgXqxiRfVPgT6N5tIY4EqWsoYcNAYrr6qpLjpRJ8pQfEkRhHMLIH49bmNP.jpg?r=b94",
  "Dynaty",
  4.7,
  "Dos de las familias más ricas de los Estados Unidos, los Carrington y los Colby, se disputan el control de su fortuna y sus hijos, y exponen la oscura vorágine de un mundo corrupto",
  "17+",4
);
const movie7 = new Movie(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ULs3R9cc9ZdpOmnZiRuMrE816_PI6fP5RG3lND03RFG-faQAGaT90f0m4zych6N1O1o&usqp=CAU",
  "https://occ-0-2219-64.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYB0QEproL5nl8FeuTCJ-zGh-BWJ_VuZC9ekGkV3y3sbBhCpNCTV8Cfu5hHwR9LMws0Gx66nvqzsoi9sOeczpO2-DiZY-jLPk6ff.jpg?r=980",
  "13 reasons why",
  4.8,
  " Después de que una mujer joven se quite la vida, su compañero de clase encuentra una misteriosa caja en su patio..",
  "18+",5
);
const movie8 = new Movie(
  " https://www.movietele.it/files/styles/locandina/public/images/serietv/96068/96068-269339.jpg",
  "https://occ-0-1001-41.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYmaoR0Aznr1jNNbChj4buX5jmt-yZFvUBl23ymUXPId2zjXVbvJ6-UIeP8XmtgwfQquZct_4qCkSseXHoJoZeJ8H_F1js0XqX-Y.jpg?r=b42",
  "Manifest",
  5.0,
  "Cuando el vuelo 828 llega a Nueva York, los pasajeros descubren que, por alguna razón que desconocen, han pasado cinco años en el aire, pero no han envejecido. Los pasajeros se reúnen con sus seres queridos, aunque ya nada será como antes.",
  "18+",5
);
const movie9 = new Movie(
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/02/lucifer-serie-tv-cartel.jpg?itok=uC0s67xh",
  "https://i.blogs.es/3833be/lucifer-miguel/1366_2000.jpeg",
  "Lucifer",
  4.9,
  "Harto del infierno, Lucifer abandona su trono en el averno y se marcha a Los Ángeles, donde empieza a trabajar como detective de homicidios.",
  "18+",5
);

const listmovies = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
];

for (let i = 0; i < listmovies.length; i++) {
  var movie = listmovies[i];
  contenedor_recommended.innerHTML += movie.toHTML_recommended(i);
  contenedor_trending.innerHTML += movie.toHTML_trending(i);
}

function selectedMovie(id) {
  var movie = listmovies[id];
  movie.toBanner();
}
