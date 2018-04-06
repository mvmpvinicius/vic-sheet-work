$(function() {

    new_sheet = [];
    new_tab = [];

    id_aba = 0;
    selecionada_aba = '';
    id_folha = 0;
    pos_h = 0;
    pos_v = 32;

    load = function() {
        $.ajax({
            type: 'GET',
            // dataType: 'json',
            // async: false,
            url: 'app/ajax/load.php',
            success: function(data) {
                // alert('Load spreadsheet!');
                var data = JSON.parse(data);
                hot.loadData(data);
            }
        });
    }

    nova_aba = function() {
        var aba = prompt('Insira o nome da aba');

        if (aba != null) {
            myTabbar.addTab('aba_' + id_aba, aba);
            $("#folha_trabalho").append("<div id='html_" + id_aba + "' style='display: none;'><div id='area_trabalho_" + id_aba + "'></div></div>");
            $("#html_" + id_aba).append("<div style='height: 40em; position: relative;' id='customVPhere_" + id_aba + "'></div><div id='obj_lista_janelas_" + id_aba + "' style='width:100%; height:100%; overflow:auto;'><ul id='ul_janelas_" + id_aba + "' class='pricing-table'></ul></div><div id='obj_lista_formulas_" + id_aba + "' style='width:100%; height:100%; overflow:auto;'><table><tbody> <tr> <td>ABS</td> <td>CEILING</td> <td>DAY</td> <td>LOG</td> </tr> <tr> <td>ACCRINT</td> <td>CEILINGMATH</td> <td>DAYS</td> <td>LOG10</td> </tr> <tr> <td>ACOS</td> <td>CEILINGPRECISE</td> <td>DAYS360</td> <td>MAX</td> </tr> <tr> <td>ACOSH</td> <td>CHAR</td> <td>DB</td> <td>MAXA</td> </tr> <tr> <td>ACOTH</td> <td>CHISQDIST</td> <td>DDB</td> <td>MEDIAN</td> </tr> <tr> <td>AND</td> <td>CHISQINV</td> <td>DEC2BIN</td> <td>MIN</td> </tr> <tr> <td>ARABIC</td> <td>CODE</td> <td>DEC2HEX</td> <td>MINA</td> </tr> <tr> <td>ASIN</td> <td>COMBIN</td> <td>DEC2OCT</td> <td>MOD</td> </tr> <tr> <td>ASINH</td> <td>COMBINA</td> <td>DECIMAL</td> <td>NOT</td> </tr> <tr> <td>ATAN</td> <td>COMPLEX</td> <td>DEGRESS</td> <td>ODD</td> </tr> <tr> <td>ATAN2</td> <td>CONCATENATE</td> <td>DELTA</td> <td>OR</td> </tr> <tr> <td>ATANH</td> <td>CONFIDENCENORM</td> <td>DEVSQ</td> <td>PI</td> </tr> <tr> <td>AVEDEV</td> <td>CONFIDENCET</td> <td>DOLLAR</td> <td>POWER</td> </tr> <tr> <td>AVERAGE</td> <td>CONVERT</td> <td>DOLLARDE</td> <td>ROUND</td> </tr> <tr> <td>AVERAGEA</td> <td>CORREL</td> <td>DOLLARFR</td> <td>ROUNDDOWN</td> </tr> <tr> <td>AVERAGEIF</td> <td>COS</td> <td>E</td> <td>ROUNDUP</td> </tr> <tr> <td>BASE</td> <td>COSH</td> <td>EDATE</td> <td>SIN</td> </tr> <tr> <td>BESSELI</td> <td>COT</td> <td>EFFECT</td> <td>SINH</td> </tr> <tr> <td>BESSELJ</td> <td>COTH</td> <td>EOMONTH</td> <td>SPLIT</td> </tr> <tr> <td>BESSELK</td> <td>COUNT</td> <td>ERF</td> <td>SQRT</td> </tr> <tr> <td>BESSELY</td> <td>COUNTA</td> <td>ERFC</td> <td>SQRTPI</td> </tr> <tr> <td>BETADIST</td> <td>COUNTBLANK</td> <td>EVEN</td> <td>SUM</td> </tr> <tr> <td>BETAINV</td> <td>COUNTIF</td> <td>EXACT</td> <td>SUMIF</td> </tr> <tr> <td>BIN2DEC</td> <td>COUNTIFS</td> <td>EXPONDIST</td> <td>SUMIFS</td> </tr> <tr> <td>BIN2HEX</td> <td>COUNTIN</td> <td>FALSE</td> <td>SUMPRODUCT</td> </tr> <tr> <td>BIN2OCT</td> <td>COUNTUNIQUE</td> <td>FDIST</td> <td>SUMSQ</td> </tr> <tr> <td>BINOMDIST</td> <td>COVARIANCEP</td> <td>FINV</td> <td>SUMX2MY2</td> </tr> <tr> <td>BINOMDISTRANGE</td> <td>COVARIANCES</td> <td>FISHER</td> <td>SUMX2PY2</td> </tr> <tr> <td>BINOMINV</td> <td>CSC</td> <td>FISHERINV</td> <td>SUMXMY2</td> </tr> <tr> <td>BITAND</td> <td>CSCH</td> <td>IF</td> <td>TAN</td> </tr> <tr> <td>BITLSSHIFT</td> <td>CUMIPMT</td> <td>INT</td> <td>TANH</td> </tr> <tr> <td>BITOR</td> <td>CUMPRINC</td> <td>ISEVEN</td> <td>TRUE</td> </tr> <tr> <td>BITRSHIFT</td> <td>DATE</td> <td>ISODD</td> <td>TRUNC</td> </tr> <tr> <td>BITXOR</td> <td>DATEVALUE</td> <td>LN</td> <td>XOR</td> </tr> </tbody> </table></div><div id='obj_revisor_" + id_aba + "' style='width:100%; height:100%; overflow:auto;'><div class='large-12 columns'><textarea placeholder='Revisor' style='height: 30em; width: 100%;'></textarea></div></div>");

            myTabbar.tabs('aba_' + id_aba).attachObject('html_' + id_aba);

            new_tab.push(new dhtmlXWindows());
            last_tab = new_tab[new_tab.length - 1];

            last_tab.attachViewportTo('customVPhere_' + id_aba);

            // last_tab.vp.style.border = '#a4bed4 1px solid';
            // last_tab.vp.style.borderRadius = '2px';

            last_tab.createWindow('lista_janelas' + id_aba, 0, 0, 332, 480);
            last_tab.window('lista_janelas' + id_aba).setText('Janelas Disponíveis:');
            last_tab.window('lista_janelas' + id_aba).button('close').disable();
            last_tab.window('lista_janelas' + id_aba).button('minmax').disable();
            last_tab.window('lista_janelas' + id_aba).denyMove();
            last_tab.window('lista_janelas' + id_aba).denyResize();
            last_tab.window('lista_janelas' + id_aba).park();
            last_tab.window('lista_janelas' + id_aba).attachObject('obj_lista_janelas_' + id_aba);

            last_tab.createWindow('lista_formulas' + id_aba, 332, 0, 332, 480);
            last_tab.window('lista_formulas' + id_aba).setText('Fórmulas');
            last_tab.window('lista_formulas' + id_aba).button('close').disable();
            last_tab.window('lista_formulas' + id_aba).denyMove();
            last_tab.window('lista_formulas' + id_aba).park();
            last_tab.window('lista_formulas' + id_aba).attachObject('obj_lista_formulas_' + id_aba);

            last_tab.createWindow('revisor' + id_aba, 664, 0, 332, 480);
            last_tab.window('revisor' + id_aba).setText('Revisor');
            last_tab.window('revisor' + id_aba).button('close').disable();
            last_tab.window('revisor' + id_aba).denyMove();
            last_tab.window('revisor' + id_aba).park();
            last_tab.window('revisor' + id_aba).attachObject('obj_revisor_' + id_aba);

            id_aba++;
        }
    }

    nova_folha = function() {
        var nome_folha = prompt('Insira o nome da janela');
        id_aba_atual = selecionada_aba.slice(-1);

        if (nome_folha != null) {
            new_tab[id_aba_atual].createWindow(id_folha, pos_h, pos_v, 400, 330);
            new_tab[id_aba_atual].window(id_folha).setText(nome_folha);
            new_tab[id_aba_atual].window(id_folha).button("close").attachEvent("onClick", function() {
                var con_exc = confirm("Deseja fechar a janela?");
                if (con_exc == false) {
                    return false;
                } else {
                    return true;
                }
            });

            // pos_h += 25;
            pos_v += 35;

            // $("#ul_janelas").append("<li class='bullet-item'>" + nome_folha + "</li>");
            $("#area_trabalho_" + id_aba_atual).append("<div id='obj_" + id_folha + "' style='width:100%; height:100%;'><a href='#' onclick='salvar_folha(" + id_folha + ", \"" + nome_folha + "\")' class='button square right'>Salvar Folha</a><textarea id='text_" + id_folha + "' placeholder='Notas gerais do trabalho na folha'></textarea><div id='sheet_" + id_folha + "'></div></div>");

            new_tab[id_aba_atual].window(id_folha).attachObject('obj_' + id_folha);

            var container = document.getElementById('sheet_' + id_folha);

            new_sheet.push(new Handsontable(container, {
                // data: data,
                minSpareRows: 1,
                // rowHeaders: true,
                // colHeaders: true,
                height: 1000,
                contextMenu: true,
                manualColumnResize: true,
                manualRowResize: true,
                formulas: true,
                comments: true,
                stretchH: 'all'
            }));

            id_folha++;
        }
    }

    salvar_folha = function(id_folha, nome_folha) {
        var mydata = new_sheet[id_folha].getData();
        mydata = JSON.stringify(mydata);

        $.ajax({
            type: 'GET',
            // dataType: 'json',
            // async: false,
            url: 'app/ajax/save.php',
            data: {
                data: mydata,
                nome_folha: nome_folha
            },
            success: function(response) {
                // alert('Save spreadsheet!');
            }
        });
    }

    save = function() {
        var mydata = hot.getData();
        mydata = JSON.stringify(mydata);

        $.ajax({
            type: 'GET',
            // dataType: 'json',
            // async: false,
            url: 'app/ajax/save.php',
            data: {
                data: mydata
            },
            success: function(response) {
                // alert('Save spreadsheet!');
            }
        });
    }

});
