$(function() {

    arquivo_atual = 'none';
    hst_sheet_caderno_notas = [];

    var container = document.getElementById('hst_caderno_notas_0');
    hst_sheet_caderno_notas.push(new Handsontable(container, {
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
    var container = document.getElementById('hst_caderno_notas_1');
    hst_sheet_caderno_notas.push(new Handsontable(container, {
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
    var container = document.getElementById('hst_caderno_notas_2');
    hst_sheet_caderno_notas.push(new Handsontable(container, {
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

    carregar_caderno_notas = function(file) {
        $.ajax({
            type: 'GET',
            data: {
                data: file
            },
            // dataType: 'json',
            // async: false,
            url: 'app/ajax/caderno_notas_load.php',
            success: function(data) {
                var data = JSON.parse(data);

                if (arquivo_atual != 'none') {
                    if (confirm('Já existe uma nota aberta. Deseja abrir uma nova nota mesmo assim?'))
                        hst_sheet_caderno_notas[0].loadData(data);
                } else {
                    hst_sheet_caderno_notas[0].loadData(data);
                }

                $('#titulo_nota_0').text(file);
                arquivo_atual = file;
            }
        });
    }

    iniciar_importar_excel = function() {
        var ul = $('#caderno_notas_upload ul');

        $('#importar_caderno_notas_drop a').click(function() {
            // Simulate a click on the file input button
            // to show the file browser dialog
            $(this).parent().find('input').click();
        });

        // Initialize the jQuery File Upload plugin
        $('#caderno_notas_upload').fileupload({

            // This element will accept file drag/drop uploading
            dropZone: $('#importar_caderno_notas_drop'),

            // This function is called when a file is added to the queue;
            // either via the browse button, or via drag/drop:
            add: function(e, data) {

                var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"' +
                    ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');

                // Append the file name and file size
                tpl.find('p').text(data.files[0].name)
                    .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

                // Add the HTML to the UL element
                data.context = tpl.appendTo(ul);

                // Initialize the knob plugin
                tpl.find('input').knob();

                // Listen for clicks on the cancel icon
                tpl.find('span').click(function() {

                    if (tpl.hasClass('working')) {
                        jqXHR.abort();
                    }

                    tpl.fadeOut(function() {
                        tpl.remove();
                    });

                });

                // Automatically upload the file once it is added to the queue
                var jqXHR = data.submit();
            },

            progress: function(e, data) {

                // Calculate the completion percentage of the upload
                var progress = parseInt(data.loaded / data.total * 100, 10);

                // Update the hidden input field and trigger a change
                // so that the jQuery knob plugin knows to update the dial
                data.context.find('input').val(progress).change();

                if (progress == 100) {
                    data.context.removeClass('working');
                    iniciar_tree_caderno_notas();
                    alert('Upload efetuado com sucesso!');
                }
            },

            fail: function(e, data) {
                // Something has gone wrong!
                data.context.addClass('error');
            }

        });


        // Prevent the default action when a file is dropped on the window
        $(document).on('drop dragover', function(e) {
            e.preventDefault();
        });

        // Helper function that formats the file sizes
        function formatFileSize(bytes) {
            if (typeof bytes !== 'number') {
                return '';
            }

            if (bytes >= 1000000000) {
                return (bytes / 1000000000).toFixed(2) + ' GB';
            }

            if (bytes >= 1000000) {
                return (bytes / 1000000).toFixed(2) + ' MB';
            }

            return (bytes / 1000).toFixed(2) + ' KB';
        }
    }

    iniciar_tree_caderno_notas = function() {
        $('#caderno_notas_tree').fileTree({
            // root: '/xampp/htdocs/www/Vicente/app/ajax/uploads/caderno_notas/', // LOCAL
            root: 'uploads/caderno_notas/', // ONLINE
            script: 'app/ajax/jqueryFileTree.php',
            // expandSpeed: 1000,
            // collapseSpeed: 1000,
            // multiFolder: true
        }, function(file) {
            carregar_caderno_notas(file);
        });
    }

    salvar_caderno_notas = function(nota) {
        var mydata = hst_sheet_caderno_notas[0].getData();
        mydata = JSON.stringify(mydata);

        $.ajax({
            type: 'GET',
            data: {
                data: mydata,
                arquivo: arquivo_atual
            },
            // dataType: 'json',
            // async: false,
            url: 'app/ajax/caderno_notas_save.php',
            success: function(response) {
                alert('Nota salva com sucesso!');
            }
        });
    }

    salvar_excel = function() {
        var instance = hst_sheet_caderno_notas[0];
        handsontable2csv.download(instance, "filename.csv");
    }

    iniciar_importar_excel();
    iniciar_tree_caderno_notas();
});