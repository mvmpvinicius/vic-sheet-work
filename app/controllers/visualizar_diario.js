$(function() {

    var arr;
    var linhas_selecionadas = '';
    arr_diario = [];
    hst_diario = [];

    getSelectedRows = function() {
        // alert(w2ui.grid1.getSelection());
        console.log(w2ui.grid1.getSelection());

        for (i in w2ui.grid1.getSelection()) {
            linhas_selecionadas = w2ui.grid1.getSelection()[i];
            arr = Object.keys(w2ui.grid1.get(linhas_selecionadas)).map(function(k) {
                return w2ui.grid1.get(linhas_selecionadas)[k]
            });
            arr_diario.push(arr);
        }

        var container = document.getElementById('hst_diario');
        hst_diario.push(new Handsontable(container, {
            data: arr_diario,
            minSpareRows: 1,
            startRows: 15,
            startCols: 16,
            rowHeaders: true,
            colHeaders: true,
            height: 400,
            // contextMenu: true,
            manualColumnResize: true,
            manualRowResize: true,
            formulas: true,
            comments: true,
            stretchH: 'all'
        }));
    }

    inicia_grid = function() {
        $('#grid1').w2grid({
            name: 'grid1',
            header: 'Available',
            url: 'app/ajax/uploads/importar_diario/list.json',
            show: {
                header: true,
                footer: true,
                // selectColumn: true
            },
            columns: [{
                field: 'recid',
                caption: 'ID',
                size: '50px',
                sortable: true,
                attr: 'align=center'
            }, {
                field: 'lancamento',
                caption: 'Lançamento',
                size: '30%',
                sortable: true
            }, {
                field: 'anotacao',
                caption: 'Anotação',
                size: '30%',
                sortable: true
            }, {
                field: 'data',
                caption: 'Data',
                size: '40%'
            }, {
                field: 'doc_1',
                caption: 'Núm. Doc 1',
                size: '120px'
            }, {
                field: 'doc_2',
                caption: 'Núm. Doc 2',
                size: '120px'
            }, {
                field: 'debito',
                caption: 'Débito',
                size: '120px'
            }, {
                field: 'credito',
                caption: 'Crédito',
                size: '120px'
            }, {
                field: 'conta',
                caption: 'Conta',
                size: '120px'
            }, {
                field: 'titulo',
                caption: 'Título',
                size: '120px'
            }, {
                field: 'conceito',
                caption: 'Conceito',
                size: '120px'
            }, {
                field: 'subconta',
                caption: 'Subconta',
                size: '120px'
            }, {
                field: 'mais_1',
                caption: 'Mais 1',
                size: '120px'
            }]
        });
    }

    salvar_selecao = function() {
        var mydata = hst_diario[0].getData();
        mydata = JSON.stringify(mydata);

        var folha = prompt('Insira o nome da folha');

        if (folha != null) {
            $.ajax({
                type: 'POST',
                data: {
                    data: mydata,
                    nome: folha
                },
                // dataType: 'json',
                // async: false,
                url: 'app/ajax/diario_transf_caderno_notas.php',
                success: function(response) {
                    alert('Nota salva com sucesso!');
                    iniciar_tree_caderno_notas();
                }
            });
        }
    }

    inicia_grid();

});