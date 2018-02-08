'use strict';

$(() => {
  $('a').click(event => {
    event.preventDefault();
    const clicked = event.currentTarget.text.toLowerCase();
    $('div').not(`.${clicked}`).addClass('hidden');
    $(`.${clicked}`).removeClass('hidden');
  });
});