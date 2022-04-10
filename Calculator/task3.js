        // Модуль проверяет версии браузера для запуска обработчиков событий
        function addEvent(e, el, f) { // e - событие, el - элемент, f - функция
            if (el.addEventListener)  
                el.addEventListener(e,f,false);
            else if (el.attachEvent) { 
                el.attachEvent("on"+e, f);
            }
            else { 
                el[e] = f;
            }
        }