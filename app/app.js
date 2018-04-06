_doOnLoad = function() {
    hst_sheet = [];

    // REFERENTE AO HANDSONTABLE INICIAL
    var container = document.getElementById('hst_diarios');
    hst_sheet.push(new Handsontable(container, {
        // data: data,
        minSpareRows: 1,
        startRows: 35,
        startCols: 13,
        colHeaders: ['Nº', 'Lançamento', 'Anotação', 'Cta. res.', 'Data', 'Débito', 'Crédito', 'Conta', 'Título', 'Data entrada', 'Nº Doc. # 1', 'Nº Doc. # 2', 'Conceito'],
        rowHeaders: true,
        height: 1000,
        // colHeaders: true,
        contextMenu: true,
        manualColumnResize: true,
        manualRowResize: true,
        formulas: true,
        comments: true,
        stretchH: 'all'
    }));
    var container = document.getElementById('hst_balancetes');
    hst_sheet.push(new Handsontable(container, {
        // data: data,
        minSpareRows: 1,
        startRows: 35,
        startCols: 16,
        colHeaders: ['Conta', 'Título', 'Soma Débito', 'Soma Crédito', 'Saldo', 'Bal.', 'Saldo Anterior', 'Bal. Ant.', 'Soma Débito AJ.', 'Soma Crédito AJ.', 'Saldo AJ.', 'Bal. AJ.', 'Saldo Ano - 2', 'Saldo Ano - 3', 'Saldo Ano - 4', 'Saldo Ano - 5'],
        rowHeaders: true,
        height: 1000,
        // colHeaders: true,
        contextMenu: true,
        manualColumnResize: true,
        manualRowResize: true,
        formulas: true,
        comments: true,
        stretchH: 'all'
    }));


    // REFERENTE AO TABBAR
    // myTabbar = new dhtmlXTabBar({
    //     parent: 'my_tabbar',
    //     close_button: true,
    //     skin: 'dhx_skyblue'
    // });
    // myTabbar.attachEvent('onTabClick', function(idClicked, idSelected) {
    //     selecionada_aba = idClicked;
    // });


    // REFERENTE OUTROS
    $('.pagina').hide();
    // $('#visualizar_diario').show();
    muda_pagina('caderno_notas', '5.8 Folhas de Trabalho');
}

muda_pagina = function(pagina, nome) {
    $('.pagina').hide();
    $('#' + pagina).show();
    $('#titulo_tela').text(nome);
}
