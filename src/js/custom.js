$(document).ready(function () {

    // D R U P A L   E D I T
    $('.drupal-edit ul').prepend('<li><a href="/admin/paginas">Panel de control</a></li>');
    $('.drupal-edit ul').append('<li><a href="/user/logout">Cerrar sesión</a></li>');

    // I D I O M A
    $('.idioma select').removeClass();
    $('.idioma select').addClass('custom-select mb-2 mr-sm-2 mb-sm-0');

    // N O T I C I A S
    $('.parrafo-body p').addClass('card-text a-none');
    $('.parrafo-body p').unwrap();

    $('.item-list').addClass('col-md-12 titulo-center text-center');
    $('.pager').addClass('pagination');
    $('.pagination li').addClass('page-item');
    $('.pagination li a').addClass('page-link');

    // B U S C A D O R
    $('#custom-search-blocks-form-1').addClass('form-inline buscador');
    $('#custom-search-blocks-form-2').addClass('form-inline buscador');
    $('.buscador').removeClass('search-form');
    $('.buscador .custom-search-box').unwrap();
    $('.buscador .form-submit').unwrap();
    $('.buscador .form-submit').unwrap();
    $('.buscador .custom-search-box').addClass('form-control');
    $('.buscador .form-control').removeClass('custom-search-box form-text');
    $('.buscador .form-submit').addClass('btn btn-primary');

    // C A T E G O R Í A S
    $('.lista-categorias ul').addClass('categorias-list');

    // C O N T A C T O
    $('.webform-component input').unwrap();
    $('.webform-submit').addClass('btn btn-primary');

})