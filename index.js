'use strict';

$(() => {
  $('nav a').click(event => {
    const clicked = event.currentTarget;
    $('div').not(`.${clicked.text.toLowerCase()}`).addClass('hidden');
    $(`.${clicked.text.toLowerCase()}`).removeClass('hidden');
    $('nav a').not(clicked).removeClass('active');
    $(clicked).addClass('active');
  });
});