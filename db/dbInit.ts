import { createUser } from "@/scripts/create-user";
import { createForum } from "./forums";
import { createMessage } from "./messages";

/////// Creación de usuarios /////////

const createUserAdmin = await createUser(
  "Admin",
  "admin12345",
  "admin@alltopicsforums.com"
);
console.log(createUserAdmin);

const createUser1 = await createUser(
  "PCMaster87",
  "alltopicsforums",
  "pcmaster87@alltopicsforums.com"
);
console.log(createUser1);

const createUser2 = await createUser(
  "MobileFreak",
  "alltopicsforums",
  "mobilefreak@alltopicsforums.com"
);
console.log(createUser2);

const createUser3 = await createUser(
  "TechEnthusiast",
  "alltopicsforums",
  "techenthusiast@alltopicsforums.com"
);
console.log(createUser3);

const createUser4 = await createUser(
  "PhoneExpert",
  "alltopicsforums",
  "phoneexpert@alltopicsforums.com"
);
console.log(createUser4);

const createUser5 = await createUser(
  "MountainMan82",
  "alltopicsforums",
  "mountainman82@alltopicsforums.com"
);
console.log(createUser5);

const createUser6 = await createUser(
  "RoadWarrior",
  "alltopicsforums",
  "roadwarrior@alltopicsforums.com"
);
console.log(createUser6);

const createUser7 = await createUser(
  "UrbanCycler",
  "alltopicsforums",
  "urbancycler@alltopicsforums.com"
);
console.log(createUser7);

const createUser8 = await createUser(
  "TrailSeeker",
  "alltopicsforums",
  "trailseeker@alltopicsforums.com"
);
console.log(createUser8);

/////// Creación de foros /////////

const createForum1 = await createForum({
  forumName: "TechTalk Community",
  forumDescription:
    "TechTalk Community, es el lugar perfecto para debatir y compartir todo sobre el mundo de la tecnología. Desde los últimos avances en hardware para ordenadores hasta las actualizaciones de software más recientes para móviles",
});
console.log(createForum1);

const createForum2 = await createForum({
  forumName: "BikeRiders Forum",
  forumDescription:
    "BikeRiders Forum, es el lugar para todos los amantes del ciclismo desde principiantes hasta expertos.",
});
console.log(createForum2);

/////// Creación de mensajes /////////

/// Mensajes Foro 1 ///

if (typeof createUserAdmin != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "¡Bienvenidos a TechTalk Community! Este es el lugar perfecto para debatir y compartir todo sobre el mundo de la tecnología. Desde los últimos avances en hardware para ordenadores hasta las actualizaciones de software más recientes para móviles, aquí encontrarás respuestas a todas tus preguntas. Tanto si eres un experto como si estás empezando, este foro es para ti. ¡No dudes en participar, preguntar y compartir tus conocimientos! Mantengamos el respeto y ayudemos a construir una comunidad sólida y apasionada por la tecnología. ¡A charlar se ha dicho!",
    forumId: createForum1.forumId,
    userId: createUserAdmin.userId,
  });
  console.log(value);
}

if (typeof createUser1 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "¡Hola a todos! Me encanta encontrar un foro como este. Estoy montando un nuevo PC gaming y tengo una duda sobre qué procesador elegir entre el Ryzen 7 7800X3D y el Intel i9-13900K. He visto muchas comparaciones, pero me gustaría escuchar opiniones directas de quienes hayan probado alguno de estos en sus builds. ¿Alguna recomendación?",
    forumId: createForum1.forumId,
    userId: createUser1.userId,
  });
  console.log(value);
}

if (typeof createUser2 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "¡Buenas, @PCMaster87! Si lo que buscas es rendimiento puro para gaming, creo que el Ryzen 7 7800X3D es la opción más equilibrada. Tiene mejor optimización para juegos, gracias a su caché extra. Sin embargo, si además haces tareas de edición de video o renders pesados, quizás el i9-13900K te sirva mejor por su mayor cantidad de núcleos. Todo depende del uso que le des al PC. Yo suelo tirar por AMD para gaming puro, pero Intel también es una bestia en multitarea. ¿Qué gráfica le vas a poner?",
    forumId: createForum1.forumId,
    userId: createUser2.userId,
  });
  console.log(value);
}

if (typeof createUser3 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "¡Hola, compañeros techies! Yo acabo de montar un PC con un Ryzen 9 7900X y va de lujo para todo tipo de tareas, desde gaming hasta desarrollo. Respecto a tu duda, @PCMaster87, coincido con @MobileFreak, el 7800X3D es una bestia para gaming. Por otro lado, si haces más cosas además de jugar, el i9 te dará ese empujón extra en multitarea. ¡Eso sí, ojo con las temperaturas del Intel, que suelen ser un horno si no tienes buena refrigeración!",
    forumId: createForum1.forumId,
    userId: createUser3.userId,
  });
  console.log(value);
}

if (typeof createUser4 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "¡Qué envidia, todos montando PC's potentes! Yo estoy más enfocado en el mundo de los móviles. Últimamente he estado probando el iPhone 15 y el Samsung Galaxy S23 Ultra, y estoy impresionado con ambos. Cada uno tiene sus puntos fuertes, pero el modo de cámara del Galaxy S23 Ultra es una locura. Sin embargo, me sigue gustando más la fluidez del ecosistema de Apple. ¿Alguien más ha tenido la oportunidad de probarlos? ¿Qué os parece?",
    forumId: createForum1.forumId,
    userId: createUser4.userId,
  });
  console.log(value);
}

if (typeof createUser1 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "¡Gracias por los consejos, @MobileFreak y @TechEnthusiast! Creo que me decidiré por el Ryzen 7 7800X3D. Ya tengo una RTX 4080 esperando, así que creo que van a hacer una buena dupla. Y respecto a la refrigeración, tengo un cooler líquido AIO, así que espero no tener problemas. Ya os contaré cómo me va cuando lo monte. Por cierto, @PhoneExpert, no he probado los nuevos móviles, pero he escuchado maravillas del S23 Ultra, especialmente en fotografía. ¿Qué tal la batería en comparación con el iPhone?",
    forumId: createForum1.forumId,
    userId: createUser1.userId,
  });
  console.log(value);
}

if (typeof createUser2 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "La verdad es que he oído cosas similares sobre el S23 Ultra, @PhoneExpert. Samsung está sacando monstruos últimamente en cuanto a cámaras. Yo sigo con mi OnePlus 10 Pro, pero me planteo cambiarlo. ¿Cómo notas la diferencia entre el Galaxy y el iPhone en cuanto a rendimiento general? Porque para trabajo, suelo usar bastante la multitarea y los Samsung suelen tener buen soporte para eso.",
    forumId: createForum1.forumId,
    userId: createUser2.userId,
  });
  console.log(value);
}

if (typeof createUser3 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "Estoy con vosotros en lo de los móviles. Aunque soy más de ordenadores, el iPhone siempre me ha parecido el móvil más estable en cuanto a software. Sin embargo, ese S23 Ultra me tienta mucho por la cámara. ¿Vale la pena cambiarse si tienes un iPhone 13 Pro, @PhoneExpert? O me espero un poco más para la siguiente generación de Samsung.",
    forumId: createForum1.forumId,
    userId: createUser3.userId,
  });
  console.log(value);
}

if (typeof createUser4 != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "A ver, @PCMaster87, la batería del S23 Ultra es bastante buena, especialmente si lo usas con la tasa de refresco variable. En comparación con el iPhone, está muy a la par, pero si te preocupa la autonomía, te diría que el S23 Ultra podría durarte un poco más en ciertos escenarios. En cuanto a multitarea, @MobileFreak, es excelente. Samsung tiene ese modo de pantalla dividida que funciona genial, además de que puedes conectar el teléfono a una pantalla más grande con Samsung DeX, lo cual es una pasada. Y @TechEnthusiast, si tienes el iPhone 13 Pro, personalmente no creo que necesites cambiar ahora mismo, a menos que seas un entusiasta de la fotografía móvil. La cámara del S23 Ultra es un salto significativo, pero el resto de características no te van a sorprender mucho si ya estás con el 13 Pro.",
    forumId: createForum1.forumId,
    userId: createUser4.userId,
  });
  console.log(value);
}

if (typeof createUserAdmin != "string" && typeof createForum1 != "string") {
  const value = await createMessage({
    text: "¡Vaya, qué buena conversación! Me encanta ver cómo se están ayudando con recomendaciones tanto en ordenadores como en móviles. No olvidéis que próximamente crearemos secciones nuevas donde podreis subir fotos de vuestros setups y configuraciones de PC. ¡Seguid compartiendo vuestras pasiones!",
    forumId: createForum1.forumId,
    userId: createUserAdmin.userId,
  });
  console.log(value);
}

/// Mensajes Foro 2 ///////

if (typeof createUserAdmin != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Bienvenidos a BikeRiders Forum! Este es el lugar para todos los amantes del ciclismo, desde principiantes hasta expertos. Aquí compartimos nuestras rutas favoritas, consejos sobre mantenimiento de bicicletas, recomendaciones sobre accesorios, y, por supuesto, nuestras experiencias en salidas. Tanto si te apasionan las rutas de montaña, el ciclismo urbano o las largas travesías por carretera, este foro es para ti. ¡Siéntete libre de compartir tus aventuras y aprender de los demás! Recuerda siempre mantener el respeto y pedalear juntos hacia una comunidad saludable y divertida. ¡Nos vemos en el camino!",
    forumId: createForum2.forumId,
    userId: createUserAdmin.userId,
  });
  console.log(value);
}

if (typeof createUser5 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Hola a todos! Soy nuevo en el foro, pero llevo años en el ciclismo de montaña. Actualmente tengo una Scott Spark y me encanta hacer rutas largas por terrenos técnicos. Estoy buscando recomendaciones de rutas en España, especialmente por la zona de Pirineos. ¿Alguna recomendación de rutas desafiantes por allí? ¡Gracias de antemano!",
    forumId: createForum2.forumId,
    userId: createUser5.userId,
  });
  console.log(value);
}

if (typeof createUser6 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Bienvenido, @MountainMan82! Aunque soy más de ciclismo de carretera, he oído que la Ruta de los Lagos de Covadonga es una de las más impresionantes en Pirineos. Eso sí, prepárate para muchas subidas. Si te gusta lo técnico, otra opción sería la Transpirenaica, una ruta épica que cruza los Pirineos de costa a costa. Aunque es más de larga distancia, puedes hacerla por etapas. ¿Qué tal está yendo esa Scott Spark? Estoy pensando en pasarme al MTB y ese modelo me llama la atención.",
    forumId: createForum2.forumId,
    userId: createUser6.userId,
  });
  console.log(value);
}

if (typeof createUser7 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Saludos, compañeros ciclistas! Yo soy más de ciclismo urbano, me muevo por la ciudad con mi Brompton plegable, pero de vez en cuando me gusta salir de la rutina y hacer alguna ruta sencilla. Últimamente estoy mirando bicis de gravel, ya que quiero algo más versátil que me permita rodar por caminos de tierra. ¿Alguien tiene alguna recomendación para empezar en el mundo del gravel?",
    forumId: createForum2.forumId,
    userId: createUser7.userId,
  });
  console.log(value);
}

if (typeof createUser8 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Qué tal a todos! Yo también soy aficionado al MTB, y justo acabo de hacer una ruta increíble por los Pirineos: el Camino del Cares. No es súper técnico, pero las vistas son espectaculares y el terreno tiene su desafío. @MountainMan82, si buscas algo más duro, te recomendaría la Zona Zero en Aínsa, Huesca. Es un paraíso para el MTB con rutas técnicas de todos los niveles. Y para @UrbanCycler, en cuanto a gravel, échale un vistazo a la Canyon Grail o la Specialized Diverge. Son bastante populares y tienen un buen equilibrio entre rendimiento y comodidad.",
    forumId: createForum2.forumId,
    userId: createUser8.userId,
  });
  console.log(value);
}

if (typeof createUser5 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Gracias por las sugerencias, @TrailSeeker y @RoadWarrior! Definitivamente voy a investigar la Transpirenaica; me encanta la idea de hacer una ruta de varios días. Y sí, la Scott Spark ha sido increíble para mí, tiene una suspensión genial para terrenos complicados. @RoadWarrior, si te pasas al MTB, te lo recomiendo totalmente. La bici es ligera y se adapta muy bien a los senderos técnicos. Respecto a Zona Zero, he oído hablar mucho de ese lugar, ¡creo que será mi próximo destino! ¿Sueles ir mucho por allí?",
    forumId: createForum2.forumId,
    userId: createUser5.userId,
  });
  console.log(value);
}

if (typeof createUser7 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Gracias, @TrailSeeker! Voy a investigar esas bicis gravel. Me gusta la idea de tener algo más versátil que me permita salir de la ciudad y explorar caminos rurales. A veces las calles de la ciudad se quedan cortas. También he escuchado hablar de la Trek Checkpoint, ¿alguien la ha probado? ¿Es tan buena como dicen?",
    forumId: createForum2.forumId,
    userId: createUser7.userId,
  });
  console.log(value);
}

if (typeof createUser8 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Sí, @MountainMan82! Zona Zero es prácticamente mi segundo hogar, jaja. Tiene de todo: desde rutas cortas y explosivas hasta bajadas técnicas que te dejan sin aliento. Si te animas a ir, avísame y podemos hacer una ruta juntos. Y @UrbanCycler, la Trek Checkpoint es otra gran opción para gravel. Es súper cómoda en largas distancias y bastante robusta, aunque algo más pesada que la Canyon. Creo que cualquier opción que elijas va a ser excelente para iniciarte en gravel.",
    forumId: createForum2.forumId,
    userId: createUser8.userId,
  });
  console.log(value);
}

if (typeof createUser6 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "¡Ahora me estáis tentando a probar el MTB! Jajaja. Creo que haré una transición suave empezando con alguna bici de gravel, así puedo disfrutar tanto en carretera como en caminos. En cuanto a la Trek Checkpoint, @UrbanCycler, yo la he probado un par de veces y te puedo decir que es muy sólida. Va genial en terrenos mixtos, y aunque no es la más ligera, su estabilidad la hace perfecta para principiantes. Si te animas a salir de la ciudad, te lo vas a pasar en grande.",
    forumId: createForum2.forumId,
    userId: createUser6.userId,
  });
  console.log(value);
}

if (typeof createUser5 != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "@TrailSeeker, suena perfecto, ¡te tomo la palabra! Me encantará hacer una ruta por Zona Zero contigo. Y @RoadWarrior, te animo a dar el salto, seguro que no te arrepentirás. El MTB tiene algo único, la conexión con la naturaleza mientras pedaleas por caminos y senderos. Ya me dirás si te lanzas al gravel primero, ¡es una excelente puerta de entrada!",
    forumId: createForum2.forumId,
    userId: createUser5.userId,
  });
  console.log(value);
}

if (typeof createUserAdmin != "string" && typeof createForum2 != "string") {
  const value = await createMessage({
    text: "	¡Genial conversación, chicos! Me encanta ver cómo compartís rutas y recomendaciones. No olvidéis que próximamente tendremos una sección de Rutas y Quedadas donde podéis proponer salidas en grupo. ¡Sería fantástico organizar algo con la comunidad!. ¡Nos vemos en la carretera o en el sendero!",
    forumId: createForum2.forumId,
    userId: createUserAdmin.userId,
  });
  console.log(value);
}
