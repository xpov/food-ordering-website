window.addEventListener('DOMContentLoaded', function() {

    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

    // // Check DB.json
    // fetch('db.json')  // нужно изменить на локалхост
    //     .then(data => data.json())
    //     .then(res => console.log(res));

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();


});