$(function() {

    arquivo_atual = 'none';

    iniciar_tree_manual_controlo_interno = function() {
        $('#manual_controlo_interno_tree').fileTree({
            root: '/xampp/htdocs/www/Vicente/app/ajax/uploads/manual_controlo_interno/',
            script: 'app/ajax/jqueryFileTree.php',
            // expandSpeed: 1000,
            // collapseSpeed: 1000,
            // multiFolder: true
        }, function(file) {
            carregar_manual_controlo_interno(file);
        });
    }

    carregar_manual_controlo_interno = function(file) {
        $.ajax({
            type: 'GET',
            data: {
                data: file
            },
            // dataType: 'json',
            // async: false,
            url: 'app/ajax/manual_controlo_interno_load.php',
            success: function(data) {
                var data = JSON.parse(data);

                if (arquivo_atual != 'none') {
                    if (confirm('Já existe uma nota aberta. Deseja abrir uma nova nota mesmo assim?'))
                        hst_sheet_caderno_notas[0].loadData(data);
                } else {
                    hst_sheet_caderno_notas[0].loadData(data);
                }

                $('#titulo_nota').text(file);
                arquivo_atual = file;
            }
        });
    }

    var ul = $('#manual_controlo_interno_upload ul');

    $('#manual_controlo_interno_drop a').click(function() {
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#manual_controlo_interno_upload').fileupload({

        // This element will accept file drag/drop uploading
        dropZone: $('#manual_controlo_interno_drop'),

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

    iniciar_tree_manual_controlo_interno();

});
