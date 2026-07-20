/* =========================
   МЗППФ MAIN SCRIPT
========================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        console.log(
            "МЗППФ: система загружена"
        );


        initSite();


    }
);



function initSite(){


    setupLinks();


    setupAnimations();


}




/* =========================
   ПОДГОТОВКА ССЫЛОК
========================= */


function setupLinks(){


    const links =
    document.querySelectorAll(
        "nav a, .btn, .link"
    );


    links.forEach(link=>{


        link.addEventListener(
            "click",
            ()=>{


                console.log(
                    "Переход:",
                    link.innerText.trim()
                );


            }
        );


    });


}





/* =========================
   АНИМАЦИЯ ПОЯВЛЕНИЯ
========================= */


function setupAnimations(){


    const cards =
    document.querySelectorAll(
        ".card, .hero-card"
    );


    cards.forEach(
        (card,index)=>{


            card.style.opacity="0";


            card.style.transform=
            "translateY(20px)";


            setTimeout(
                ()=>{


                    card.style.transition=
                    "opacity 0.6s ease, transform 0.6s ease";


                    card.style.opacity="1";


                    card.style.transform=
                    "translateY(0)";


                },
                150 * index
            );


        }
    );


}





/* =========================
   БУДУЩИЕ ФУНКЦИИ
========================= */


/*

Здесь позже:

loadCases()
- загрузка архива решений


loadStaff()
- загрузка сотрудников


sendAppeal()
- отправка обращения


login()
- вход пользователей


checkAccess()
- проверка уровня допуска


*/